import React, { useContext, useEffect, useState } from 'react';
import { Stage, Layer } from 'react-konva';
import { stageDimensions, rectangle, ORIGINAL_SVG } from "../utils/defaults"
import * as svg from "../utils/svg"
import { SketchPicker } from 'react-color'
import Rectangle from "./Rectangle"
import UImage from "./UImage"
import TransformerComponent from "./UTransformer"
import useImage from 'use-image';
// import useTemplateData from '../hooks/useTemplateData';
import { TemplateContext } from '../contexts/TemplateContext';

const DesignTool: React.FC = () => {

    const colors = svg.getColors(ORIGINAL_SVG);
    const [colorMap, setColorMap] = React.useState({});
    const modifiedSVG = svg.replaceColors(ORIGINAL_SVG, colorMap);
    const [image] = useImage(svg.svgToURL(modifiedSVG));
    const [imageAttrs, setImageAttrs] = useState({
        id: "svg",
        name: "svg",
        type: "svg",
        x: 10,
        y: 10,
        draggable: true
    })

    const [currentSelectedSvgColor, setCurrentSelectedSvgColor] = useState<string | null>(null)

    const [templateData, setTemplateData] = useContext(TemplateContext)
    const [selectedId, selectShape] = useState<string | null>(null);

    useEffect(() => {
        document.addEventListener("keydown", (e) => e.key === "Escape" && selectShape(null), false);
        return () => {
            document.removeEventListener("keydown", (e) => e.key === "Escape" && selectShape(null), false);
        };
    }, []);

    const checkDeselect = (e) => {
        // deselect when clicked on empty area
        const clickedOnEmpty = e.target === e.target.getStage()
        if (clickedOnEmpty) {
            selectShape(null)
        }
    };

    const handleColorChange = (color) => {
        setTemplateData((prev) => {
            const index = prev.rectangles?.findIndex(rect => rect.id === selectedId)
            prev.rectangles[index].fill = color.hex
        })
    }

    const handleAddNewRect = () => {
        setTemplateData((prev) => {
            prev.rectangles.push(rectangle)
        })
    }

    const handleSvgCurrentColor = (color: string) => {
        setCurrentSelectedSvgColor(color)
    }

    const setNewColor = (oldColor, newColor) => {
        setColorMap({
            ...colorMap,
            [oldColor]: newColor
        });
    };

    const { rectangles } = templateData

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
            <div style={{ backgroundColor: 'coral' }}>
                <button onClick={handleAddNewRect}>Add new rect</button>
            </div>
            <div>
                <Stage
                    {...stageDimensions}
                    onMouseDown={checkDeselect}
                    onTouchStart={checkDeselect}
                >
                    <Layer>
                        {rectangles?.map((rect, i) => {
                            return (
                                <Rectangle
                                    key={i}
                                    shapeProps={rect}
                                    onSelect={() => {
                                        selectShape(rect.id)
                                    }}
                                    onChange={(newAttrs) => {
                                        setTemplateData((prev) => {
                                            const index = prev.rectangles.findIndex(item => item.id === rect.id)
                                            prev.rectangles[index] = newAttrs
                                        });
                                    }}
                                />
                            );
                        })}
                        <UImage
                            image={image}
                            imageProps={imageAttrs}
                            onSelect={(id) => selectShape(id)}
                            onChange={(event) => setImageAttrs({ ...imageAttrs, x: event.target.attrs.x, y: event.target.attrs.y })}
                        />
                        <TransformerComponent
                            id={`tr${selectedId}`}
                            selectedShapeName={selectedId}
                        />
                    </Layer>
                </Stage>
            </div>
            <br />
            <div style={{ display: !!selectedId ? "" : "none", backgroundColor: 'coral', padding: '20px' }}>
                <p>Hit escape to close</p>
                <div style={{ display: selectedId !== "svg" ? '' : 'none' }}>
                    <p>Select from palette</p>
                    {templateData.palette.map((item, index) => (
                        <div key={index} style={{ display: 'inline-block' }} >
                            {item.name} : <div
                                style={{ display: 'inline-block', backgroundColor: item.color, width: '30px', height: '30px' }}
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
                <div style={{ display: selectedId === "svg" ? '' : 'none' }}>
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


            </div>
        </div>
    );
};
export default DesignTool
