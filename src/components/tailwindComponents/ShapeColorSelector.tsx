import React, { useState } from 'react'
import { SketchPicker } from "react-color"

interface Props {
    selectedId: string
    templateData: any
    variationIndex: number
    currentSelectedColor: string
    currentPalette: { name: string, color: string }[]
    handleColorChange: (color: string) => void
    handleCloseColorPicker: () => void
    handleGradientColorChange: (color1: string, color2: string) => void
}

const ShapeColorSelector: React.FC<Props> = ({
    selectedId,
    templateData,
    variationIndex,
    currentSelectedColor,
    currentPalette,
    handleColorChange,
    handleGradientColorChange,
    handleCloseColorPicker
}) => {

    const [currentColor, setCurrentColor] = useState("#000000")
    const [gradColor1, setGradColor1] = useState("#000000")
    const [gradColor2, setGradColor2] = useState("#000000")

    React.useEffect(() => {
        setCurrentColor(currentSelectedColor)
    }, [currentSelectedColor])

    React.useEffect(() => {
        if (selectedId.split('_')[0] === "shapes") {
            const gradientColors = templateData.variations[variationIndex].shapes.find(
                item => item.id === selectedId
            ).fillLinearGradientColorStops
            setGradColor1(gradientColors ? gradientColors[1] : currentSelectedColor)
            setGradColor2(gradientColors ? gradientColors[3] : currentSelectedColor)
        }
    }, [selectedId])

    const handleCurrentColorChange = (hexColor: string) => {
        setCurrentColor(hexColor)
        setGradColor1(hexColor)
        setGradColor2(hexColor)
    }

    const handleSave = () => {
        if (selectedId === "shapes_background") {
            handleGradientColorChange(gradColor1, gradColor2)
        } else {
            handleColorChange(currentColor)
        }
        handleCloseColorPicker()
    }

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div>
                            {currentPalette.map((item, index) => (
                                <div key={index} className="h-10 mt-5 mb-5 flex flex-wrap justify-center content-center" >
                                    <p className="w-48">Select {item.name}</p> <div
                                        className="w-10 h-10 border border-black"
                                        style={{ backgroundColor: item.color }}
                                        onClick={() => handleCurrentColorChange(item.color)}
                                    ></div>
                                </div>
                            ))}
                        </div>
                        <div className="sm:flex sm:items-start">
                            <SketchPicker
                                width="100%"
                                color={currentColor}
                                onChange={(color) => handleCurrentColorChange(color.hex)}
                            />
                        </div>
                    </div>
                    <div className={selectedId === "shapes_background" ? "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" : "hidden"}>
                        <b>Gradient:</b>
                        <div className="grid grid-cols-2">
                            <div>
                                <p>Color 1</p>
                                <div className="sm:flex sm:items-start">
                                    <SketchPicker
                                        width="150px"
                                        color={gradColor1}
                                        onChange={(color) => setGradColor1(color.hex)}
                                    />
                                </div>
                            </div>
                            <div>
                                <p>Color 2</p>
                                <div className="sm:flex sm:items-start">
                                    <SketchPicker
                                        width="150px"
                                        color={gradColor2}
                                        onChange={(color) => setGradColor2(color.hex)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                            onClick={handleSave}
                            type="button"
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShapeColorSelector
