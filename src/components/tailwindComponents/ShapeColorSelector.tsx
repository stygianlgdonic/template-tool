import React, { useState } from 'react'
import { SketchPicker } from "react-color"
import { useFileUpload } from 'use-file-upload'

interface Props {
    selectedId: string
    templateData: any
    setTemplateData: any
    variationIndex: number
    currentSelectedColor: string
    currentPalette: { name: string, color: string }[]
    handleCloseColorPicker: () => void
    handleGradientColorChange: (color1: string, color2: string) => void
    handleRectPropsChange: (width: number, color: string, opacity: number) => void
    handleCornerRadiusChange: (radius: number) => void
}

const ShapeColorSelector: React.FC<Props> = ({
    selectedId,
    templateData,
    setTemplateData,
    variationIndex,
    currentSelectedColor,
    currentPalette,
    handleGradientColorChange,
    handleCloseColorPicker,
    handleRectPropsChange,
    handleCornerRadiusChange
}) => {
    const [file, selectFile] = useFileUpload()

    const [currentColor, setCurrentColor] = useState<string>("#000000")
    const [gradColor1, setGradColor1] = useState<string>("#000000")
    const [gradColor2, setGradColor2] = useState<string>("#000000")
    const [strokeColor, setStrokeColor] = useState<string>("#000000")
    const [strokeWidth, setStrokeWidth] = useState<number>(0)
    const [cornerRadius, setCornerRadius] = useState<number>(0)
    const [opacity, setOpacity] = useState<number>(1)

    React.useEffect(() => {
        setCurrentColor(currentSelectedColor)
    }, [currentSelectedColor])

    React.useEffect(() => {
        if (selectedId === "shapes_background") {

            const selectedShape = templateData.variations[variationIndex].background
            const gradientColors = selectedShape.fillLinearGradientColorStops
            setGradColor1(gradientColors ? gradientColors[1] : currentSelectedColor)
            setGradColor2(gradientColors ? gradientColors[3] : currentSelectedColor)
            setStrokeWidth(!!selectedShape.strokeWidth ? selectedShape.strokeWidth : 0)
            setStrokeColor(!!selectedShape.stroke ? selectedShape.stroke : "#000000")
            setOpacity(!!selectedShape.opacity ? selectedShape.opacity : 1)
            setCornerRadius(!!selectedShape.cornerRadius ? selectedShape.cornerRadius : 0)

            return
        }
        if (selectedId.split('_')[0] === "shapes") {
            const selectedShape = templateData.variations[variationIndex].shapes.find(
                item => item.id === selectedId
            )
            const gradientColors = selectedShape.fillLinearGradientColorStops
            setGradColor1(gradientColors ? gradientColors[1] : currentSelectedColor)
            setGradColor2(gradientColors ? gradientColors[3] : currentSelectedColor)
            setStrokeWidth(!!selectedShape.strokeWidth ? selectedShape.strokeWidth : 0)
            setStrokeColor(!!selectedShape.stroke ? selectedShape.stroke : "#000000")
            setOpacity(!!selectedShape.opacity ? selectedShape.opacity : 1)

            const shapeType = templateData.variations[variationIndex].shapes.find(item => item.id === selectedId).type
            if (shapeType === "rectangle") {
                setCornerRadius(!!selectedShape.cornerRadius ? selectedShape.cornerRadius : 0)
            }
        }
    }, [selectedId])


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
        if (selectedId === "variation_background") {
            return
        } else {
            setTemplateData(prev => {
                const selectedShape = prev.variations[variationIndex].shapes.find(item => item.id === selectedId)
                selectedShape.strokeWidth = parseInt(e.target.value)
            })
        }
    }

    const handleCornerRadius = e => {
        if (selectedId === "variation_background") {
            return
        } else {
            setTemplateData(prev => {
                const selectedShape = prev.variations[variationIndex].shapes.find(item => item.id === selectedId)
                selectedShape.cornerRadius = parseInt(e.target.value)
            })
        }
    }

    const handleOpacity = e => {
        if (selectedId === "variation_background") {
            return
        } else {
            setTemplateData(prev => {
                const selectedShape = prev.variations[variationIndex].shapes.find(item => item.id === selectedId)
                selectedShape.opacity = parseFloat(e.target.value)
            })
        }
    }

    const handleStrokeColor = (color) => {
        if (selectedId === "variation_background") {
            return
        } else {
            setTemplateData(prev => {
                const selectedShape = prev.variations[variationIndex].shapes.find(item => item.id === selectedId)
                selectedShape.stroke = color.hex
            })
        }
    }

    const handleShapeFill = (color: string) => {
        if (selectedId === "variation_background") {
            return
        } else {
            setTemplateData(prev => {
                const selectedShape = prev.variations[variationIndex].shapes.find(item => item.id === selectedId)
                selectedShape.fill = color
            })
        }
    }

    const handleGradientColor = (color1: string, color2: string) => {
        if (selectedId === "variation_background") {
            return
        } else {
            setTemplateData(prev => {
                const selectedShape = prev.variations[variationIndex].shapes.find(item => item.id === selectedId)
                selectedShape.fill = ""
                selectedShape.fillLinearGradientColorStops = [0, color1, 1, color2]
                selectedShape.fillLinearGradientStartPoint = { x: 0, y: 0 }
                selectedShape.fillLinearGradientEndPoint = { x: 100, y: 100 }
            })
        }
    }


    const selectedShapeData = templateData.variations[variationIndex].shapes.find(item => item.id === selectedId)

    return (
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className={selectedId !== "variation_background" ? "" : "hidden"}>
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
                                    selectedShapeData?.fill}
                                onChange={(color) => handleGradientColor(
                                    color.hex,
                                    selectedShapeData?.fillLinearGradientColorStops ?
                                        selectedShapeData?.fillLinearGradientColorStops[3] :
                                        selectedShapeData?.fill)}
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
