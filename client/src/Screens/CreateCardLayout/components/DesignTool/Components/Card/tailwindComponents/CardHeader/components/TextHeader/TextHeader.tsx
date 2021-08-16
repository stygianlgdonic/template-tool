import React, { useContext, useState } from "react";
import { Range } from "react-range";
import { DesignToolContext } from "../../../../../../../../../../contexts/DesignTool/DesignToolContext";
import SubNavbarActions from "../../../../../../../../../../contexts/DesignTool/SubnavbarActions";
import CardElementsFunctions from "../../../../../../../../../../Hooks/CardElementsFunctions";
import { fontSizeArray } from "../../../../../../../../../../utils/defaults";
const image = require("./../../../../../../../../../../assets/images/opacity.png");

type textFontSizeType = "Header" | "Sub header" | "body text"

interface Props {
    handleDeleteClick: any
}

const TextHeader: React.FC<Props> = ({ handleDeleteClick }): JSX.Element => {
    const [showModal, setShowModal] = React.useState(false);
    const [showeModal, seteShowModal] = React.useState(false);
    const [values, setValues] = React.useState<any>([100])
    const { handleFontStyle, handleTextAlign, handleTextOpacity, handleDeleteSelectedItem, handleChangeFontSize } = CardElementsFunctions()
    const { selectTextToolSubNav, selectEffectToolSubNav, selectFontColorToolSubNav } = SubNavbarActions()
    const [openDropDown, setopenDropDown] = useState(false);
    const { cardData, selectedId, setSelectedId } = useContext(DesignToolContext)

    const selectedText = cardData.elements.find(item => item.id === selectedId)

    return (
        <div className="flex flex-row items-center justify-center gap-4 px-6 h-full ">
            <div className="flex items-center">
                <div className="relative inline-block text-left  ">
                    <div
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                    >
                        <button
                            type="button"
                            className="inline-flex  w-full px-4 py-2 text-sm font-medium bg-white border rounded-md shadow-sm border-bordercolor text-gray900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                            id="menu-button"
                            aria-expanded="true"
                            aria-haspopup="true"
                            onClick={selectTextToolSubNav}
                            style={{ fontFamily: selectedText?.fontFamily }}
                        >
                            {selectedText?.fontFamily}
                        </button>
                    </div>
                </div>
            </div>
            <div className="z-50 flex items-center">
                <div
                    className="relative mt-1"
                    onClick={() => setopenDropDown(!!openDropDown ? false : true)}
                >
                    <button
                        type="button"
                        className="relative flex flex-row  items-center  py-2 px-4 text-left border-2 rounded-lg shadow-sm  h-10 border-bordercolor hover:bg-lightindigo focus:outline-none focus:ring-border  sm:text-sm"
                        aria-haspopup="listbox"
                        aria-expanded="true"
                        aria-labelledby="listbox-label"
                    >
                        {!!selectedText ? fontSizeArray.find(item => item.size === selectedText.fontSize)?.name : "Heading"}
                    </button>
                    <ul
                        className="absolute z-10 py-1 mt-1 overflow-auto w-32 text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        role="listbox"
                        aria-labelledby="listbox-label"
                        aria-activedescendant="listbox-option-3"
                        style={{ display: openDropDown ? "" : "none" }}
                    >
                        <li
                            className="relative  py-2  mr-8 text-gray-900  w-32 cursor-default select-none "
                            id="listbox-option-0"
                            role="option"
                        >
                            {fontSizeArray.map((item, index) => (
                                <div key={index} className="flex mb-2">
                                    <button className="flex w-full mx-1 px-4 py-1 rounded-md hover:bg-lightindigo" onClick={() => handleChangeFontSize(item.name as textFontSizeType)}>
                                        {item.name}
                                    </button>
                                </div>
                            ))}


                        </li>
                    </ul>
                </div>


                <div>
                    <div>
                        <button className="ml-10 text-lg font-bold text-black" onClick={selectFontColorToolSubNav}>

                            <svg className="mt-2" width="30" height="30" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.392 27L13.9943 22.3807H20.8125L22.4062 27H25.2017L18.9205 9.54545H15.8778L9.59659 27H12.392ZM14.7614 20.1648L17.3352 12.7159H17.4716L20.0455 20.1648H14.7614Z" fill="black" />
                                <g filter="url(#filter0_dd)">
                                    <rect x="3" y="30" width="30" height="4" rx="2" fill="#F9FAFB" />
                                </g>
                                <rect x="3" y="30" width="17" height="4" rx="2" fill="#6366F1" />
                                <defs>
                                    <filter id="filter0_dd" x="0" y="28" width="36" height="10" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="1" />
                                        <feGaussianBlur stdDeviation="1" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="1" />
                                        <feGaussianBlur stdDeviation="1.5" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                        <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="">
                    <button className="ml-4 text-lg font-bold text-black w-10 h-10 hover:bg-lightindigo rounded-md" onClick={() => handleFontStyle("bold")}>B</button>
                </div>
                <div>
                    <button className="ml-4 text-lg italic font-bold text-black w-10 h-10 hover:bg-lightindigo rounded-md" onClick={() => handleFontStyle("italic")}>
                        I
                    </button>
                </div>
                <div className="py-4 ml-6 border-r-2 border-bordercolor"></div>
                <div className="relative">


                    <button className="ml-6  rounded-md hover:bg-lightindigo h-10 w-10 pl-2  active:border-2 border-indigo600" onClick={() => setShowModal(true)}>
                        <svg
                            width="23"
                            height="18"
                            viewBox="0 0 23 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 1H22M1 9H11.5M1 17H22"
                                stroke="#4B5563"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>

                    <div className=" absolute">
                        {showModal ? (
                            <>

                                <div className="z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                                    <div className="flex items-end justify-center min-h-screen px-4 pb-20  text-center sm:block sm:p-0">

                                        <div onClick={() => setShowModal(false)} className="fixed inset-0  transition-opacity" aria-hidden="true"></div>




                                        <div className=" border-2 border-bordercolor inline-block align-bottom w-40 bg-white rounded-lg px-4 justify-center overflow-hidden shadow-md transform transition-all top-0 mt-2 self-end right-0 ">

                                            <div className="w-full flex gap-4 justify-center ">


                                                <button className="hover:bg-lightindigo px-2 my-2 h-10 rounded-md w-10 flex  items-center justify-center" onClick={() => handleTextAlign("left")}><svg className=" " width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1H17M1 7H17M1 13H8" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                </button>
                                                <button className="hover:bg-lightindigo px-2 my-2 h-10 rounded-md w-10 flex items-center justify-center" onClick={() => handleTextAlign("center")}><svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1H17M1 9H17" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                                </button>
                                                <button className="hover:bg-lightindigo px-2 my-2 h-10 rounded-md w-10 flex items-center justify-center" onClick={() => handleTextAlign("right")}>
                                                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 1H17M1 7H17M10 13H17" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </>
                        ) : null}
                    </div>
                </div>
                <div className="py-4 ml-6 border-r-2 border-bordercolor"></div>
                <div className="ml-6 text-lg italic font-bold text-black hover:bg-lightindigo px-3 py-1 rounded hover:ring-2 ring-indigo600 ">
                    <button onClick={selectEffectToolSubNav} >Effects</button>

                </div>

                <div className="py-4 ml-6 border-r-2 border-bordercolor"></div>
                <div className=" relative">
                    <button className={showeModal ? "ml-6  hover:bg-lightindigo h-10 w-10 px-1 rounded-md border-2 border-indigo600 " : "ml-6  hover:bg-lightindigo h-10 w-10 pl-2 rounded-md  "} onClick={() => { seteShowModal(true); setopenDropDown(false) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M3 2h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"></path><path d="M11 2h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z" opacity=".45"></path><path d="M19 2h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z" opacity=".15"></path><path d="M7 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z" opacity=".7"></path><path d="M15 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z" opacity=".3"></path></g></svg>
                    </button>
                    <div className=" absolute">
                        {showeModal ? (
                            <>

                                <div className=" z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                                    <div className=" flex items-end justify-center  min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                                        <div onClick={() => seteShowModal(false)} className="fixed inset-0  transition-opacity" aria-hidden="true"></div>



                                        <div className="border border-bordercolor  inline-block align-bottom w-40  items-center bg-white rounded-lg px-4 justify-center overflow-hidden shadow-md transform transition-all top-0 right-0 mt-2 " >

                                            <div className="w-full flex gap-4 justify-center ">


                                                <Range
                                                    step={1}
                                                    min={1}
                                                    max={100}
                                                    values={values}
                                                    onChange={(values) => {
                                                        setValues(values);
                                                        handleTextOpacity(values as any / 100)
                                                    }}
                                                    renderTrack={({ props, children }) => (
                                                        <div
                                                            {...props}
                                                            className="w-full h-3 pr-2 my-4 bg-gray-200 rounded-md"
                                                        >
                                                            {children}
                                                        </div>
                                                    )}
                                                    renderThumb={({ props }) => (
                                                        <div
                                                            {...props}
                                                            className="w-4 h-4 transform translate-x-10 bg-indigo600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                        />

                                                    )}
                                                />
                                                <input className="ml-3 w-9 focus:outline-none" min="0" max="100" value={values} onChange={(e) => {
                                                    if (!(parseFloat(e.target.value) > 100)) {
                                                        setValues([e.target.value]);
                                                        handleTextOpacity(parseFloat(e.target.value) / 100)
                                                    }

                                                }}></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </>
                        ) : null}
                    </div>
                </div>
                <div className="py-4 ml-4 border-r-2 border-bordercolor"></div>
                <div >
                    <button className=" flex bg-transparent hover:bg-deletecolor rounded-md w-10 h-9 items-center justify-center ml-3" onClick={handleDeleteClick}>
                        <svg width="20" height="23" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.1875 4.56858L12.4828 12.9017C12.4221 13.6199 11.7145 14.1764 10.8619 14.1764H4.13807C3.28553 14.1764 2.57794 13.6199 2.5172 12.9017L1.8125 4.56858M5.875 7.31368V11.4313M9.125 7.31368V11.4313M9.9375 4.56858V2.50976C9.9375 2.13074 9.57373 1.82349 9.125 1.82349H5.875C5.42627 1.82349 5.0625 2.13074 5.0625 2.50976V4.56858M1 4.56858H14" stroke="#B91C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>

                </div>
            </div>
        </div >
    );
};
export default TextHeader;
