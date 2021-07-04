import React, { useContext, useEffect, useState } from 'react';
import { Stage, Layer } from 'react-konva';
import { stageDimensions, defaultShape } from "../utils/defaults"
import * as svg from "../utils/svg"
import Rectangle from "./Rectangle"
import USvg from "./USvg"
import TransformerComponent from "./UTransformer"
import { INITIAL_STATE, TemplateContext } from '../contexts/TemplateContext';
import ShapeColorSelector from "./tailwindComponents/ShapeColorSelector"
import SvgColorSelector from "./tailwindComponents/SvgColorSelector"
import SelectVariation from "./tailwindComponents/SelectVariation"

const DesignTool: React.FC = () => {

    const [variationIndex, setVariationIndex] = useState<number>(0)

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
        if (selectedId?.split("_")[0] === "svg") {
            const svgIndex = templateData.variations[variationIndex]?.svgs?.findIndex(item => item.id === selectedId)
            setSvgString(templateData.variations[variationIndex]?.svgs[svgIndex].svgString)
            setColorMap(templateData.variations[variationIndex]?.svgs[svgIndex].colorMap)
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
            let imageId = new Date().getTime();
            prev.variations[variationIndex].shapes.push({ ...defaultShape, type: "rectangle", id: `shape_${imageId.toString()}` })
        })
    }

    const handleOpenColorPicker = () => {
        setIsOpenColorPicker(true)
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

                    id: `svg_${svgId.toString()}`,
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

    const handleAddVariation = () => {
        setTemplateData(prev => {
            prev.variations.push(INITIAL_STATE.variations[0])
        })
    }

    return (
        <div>
            <div className="h-20 flex flex-wrap justify-center content-center bg-green-800">
                <p className="text-xl text-white">Tempalte Design</p>
            </div>

            {isOpenColorPicker && selectedId?.split('_')[0] === "shape" && (
                <ShapeColorSelector
                    currentSelectedColor={templateData.variations[variationIndex]?.shapes?.find(item => item.id === selectedId)?.fill || "#000000"}
                    currentPalette={templateData.palette}
                    handleColorChange={handleColorChange}
                    handleCloseColorPicker={handleCloseColorPicker}
                />
            )}

            {isOpenColorPicker && selectedId?.split('_')[0] === "svg" && (
                <SvgColorSelector
                    colors={colors}
                    colorMap={colorMap}
                    currentPalette={templateData.palette}
                    handleSvgElementColorChange={handleSvgElementColorChange}
                    handleSaveSvg={handleSaveSvg}
                />
            )}


            <div className="flex justify-center">
                <SelectVariation
                    variations={templateData.variations}
                    variationIndex={variationIndex}
                    setVariationIndex={setVariationIndex}
                />
            </div>
            <div className="flex justify-center">
                <button
                    className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                    onClick={handleAddNewRect}>Add new rect</button>
            </div>
            <div className="flex justify-center">

                <p>upload svg</p>
                <input className="" type="file" accept=".svg" onChange={handleSvgUpload} />
            </div>

            <div className="flex justify-center mt-5">
                <Stage
                    {...stageDimensions}
                    onMouseDown={checkDeselect}
                    onTouchStart={checkDeselect}
                >
                    <Layer>
                        {templateData.variations[variationIndex]?.shapes?.filter(item => item.type === "rectangle")?.map((rect, i) => {
                            return (
                                <Rectangle
                                    key={i}
                                    shapeProps={rect}
                                    onSelect={() => {
                                        setSelectedId(rect.id)
                                    }}
                                    onEdit={handleOpenColorPicker}
                                    onChange={(newAttrs) => {
                                        setTemplateData((prev) => {
                                            const index = prev.variations[variationIndex].shapes.findIndex(item => item.id === rect.id)
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
                                onEdit={handleOpenColorPicker}
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

            <div className="flex justify-center">
                <button
                    className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                    onClick={handleAddVariation}
                >Add New Variation</button>
            </div>

        </div >
    );
};
export default DesignTool
