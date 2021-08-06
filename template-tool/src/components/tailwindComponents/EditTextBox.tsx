import React, { useEffect, useState } from 'react'
import { SketchPicker } from 'react-color'
import { googleFontsList } from '../../utils/defaults'

interface Props {
    selectedId: string
    variationIndex: number
    templateData: any
    setTemplateData: any
    handleCloseEditTextModal: any
}

const EditTextBox: React.FC<Props> = ({ selectedId, variationIndex, templateData, setTemplateData, handleCloseEditTextModal }) => {

    const [inputValue, setInputValue] = useState<string>("")
    const [fontSize, setFontSize] = useState<number>(20)
    const [fontStyle, setFontStyle] = useState<string>("normal")
    const [fontFamily, setFontFamily] = useState(googleFontsList[0]);
    const [textAlign, setTextAlign] = useState("left")
    const [fontColor, setFontColor] = useState("#000000")

    useEffect(() => {
        if (selectedId?.split("_")[0] === "textBoxes") {
            const index = templateData.variations[variationIndex].elements.findIndex(item => item.id === selectedId)
            setInputValue(templateData.variations[variationIndex].elements[index].text)
            setFontSize(templateData.variations[variationIndex].elements[index].fontSize)
            setFontStyle(templateData.variations[variationIndex].elements[index].fontStyle)
            setFontFamily(templateData.variations[variationIndex].elements[index].fontFamily)
            setTextAlign(templateData.variations[variationIndex].elements[index].align)
            setFontColor(templateData.variations[variationIndex].elements[index].fill)
        }
    }, [selectedId])

    const handleSave = () => {
        setTemplateData(prev => {
            const index = prev.variations[variationIndex].elements.findIndex(item => item.id === selectedId)
            prev.variations[variationIndex].elements[index].text = inputValue
            prev.variations[variationIndex].elements[index].fontSize = fontSize
            prev.variations[variationIndex].elements[index].fontStyle = fontStyle
            prev.variations[variationIndex].elements[index].fontFamily = fontFamily
            prev.variations[variationIndex].elements[index].align = textAlign
            prev.variations[variationIndex].elements[index].fill = fontColor
        })
        handleCloseEditTextModal()
    }

    return (
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="">
                    <p>Font Size:</p>
                    <input className="border mb-5" type="number" value={fontSize} onChange={e => setFontSize(parseInt(e.target.value))} />
                    <p>Select Font style:</p>
                    <select className="border mb-5" name="font-style" onChange={e => setFontStyle(e.target.value)}>
                        <option value="normal">normal</option>
                        <option value="bold">bold</option>
                        <option value="italic">italic</option>
                        <option value="italic bold">italic bold</option>
                    </select>
                    <p>Select Text Alignment:</p>
                    <select className="border mb-5" name="text-align" onChange={e => setTextAlign(e.target.value)}>
                        <option value="left">left</option>
                        <option value="center">center</option>
                        <option value="right">right</option>
                    </select>
                    <p>Select font family:</p>
                    <select
                        value={fontFamily}
                        style={{ fontFamily: fontFamily }}
                        onChange={e => setFontFamily(e.target.value)}
                        className="border mb-5"
                    >
                        {googleFontsList.map((val, index) => {
                            return (
                                <option
                                    className="bg-white text-black"
                                    style={{ fontFamily: val }}
                                    key={index}
                                    selected={val === fontFamily}
                                    value={val}
                                >
                                    {val}
                                </option>
                            );
                        })}
                    </select>
                    <p>Text color:</p>
                    <SketchPicker
                        width="150px"
                        color={fontColor}
                        onChange={(color) => setFontColor(color.hex)}
                    />
                </div>
                <div className="mt-5">
                    <textarea
                        className="border h-40 w-full"
                        style={{
                            fontFamily: fontFamily,
                            fontSize: fontSize,
                            fontStyle: fontStyle,
                            textAlign: textAlign as "center",
                            color: fontColor
                        }}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
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
    )
}

export default EditTextBox
