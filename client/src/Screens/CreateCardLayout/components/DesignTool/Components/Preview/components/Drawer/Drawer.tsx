import React from "react";
const image = require('./../../../../../../../../assets/images/preview.png');

export default function Drawer({ isOpen, setIsOpen }) {
    return (
        <main
            className={
                " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0 translate-y-16  "
                    : " transition-all delay-500 opacity-0 translate-x-full ")
            }
        >
            <section
                className={
                    " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                    (isOpen ? " translate-x-0  " : " translate-x-full ")
                }
            >
                <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">

                    <div className="h-full flex " >


                        <button className="pl-4  h-full flex items-center" onClick={() => {
                            setIsOpen(false);
                        }}>
                            <svg className="w-2" width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.24023 2L11.9842 11L2.24023 20" stroke="#374151" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </button>
                        <div className="flex justify-center w-full ">


                            <img src={image} className="order-2 border-bordercolor  mt-8 shadow-lg w-60 h-64" />
                        </div>
                    </div>
                </article>
            </section>
            <section
                className=" w-screen h-full cursor-pointer "
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </main>
    );
}
