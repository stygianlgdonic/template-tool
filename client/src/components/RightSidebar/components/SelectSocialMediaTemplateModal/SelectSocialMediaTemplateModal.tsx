import React, { useEffect, useRef, useState } from "react";
// import "../../../../../SubNavBar/components/ElementSelector/components/Stickers/styles.css";
import SearchBar from "../../../../Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar";
// const svg1 = require("./../../../../../../../../../../assets/images/svg.png");
// const image2 = require("./../../../../../../../../../../assets/images/image1.png");
// const image3 = require("./../../../../../../../../../../assets/images/image3.png");
// const image4 = require("./../../../../../../../../../../assets/images/image4.png");
// const image5 = require("./../../../../../../../../../../assets/images/image5.png");
// const plusimage = require("../../../../../../../../../../assets/images/plus.png");
import PersonalizedCardSizeModal from "../PersonalizedCardSizeModal/PersonalizedCardSizeModal"
interface Prop {
    closeModal: () => void
    displayModalChange: any
}
const SelectSocialMediaTemplateModal: React.FC<Prop> = ({ closeModal, displayModalChange }): JSX.Element => {
    const [showModal, setShowModal] = React.useState(false);
    const [ShowToolTip, setShowToolTip] = React.useState(false);
    const myRef = useRef(null);

    const handleClickOutside = (e) => {
        if (!myRef.current.contains(e.target)) {
            closeModal();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    });

    return (
        <>
            <div
                // ref={myRef}
                className="fixed z-50 flex items-center justify-center h-full overflow-x-hidden overflow-y-scroll outline-none inset-1 focus:outline-none">
                <div
                    className="relative z-50 max-w-4xl mx-auto my-6 bg-white rounded-md"
                    style={{ width: "1027px", height: "100vh" }}
                >
                    {" "}
                    <div className="relative flex flex-col w-full h-full border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                        <div className="">
                            <div className="top-0 ">
                                <button
                                    className="flex items-center ml-auto mr-2 text-sm font-semibold leading-none text-black rounded-full outline-none opacity-30 focus:outline-none"
                                    // onClick={() => setShowModal(false)}
                                    onClick={closeModal}
                                >
                                    <span className="top-0 text-2xl outline-none focus:outline-none">
                                        ×
                                    </span>
                                </button>
                            </div>
                            <div className="flex items-start justify-between w-full px-5 pb-5 border-b border-solid rounded-t border-bordercolor">
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray94">
                                        Select Template
                                    </h3>
                                </div>
                                <div className="flex flex-row">
                                    <div className="flex flex-row h-8 px-2 border-2 rounded-md text-gray900 w border-bordercolor">
                                        <select className="pr-2 text-sm border-none">
                                            <option selected >Social media</option>
                                            <option>Email</option>
                                        </select>
                                        {/* <img className="w-2 " src={svg1} /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center w-full">
                            <div className="w-3/6 mt-3 ">
                                <SearchBar />
                            </div>
                        </div>
                        <div className="flex gap-4 px-6 mt-3 ">
                            <button className="h-10 px-4 py-1 text-sm not-italic font-medium leading-5 rounded-md bg-lightindigo text-indigo700 font-inter ">
                                Employee
                            </button>
                            <button className="h-10 px-3 py-1 text-sm not-italic font-medium leading-5 rounded-md bg-lightindigo text-indigo700 font-inter ">
                                Events
                            </button>
                            <button className="h-10 px-4 py-1 text-sm not-italic font-medium leading-5 rounded-md bg-lightindigo text-indigo700 font-inter">
                                Promotion
                            </button>
                            <button className="h-10 px-3 py-1 text-sm not-italic font-medium leading-5 rounded-md bg-lightindigo text-indigo700 font-inter">
                                Property
                            </button>
                        </div>
                        <div className="flex justify-between w-full px-6">
                            <div>
                                <h1 className="mt-6 text-2xl not-italic font-bold leading-9 font-inter text-gray94">
                                    Your Designs
                                </h1>
                            </div>
                            <div className="mt-6">
                                <button className="text-base not-italic font-medium leading-5 font-inter text-grey" >See all</button>
                            </div>

                        </div>
                        <div className="relative flex-auto p-6">
                            <div className="flex flex-row gap-4 ">
                                <div className="h-28">
                                    <button
                                        onClick={() => displayModalChange("CardSize")}
                                        className="flex flex-col items-center justify-center py-3 border-2 border-dashed rounded-md w-52 border-bordercolor"
                                    >
                                        {/* <img className="w-8 h-8" src={plus} alt="" /> */}
                                        <p className="mt-0 text-sm text-lightGray ">
                                            Create New Personalized Template
                                        </p>
                                        {/* tool tip start */}
                                        <div
                                            className="relative flex items-center justify-end ml-44"
                                            onClick={() => setShowToolTip(!ShowToolTip)}
                                        >
                                            <button
                                                onClick={() => setShowToolTip(true)}
                                            >
                                                <svg
                                                    className=""
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55229 6.44772 9 7 9V12C7 12.5523 7.44772 13 8 13H9C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11V8C9 7.44772 8.55228 7 8 7H7Z"
                                                        fill="#4338CA"
                                                    />
                                                </svg>
                                            </button>
                                            {ShowToolTip ? (
                                                <>
                                                    <div className="absolute bottom-0 flex flex-col mb-6 ">
                                                        <span className="relative z-auto w-full h-24 p-3 text-xs leading-none text-white whitespace-no-wrap rounded-md shadow-lg ml-60 bg-indigo500">
                                                            You can create a template from scratch by adding images and elements from our vast library. Once you create a tamplate you can reuse it again for multiple campaigns
                                                            <div className="flex justify-start mt-3 mb-3 text-sm font-inter">
                                                                <button>Got it</button>
                                                            </div>
                                                        </span>
                                                        <div
                                                            className="z-50 flex justify-end w-3 h-3 -mt-2 transform rotate-45 bg-indigo500"
                                                            style={{ marginLeft: "350px" }}
                                                        ></div>
                                                    </div>
                                                </>
                                            ) : null}
                                        </div>

                                        {/* tool tip end */}

                                    </button>
                                </div>
                                <div>
                                    <button className="flex flex-col items-center justify-center rounded-md border-bordercolor">
                                        {/* <img
                                                                src={image5}
                                                                className="rounded-md"
                                                                width="200"
                                                                height="110"
                                                            /> */}
                                        <p className="mt-2 text-sm not-italic font-semibold text-lightGray">
                                            Welcome card for employee
                                        </p>
                                        <div>
                                            <p className="text-sm not-italic font-normal leading-5 font-inter text-createcolor">Creators:</p>
                                        </div>
                                    </button>
                                </div>
                                <div>
                                    <button className="flex flex-col items-center justify-center rounded-md border-bordercolor">
                                        {/* <img
                                                                src={image2}
                                                                className="rounded-md"
                                                                width="200"
                                                                height="110"
                                                            /> */}
                                        <p className="mt-2 text-sm not-italic font-semibold text-lightGray">
                                            Warm welcome to employees
                                        </p>
                                        <p className="text-sm not-italic font-normal leading-5 font-inter text-createcolor">Creators:</p>
                                    </button>
                                </div>
                                <div>
                                    <button className="flex flex-col items-center justify-center rounded-md border-bordercolor">
                                        {/* <img
                                                                src={image2}
                                                                className="rounded-md"
                                                                width="200"
                                                                height="110"
                                                            /> */}
                                        <p className="mt-2 text-sm not-italic font-semibold text-lightGray">
                                            Warm welcome to employees
                                        </p>
                                        <p className="text-sm not-italic font-normal leading-5 font-inter text-createcolor">Creators:</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between w-full px-6">
                            <div>
                                <h1 className="mt-4 text-2xl not-italic font-bold leading-9 font-inter text-gray94">
                                    For you
                                </h1>
                            </div>
                            <div className="flex justify-between">
                                <div className="mt-4 mr-3 border-2 rounded-md border-bordercolor">
                                    <select className="pr-2 text-sm border-none">
                                        <option selected >Most popular</option>
                                        <option>Great Option</option>
                                    </select>
                                </div>
                                <div className="mt-4">
                                    <button className="text-base not-italic font-medium leading-5 font-inter text-grey" >See all</button>
                                </div>
                            </div>

                        </div>
                        <div className="relative flex-auto p-6">
                            <div className="flex flex-row gap-4 ">
                                <div>
                                    <button className="flex flex-col items-center justify-center rounded-md border-bordercolor">
                                        {/* <img
                                                                src={image4}
                                                                className="rounded-md"
                                                                width="200"
                                                                height="110"
                                                            /> */}
                                        <p className="mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray">
                                            Warm welcome to employees
                                        </p>
                                    </button>
                                </div>
                                <div>
                                    <button className="flex flex-col items-center justify-center rounded-md border-bordercolor">
                                        {/* <img
                                                                src={image3}
                                                                className="rounded-md"
                                                                width="200"
                                                                height="110"
                                                            /> */}
                                        <p className="mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray">
                                            Card design
                                        </p>
                                    </button>
                                </div>
                                <div>
                                    <button className="flex flex-col items-center justify-center rounded-md border-bordercolor">
                                        {/* <img
                                                                src={image1}
                                                                className="rounded-md"
                                                                width="200"
                                                                height="110"
                                                            /> */}
                                        <p className="mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray">
                                            Warm welcome to employees                                                            </p>
                                    </button>
                                </div>
                                <div>
                                    <button className="flex flex-col items-center justify-center rounded-md border-bordercolor">
                                        {/* <img
                                                                src={image3}
                                                                className="rounded-md"
                                                                width="200"
                                                                height="110"
                                                            /> */}
                                        <p className="mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray">
                                            Warm welcome to employees
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
    );
};
export default SelectSocialMediaTemplateModal;
