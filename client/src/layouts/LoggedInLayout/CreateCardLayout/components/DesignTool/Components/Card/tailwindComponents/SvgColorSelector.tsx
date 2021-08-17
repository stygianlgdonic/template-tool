import React, { useState } from 'react'
import { SketchPicker } from "react-color"
import * as svg from "../../../../../../../../utils/svg"

interface Props {
    selectedId: string
    templateData: any
    setTemplateData: any
    variationIndex: number
}

const SvgColorSelector: React.FC<Props> = ({
    selectedId,
    templateData,
    setTemplateData,
    variationIndex
}) => {

    const [currentColor, setCurrentColor] = useState("#171717")

    const svgData = templateData.variations[variationIndex].svgs.find(item => item.id === selectedId)
    const colors = svg.getColors(svgData.svgString);
    const colorMap = svgData.colorMap

    const handleSvgElementColorChange = (oldColor: string, newColor: string) => {
        setTemplateData(prev => {
            prev.variations[variationIndex].svgs.find(item => item.id === selectedId)
                .colorMap[oldColor] = newColor
        })
    }

    return (
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div>
                    <p>Select a color to edit</p>
                    {colors.map((item, index) => (
                        <div key={index} className="h-10 m-5 inline-block" >
                            <div
                                className="w-10 h-10 border border-black"
                                style={{ backgroundColor: svgData.colorMap[item] || item }}
                                onClick={() => setCurrentColor(item)}
                            ></div>
                        </div>
                    ))}

                </div>
                <div className={!!currentColor ? "" : "hidden"}>
                    {templateData.palette.map((item, index) => (
                        <div key={index} className="h-10 mt-5 mb-5 flex flex-wrap justify-center content-center" >
                            <p className="w-48">Select {item.name}</p> <div
                                className={"w-10 h-10 border border-black " + (currentColor === item.color && "opacity-50")}
                                style={{ backgroundColor: item.color }}
                                onClick={() => handleSvgElementColorChange(currentColor, item.color)}
                            ></div>
                        </div>
                    ))}
                </div>
                <div className={!!currentColor ? "sm:flex sm:items-start" : "hidden"}>
                    <SketchPicker
                        width="100%"
                        color={colorMap[currentColor] || "#000000"}
                        onChange={(color) => handleSvgElementColorChange(currentColor, color.hex)}
                    />
                </div>
            </div>
        </div>
    )
}

export default SvgColorSelector
