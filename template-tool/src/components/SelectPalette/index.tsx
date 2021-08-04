import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTE_NAMES } from '../../routes/route_names'
import { TemplateContext } from '../../contexts/TemplateContext'
import PaletteColorSelect from "../tailwindComponents/PaletteColorSelect"

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
        <div className="min-w-max">
            {showColorPicker && (
                <PaletteColorSelect
                    currentSelectedColor={currentSelectedColor.color}
                    handleColorChange={handleColorChange}
                    handleCloseColorPicker={handleCloseColorPicker}
                />
            )}
            <div className="h-20 mb-5 flex flex-wrap justify-evenly content-center bg-gray900">
                <NavLink
                    to={ROUTE_NAMES.home}
                    className="text-white font-semibold py-2 px-4 border border-white-500 rounded" >
                    Back to home
                </NavLink>
                <p className="text-xl text-white">Select Palette</p>
                <div></div>
            </div>            {templateData.palette.map((item, index) => (
                <div key={index} className="h-10 mt-5 mb-5 flex flex-wrap justify-center content-center" >
                    <p className="w-48">{item.name}</p> <div
                        className="w-10 h-10 border border-black"
                        style={{ backgroundColor: item.color }}
                        onClick={() => handleShowColorPicker(item)}
                    ></div>
                </div>
            ))}
            <div className="flex justify-center">
                <NavLink
                    className="inline-flex items-center h-8 px-4 m-2 text-sm text-gray300 hover:text-gray900 transition-colors duration-150 bg-gray900 rounded-lg focus:shadow-outline hover:bg-bluish"
                    to={"/tool"}
                >
                    Proceed
                </NavLink>
            </div>
        </div>
    )
}

export default SelectPalette
