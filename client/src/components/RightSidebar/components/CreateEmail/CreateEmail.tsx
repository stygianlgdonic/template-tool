import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../../../../Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar";
import { ORIGINAL_SVG_updownicon } from "../../../../utils/defaults";
import generatesvgUrl from "../../../../utils/generatesvgUrl";
const image1 = require('./../../../../assets/images/01.png')
const image2 = require('./../../../../assets/images/02.png')
const image3 = require('./../../../../assets/images/03.png')
const image4 = require('./../../../../assets/images/04.png')
interface BioProps {
    bio1: string;
    bio2: string;
    bio3: string;
    bio4: string;
}
const CreateEmail: React.FC<BioProps> = ({
    bio1,
    bio2,
    bio3,
    bio4,
}): JSX.Element => {
    const svg1 = generatesvgUrl(ORIGINAL_SVG_updownicon);
    const svg = generatesvgUrl(bio4);
    const [showModal, setShowModal] = React.useState(false);
    const [newModal, setNewModal] = React.useState(false);
    return (
        <div>
            <div className="flex flex-col justify-center w-full mx-auto mt-4 ">
                <div className="flex flex-col px-2 py-4 mb-6 border-2 border-opacity-25 border-dashed rounded-lg border-gray95">
                    <div className="flex flex-row justify-center">
                        <img src={svg} className="mr-2" />

                        <h1 className="text-base text-indigo">{bio1}</h1>
                    </div>
                    <div className="flex justify-center mt-2">
                        <p className="flex justify-center leading-4 text-center text-gray95">
                            {bio2}
                        </p>
                    </div>
                    <NavLink to="/createcard"></NavLink>
                    <button onClick={() => setShowModal(true)}>
                        <div className="flex flex-row justify-center p-2 mt-4 border-0 rounded-lg bg-indigo">
                            <svg
                                className="mt-1 mr-4"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 2V12M12 7L2 7"
                                    stroke="#EEF2FF"
                                    stroke-width="4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>

                            <p className="text-white">{bio3}</p>
                        </div>
                    </button>

                    {/* modal for personalized modal */}
                    <div>
                        {newModal ? (
                            <>
                                <div className="fixed inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none  focus:outline-none">
                                    <div className="relative w-auto max-w-3xl mx-auto my-6">
                                        {/*content*/}
                                        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex items-start justify-between p-5 rounded-t border-blueGray-200">
                                                <h3 className="text-3xl font-semibold">
                                                    Create New Personalized Email
                                                </h3>
                                                <button
                                                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                                                    onClick={() => setNewModal(false)}
                                                >
                                                    <span className="block w-6 h-6 text-2xl text-black bg-white outline-none focus:outline-none">
                                                        ×
                                                    </span>
                                                </button>
                                            </div>
                                            {/*body*/}
                                            <div className="relative flex-auto p-6">
                                                <p> Create For Email</p>
                                                <div className="flex justify-between gap-4 ">
                                                    <div className="h-40 border-2 border-transparent shadow-md w-96 ">
                                                        <div className="flex p-10 ">
                                                            <svg
                                                                width="60"
                                                                height="72"
                                                                viewBox="0 0 60 72"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <rect width="60" height="72" fill="#F3F4F6" />
                                                            </svg>
                                                            <div className="mt-2 ml-4">
                                                                <h1>HEADER</h1>
                                                                <p>Dimensions:1920x240</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="h-40 border-2 border-transparent shadow-md w-72 ">
                                                        <div className="flex p-10 ">
                                                            <svg
                                                                width="60"
                                                                height="72"
                                                                viewBox="0 0 60 72"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <rect width="60" height="72" fill="#F3F4F6" />
                                                            </svg>
                                                            <div className="mt-2 ml-4">
                                                                <h1>BODY</h1>
                                                                <p>Dimensions:1080x1080</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-3">Create For Social Media</div>
                                                <div className="flex justify-between gap-4">
                                                    <div className="h-40 border-2 border-transparent shadow-md w-96 ">
                                                        <div className="flex p-10 ">
                                                            <svg
                                                                width="60"
                                                                height="72"
                                                                viewBox="0 0 60 72"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <rect width="60" height="72" fill="#F3F4F6" />
                                                            </svg>
                                                            <div className="mt-2 ml-4">
                                                                <h1>Feature IMAGE</h1>
                                                                <p>Dimensions:1080x1080</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div className="h-40 border-2 border-transparent shadow-md w-72 "></div> */}
                                                </div>
                                            </div>
                                            {/*footer*/}
                                            <div className="flex items-center justify-end p-6 rounded-b border-blueGray-200">
                                                <button
                                                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                                                    type="button"
                                                    onClick={() => setNewModal(false)}
                                                >
                                                    Close
                                                </button>
                                                {/* <button
                          className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Save Changes
                        </button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
                            </>
                        ) : null}
                    </div>

                    {/* modal for personalized modal end */}

                    <div>
                        {showModal ? (
                            <> <div
                                className="justify-center items-center h-full flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                                <div className="relative   my-6 z-50 mx-auto max-w-4xl bg-white rounded-md" style={{ height: '85vh' }}>                                       {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex  h-full flex-col w-full  outline-none focus:outline-none">
                                        <div className="flex "  >
                                            <div className="flex items-start justify-between w-full p-5 border-b border-solid border-bordercolor rounded-t">
                                                <div>
                                                    <h3 className="text-2xl text-gray94 font-semibold">
                                                        Select Template
                                                    </h3>
                                                </div>
                                                <div className="flex flex-row">
                                                    <div className="flex flex-row px-2 text-gray900 border-2 h-8 w border-bordercolor rounded-md  mr-2">
                                                        <button className="pr-2 text-sm">Most Popular </button>
                                                        <img className="w-2 " src={svg1} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-b border-solid border-bordercolor ">
                                                <button
                                                    className=" ml-auto bg-bluish flex mt-1 mr-1 items-center rounded-full  text-black   text-sm leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    <span className="bg-transparent text-white w-8 text-lg block outline-none focus:outline-none">
                                                        x
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="w-full flex justify-center">
                                            <div className="mt-3 w-3/6 ">
                                                <SearchBar />
                                            </div>
                                        </div>
                                        <div className=" flex gap-4 mt-3 px-6">
                                            <button className="bg-lightindigo text-indigo700 rounded-md px-4 py-1 h-10">Employes</button>
                                            <button className="bg-lightindigo text-indigo700 rounded-md px-3 py-1 h-10">Events</button>
                                            <button className="bg-lightindigo text-indigo700 rounded-md px-4 py-1 h-10">Promotion</button>
                                            <button className="bg-lightindigo text-indigo700 rounded-md px-3 py-1 h-10">Property</button>
                                        </div>
                                        <div>
                                            <h1 className="text-xl font-bold mt-6 px-6 text-gray94">Your Designs</h1>
                                        </div>
                                        <div className="pl-6 mt-4 flex flex-row gap-4">
                                            <div>
                                                <button className="border-2  border-dashed rounded-md border-bordercolor justify-center items-center flex flex-col py-4 " onClick={() => { setNewModal(true); setShowModal(false) }}>
                                                    <svg className="w-7" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g filter="url(#filter0_d)">
                                                            <path d="M2.24609 22.5C2.24609 10.902 11.6481 1.5 23.2461 1.5C34.8441 1.5 44.2461 10.902 44.2461 22.5C44.2461 34.098 34.8441 43.5 23.2461 43.5C11.6481 43.5 2.24609 34.098 2.24609 22.5Z" fill="#4F46E5" />
                                                            <path d="M23.2461 16.5V22.5M23.2461 22.5V28.5M23.2461 22.5H29.2461M23.2461 22.5L17.2461 22.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        </g>
                                                        <defs>
                                                            <filter id="filter0_d" x="0.246094" y="0.5" width="46" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                <feOffset dy="1" />
                                                                <feGaussianBlur stdDeviation="1" />
                                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                                                            </filter>
                                                        </defs>
                                                    </svg>
                                                    <p className="w-5/6 mt-1 text-sm text-lightGray">Create New Personalized Template</p>
                                                </button>
                                            </div>
                                            <div>
                                                <button className=" rounded-md border-bordercolor justify-center items-center flex flex-col ">
                                                    <img src={image2} className="rounded-md" width="200" height="110" />
                                                    <p className=" mt-2 text-lightGray text-sm">Welcome card for employee</p>
                                                </button>
                                            </div>
                                            <div>
                                                <button className=" rounded-md border-bordercolor justify-center items-center flex flex-col ">
                                                    <img src={image1} className="rounded-md" width="200" height="110" />
                                                    <p className=" mt-2 text-lightGray text-sm">Warm welcome to employees</p>
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="text-xl font-bold mt-2 px-6 text-gray94">For you</h1>
                                        </div>
                                        <div className="relative p-6 flex-auto">
                                            <div className=" flex flex-row gap-4">
                                                <div>
                                                    <button className=" rounded-md border-bordercolor justify-center items-center flex flex-col ">
                                                        <img src={image2} className="rounded-md" width="200" height="110" />
                                                        <p className=" mt-2 text-lightGray text-sm">Welcome card for employee</p>
                                                    </button>
                                                </div>
                                                <div>
                                                    <button className=" rounded-md border-bordercolor justify-center items-center flex flex-col ">
                                                        <img src={image3} className="rounded-md" width="200" height="110" />
                                                        <p className=" mt-2 text-lightGray text-sm">Welcome card for employee</p>
                                                    </button>
                                                </div>
                                                <div>
                                                    <button className=" rounded-md border-bordercolor justify-center items-center flex flex-col ">
                                                        <img src={image4} className="rounded-md" width="200" height="110" />
                                                        <p className=" mt-2 text-lightGray text-sm">Welcome card for employee</p>
                                                    </button>
                                                </div>
                                                <div>
                                                    <button className=" rounded-md border-bordercolor justify-center items-center flex flex-col ">
                                                        <img src={image3} className="rounded-md" width="200" height="110" />
                                                        <p className=" mt-2 text-lightGray text-sm">Warm welcome to employees</p>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEmail;
