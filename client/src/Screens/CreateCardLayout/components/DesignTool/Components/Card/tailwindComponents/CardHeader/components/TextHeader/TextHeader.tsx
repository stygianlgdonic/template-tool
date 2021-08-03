import React from "react";
const image = require('./../../../../../../../../../../assets/images/opacity.png')
const TextHeader: React.FC = (): JSX.Element => {
    const [showModal, setShowModal] = React.useState(false);
    const [openstyle, setOpenstyle] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    return (
        <div className="flex flex-row items-center justify-center gap-4 px-6 ">
            <div className="flex items-center">
                <div className="relative inline-block text-left ">
                    <div
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        onClick={() => setOpen(!open)}
                    >
                        <button
                            onClick={() => setOpen(true)}
                            type="button"
                            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium bg-white border rounded-md shadow-sm border-bordercolor text-gray900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                            id="menu-button"
                            aria-expanded="true"
                            aria-haspopup="true"
                        >
                            Poppins thin

                        </button>
                    </div>


                </div>
            </div>
            <div className="z-50 flex items-center">
                <div className="relative inline-block text-left ">
                    <div
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        onClick={() => setOpenstyle(!openstyle)}
                    >
                        <button
                            onClick={() => setOpenstyle(true)}
                            type="button"
                            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium bg-white border rounded-md shadow-sm border-bordercolor text-gray900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                            id="menu-button"
                            aria-expanded="true"
                            aria-haspopup="true"
                        >
                            Heading 1

                        </button>
                    </div>


                </div>
                <div>
                    <div>
                        <button className="ml-10 text-lg font-bold text-black">A</button>
                    </div>
                </div>
                <div>
                    <button className="ml-10 text-lg font-bold text-black">B</button>
                </div>
                <div>
                    <button className="ml-10 text-lg italic font-bold text-black">
                        I
                    </button>
                </div>
                <div className="py-4 ml-6 border-r-2 border-bordercolor"></div>
                <div className="ml-6">
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
                </div>
                <div className="py-4 ml-6 border-r-2 border-bordercolor"></div>
                <div className="ml-6 text-lg italic font-bold text-black">
                    <button>Effects</button>
                </div>
                <div className="py-4 ml-6 border-r-2 border-bordercolor"></div>
                <div className="ml-6">
                    <img src={image} />



                </div>
            </div>
        </div>
    );
};
export default TextHeader;
