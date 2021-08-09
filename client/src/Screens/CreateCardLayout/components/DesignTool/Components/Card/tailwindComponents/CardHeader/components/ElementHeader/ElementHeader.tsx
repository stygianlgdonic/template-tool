import React, { useContext, useState } from "react";
import { Range } from "react-range";
import { DesignToolContext } from "../../../../../../../../../../contexts/DesignToolContext";
import CardElementsFunctions from "../../../../../../../../../../Hooks/CardElementsFunctions";
const image = require("./../../../../../../../../../../assets/images/opacity.png");
const ElementHeader: React.FC = (): JSX.Element => {
    // const [openstyle, setOpenstyle] = React.useState(false);
    // const [open, setOpen] = React.useState(false);
    const [openstyle, setOpenstyle] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [openDropDown, setopenDropDown] = useState(false);
    const [values, setValues] = React.useState([0.01])
    // !!state?false:true;
    const [showeModal, seteShowModal] = React.useState(false);
    const {
        designToolnavigator, setDesignToolnavigator,
        designHeadernavigator, setDesignHeadernavigator,
        selectedId, setSelectedId,
        cardData, setCardData,
        cardHistory: { goForward, goBack, stepNum, history }
    } = useContext(DesignToolContext)
    const { handleBorderWidthChange, handleStrokeColor, handleDeleteSelectedItem, handleTextOpacity } = CardElementsFunctions()
    // !!state?false:true;
    return (
        <div className="flex  justify-start  " >
            <div className="flex pl-12">
                <button className="w-10 h-10 rounded-md bg-fuschia" onClick={() => setDesignToolnavigator("fonttool")}></button>
                <div className="ml-10 ">
                    <div
                        className="relative mt-1"
                        onClick={() => setopenDropDown(!!openDropDown ? false : true)}
                    >
                        <button
                            type="button"
                            className="relative w-32 py-2 pl-3 pr-10 text-left border-2 rounded-lg shadow-sm cursor-default h-9 border-bordercolor focus:outline-none focus:ring-border focus:ring-gray300 focus:border-gray300 sm:text-sm"
                            aria-haspopup="listbox"
                            aria-expanded="true"
                            aria-labelledby="listbox-label"
                        >
                            <span className="block truncate border-4 border-elementColor bg-elementColor"></span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <svg
                                    width="8"
                                    height="6"
                                    viewBox="0 0 8 6"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M0.234315 0.834291C0.546734 0.521871 1.05327 0.521871 1.36569 0.834291L4 3.46861L6.63431 0.834291C6.94673 0.521871 7.45327 0.521871 7.76568 0.834291C8.0781 1.14671 8.0781 1.65324 7.76568 1.96566L4.56569 5.16567C4.25327 5.47809 3.74673 5.47809 3.43431 5.16567L0.234315 1.96566C-0.0781049 1.65324 -0.0781049 1.14671 0.234315 0.834291Z"
                                        fill="#9CA3AF"
                                    />
                                </svg>
                            </span>
                        </button>
                        <ul
                            className="absolute z-10 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg w-52 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                            role="listbox"
                            aria-labelledby="listbox-label"
                            aria-activedescendant="listbox-option-3"
                            style={{ display: openDropDown ? "" : "none" }}
                        >
                            <li
                                className="relative w-full py-2 pl-8 pr-4 text-gray-900 cursor-default select-none "
                                id="listbox-option-0"
                                role="option"
                            >
                                <div className="flex mb-2">
                                    <button className="flex w-full" onClick={() => handleBorderWidthChange(15)}>
                                        <span className="block w-full h-4 truncate border-4 border-elementColor bg-elementColor"></span>
                                        <span className="ml-2">4</span>
                                    </button>
                                </div>
                                <div className="flex mb-2 ">
                                    <button className="flex w-full" onClick={() => handleBorderWidthChange(10)}>
                                        <span className="block w-full h-2 mt-2 font-normal truncate border-2 border-elementColor bg-elementColor"></span>
                                        <span className="ml-2 ">2</span>
                                    </button>
                                </div>
                                <div className="flex ">
                                    <button className="flex w-full" onClick={() => handleBorderWidthChange(5)}>
                                        <span className="block w-full h-1 mt-2 font-normal truncate border-2 border-elementColor bg-elementColor"></span>
                                        <span className="ml-2">1</span>
                                    </button>
                                </div>
                                <div className=""></div>
                                <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-3 ">
                                    <button className="w-10 h-10 rounded-md bg-indigo600" onClick={() => handleStrokeColor("#4F46E5")} ></button>
                                    <button className="w-10 h-10 rounded-md bg-fuschia" onClick={() => handleStrokeColor("#EF5DA8")}></button>
                                    <button className="w-10 h-10 rounded-md bg-greenish" onClick={() => handleStrokeColor("#5DEFC3")}></button>
                                    <button className="w-10 h-10 rounded-md bg-yellowish" onClick={() => handleStrokeColor("#EEA146")}></button>
                                    <button className="w-10 h-10 rounded-md bg-redish" onClick={() => handleStrokeColor("#EE4646")}></button>
                                    <button className="w-10 h-10 rounded-md bg-gray900" onClick={() => handleStrokeColor("#111827")}></button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-row  items-center  mt-1" style={{ marginLeft: '480px' }}>

                <div>
                    <button className=" mt-2 relative " onClick={() => seteShowModal(true)}>
                        <img src={image} />
                    </button>
                </div>
                <div>
                    {showeModal ? (
                        <>

                            <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                                    <div onClick={() => seteShowModal(false)} className="fixed inset-0  transition-opacity" aria-hidden="true"></div>



                                    <div className="absolute flex align-bottom w-40 h-12 items-center bg-white rounded-lg px-4 justify-center pt-3 pb-4 overflow-hidden shadow-xl top-32 transform transition-all right-16  self-end">

                                        <div className="w-full flex gap-4 justify-center ">

                                            <Range
                                                step={0.01}
                                                min={0.01}
                                                max={1}
                                                values={values}
                                                onChange={(values) => {
                                                    setValues(values);
                                                    handleTextOpacity(values)
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
                <div className="py-4  ml-4 mr-2 border-r-2 border-bordercolor"></div>
                <div >
                    <button className=" flex bg-transparent hover:bg-deletecolor rounded-md w-10 h-9 items-center justify-center" onClick={() => handleDeleteSelectedItem()}>
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
