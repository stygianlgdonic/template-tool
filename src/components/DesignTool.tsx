import React, { useEffect, useState } from 'react';
import { Stage, Layer } from 'react-konva';
import { stageDimensions, rectangle, ORIGINAL_SVG } from "../utils/defaults"
import * as svg from "../utils/svg"
import { SketchPicker } from 'react-color'
import Rectangle from "./Rectangle"
import UImage from "./UImage"
import TransformerComponent from "./UTransformer"
import useImage from 'use-image';
import useTemplateData from '../hooks/useTemplateData';

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
    const [showSvgColorPicker, setShowSvgColorPicker] = useState(false)
    const [svgSelectedColor, setSvgSelectedColor] = useState('#171717')

    const { templateData, setTemplateData } = useTemplateData()
    const [selectedId, selectShape] = useState(null);

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

    const toggleSvgColorPicker = () => {
        setShowSvgColorPicker(!showSvgColorPicker)
    }

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
            <div style={{ display: !!selectedId && selectedId !== "svg" ? '' : 'none', backgroundColor: 'coral', padding: '20px' }}>
                <p>Hit escape to close</p>
                <SketchPicker
                    color={templateData.rectangles?.find(rect => rect.id === selectedId)?.fill}
                    onChange={handleColorChange}
                />
            </div>
            <div style={{ display: !!selectedId && selectedId === "svg" ? '' : 'none', backgroundColor: 'coral', padding: '20px' }}>
                <p>Hit escape to close</p>
                {colors.map((item, index) => (
                    <div
                        key={index}
                        style={{ display: 'inline-block', width: '30px', height: '30px', backgroundColor: item, margin: '5px' }}
                    >
                    </div>
                ))}
            </div>
        </div>
    );
};
export default DesignTool
