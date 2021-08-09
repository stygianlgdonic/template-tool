import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../../../../Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar";
import { ORIGINAL_SVG_updownicon } from "../../../../utils/defaults";
import { useQuery } from 'react-query'

import generatesvgUrl from "../../../../utils/generatesvgUrl";
import { template_service } from "../../../../services/templateService";
import TemplatePreview from "./TemplatePreview";
const image1 = require("./../../../../assets/images/01.png");
const image2 = require("./../../../../assets/images/02.png");
const image3 = require("./../../../../assets/images/03.png");
const image4 = require("./../../../../assets/images/04.png");
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
    const { data, error, isLoading } = useQuery<any, Error>("templates", template_service.getAllTemplates)
    console.log({ data })
    console.log({ error })

    if (isLoading) {
        return (
            <>
                <p>Getting all templates ...</p>
            </>
        )
    }

    if (!!error) {
        return (
            <>
                <p>{error.message}</p>
            </>
        )
    }
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
                                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                                    <div className="relative w-auto max-w-3xl mx-auto my-6">
                                        {/*content*/}
                                        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex items-start justify-between p-5 rounded-t border-blueGray-200">
                                                <h3 className="text-3xl font-bold leading-9 font-inter text-gray900">
                                                    Create New Personalized Email
                                                </h3>
                                                <button
                                                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-20 focus:outline-none"
                                                    onClick={() => setNewModal(false)}
                                                >
                                                    <span className="block w-6 h-6 text-2xl text-black bg-white outline-none focus:outline-none">
                                                        ×
                                                    </span>
                                                </button>
                                            </div>
                                            {/*body*/}
                                            <div className="relative flex-auto p-6 mb-6 text-lg font-bold text-createEmail font-inter ">
                                                <p> Create For Email</p>
                                                <div className="flex justify-between gap-4 ">
                                                    <div className="h-40 border-2 border-transparent shadow-md w-96 ">
                                                        <button>
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
                                                                    <div className="font-bold text-left text-createEmail font-inter">
                                                                        <h1>HEADER</h1>
                                                                    </div>
                                                                    <div className="text-sm text-createEmail2 font-inter">
                                                                        <p>Dimensions:1920x240</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <div className="h-40 border-2 border-transparent shadow-md w-72 ">
                                                        <button>
                                                            <div className="flex p-8">
                                                                <svg
                                                                    width="60"
                                                                    height="72"
                                                                    viewBox="0 0 60 72"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <rect width="60" height="72" fill="#F3F4F6" />
                                                                </svg>
                                                                <div className="mt-2 ml-2">
                                                                    <div className="font-bold text-left text-createEmail font-inter">
                                                                        <h1>BODY</h1>
                                                                    </div>
                                                                    <div className="text-sm text-createEmail2 font-inter">
                                                                        <p>Dimensions:1080x1080</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="mt-6 mb-6 text-lg font-bold text-createEmail font-inter">
                                                    Create For Social Media
                                                </div>
                                                <div className="flex justify-between gap-4 mb-3">
                                                    <button>
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
                                                                    <div className="font-bold text-left text-createEmail font-inter">
                                                                        <h1>Feature IMAGE</h1>
                                                                    </div>
                                                                    <div className="text-sm text-createEmail2 font-inter">
                                                                        <p>Dimensions:1080x1080</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    {/* <div className="h-40 border-2 border-transparent shadow-md w-72 "></div> */}
                                                </div>
                                            </div>
                                            {/*footer*/}
                                            {/* <div className="flex items-center justify-end p-6 rounded-b border-blueGray-200">
                        <button
                          className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                          type="button"
                          onClick={() => setNewModal(false)}
                        >
                          Close
                        </button>
                      </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="fixed inset-0 z-0 bg-black opacity-25 "></div>
                            </>
                        ) : null}
                    </div>

                    {/* modal for personalized modal end */}

                    <div>
                        {showModal ? (
                            <>
                                {" "}
                                <div className="fixed inset-0 z-50 flex items-center justify-center h-full overflow-x-hidden overflow-y-scroll outline-none focus:outline-none">
                                    <div
                                        className="relative z-50 max-w-4xl mx-auto my-6 bg-white rounded-md"
                                        style={{ height: "90vh" }}
                                    >
                                        {" "}
                                        {/*content*/}
                                        <div className="relative flex flex-col w-full h-full border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                            <div className=" ">
                                                <div className=" top-0  ">
                                                    <button
                                                        className="flex items-center ml-auto mr-2  text-sm font-semibold leading-none text-black opacity-30 rounded-full outline-none focus:outline-none"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        <span className="  text-2xl top-0   outline-none focus:outline-none">
                                                            ×
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className="flex items-start justify-between w-full px-5  pb-5 border-b border-solid rounded-t border-bordercolor">
                                                    <div>
                                                        <h3 className="text-2xl font-semibold text-gray94">
                                                            Select Template
                                                        </h3>
                                                    </div>
                                                    <div className="flex flex-row">
                                                        <div className="flex flex-row h-8 px-2  border-2 rounded-md text-gray900 w border-bordercolor">
                                                            <button className="pr-2 text-sm">
                                                                Most Popular{" "}
                                                            </button>
                                                            <img className="w-2 " src={svg1} />
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
                                                <button className="h-10 px-4 py-1 rounded-md bg-lightindigo text-indigo700">
                                                    Employes
                                                </button>
                                                <button className="h-10 px-3 py-1 rounded-md bg-lightindigo text-indigo700">
                                                    Events
                                                </button>
                                                <button className="h-10 px-4 py-1 rounded-md bg-lightindigo text-indigo700">
                                                    Promotion
                                                </button>
                                                <button className="h-10 px-3 py-1 rounded-md bg-lightindigo text-indigo700">
                                                    Property
                                                </button>
                                            </div>
                                            <div>
                                                <h1 className="px-6 mt-6 text-xl font-bold text-gray94">
                                                    Your Designs
                                                </h1>
                                            </div>
                                            <div className="flex flex-row gap-4 pl-6 mt-4">
                                                <div>
                                                    <button
                                                        className="flex flex-col items-center justify-center py-4 border-2 border-dashed rounded-md border-bordercolor "
                                                        onClick={() => {
                                                            setNewModal(true);
                                                            setShowModal(false);
                                                        }}
                                                    >
                                                        <svg
                                                            className="w-7"
                                                            viewBox="0 0 47 47"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g filter="url(#filter0_d)">
                                                                <path
                                                                    d="M2.24609 22.5C2.24609 10.902 11.6481 1.5 23.2461 1.5C34.8441 1.5 44.2461 10.902 44.2461 22.5C44.2461 34.098 34.8441 43.5 23.2461 43.5C11.6481 43.5 2.24609 34.098 2.24609 22.5Z"
                                                                    fill="#4F46E5"
                                                                />
                                                                <path
                                                                    d="M23.2461 16.5V22.5M23.2461 22.5V28.5M23.2461 22.5H29.2461M23.2461 22.5L17.2461 22.5"
                                                                    stroke="white"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <filter
                                                                    id="filter0_d"
                                                                    x="0.246094"
                                                                    y="0.5"
                                                                    width="46"
                                                                    height="46"
                                                                    filterUnits="userSpaceOnUse"
                                                                    color-interpolation-filters="sRGB"
                                                                >
                                                                    <feFlood
                                                                        flood-opacity="0"
                                                                        result="BackgroundImageFix"
                                                                    />
                                                                    <feColorMatrix
                                                                        in="SourceAlpha"
                                                                        type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                        result="hardAlpha"
                                                                    />
                                                                    <feOffset dy="1" />
                                                                    <feGaussianBlur stdDeviation="1" />
                                                                    <feColorMatrix
                                                                        type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                                                                    />
                                                                    <feBlend
                                                                        mode="normal"
                                                                        in2="BackgroundImageFix"
                                                                        result="effect1_dropShadow"
                                                                    />
                                                                    <feBlend
                                                                        mode="normal"
                                                                        in="SourceGraphic"
                                                                        in2="effect1_dropShadow"
                                                                        result="shape"
                                                                    />
                                                                </filter>
                                                            </defs>
                                                        </svg>
                                                        <p className="w-5/6 mt-1 text-sm text-lightGray">
                                                            Create New Personalized Template
                                                        </p>
                                                    </button>
                                                </div>
                                                <div >
                                                    <div className="pl-2 flex flex-row flex-wrap gap-4">
                                                        {data.map((item, index) => {
                                                            return (
                                                                <div key={index} >
                                                                    <TemplatePreview templateObj={item} />
                                                                    {/* {console.log({ treeee: item })} */}
                                                                </div>
                                                            )
                                                        })}


                                                    </div>



                                                </div>
                                            </div>
                                            <div>
                                                <h1 className="px-6 mt-2 text-xl font-bold text-gray94">
                                                    For you
                                                </h1>
                                            </div>
                                            <div className="relative flex-auto p-6">
                                                <div className="flex flex-row gap-4 ">
                                                    <div>
                                                        <button className="flex flex-col items-center justify-center rounded-md border-bordercolor">
                                                            <img
                                                                src={image2}
                                                                className="rounded-md"
                                                                width="200"
                                                                height="110"
                                                            />
                                                            <p className="mt-3 text-sm text-lightGray">
                                                                Welcome card for employee
                                                            </p>
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <button className="flex flex-col items-center justify-center rounded-md border-bordercolor">
                                                            <img
                                                                src={image3}
                                                                className="rounded-md"
                                                                width="200"
                                                                height="110"
                                                            />
                                                            <p className="mt-2 text-sm text-lightGray">
                                                                Welcome card for employee
                                                            </p>
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <button className="flex flex-col items-center justify-center rounded-md border-bordercolor">
                                                            <img
                                                                src={image4}
                                                                className="rounded-md"
                                                                width="200"
                                                                height="110"
                                                            />
                                                            <p className="mt-2 text-sm text-lightGray">
                                                                Welcome card for employee
                                                            </p>
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <button className="flex flex-col items-center justify-center rounded-md border-bordercolor">
                                                            <img
                                                                src={image3}
                                                                className="rounded-md"
                                                                width="200"
                                                                height="110"
                                                            />
                                                            <p className="mt-2 text-sm text-lightGray">
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
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEmail;
