import React from 'react'
import { SketchPicker } from "react-color"

interface Props {
    currentSelectedColor: string
    handleColorChange: (color: string) => void
    handleCloseColorPicker: () => void
}

const Modal: React.FC<Props> = ({ currentSelectedColor, handleColorChange, handleCloseColorPicker }) => {

    const [currentColor, setCurrentColor] = React.useState("#000000")

    React.useEffect(() => {
        setCurrentColor(currentSelectedColor)
    }, [currentSelectedColor])

    const handleSave = () => {
        handleColorChange(currentColor)
        handleCloseColorPicker()
    }

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <SketchPicker
                                color={currentColor}
                                onChange={(color) => setCurrentColor(color.hex)}
                            />
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

export default Modal
