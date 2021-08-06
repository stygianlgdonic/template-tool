import React, { useContext, useState } from "react";
import { DesignToolContext } from "../../../../../../../../../../contexts/DesignToolContext";
const image = require("./../../../../../../../../../../assets/images/opacity.png");
const ElementHeader: React.FC = (): JSX.Element => {
    // const [openstyle, setOpenstyle] = React.useState(false);
    // const [open, setOpen] = React.useState(false);
    const [openstyle, setOpenstyle] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [openDropDown, setopenDropDown] = useState(false);
    // !!state?false:true;
    const {
        designToolnavigator, setDesignToolnavigator,
        designHeadernavigator, setDesignHeadernavigator,
        selectedId, setSelectedId,
        cardData, setCardData,
        cardHistory: { goForward, goBack, stepNum, history }
    } = useContext(DesignToolContext)
    // !!state?false:true;
    return (
        <div className="flex justify-between w-11/12 ml-14">
            <div className="flex">
                <button className="w-10 h-10 rounded-md bg-fuschia"></button>
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
                                    <button className="flex w-full">
                                        <span className="block w-full h-4 truncate border-4 border-elementColor bg-elementColor"></span>
                                        <span className="ml-2">4</span>
                                    </button>
                                </div>
                                <div className="flex mb-2 ">
                                    <button className="flex w-full">
                                        <span className="block w-full h-2 mt-2 font-normal truncate border-2 border-elementColor bg-elementColor"></span>
                                        <span className="ml-2 ">2</span>
                                    </button>
                                </div>
                                <div className="flex ">
                                    <button className="flex w-full">
                                        <span className="block w-full h-1 mt-2 font-normal truncate border-2 border-elementColor bg-elementColor"></span>
                                        <span className="ml-2">1</span>
                                    </button>
                                </div>
                                <div className=""></div>
                                <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-3 ">
                                    <button className="w-10 h-10 rounded-md bg-indigo600"></button>
                                    <button className="w-10 h-10 rounded-md bg-fuschia"></button>
                                    <button className="w-10 h-10 rounded-md bg-greenish"></button>
                                    <button className="w-10 h-10 rounded-md bg-yellowish"></button>
                                    <button className="w-10 h-10 rounded-md bg-redish"></button>
                                    <button className="w-10 h-10 rounded-md bg-gray900"></button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* this is the differnce */}


            {/* <div className="ml-6">
      </div> */}
        </div>
    );
};
export default ElementHeader;
