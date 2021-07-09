import React, { useRef, useState } from 'react'
import { Stage, Layer } from 'react-konva';
import Rectangle from "../Rectangle"
import UCircle from "../UCircle"
import UPolygon from "../UPolygon"
import ULine from "../ULine"
import USvg from "../USvg"
import UText from "../UText"
import TransformerComponent from "../UTransformer"
import { stageDimensions } from '../../../utils/defaults';
import Konva from 'konva';
import UImage from '../UImage';

const MainStage = ({
    templateData,
    setTemplateData,
    variationIndex,
    selectedId,
    setSelectedId,
    handleEditSelectedItem,
}) => {

    const [GUIDELINE_OFFSET, setGUIDELINE_OFFSET] = useState(5)
    const $stage = useRef(null)
    const $layer = useRef(null)

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
        const minV = resultV.sort((a, b) => a.diff - b.diff)[0];
        const minH = resultH.sort((a, b) => a.diff - b.diff)[0];
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
            linesArray[0].destroy()
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

    return (
        <Stage
            ref={$stage}
            {...stageDimensions}
        >
            <Layer
                ref={$layer}
                onDragMove={_onDragMove}
                onDragEnd={_onDragEnd}
            >
                {templateData.variations[variationIndex].shapes?.filter(item => item.type === "rectangle")?.map((rect, i) => {
                    return (
                        <Rectangle
                            key={i}
                            shapeProps={rect}
                            onSelect={() => {
                                setSelectedId(rect.id)
                            }}
                            onEditClick={handleEditSelectedItem}
                            onChange={(newAttrs) => {
                                setTemplateData((prev) => {
                                    const index = prev.variations[variationIndex].shapes.findIndex(item => item.id === rect.id)
                                    prev.variations[variationIndex].shapes[index] = newAttrs
                                });
                            }}
                        />
                    );
                })}
                {templateData.variations[variationIndex].shapes?.filter(item => item.type === "circle")?.map((circle, i) => {
                    return (
                        <UCircle
                            key={i}
                            shapeProps={circle}
                            onSelect={() => {
                                setSelectedId(circle.id)
                            }}
                            onEditClick={handleEditSelectedItem}
                            onChange={(newAttrs) => {
                                setTemplateData((prev) => {
                                    const index = prev.variations[variationIndex].shapes.findIndex(item => item.id === circle.id)
                                    prev.variations[variationIndex].shapes[index] = newAttrs
                                });
                            }}
                        />
                    );
                })}
                {templateData.variations[variationIndex].shapes?.filter(item => item.type === "line")?.map((line, i) => {
                    return (
                        <ULine
                            key={i}
                            shapeProps={line}
                            onSelect={() => {
                                setSelectedId(line.id)
                            }}
                            onEditClick={handleEditSelectedItem}
                            onChange={(newAttrs) => {
                                setTemplateData((prev) => {
                                    const index = prev.variations[variationIndex].shapes.findIndex(item => item.id === line.id)
                                    prev.variations[variationIndex].shapes[index] = newAttrs
                                });
                            }}
                        />
                    );
                })}
                {templateData.variations[variationIndex].shapes?.filter(item => item.type === "polygon")?.map((polygon, i) => {
                    return (
                        <UPolygon
                            key={i}
                            shapeProps={polygon}
                            onSelect={() => {
                                setSelectedId(polygon.id)
                            }}
                            onEditClick={handleEditSelectedItem}
                            onChange={(newAttrs) => {
                                setTemplateData((prev) => {
                                    const index = prev.variations[variationIndex].shapes.findIndex(item => item.id === polygon.id)
                                    prev.variations[variationIndex].shapes[index] = newAttrs
                                });
                            }}
                        />
                    );
                })}
                {templateData.variations[variationIndex].svgs?.map((item, index) => (
                    <USvg
                        key={index}
                        svgProps={item}
                        onSelect={() => {
                            setSelectedId(item.id)
                        }}
                        onEditClick={handleEditSelectedItem}
                        onChange={(event) => setTemplateData((prev) => {
                            prev.variations[variationIndex].svgs[index] = JSON.parse(JSON.stringify(event.target.attrs))
                        })}
                    />
                ))}
                {templateData.variations[variationIndex].images?.map((item, index) => (
                    <UImage
                        key={index}
                        imageProps={item}
                        onSelect={() => {
                            setSelectedId(item.id)
                        }}
                        onChange={(event) => setTemplateData((prev) => {
                            prev.variations[variationIndex].images[index] = JSON.parse(JSON.stringify(event.target.attrs))
                        })}
                    />
                ))}
                {templateData.variations[variationIndex].textBoxes?.map((item, index) => (
                    <UText
                        key={index}
                        textProps={item}
                        onSelect={() => {
                            setSelectedId(item.id)
                        }}
                        onEditClick={handleEditSelectedItem}
                        onChange={(event) => setTemplateData((prev) => {
                            prev.variations[variationIndex].textBoxes[index] = { ...event.target.attrs }
                        })}
                    />
                ))}
                <TransformerComponent
                    id={`tr${selectedId}`}
                    selectedShapeName={selectedId}
                />
            </Layer>
        </Stage>
    )
}

export default MainStage
