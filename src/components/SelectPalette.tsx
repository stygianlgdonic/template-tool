import React, { useState, useContext } from 'react'
// import useTemplateData from '../hooks/useTemplateData'
import { SketchPicker } from 'react-color'
import { NavLink } from 'react-router-dom'
import { ROUTE_NAMES } from '../routes/route_names'
import { TemplateContext } from '../contexts/TemplateContext'

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

    const handleColorChange = (colorObj: any) => {
        setTemplateData(prev => {
            const index = prev.palette.findIndex(item => item.name === currentSelectedColor?.name)
            prev.palette[index].color = colorObj.hex
            setCurrentSelectedColor({ ...currentSelectedColor, color: colorObj.hex })
        })
    }

    return (
        <>
            <div>
                <b>Select palette for your template</b>
            </div>
            {templateData.palette.map((item, index) => (
                <div key={index} >
                    {item.name} : <div
                        style={{ backgroundColor: item.color, width: '30px', height: '30px' }}
                        onClick={() => handleShowColorPicker(item)}
                    ></div>
                </div>
            ))}
            <div style={{ display: showColorPicker ? "" : "none" }}>
                <SketchPicker
                    color={currentSelectedColor?.color}
                    onChange={handleColorChange}
                />
                <br />
                <button onClick={handleCloseColorPicker}>Close</button>
            </div>
            <div style={{ marginTop: '50px' }}>
                <NavLink to={ROUTE_NAMES.design_tool}>Proceed</NavLink>
            </div>
        </>
    )
}

export default SelectPalette
