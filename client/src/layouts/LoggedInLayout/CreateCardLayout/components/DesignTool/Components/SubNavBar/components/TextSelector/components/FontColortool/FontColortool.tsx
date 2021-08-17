import { useImmerState } from '@shrugsy/use-immer-state';
import React, { useEffect, useState } from 'react';
import CardElementsFunctions from '../../../../../../../../../../../Hooks/CardElementsFunctions';
import CustomColorPicker from '../../../../../CustomColorPicker';
const image = require('./../../../../../../../../../../assets/images/custom.png');
import "./../../../ElementSelector/components/Stickers/styles.css";
const FontStyletool: React.FC = (): JSX.Element => {

    const [colorQuery, setColorQuery] = useState<string>("")
    const [colorsArray, setColorsArray] = useState([])
    const [documentColors, setDocumentColors] = useImmerState([])
    const [isOpenColorPicker, setIsOpenColorPicker] = useState(false)

    const handleColorQueryChange = (e) => {
        setColorQuery(e.target.value)
    }
    const { handleFill, getDocumentColors } = CardElementsFunctions()

    useEffect(() => {
        setDocumentColors(getDocumentColors())
    }, [])

    useEffect(() => {

        if (!colorQuery) return

        const fetchURl = colorQuery.charAt(0) !== "#" ?
            `https://api.color.pizza/v1/names/?name=${colorQuery}&goodnamesonly=true` :
            `https://api.color.pizza/v1/?values=${colorQuery.substring(1)}&goodnamesonly=true`

        fetch(fetchURl)
            .then(response => response.json())
            .then(data => {

                const newColors = data.colors.map(item => item.hex)
                newColors.splice(6)

                setColorsArray(newColors)
            }).catch(error => console.log("No colors found!"))
    }, [colorQuery])

    const openColorPicker = () => {
        setIsOpenColorPicker(true)
    }

    const closeColorPicker = () => {
        setIsOpenColorPicker(false)
    }

    return (

        <div className="h-full flex flex-col w-full px-6 ">

            <div className=" flex justify-center items-center  w-full mt-6">

                <div className="flex h-14 rounded-md border-bordercolor border justify-center items-center w-full z-50">
                    <button>
                        <span className="w-auto flex justify-end items-center text-grey text-sm p-3">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6Z" fill="#9CA3AF" />
                            </svg>

                        </span>
                    </button>
                    <input
                        onChange={handleColorQueryChange}
                        className="w-full rounded text-sm text-gray95 outline-none h-10 z-0 " type="text" placeholder="Try “blue” or “#43345”" />
                </div>
            </div>
            <div className={!!colorsArray.length ? "" : "hidden"} >
                <h1 className="text-md text-gray40 mt-4" >Search results</h1>
                <div className=" mt-4 flex flex-row items-center gap-3">
                    {colorsArray.map(item =>
                        <button style={{ backgroundColor: item }} className="h-10 w-10 rounded-md" onClick={() => handleFill(item)}></button>
                    )}
                </div>
            </div>
            <div className="" >
                <h1 className="text-md text-gray40 mt-4" >Document Colors</h1>
                <div className=" mt-4 grid grid-cols-8 items-center flex-shrink-0 overflow-x-auto no-scrollbar mb-2 gap-2 justify-between">
                    <button>
                        <img onClick={openColorPicker} src={image} className="w-10 h-10 mb-4 flex-shrink-0" />
                    </button>
                    {documentColors.map(item =>
                        <button style={{ backgroundColor: item }} className="h-10 w-10 rounded-md border mb-4 border-gray-500" onClick={() => handleFill(item)}></button>
                    )}

                </div>
                <div className={isOpenColorPicker ? "" : "hidden"}>
                    <CustomColorPicker
                        closeModal={closeColorPicker}
                    />
                </div>
            </div>
            <div className="border-b-2 border-bordercolor mt-6" ></div>
            <div>
                <button className="text-md text-black mt-4" ><span className="text-2xl mr-6">+</span>Add your brand colors in Brand Kit</button>
            </div>

            <div className="border-b-2 border-bordercolor mt-4" ></div>
            <div>
                <h1 className="text-md text-gray40 mt-4" >Default Colors</h1>
                <div className=" mt-4 flex flex-col items-center ">
                    <div className=" mt-4 flex flex-row items-center gap-3 w-full">

                        <button className="bg-gray95 h-10 w-10 rounded-md" onClick={() => handleFill("#6B7280")} ></button>
                        <button className="bg-indigo600 h-10 w-10 rounded-md" onClick={() => handleFill("#4F46E5")} ></button>
                        <button className="bg-fuschia h-10 w-10 rounded-md" onClick={() => handleFill("#EF5DA8")} ></button>
                        <button className="bg-greenish h-10 w-10 rounded-md" onClick={() => handleFill("#5DEFC3")} ></button>
                        <button className="bg-redish h-10 w-10 rounded-md" onClick={() => handleFill("#EE4646")} ></button>
                        <button className="bg-yellowish h-10 w-10 rounded-md" onClick={() => handleFill("#EEA146")} ></button>
                    </div>
                    <div className=" mt-4 flex flex-row items-center gap-3  w-full">

                        <button className="bg-canvasbgcolor h-10 w-10 rounded-md" onClick={() => handleFill("#f2f2f2")} ></button>
                        <button className="bg-gray95 h-10 w-10 rounded-md" onClick={() => handleFill("#6B7280")} ></button>
                        <button className="bg-lightindigo h-10 w-10 rounded-md" onClick={() => handleFill("#E0E7FF")} ></button>
                        <button className="bg-fuschia h-10 w-10 rounded-md" onClick={() => handleFill("#EF5DA8")} ></button>
                        <button className="bg-greenish h-10 w-10 rounded-md" onClick={() => handleFill("#5DEFC3")} ></button>
                        <button className="bg-yellowish h-10 w-10 rounded-md" onClick={() => handleFill("#EEA146")} ></button>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default FontStyletool;
