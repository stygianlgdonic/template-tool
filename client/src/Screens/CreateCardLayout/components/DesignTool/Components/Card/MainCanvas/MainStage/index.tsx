import React, { useContext, useEffect, useRef, useState } from 'react'
import { Stage, Layer, Rect } from 'react-konva';
import Rectangle from "../Rectangle"
import UCircle from "../UCircle"
import UPolygon from "../UPolygon"
import ULine from "../ULine"
import USvg from "../USvg"
import UText from "../UText"
import TransformerComponent from "../UTransformer"
import { stageDimensions } from '../../../../../../../../utils/defaults';
import UImage from '../UImage';
import ImageFallbackModal from '../../tailwindComponents/CardHeader/components/ImageFallbackModal/ImageFallbackModal';
import { DesignToolContext } from '../../../../../../../../contexts/DesignToolContext';

declare const window: any

const MainStage = ({
    cardData,
    setCardData,
    selectedId,
    setSelectedId,
    unSelectAll,
}) => {

    const { isOpenFallbackModal, setIsOpenFallbackModal } = useContext(DesignToolContext)
    const [shapeLocation, setShapeLocation] = useState({ x: 0, y: 0 })

    const GUIDELINE_OFFSET = 5
    const $StageContainer = useRef(null)
    const $stage = useRef(null)
    const $layer = useRef(null)
    const $tr = useRef(null)
    const selectionRectRef = useRef(null);
    const selection = useRef({
        visible: false,
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
    });

    const [nodesArray, setNodes] = useState([]);
    const Konva = window.Konva;

    const getLineGuideStops = skipShape => {
        const vertical: any = [0, stageDimensions.width / 2, stageDimensions.width];
        const horizontal: any = [0, stageDimensions.height / 2, stageDimensions.height];

        // and we snap over edges and center of each object on the canvas
        $stage.current.find(".object").forEach(guideItem => {
            if (guideItem === skipShape) {
                return;
            }
            const box = guideItem.getClientRect();
            // and we can snap to all edges of shapes
            vertical.push([box.x, box.x + box.width, box.x + box.width / 2]);
            horizontal.push([box.y, box.y + box.height, box.y + box.height / 2]);
        });
        return {
            vertical: vertical.flat(),
            horizontal: horizontal.flat()
        };
    };

    const getObjectSnappingEdges = node => {
        const box = node.getClientRect();

        return {
            vertical: [
                {
                    guide: Math.round(box.x),
                    offset: Math.round(node.x() - box.x),
                    snap: "start"
                },
                {
                    guide: Math.round(box.x + box.width / 2),
                    offset: Math.round(node.x() - box.x - box.width / 2),
                    snap: "center"
                },
                {
                    guide: Math.round(box.x + box.width),
                    offset: Math.round(node.x() - box.x - box.width),
                    snap: "end"
                }
            ],
            horizontal: [
                {
                    guide: Math.round(box.y),
                    offset: Math.round(node.y() - box.y),
                    snap: "start"
                },
                {
                    guide: Math.round(box.y + box.height / 2),
                    offset: Math.round(node.y() - box.y - box.height / 2),
                    snap: "center"
                },
                {
                    guide: Math.round(box.y + box.height),
                    offset: Math.round(node.y() - box.y - box.height),
                    snap: "end"
                }
            ]
        };
    };

    const getGuides = (lineGuideStops, itemBounds) => {
        const resultV = [];
        const resultH = [];

        lineGuideStops.vertical.forEach(lineGuide => {
            itemBounds.vertical.forEach(itemBound => {
                const diff = Math.abs(lineGuide - itemBound.guide);
                // if the distance between guild line and object snap point is close we can consider this for snapping
                if (diff < GUIDELINE_OFFSET) {
                    resultV.push({
                        lineGuide: lineGuide,
                        diff: diff,
                        snap: itemBound.snap,
                        offset: itemBound.offset
                    });
                }
            });
        });

        lineGuideStops.horizontal.forEach(lineGuide => {
            itemBounds.horizontal.forEach(itemBound => {
                const diff = Math.abs(lineGuide - itemBound.guide);
                if (diff < GUIDELINE_OFFSET) {
                    resultH.push({
                        lineGuide: lineGuide,
                        diff: diff,
                        snap: itemBound.snap,
                        offset: itemBound.offset
                    });
                }
            });
        });

        const guides = [];

        // find closest snap
        const minV = resultV?.sort((a, b) => a.diff - b.diff)[0];
        const minH = resultH?.sort((a, b) => a.diff - b.diff)[0];
        if (minV) {
            guides.push({
                lineGuide: minV.lineGuide,
                offset: minV.offset,
                orientation: "V",
                snap: minV.snap
            });
        }
        if (minH) {
            guides.push({
                lineGuide: minH.lineGuide,
                offset: minH.offset,
                orientation: "H",
                snap: minH.snap
            });
        }
        return guides;
    };

    const drawGuides = guides => {
        guides.forEach(lg => {
            if (lg.orientation === "H") {
                const lines = new Konva.Line({
                    points: [-6000, lg.lineGuide, 6000, lg.lineGuide],
                    stroke: "rgb(0, 161, 255)",
                    strokeWidth: 1,
                    name: "guid-line",
                    dash: [4, 6]
                });
                $layer.current.add(lines);
                $layer.current.batchDraw();
            } else if (lg.orientation === "V") {
                const lines = new Konva.Line({
                    points: [lg.lineGuide, -6000, lg.lineGuide, 6000],
                    stroke: "rgb(0, 161, 255)",
                    strokeWidth: 1,
                    name: "guid-line",
                    dash: [4, 6]
                });
                $layer.current.add(lines);
                $layer.current.batchDraw();
            }
        });
    };

    const _onDragMove = e => {
        const linesArray = $layer.current.find(".guid-line")
        if (!!linesArray.length) {
            linesArray.forEach(item => item.destroy())
        }
        const lineGuideStops = getLineGuideStops(e.target);
        const itemBounds = getObjectSnappingEdges(e.target);
        const guides = getGuides(lineGuideStops, itemBounds);
        if (!guides.length) {
            return;
        }
        drawGuides(guides);
        guides.forEach(lg => {
            switch (lg.snap) {
                case "start": {
                    switch (lg.orientation) {
                        case "V": {
                            e.target.x(lg.lineGuide + lg.offset);
                            break;
                        }
                        case "H": {
                            e.target.y(lg.lineGuide + lg.offset);
                            break;
                        }
                        default:
                            return;
                    }
                    break;
                }
                case "center": {
                    switch (lg.orientation) {
                        case "V": {
                            e.target.x(lg.lineGuide + lg.offset);
                            break;
                        }
                        case "H": {
                            e.target.y(lg.lineGuide + lg.offset);
                            break;
                        }
                        default:
                            return;
                    }
                    break;
                }
                case "end": {
                    switch (lg.orientation) {
                        case "V": {
                            e.target.x(lg.lineGuide + lg.offset);
                            break;
                        }
                        case "H": {
                            e.target.y(lg.lineGuide + lg.offset);
                            break;
                        }
                        default:
                            return;
                    }
                    break;
                }
                default:
                    return;
            }
        });
    };

    const _onDragEnd = e => {
        const linesArray = $layer.current.find(".guid-line")
        if (!!linesArray.length) {
            linesArray.forEach(item => item.destroy())
        }
        $layer.current.batchDraw();
    };

    const checkDeselect = (e) => {
        // deselect when clicked on empty area
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            unSelectAll();
            $tr.current.nodes([]);
            setNodes([]);
            // layerRef.current.remove(selectionRectangle);
        }
    };

    const updateSelectionRect = () => {
        const node = selectionRectRef.current;
        node.setAttrs({
            visible: selection.current.visible,
            x: Math.min(selection.current.x1, selection.current.x2),
            y: Math.min(selection.current.y1, selection.current.y2),
            width: Math.abs(selection.current.x1 - selection.current.x2),
            height: Math.abs(selection.current.y1 - selection.current.y2),
            fill: "rgba(0, 161, 255, 0.3)"
        });
        node.getLayer().batchDraw();
    };

    const oldPos = React.useRef(null);
    const onMouseDown = (e) => {
        const isElement = e.target.findAncestor(".elements-container");
        const isTransformer = e.target.findAncestor("Transformer");
        if (isElement || isTransformer) {
            return;
        }

        const pos = e.target.getStage().getPointerPosition();
        selection.current.visible = true;
        selection.current.x1 = pos.x;
        selection.current.y1 = pos.y;
        selection.current.x2 = pos.x;
        selection.current.y2 = pos.y;
        updateSelectionRect();
    };

    const onMouseMove = (e) => {
        if (!selection.current.visible) {
            return;
        }
        const pos = e.target.getStage().getPointerPosition();
        selection.current.x2 = pos.x;
        selection.current.y2 = pos.y;
        updateSelectionRect();
    };

    const onMouseUp = () => {
        oldPos.current = null;
        if (!selection.current.visible) {
            return;
        }
        const selBox = selectionRectRef.current.getClientRect();

        const elements = [];
        $layer.current.find(".object").forEach((elementNode) => {
            const elBox = elementNode.getClientRect();
            if (Konva.Util.haveIntersection(selBox, elBox)) {
                elements.push(elementNode);
            }
        });
        $tr.current.nodes(elements);
        selection.current.visible = false;
        // disable click event
        Konva.listenClickTap = false;
        updateSelectionRect();
    };

    const onClickTap = (e) => {
        // if we are selecting with rect, do nothing
        if (selectionRectRef.current.visible()) {
            return;
        }
        let stage = e.target.getStage();
        let layer = $layer.current;
        let tr = $tr.current;
        // if click on empty area - remove all selections
        if (e.target === stage) {
            unSelectAll();
            setNodes([]);
            tr.nodes([]);
            layer.draw();
            return;
        }

        // do nothing if clicked NOT on our rectangles
        if (!e.target.hasName(".object")) {
            return;
        }

        // do we pressed shift or ctrl?
        const metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey;
        const isSelected = tr.nodes().indexOf(e.target) >= 0;

        if (!metaPressed && !isSelected) {
            // if no key pressed and the node is not selected
            // select just one
            tr.nodes([e.target]);
        } else if (metaPressed && isSelected) {
            // if we pressed keys and node was selected
            // we need to remove it from selection:
            const nodes = tr.nodes().slice(); // use slice to have new copy of array
            // remove node from array
            nodes.splice(nodes.indexOf(e.target), 1);
            tr.nodes(nodes);
        } else if (metaPressed && !isSelected) {
            // add the node into selection
            const nodes = tr.nodes().concat([e.target]);
            tr.nodes(nodes);
        }
        layer.draw();
    };

    useEffect(() => {
        const stageContainerRect = $StageContainer.current.getBoundingClientRect()
        const nodes = $tr.current.nodes()
        if (!!nodes.length && nodes.length === 1) {
            setShapeLocation({
                x: nodes[0].getClientRect().x + stageContainerRect.left,
                y: nodes[0].getClientRect().y + stageContainerRect.top
            })
        }
    }, [selectedId, isOpenFallbackModal])

    return (
        <>
            <div className={isOpenFallbackModal ? "" : "hidden"}>
                <ImageFallbackModal
                    closeModal={() => {
                        setIsOpenFallbackModal(false);
                    }}
                    shapeLocation={shapeLocation}
                />
            </div>
            <div ref={$StageContainer}>
                <Stage
                    ref={$stage}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}
                    onTouchStart={checkDeselect}
                    onClick={onClickTap}
                    {...stageDimensions}
                >
                    <Layer
                        ref={$layer}
                        onDragMove={_onDragMove}
                        onDragEnd={_onDragEnd}
                    >
                        {cardData.elements?.map((elem, i) => {
                            if (elem.type === "rectangle") return (
                                <Rectangle
                                    key={i}
                                    shapeProps={elem}
                                    onSelect={(e) => {
                                        if (e.current !== undefined) {
                                            let temp = nodesArray;
                                            if (!nodesArray.includes(e.current)) temp.push(e.current);
                                            setNodes(temp);
                                            $tr.current.nodes(nodesArray);
                                            $tr.current.nodes(nodesArray);
                                            $tr.current.getLayer().batchDraw();
                                        }
                                        if (elem.id !== "shapes_background")
                                            setSelectedId(elem.id);
                                    }}
                                    openFallbackModal={() => setIsOpenFallbackModal(true)}
                                    // onSelect={() => {
                                    //     setSelectedId(rect.id)
                                    // }}
                                    onChange={(newAttrs) => {
                                        setCardData((prev) => {
                                            const index = prev.elements.findIndex(item => item.id === elem.id)
                                            prev.elements[index] = newAttrs
                                        });
                                    }}
                                />
                            )

                            if (elem.type === "circle") return (
                                <UCircle
                                    key={i}
                                    shapeProps={elem}
                                    onSelect={() => {
                                        setSelectedId(elem.id)
                                    }}
                                    onChange={(newAttrs) => {
                                        setCardData((prev) => {
                                            const index = prev.elements.findIndex(item => item.id === elem.id)
                                            prev.elements[index] = newAttrs
                                        });
                                    }}
                                />
                            )

                            if (elem.type === "line") return (
                                <ULine
                                    key={i}
                                    shapeProps={elem}
                                    onSelect={() => {
                                        setSelectedId(elem.id)
                                    }}
                                    onChange={(newAttrs) => {
                                        setCardData((prev) => {
                                            const index = prev.elements.findIndex(item => item.id === elem.id)
                                            prev.elements[index] = newAttrs
                                        });
                                    }}
                                />
                            )

                            if (elem.type === "polygon") return (
                                <UPolygon
                                    key={i}
                                    shapeProps={elem}
                                    onSelect={() => {
                                        setSelectedId(elem.id)
                                    }}
                                    onChange={(newAttrs) => {
                                        setCardData((prev) => {
                                            const index = prev.elements.findIndex(item => item.id === elem.id)
                                            prev.elements[index] = newAttrs
                                        });
                                    }}
                                />
                            )

                            if (elem.type === "svg") return (
                                <USvg
                                    key={i}
                                    svgProps={elem}
                                    onSelect={() => {
                                        setSelectedId(elem.id)
                                    }}
                                    onChange={(event) => setCardData((prev) => {
                                        const svgIndex = prev.elements.findIndex(svgItem => svgItem.id === elem.id)
                                        prev.elements[svgIndex] = {
                                            ...prev.elements[svgIndex],
                                            ...JSON.parse(JSON.stringify(event.target.attrs))
                                        }
                                    })}
                                />
                            )

                            if (elem.type === "image") return (
                                <UImage
                                    key={i}
                                    imageProps={elem}
                                    onSelect={() => {
                                        setSelectedId(elem.id)
                                    }}
                                    onChange={(event) => setCardData((prev) => {
                                        const imageIndex = prev.elements.findIndex(img => img.id === elem.id)
                                        prev.elements[imageIndex] = {
                                            ...prev.elements[imageIndex],
                                            ...JSON.parse(JSON.stringify(event.target.attrs))
                                        }
                                    })}
                                />
                            )

                            if (elem.type === "text") return (
                                <UText
                                    key={i}
                                    textProps={elem}
                                    onSelect={() => {
                                        setSelectedId(elem.id)
                                    }}
                                    onChange={(event) => setCardData((prev) => {
                                        const txtIndex = prev.elements.findIndex(txt => txt.id === elem.id)
                                        prev.elements[txtIndex] = { ...event.target.attrs }
                                    })}
                                />
                            )


                        })}
                        <TransformerComponent
                            id={`tr${selectedId}`}
                            $tr={$tr}
                            selectedShapeName={selectedId}
                        />
                        <Rect fill="rgba(0,0,255,0.5)" ref={selectionRectRef} />
                    </Layer>
                </Stage>
            </div>
        </>
    )
}

export default MainStage
