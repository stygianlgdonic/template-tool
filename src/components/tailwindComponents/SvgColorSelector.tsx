import React from 'react'
import { SketchPicker } from "react-color"

interface Props {
    colors: string[]
    colorMap: any
    currentPalette: { name: string, color: string }[]
    handleSvgElementColorChange: any
    handleSaveSvg: any
}

const SvgColorSelector: React.FC<Props> = ({
    colors,
    colorMap,
    currentPalette,
    handleSvgElementColorChange,
    handleSaveSvg
}) => {

    const [currentColor, setCurrentColor] = React.useState(null)

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div>
                            <p>Select a color to edit</p>
                            {colors.map((item, index) => (
                                <div key={index} className="h-10 m-5 inline-block" >
                                    <div
                                        className="w-10 h-10 border border-black"
                                        style={{ backgroundColor: colorMap[item] || item }}
                                        onClick={() => setCurrentColor(item)}
                                    ></div>
                                </div>
                            ))}

                        </div>
                        <div className={!!currentColor ? "" : "hidden"}>
                            {currentPalette.map((item, index) => (
                                <div key={index} className="h-10 mt-5 mb-5 flex flex-wrap justify-center content-center" >
                                    <p className="w-48">Select {item.name}</p> <div
                                        className="w-10 h-10 border border-black"
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
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                            onClick={handleSaveSvg}
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

export default SvgColorSelector
