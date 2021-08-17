import React from "react";
const image = require('./../../../../../../../../../assets/images/preview.png');
import "../../../SubNavBar/components/ElementSelector/components/Stickers/styles.css"

export default function Drawer({ isOpen, setIsOpen }) {
    return (
        <main
            style={{ height: "91vh" }}
            className={
                " fixed  no-scrollbar z-50  flex-grow   inset-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0 translate-y-16  "
                    : " transition-all delay-500  translate-x-full ")
            }
        >
            {/* modal start */}
            <section
                className={
                    " w-screen max-w-lg right-0 absolute bg-transparent h-full  delay-400 duration-500 ease-in-out transition-all transform  " +
                    (isOpen ? " translate-x-0  " : " translate-x-full ")
                }
            >
                <article className="relative flex flex-col w-screen h-full max-w-full pb-20 mb-8 overflow-y-scroll no-scrollbar ">
                    <div className="flex h-full ">
                        <div
                            className="flex items-center w-4 h-full "
                            style={{ marginTop: "89px" }}
                        >
                            <button
                                className="fixed z-50 flex items-center h-full pl-4 mr-2 bg-transparent b 3xl:mt-top"
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                            >
                                <div className="flex flex-row items-center w-10 h-20 pl-2 ml-2 bg-white rounded-full rounded-r">
                                    <svg
                                        className="w-2"
                                        width="14"
                                        height="22"
                                        viewBox="0 0 14 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.24023 2L11.9842 11L2.24023 20"
                                            stroke="#374151"
                                            stroke-width="4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                            </button>
                        </div>
                        <div className="flex flex-col justify-start w-full  pt-3  ml-6 bg-white mt-3  overflow-hidden" style={{ height: '92vh' }}>
                            <div className="flex justify-center ">
                                <img
                                    src={image}
                                    className="border-2 shadow-lg border-bordercolor "
                                />
                            </div>
                            <div className="mt-6 mb-6 bg-white px-14 ">
                                <div className="flex flex-col justify-center mb-4">
                                    <p className="pb-1 text-sm text-gray94">First_name</p>
                                    <input
                                        className="px-4 text-sm border-2 rounded-md outline-none border-bordercolor text-gray9f h-9"
                                        type="text"
                                        placeholder="Add first name to test"
                                    ></input>
                                </div>
                                <div className="flex flex-col justify-center mb-4">
                                    <p className="pb-1 text-sm text-gray94">First_name</p>
                                    <input
                                        className="px-4 text-sm border-2 rounded-md outline-none border-bordercolor text-gray9f h-9"
                                        type="text"
                                        placeholder="Add first name to test"
                                    ></input>
                                </div>
                                <div className="flex flex-col justify-center mb-4">
                                    <p className="pb-1 text-sm text-gray94">First_name</p>
                                    <input
                                        className="px-4 text-sm border-2 rounded-md outline-none border-bordercolor text-gray9f h-9"
                                        type="text"
                                        placeholder="Add first name to test"
                                    ></input>
                                </div>
                                <button className="w-full mb-8 mt-14">
                                    <div className="flex flex-row items-center justify-center w-full h-12 mt-4 rounded-md bg-indigo600 i">
                                        <svg
                                            width="16"
                                            height="12"
                                            viewBox="0 0 16 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M0.00300002 1.884L8 5.882L15.997 1.884C15.9674 1.37444 15.7441 0.895488 15.3728 0.545227C15.0016 0.194965 14.5104 -9.35847e-05 14 3.36834e-08H2C1.48958 -9.35847e-05 0.998447 0.194965 0.627178 0.545227C0.255908 0.895488 0.0326041 1.37444 0.00300002 1.884Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M16 4.118L8 8.118L0 4.118V10C0 10.5304 0.210714 11.0391 0.585786 11.4142C0.960859 11.7893 1.46957 12 2 12H14C14.5304 12 15.0391 11.7893 15.4142 11.4142C15.7893 11.0391 16 10.5304 16 10V4.118Z"
                                                fill="white"
                                            />
                                        </svg>

                                        <p className="pl-4 text-white ">Get sharable code</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <section
                className="w-screen h-full cursor-pointer "
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </main>
    );
}
