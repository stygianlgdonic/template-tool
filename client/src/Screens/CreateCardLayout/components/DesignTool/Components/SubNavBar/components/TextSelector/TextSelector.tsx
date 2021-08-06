import React from 'react';
import CardElementsFunctions from '../../../../../../../../Hooks/CardElementsFunctions';
import { defaultTextBox, fontSizeArray } from '../../../../../../../../utils/defaults';

const TextSelector: React.FC = (): JSX.Element => {

    const { handleAddNewText } = CardElementsFunctions()

    const handleTextAdd = (type: "Header" | "Sub header" | "body text") => {
        const textTypeFont = fontSizeArray.find(item => item.name === type).size
        handleAddNewText({
            ...defaultTextBox,
            fontSize: textTypeFont
        })
    }

    return (
        <div className=" flex   flex-col justify-center w-full p-6 ">

            <div className=" w-full">
                <h1 className="mt-3 font-bold text-xl">Click text to add to page</h1>
            </div>
            <div className="mt-6 w-full flex flex-col justify-start items-start">
                <button
                    onClick={() => handleTextAdd("Header")}
                    className="text-5xl leading-none font-normal text-gray94 mb-2"><p>Heading 1</p></button>
                <button
                    onClick={() => handleTextAdd("Sub header")}
                    className="text-5xl leading-none font-normal text-gray94 mb-2"><p>Sub header</p></button>
                <button
                    onClick={() => handleTextAdd("body text")}
                    className="text-5xl leading-none font-normal text-gray94 mb-2"><p>body text</p></button>
            </div>
            <div className="mt-6 w-full border-b-2 border-bordercolor">
            </div>
            <div className=" w-full flex flex-row items-center justify-start">

                <h1 className="mt-3 font-bold text-xl mr-2">Available merge tags</h1>
                <svg className="mt-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 12C9 12.5523 8.55229 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55229 11 9 11.4477 9 12ZM8 3C7.44772 3 7 3.44772 7 4V8C7 8.55228 7.44772 9 8 9C8.55229 9 9 8.55228 9 8V4C9 3.44772 8.55229 3 8 3Z" fill="#4338CA" />
                </svg>

            </div>
            <div className="flex flex-row flex-wrap  gap-4  mt-4 ">
                <button className="hover:bg-indigo100">

                    <div className="hover:font-bold px-2 text-sm   font-normal py-1 border-2 border-bordercolor w-32 h-9 rounded-md ">
                        Company_name
                    </div>
                </button>
                <button className="hover:bg-indigo100">

                    <div className="hover:font-bold px-2 text-sm   font-normal py-1 border-2 border-bordercolor  h-9 rounded-md ">
                        Company_name
                    </div>
                </button>
                <button className="hover:bg-indigo100">

                    <div className="hover:font-bold px-2 text-sm   font-normal py-1 border-2 border-bordercolor  h-9 rounded-md ">
                        Company_name
                    </div>
                </button>
                <button className="hover:bg-indigo100">

                    <div className="hover:font-bold px-2 text-sm   font-normal py-1 border-2 border-bordercolor  h-9 rounded-md ">
                        Business_name Amazon
                    </div>
                </button>
                <button className="hover:bg-indigo100">

                    <div className="hover:font-bold px-2 text-sm   font-normal py-1 border-2 border-bordercolor  h-9 rounded-md ">
                        Website_URL
                    </div>
                </button>
                <button className="hover:bg-indigo100">

                    <div className="hover:font-bold px-2 text-sm   font-normal py-1 border-2 border-bordercolor h-9 rounded-md ">
                        Pakistan Super League
                    </div>
                </button>

            </div>

            <div>
                <button className="text-indigo600 text-sm font-medium mt-6 ">Didn’t find the right merge tag?</button>
            </div>
            <div className="border-dashed  px-2 py-1 border-2 border-bordercolor w-60 h-9 mt-4 rounded-md flex flex-row">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                        <g clip-path="url(#clip0)">
                            <path d="M2 12C2 5.92487 6.92487 1 13 1C19.0751 1 24 5.92487 24 12C24 18.0751 19.0751 23 13 23C6.92487 23 2 18.0751 2 12Z" fill="#C7D2FE" />
                            <path d="M13 6V12M13 12V18M13 12H19M13 12L7 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_d" x="0" y="0" width="26" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                        </filter>
                        <clipPath id="clip0">
                            <path d="M2 12C2 5.92487 6.92487 1 13 1C19.0751 1 24 5.92487 24 12C24 18.0751 19.0751 23 13 23C6.92487 23 2 18.0751 2 12Z" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <button className="text-sm  font-normal ml-2">Create custom merge tag</button>
            </div>
        </div>
    )
};
export default TextSelector;
