import React, { useEffect, useRef, useState } from "react";
import SelectImageModal from "../SelectImageModal/SelectImageModal";

interface Prop {
    closeModal: () => void;
    //   setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const NewImageModal: React.FC<Prop> = ({ closeModal }): JSX.Element => {
    const myRef = useRef(null);

    const handleClickOutside = (e) => {
        if (!myRef.current.contains(e.target)) {
            // setShowModal(false);
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
            <div className="absolute z-50 flex items-center justify-center w-screen h-screen overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div
                    ref={myRef}
                    className="relative w-auto max-w-3xl mx-auto my-6"
                    style={{ height: "90vh" }}
                >
                    {/*content*/}
                    <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b  border-solid rounded-t border-blueGray-200">
                            <button >
                                <svg
                                    width="28"
                                    height="16"
                                    viewBox="0 0 28 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.33333 13.5L2 8M2 8L7.33333 2.5M2 8L26 8"
                                        stroke="#4B5563"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                            <p className="ml-3 text-xs not-italic font-medium leading-5 font-inter text-grey">
                                Select Images
                            </p>
                            <button
                                className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                                onClick={closeModal}
                            >
                                <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative flex-auto p-6">
                            <div>
                                <h2 className="text-3xl not-italic font-bold leading-9 font-inter text-gray94">
                                    Upload New Image
                                </h2>
                            </div>
                        </div>
                        <div
                            style={{ width: "699px" }}
                            className="mt-3 mb-10 ml-3 mr-3 border-2 border-dashed rounded-md h-72 "
                        >
                            <div className="flex justify-center mt-10">
                                <button>
                                    <svg
                                        width="43"
                                        height="43"
                                        viewBox="0 0 47 47"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M13.9444 35.4444C7.34771 35.4444 2 30.0967 2 23.5C2 17.6509 6.20425 12.7837 11.7557 11.7557C12.7837 6.20425 17.6509 2 23.5 2C29.3491 2 34.2163 6.20425 35.2443 11.7557C40.7958 12.7837 45 17.6509 45 23.5C45 30.0967 39.6523 35.4444 33.0556 35.4444M16.3333 23.5L23.5 16.3333M23.5 16.3333L30.6667 23.5M23.5 16.3333V45"
                                            stroke="#4F46E5"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div className="mt-3 mb-3">
                                <p className="text-base not-italic font-semibold text-center font-inter text-lightGray ">
                                    Drop Your images here
                                </p>
                            </div>
                            <div className="mt-1 mb-5">
                                <p className="text-sm not-italic font-medium leading-6 text-center font-inter text-gray95 ">
                                    Formats supported JPG,PNG or BITMAP
                                </p>
                            </div>
                            <div className="flex justify-center mt-5">
                                <div
                                    style={{ height: "1px", border: "1px", width: "168px" }}
                                    className="mt-2 mr-1 border-solid bg-alto"
                                ></div>
                                <div>
                                    <p className="text-sm not-italic font-medium leading-5 font-inter text-gray95">
                                        OR
                                    </p>
                                </div>
                                <div
                                    style={{ height: "1px", border: "1px", width: "168px" }}
                                    className="mt-2 ml-1 border-solid bg-alto"
                                ></div>
                            </div>
                            <div className="flex justify-center mt-5">
                                <button className="h-12 text-white rounded-md bg-indigo600 w-60">
                                    Browse from Desktop
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed inset-0 z-40 bg-transparent opacity-25"></div>

        </>
    );
}

export default NewImageModal;
