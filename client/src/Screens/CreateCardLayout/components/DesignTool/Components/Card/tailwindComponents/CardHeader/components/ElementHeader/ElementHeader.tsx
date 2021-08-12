import React, { useContext, useState } from "react";
import { Range } from "react-range";
import { DesignToolContext } from "../../../../../../../../../../contexts/DesignTool/DesignToolContext";
import SubNavbarActions from "../../../../../../../../../../contexts/DesignTool/SubnavbarActions";
import CardElementsFunctions from "../../../../../../../../../../Hooks/CardElementsFunctions";
const image = require("./../../../../../../../../../../assets/images/opacity.png");

interface Props {
    handleDeleteClick: any
}

const ElementHeader: React.FC<Props> = ({ handleDeleteClick }): JSX.Element => {
    // const [openstyle, setOpenstyle] = React.useState(false);
    const [openstyle, setOpenstyle] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [openDropDown, setopenDropDown] = useState(false);
    const [values, setValues] = React.useState<any>([100])
    // !!state?false:true;
    const [showeModal, seteShowModal] = React.useState(false);
    const { handleBorderWidthChange, handleStrokeColor, handleTextOpacity, getSelectedElementData } = CardElementsFunctions()
    // !!state?false:true;

    const { selectShapeColorSubNav } = SubNavbarActions()
    const selectedelement = getSelectedElementData()

    return (
        <div className="flex  justify-between " style={{ width: '110.5vh', }}>
            <div className="flex pl-12">
                <button className="w-10 h-10 rounded-md hover:ring-2 ring-indigo600" style={{ backgroundColor: selectedelement?.fill }} onClick={selectShapeColorSubNav}></button>
                <div className="ml-10 ">
                    <div
                        className="relative mt-1"
                        onClick={() => setopenDropDown(!!openDropDown ? false : true)}
                    >
                        <button
                            type="button"
                            className="relative w-full text-left flex flex-row border-2  items-center rounded-lg shadow-sm h-9  px-4 border-bordercolor   focus:ring-2  focus:ring-border focus:ring-indigo600 focus:border-gray300 sm:text-sm"
                            aria-haspopup="listbox"
                            aria-expanded="true"
                            aria-labelledby="listbox-label"
                        >
                            <p className="mr-3 text-elementColor"> Select Stroke</p>
                            <svg className="" width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.234315 0.834352C0.546734 0.521932 1.05327 0.521932 1.36569 0.834352L4 3.46867L6.63431 0.834352C6.94673 0.521932 7.45327 0.521932 7.76568 0.834352C8.0781 1.14677 8.0781 1.6533 7.76568 1.96572L4.56569 5.16573C4.25327 5.47815 3.74673 5.47815 3.43431 5.16573L0.234315 1.96572C-0.0781049 1.6533 -0.0781049 1.14677 0.234315 0.834352Z" fill="#9CA3AF" />
                            </svg>


                        </button>

                        <ul
                            className="absolute z-10 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg w-52  ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                            role="listbox"
                            aria-labelledby="listbox-label"
                            aria-activedescendant="listbox-option-3"
                            style={{ display: openDropDown ? "" : "none" }}
                        >
                            <li
                                className="relative w-full py-2 text-gray-900 cursor-default select-none "
                                id="listbox-option-0"
                                role="option"
                            >
                                <div className="flex mt-2 mb-3 px-2">
                                    <button className="flex w-full border border-bordercolor  rounded justify-center hover:bg-lightindigo" onClick={() => handleBorderWidthChange(0)}>
                                        No Stroke
                                    </button>
                                </div>
                                <div className="border-b border-bordercolor w-full"></div>
                                <div className="flex mb-1 px-2 mt-2">
                                    <button className="flex w-full hover:ring-2  ring-indigo600 items-center" onClick={() => handleBorderWidthChange(15)}>
                                        <span className="block w-full h-4 font-normal truncate  mx-1  bg-elementColor"></span>
                                    </button><p className="ml-2">4</p>
                                </div>

                                <div className="flex px-2">
                                    <button className="flex w-full hover:ring-2  ring-indigo600 items-center" onClick={() => handleBorderWidthChange(10)}>
                                        <span className="block w-full h-2 font-normal truncate  mx-1  bg-elementColor"></span>
                                    </button><p className="ml-2">2</p>
                                </div>
                                <div className="flex px-2 ">
                                    <button className="flex w-full hover:ring-2  ring-indigo600 items-center" onClick={() => handleBorderWidthChange(5)}>
                                        <span className="block w-full h-1 font-normal truncate  mx-1  bg-elementColor"></span>
                                    </button><p className="ml-2">1</p>
                                </div>


                                <div className="border-b border-bordercolor w-full"></div>
                                <div className="grid grid-cols-4  mt-4 mx-3 mb-2">
                                    <button className="mb-1"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 13V27M27 20L13 20" stroke="#4338CA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <rect x="1" y="1" width="38" height="38" rx="5" stroke="url(#paint0_linear)" stroke-width="2" />
                                        <defs>
                                            <linearGradient id="paint0_linear" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FA7D7D" />
                                                <stop offset="0.5" stop-color="#B7EF6F" />
                                                <stop offset="1" stop-color="#BE6FEF" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    </button>
                                    <button className="w-10 h-10 rounded-md bg-indigo600 hover:ring-2 ring-bluish" onClick={() => handleStrokeColor("#4F46E5")} ></button>
                                    <button className="w-10 h-10 rounded-md bg-fuschia hover:ring-2 ring-bluish" onClick={() => handleStrokeColor("#EF5DA8")}></button>
                                    <button className="w-10 h-10 rounded-md bg-greenish hover:ring-2 ring-bluish" onClick={() => handleStrokeColor("#5DEFC3")}></button>
                                    <button className="w-10 h-10 rounded-md bg-yellowish hover:ring-2 ring-bluish" onClick={() => handleStrokeColor("#EEA146")}></button>
                                    <button className="w-10 h-10 rounded-md bg-redish hover:ring-2 ring-bluish" onClick={() => handleStrokeColor("#EE4646")}></button>
                                    <button className="w-10 h-10 rounded-md bg-gray900 hover:ring-2 ring-bluish" onClick={() => handleStrokeColor("#111827")}></button>
                                    <button className="w-10 h-10 rounded-md bg-indigo600 hover:ring-2 ring-bluish" onClick={() => handleStrokeColor("#4F46E5")} ></button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-row  items-center  justify-between mt-1" >

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
                <div className="py-4  ml-4 mr-2 border-r-2 border-bordercolor"></div>
                <div >
                    <button className=" flex bg-transparent hover:bg-deletecolor rounded-md w-10 h-9 items-center justify-center" onClick={handleDeleteClick}>
                        <svg width="20" height="23" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.1875 4.56858L12.4828 12.9017C12.4221 13.6199 11.7145 14.1764 10.8619 14.1764H4.13807C3.28553 14.1764 2.57794 13.6199 2.5172 12.9017L1.8125 4.56858M5.875 7.31368V11.4313M9.125 7.31368V11.4313M9.9375 4.56858V2.50976C9.9375 2.13074 9.57373 1.82349 9.125 1.82349H5.875C5.42627 1.82349 5.0625 2.13074 5.0625 2.50976V4.56858M1 4.56858H14" stroke="#B91C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>


                    </button>

                </div>
                {/* <div>

                    <button className="ml-6" onClick={() => seteShowModal(true)}>
                        <img src={image} />
                    </button>
                    <div>
                        {showeModal ? (
                            <>

                                <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                                        <div onClick={() => seteShowModal(false)} className="fixed inset-0  transition-opacity" aria-hidden="true"></div>



                                        <div className=" absolute inline-block align-bottom w-40  items-center bg-white rounded-lg px-4 justify-center pt-5 pb-4 overflow-hidden shadow-xl transform transition-all top-28 mt-2 self-end right-14 ">

                                            <div className="w-full flex gap-4 justify-center ">

                                                <Range
                                                    step={1}
                                                    min={0}
                                                    max={75}
                                                    values={values}
                                                    onChange={(values) => {
                                                        setValues(values)
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
                                                            className="w-5 h-5 transform translate-x-10 bg-indigo-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </>
                        ) : null}
                    </div>
                </div>
                <div>

                    <div className="py-4 ml-6 border-r-2 border-bordercolor"></div>
                    <button className="bg-green w"><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1875 4.56858L12.4828 12.9017C12.4221 13.6199 11.7145 14.1764 10.8619 14.1764H4.13807C3.28553 14.1764 2.57794 13.6199 2.5172 12.9017L1.8125 4.56858M5.875 7.31368V11.4313M9.125 7.31368V11.4313M9.9375 4.56858V2.50976C9.9375 2.13074 9.57373 1.82349 9.125 1.82349H5.875C5.42627 1.82349 5.0625 2.13074 5.0625 2.50976V4.56858M1 4.56858H14" stroke="#B91C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </button>
                </div> */}
            </div>
        </div>
    );
};
export default ElementHeader;
