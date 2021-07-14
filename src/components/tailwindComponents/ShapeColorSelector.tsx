import React from 'react'
import { SketchPicker } from "react-color"
import { useFileUpload } from 'use-file-upload'

interface Props {
    selectedId: string
    templateData: any
    setTemplateData: any
    variationIndex: number
    currentPalette: { name: string, color: string }[]
}

const ShapeColorSelector: React.FC<Props> = ({
    selectedId,
    templateData,
    setTemplateData,
    variationIndex,
    currentPalette,
}) => {
    const [file, selectFile] = useFileUpload()

    const handleFillImagePattern = () => {
        selectFile({ accept: "image/png, image/jpg, image/jpeg", multiple: false },
            ({ file }: any) => {

                const reader = new FileReader();
                reader.readAsDataURL(file);

                reader.onload = () => {
                    //base64encoded string => reader.result
                    setTemplateData((prev) => {
                        const selectedShape = prev.variations[variationIndex].shapes.find(item => item.id === selectedId)
                        selectedShape.fill = ""
                        selectedShape.patternImageUrl = reader.result
                    })
                };
            })
    }

    const handleStrokeWidthChange = e => {
        if (selectedId === "shapes_background") {
            return
        } else {
            setTemplateData(prev => {
                const selectedShape = prev.variations[variationIndex].shapes.find(item => item.id === selectedId)
                selectedShape.strokeWidth = parseInt(e.target.value)
            })
        }
    }

    const handleCornerRadius = e => {
        if (selectedId === "shapes_background") {
            return
        } else {
            setTemplateData(prev => {
                const selectedShape = prev.variations[variationIndex].shapes.find(item => item.id === selectedId)
                selectedShape.cornerRadius = parseInt(e.target.value)
            })
        }
    }

    const handleOpacity = e => {
        if (selectedId === "shapes_background") {
            return
        } else {
            setTemplateData(prev => {
                const selectedShape = prev.variations[variationIndex].shapes.find(item => item.id === selectedId)
                selectedShape.opacity = parseFloat(e.target.value)
            })
        }
    }

    const handleStrokeColor = (color) => {
        if (selectedId === "shapes_background") {
            return
        } else {
            setTemplateData(prev => {
                const selectedShape = prev.variations[variationIndex].shapes.find(item => item.id === selectedId)
                selectedShape.stroke = color.hex
            })
        }
    }

    const handleShapeFill = (color: string) => {
        if (selectedId === "shapes_background") {
            return
        } else {
            setTemplateData(prev => {
                const selectedShape = prev.variations[variationIndex].shapes.find(item => item.id === selectedId)
                selectedShape.fill = color
                selectedShape.patternImageUrl = undefined
            })
        }
    }

    const handleGradientColor = (color1: string, color2: string) => {
        if (selectedId === "shapes_background") {
            return
        } else {
            setTemplateData(prev => {
                const selectedShape = prev.variations[variationIndex].shapes.find(item => item.id === selectedId)
                selectedShape.fill = ""
                selectedShape.fillLinearGradientColorStops = [0, color1, 1, color2]
                selectedShape.fillLinearGradientStartPoint = { x: 0, y: 0 }
                selectedShape.fillLinearGradientEndPoint = { x: 100, y: 100 }
                selectedShape.patternImageUrl = undefined
            })
        }
    }


    const selectedShapeData = templateData.variations[variationIndex].shapes.find(item => item.id === selectedId)

    return (
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className={selectedId !== "shapes_background" ? "" : "hidden"}>
                    <p>Border width: </p>
                    <input
                        className="border mb-5"
                        type="number"
                        min={0}
                        value={selectedShapeData?.strokeWidth}
                        onChange={handleStrokeWidthChange}
                    />
                    <p>Corner radius:</p>
                    <input
                        className="border mb-5"
                        type="number"
                        value={selectedShapeData?.cornerRadius}
                        onChange={handleCornerRadius}
                    />
                    <p>Opacity: </p>
                    <input
                        className="border mb-5"
                        type="number"
                        value={selectedShapeData?.opacity}
                        step={0.1} min={0.1} max={1.0}
                        onChange={handleOpacity}
                    />
                    <p>Borer color:</p>
                    <SketchPicker
                        width="150px"
                        color={selectedShapeData?.stroke}
                        onChange={handleStrokeColor}
                    />
                </div>
                <div>
                    {currentPalette.map((item, index) => (
                        <div key={index} className="h-10 mt-5 mb-5 flex flex-wrap justify-center content-center" >
                            <p className="w-48">Select {item.name}</p> <div
                                className="w-10 h-10 border border-black"
                                style={{ backgroundColor: item.color }}
                                onClick={() => handleShapeFill(item.color)}
                            ></div>
                        </div>
                    ))}
                </div>
                <div className="sm:flex sm:items-start">
                    <SketchPicker
                        width="100%"
                        color={selectedShapeData?.fill}
                        onChange={(color) => handleShapeFill(color.hex)}
                    />
                </div>
            </div>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-center">
                    <button
                        className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                        onClick={handleFillImagePattern}
                    >Insert image</button>
                </div>
            </div>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <b>Gradient:</b>
                <div className="grid grid-cols-2">
                    <div>
                        <p>Color 1</p>
                        <div className="sm:flex sm:items-start">
                            <SketchPicker
                                width="150px"
                                color={selectedShapeData?.fillLinearGradientColorStops ?
                                    selectedShapeData?.fillLinearGradientColorStops[1] :
                                    "#171717"}
                                onChange={(color) => handleGradientColor(
                                    color.hex,
                                    selectedShapeData?.fillLinearGradientColorStops ?
                                        selectedShapeData?.fillLinearGradientColorStops[3] :
                                        "#171717")}
                            />
                        </div>
                    </div>
                    <div>
                        <p>Color 2</p>
                        <div className="sm:flex sm:items-start">
                            <SketchPicker
                                width="150px"
                                color={selectedShapeData?.fillLinearGradientColorStops ?
                                    selectedShapeData?.fillLinearGradientColorStops[3] :
                                    selectedShapeData?.fill}
                                onChange={(color) => handleGradientColor(
                                    selectedShapeData?.fillLinearGradientColorStops ?
                                        selectedShapeData?.fillLinearGradientColorStops[1] :
                                        selectedShapeData?.fill,
                                    color.hex)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShapeColorSelector
