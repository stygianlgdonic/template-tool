import React, { useState, useContext } from 'react'
// import useTemplateData from '../hooks/useTemplateData'
import { SketchPicker } from 'react-color'
import { NavLink } from 'react-router-dom'
import { ROUTE_NAMES } from '../routes/route_names'
import { TemplateContext } from '../contexts/TemplateContext'
import Modal from "./tailwindComponents/Modal"

interface IColor {
    name: string
    color: string
}

const SelectPalette = () => {

    const [templateData, setTemplateData] = useContext(TemplateContext)
    const [showColorPicker, setShowColorPicker] = useState<boolean>(false)
    const [currentSelectedColor, setCurrentSelectedColor] = useState<IColor | null>(null)

    const handleShowColorPicker = (Color: IColor) => {
        setShowColorPicker(true)
        setCurrentSelectedColor(Color)
    }

    const handleCloseColorPicker = () => {
        setShowColorPicker(false)
    }

    const handleColorChange = (color: string) => {
        setTemplateData(prev => {
            const index = prev.palette.findIndex(item => item.name === currentSelectedColor?.name)
            prev.palette[index].color = color
            setCurrentSelectedColor({ ...currentSelectedColor, color: color })
        })
    }

    return (
        <div>
            {showColorPicker && (
                <Modal
                    currentSelectedColor={currentSelectedColor.color}
                    handleColorChange={handleColorChange}
                    handleCloseColorPicker={handleCloseColorPicker}
                />
            )}
            <div className="h-20 flex flex-wrap justify-center content-center bg-green-800">
                <p className="text-xl text-white">Select palette for your template</p>
            </div>
            {templateData.palette.map((item, index) => (
                <div key={index} className="h-10 mt-5 mb-5 flex flex-wrap justify-center content-center" >
                    <p className="w-48">{item.name}</p> <div
                        className="w-10 h-10"
                        style={{ backgroundColor: item.color }}
                        onClick={() => handleShowColorPicker(item)}
                    ></div>
                </div>
            ))}
            <div className="flex justify-center">
                <NavLink
                    className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                    to={ROUTE_NAMES.design_tool}
                >
                    Proceed
                </NavLink>
            </div>
        </div>
    )
}

export default SelectPalette
