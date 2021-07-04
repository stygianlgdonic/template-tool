import React, { useContext, useEffect, useState } from 'react';
import { Stage, Layer } from 'react-konva';
import { stageDimensions, defaultShape } from "../utils/defaults"
import * as svg from "../utils/svg"
// import { SketchPicker } from 'react-color'
import Rectangle from "./Rectangle"
// import UImage from "./UImage"
import USvg from "./USvg"
import TransformerComponent from "./UTransformer"
// import useTemplateData from '../hooks/useTemplateData';
import { TemplateContext } from '../contexts/TemplateContext';
import ShapeColorSelector from "./tailwindComponents/ShapeColorSelector"
// import useImage from 'use-image';

const DesignTool: React.FC = () => {


    // const [svgString, setSvgString] = useState(null)
    // const colors = svg.getColors(svgString);
    // const [colorMap, setColorMap] = React.useState({});
    // const modifiedSVG = svg.replaceColors(svgString, colorMap);
    // const [image] = useImage(svg.svgToURL(modifiedSVG));
    // const [imageAttrs, setImageAttrs] = useState({
    //     id: "svg",
    //     name: "svg",
    //     type: "svg",
    //     x: 10,
    //     y: 10,
    //     draggable: true
    // })

    // const [currentSelectedSvgColor, setCurrentSelectedSvgColor] = useState<string | null>(null)

    const [templateData, setTemplateData] = useContext(TemplateContext)
    const [selectedId, setSelectedId] = useState<string | null>(null);

    useEffect(() => {
        document.addEventListener("keydown", (e) => e.key === "Escape" && setSelectedId(null), false);
        return () => {
            document.removeEventListener("keydown", (e) => e.key === "Escape" && setSelectedId(null), false);
        };
    }, []);

    const checkDeselect = (e) => {
        // deselect when clicked on empty area
        const clickedOnEmpty = e.target === e.target.getStage()
        if (clickedOnEmpty) {
            setSelectedId(null)
        }
    };

    const handleColorChange = (color) => {
        setTemplateData((prev) => {
            const index = prev.shapes?.findIndex(shape => shape.id === selectedId)
            prev.shapes[index].fill = color
        })
    }

    const handleAddNewRect = () => {
        setTemplateData((prev) => {
            let imageId = new Date().getTime();
            prev.shapes.push({ ...defaultShape, type: "rectangle", id: `shape_${imageId.toString()}` })
        })
    }

    const handleDeselect = () => {
        setSelectedId(null)
    }

    // const handleSvgCurrentColor = (color: string) => {
    //     setCurrentSelectedSvgColor(color)
    // }

    // const setNewColor = (oldColor, newColor) => {
    //     setColorMap({
    //         ...colorMap,
    //         [oldColor]: newColor
    //     });
    // };

    const handleSvgUpload = (e) => {
        svg.getSvgStringFromUpload(e.target.files).then((SVG_STRING) => {

            setTemplateData((prev) => {
                let svgId = new Date().getTime()
                prev.svgs.push({

                    id: `svg_${svgId.toString()}`,
                    type: "svg",
                    svgString: SVG_STRING,
                    x: 100,
                    y: 200,
                    width: 100,
                    height: 100,
                    draggable: true,

                })
            })
        })
    }

    return (
        <div>
            <div>
                <button onClick={handleAddNewRect}>Add new rect</button>
                <br />
                <p>upload svg</p>
                <input type="file" accept=".svg" onChange={handleSvgUpload} />
            </div>

            {selectedId?.split('_')[0] === "shape" && (
                <ShapeColorSelector
                    currentSelectedColor={templateData?.shapes?.find(item => item.id === selectedId)?.fill || "#000000"}
                    currentPalette={templateData.palette}
                    handleColorChange={handleColorChange}
                    handleCloseColorPicker={handleDeselect}
                />
            )}

            <div>
                <Stage
                    {...stageDimensions}
                    onMouseDown={checkDeselect}
                    onTouchStart={checkDeselect}
                >
                    <Layer>
                        {templateData.shapes?.filter(item => item.type === "rectangle")?.map((rect, i) => {
                            return (
                                <Rectangle
                                    key={i}
                                    shapeProps={rect}
                                    onSelect={() => {
                                        setSelectedId(rect.id)
                                    }}
                                    onChange={(newAttrs) => {
                                        setTemplateData((prev) => {
                                            const index = prev.shapes.findIndex(item => item.id === rect.id)
                                            prev.shapes[index] = newAttrs
                                        });
                                    }}
                                />
                            );
                        })}
                        {templateData.svgs.map((item, index) => (
                            <USvg
                                key={index}
                                svgProps={item}
                                onSelect={(id) => {
                                    setSelectedId(id)
                                }}
                                onChange={(event) => setTemplateData((prev) => {
                                    prev.svgs[index].x = event.target.attrs.x
                                    prev.svgs[index].y = event.target.attrs.y
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
            {/* <div>
                <p>Hit escape to close</p>
                <div>
                    <p>Select from palette</p>
                    {templateData.palette.map((item, index) => (
                        <div key={index} >
                            {item.name} : <div
                                onClick={() => handleColorChange({ hex: item.color })}
                            ></div>
                        </div>
                    ))}

                    <p>or Select a custom color</p>

                    <SketchPicker
                        color={templateData.rectangles?.find(rect => rect.id === selectedId)?.fill}
                        onChange={handleColorChange}
                    />
                </div>
                 <div style={{ display: selectedId?.split('_')[0] === "svg" ? '' : 'none' }}>
                    <p>Select a color you want to change...</p>
                    {colors.map((item, index) => (
                        <div
                            key={index}
                            style={{ display: 'inline-block', width: '30px', height: '30px', backgroundColor: colorMap[item] || item, margin: '5px' }}
                            onClick={() => handleSvgCurrentColor(item)}
                        >
                        </div>
                    ))}
                    <div>
                        {currentSelectedSvgColor && (
                            <>
                                <p>Select from palette</p>
                                {templateData.palette.map((item, index) => (
                                    <div key={index} style={{ display: 'inline-block' }} >
                                        {item.name} : <div
                                            style={{ display: 'inline-block', backgroundColor: item.color, width: '30px', height: '30px' }}
                                            onClick={() => setNewColor(currentSelectedSvgColor, item.color)}
                                        ></div>
                                    </div>
                                ))}

                                <p>or Select a custom color</p>

                                <SketchPicker
                                    color={colorMap[currentSelectedSvgColor]}
                                    onChange={(color) => setNewColor(currentSelectedSvgColor, color.hex)}
                                />
                            </>
                        )}
                    </div>

                </div> 


        </div>*/}
        </div >
    );
};
export default DesignTool
