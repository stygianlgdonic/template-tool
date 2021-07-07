import React, { useContext, useEffect, useState } from 'react';
import { Stage, Layer } from 'react-konva';
import { stageDimensions, defaultRect, defaultCircle, defaultPolygon, defaultRoundedRect, defaultTriangle } from "../utils/defaults"
import * as svg from "../utils/svg"
import Rectangle from "./Rectangle"
import UCircle from "./UCircle"
import UPolygon from "./UPolygon"
import ULine from "./ULine"
import USvg from "./USvg"
import TransformerComponent from "./UTransformer"
import { INITIAL_STATE, TemplateContext } from '../contexts/TemplateContext';
import ShapeColorSelector from "./tailwindComponents/ShapeColorSelector"
import SvgColorSelector from "./tailwindComponents/SvgColorSelector"
import SelectVariation from "./tailwindComponents/SelectVariation"
import SaveVariation from "./tailwindComponents/SaveVariation"
import swal from "sweetalert"

const DesignTool: React.FC = () => {

    const [variationIndex, setVariationIndex] = useState<number>(0)

    const [showSaveVariationModal, setShowSaveVariationModal] = useState(false)

    const [templateData, setTemplateData] = useContext(TemplateContext)
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [isOpenColorPicker, setIsOpenColorPicker] = useState<boolean>(false)

    // NOTE - for svgs
    const [svgString, setSvgString] = useState<string | null>(null)
    const colors = svg.getColors(svgString);
    const [colorMap, setColorMap] = useState({});

    useEffect(() => {
        document.addEventListener("keydown", (e) => e.key === "Escape" && setSelectedId(null), false);
        return () => {
            document.removeEventListener("keydown", (e) => e.key === "Escape" && setSelectedId(null), false);
        };
    }, []);

    useEffect(() => {
        if (selectedId?.split("_")[0] === "svgs") {
            const svgIndex = templateData.variations[variationIndex].svgs?.findIndex(item => item.id === selectedId)
            setSvgString(templateData.variations[variationIndex].svgs[svgIndex].svgString)
            setColorMap(templateData.variations[variationIndex].svgs[svgIndex].colorMap)
        }
    }, [selectedId])

    const handleSvgElementColorChange = (oldColor, newColor) => {
        setColorMap({
            ...colorMap,
            [oldColor]: newColor
        });
    }

    const handleSaveSvg = () => {
        setTemplateData(prev => {
            prev.variations[variationIndex].svgs.find(item => item.id === selectedId).colorMap = colorMap
        })
        setSelectedId(null)
        setIsOpenColorPicker(false)
    }

    const checkDeselect = (e) => {
        // deselect when clicked on empty area
        const clickedOnEmpty = e.target === e.target.getStage()
        if (clickedOnEmpty) {
            setSelectedId(null)
        }
    };

    const handleColorChange = (color) => {
        setTemplateData((prev) => {
            const index = prev.variations[variationIndex].shapes?.findIndex(shape => shape.id === selectedId)
            prev.variations[variationIndex].shapes[index].fill = color
        })
    }

    const handleAddNewRect = () => {
        setTemplateData((prev) => {
            let shapeID = new Date().getTime();
            prev.variations[variationIndex].shapes.push({ ...defaultRect, id: `shapes_${shapeID.toString()}` })
        })
    }

    const handleAddNewCircle = () => {
        setTemplateData((prev) => {
            let shapeID = new Date().getTime();
            prev.variations[variationIndex].shapes.push({ ...defaultCircle, id: `shapes_${shapeID.toString()}` })
        })
    }
    const handleAddNewTrianlge = () => {
        setTemplateData((prev) => {
            let shapeID = new Date().getTime();
            prev.variations[variationIndex].shapes.push({ ...defaultTriangle, id: `shapes_${shapeID.toString()}` })
        })
    }
    const handleAddNewPolygon = () => {
        setTemplateData((prev) => {
            let shapeID = new Date().getTime();
            prev.variations[variationIndex].shapes.push({ ...defaultPolygon, id: `shapes_${shapeID.toString()}` })
        })
    }
    const handleAddNewRoundedRect = () => {
        setTemplateData((prev) => {
            let shapeID = new Date().getTime();
            prev.variations[variationIndex].shapes.push({ ...defaultRoundedRect, id: `shapes_${shapeID.toString()}` })
        })
    }

    const handleCloseColorPicker = () => {
        setIsOpenColorPicker(false)
        setSelectedId(null)
    }

    const handleSvgUpload = (e) => {
        svg.getSvgStringFromUpload(e.target.files).then((SVG_STRING) => {

            setTemplateData((prev) => {
                let svgId = new Date().getTime()
                prev.variations[variationIndex].svgs.push({

                    id: `svgs_${svgId.toString()}`,
                    type: "svg",
                    svgString: SVG_STRING,
                    colorMap: {},
                    x: 100,
                    y: 200,
                    width: 100,
                    height: 100,
                    draggable: true,

                })
            })
        })
    }

    const handleSaveVariation = (variationData: any) => {
        setTemplateData(prev => {
            prev.variations[variationIndex].name = variationData.name
            prev.variations[variationIndex].face = variationData.face
        })
        setShowSaveVariationModal(false)
    }

    const handleAddVariation = () => {
        if (templateData.variations.length < 4) {
            setTemplateData(prev => {
                prev.variations.push(templateData.variations[variationIndex])
            })
            setVariationIndex(prev => (prev + 1))
        } else {
            swal("Cannot create more than 4 variations!")
        }
    }

    const handleEditSelectedItem = () => {
        setIsOpenColorPicker(true)
    }
    const handleDeleteSelectedItem = () => {
        const type = selectedId.split("_")[0]
        setTemplateData(prev => {
            prev.variations[variationIndex][type] = prev.variations[variationIndex][type].filter(
                item => item.id !== selectedId
            )
            setSelectedId(null)
        })
    }

    return (
        <div>
            <div className="h-20 mb-5 flex flex-wrap justify-center content-center bg-green-800">
                <p className="text-xl text-white">Tempalte Design</p>
            </div>

            {isOpenColorPicker && selectedId?.split('_')[0] === "shapes" && (
                <ShapeColorSelector
                    currentSelectedColor={templateData.variations[variationIndex].shapes?.find(item => item.id === selectedId)?.fill || "#000000"}
                    currentPalette={templateData.palette}
                    handleColorChange={handleColorChange}
                    handleCloseColorPicker={handleCloseColorPicker}
                />
            )}

            {isOpenColorPicker && selectedId?.split('_')[0] === "svgs" && (
                <SvgColorSelector
                    colors={colors}
                    colorMap={colorMap}
                    currentPalette={templateData.palette}
                    handleSvgElementColorChange={handleSvgElementColorChange}
                    handleSaveSvg={handleSaveSvg}
                />
            )}

            {showSaveVariationModal && (
                <SaveVariation
                    templateData={templateData}
                    handleSaveVariation={handleSaveVariation}
                />
            )}

            <div className="grid grid-cols-3 gap-4">

                {/* first col */}
                <div>

                    <div className="flex justify-center">
                        <button
                            className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                            onClick={handleAddNewRect}
                        >Add new Square</button>
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                            onClick={handleAddNewCircle}
                        >Add new Circle</button>
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                            onClick={handleAddNewTrianlge}
                        >Add new Triangle</button>
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                            onClick={handleAddNewPolygon}
                        >Add new Pentagon</button>
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                            onClick={handleAddNewRoundedRect}
                        >Add new Rounded Square</button>
                    </div>
                    <div className="flex justify-center">
                        <p>upload svg</p>
                        <input className="" type="file" accept=".svg" onChange={handleSvgUpload} />
                    </div>

                </div>

                {/* Center column */}
                <div>
                    <div className="flex justify-center mt-5">
                        <Stage
                            {...stageDimensions}
                            onMouseDown={checkDeselect}
                            onTouchStart={checkDeselect}
                        >
                            <Layer>
                                {templateData.variations[variationIndex].shapes?.filter(item => item.type === "rectangle")?.map((rect, i) => {
                                    return (
                                        <Rectangle
                                            key={i}
                                            shapeProps={rect}
                                            onSelect={() => {
                                                setSelectedId(rect.id)
                                            }}
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
                                        onChange={(event) => setTemplateData((prev) => {
                                            prev.variations[variationIndex].svgs[index].x = event.target.attrs.x
                                            prev.variations[variationIndex].svgs[index].y = event.target.attrs.y
                                        })}
                                    />
                                ))}
                                <TransformerComponent
                                    id={`tr${selectedId}`}
                                    selectedShapeName={selectedId}
                                />
                            </Layer>
                        </Stage>
                    </div>

                    <div className="flex justify-center mt-5">
                        <SelectVariation
                            variations={templateData.variations}
                            variationIndex={variationIndex}
                            setVariationIndex={setVariationIndex}
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                            onClick={() => setShowSaveVariationModal(true)}
                        >Save Variation</button>
                        <button
                            className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                            onClick={handleAddVariation}
                        >Add New Variation</button>
                    </div>
                </div>

                {/* third col */}
                <div className={selectedId ? "" : "hidden"}>
                    <div className="flex justify-center">
                        <button
                            onClick={handleEditSelectedItem}
                            className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                        >Edit</button>
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={handleDeleteSelectedItem}
                            className={selectedId === "shape_background" ? "hidden" : "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"}
                        >Delete</button>
                    </div>
                </div>

            </div>


        </div >
    );
};
export default DesignTool
