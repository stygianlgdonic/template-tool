import React, { useEffect, useRef, useState } from "react";
import SearchBar from "../../../../Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar";
const email = require("../../../../assets/images/email.png")
const socialmedia = require("../../../../assets/images/socialmedia.png")
const image1 = require("./../../../../assets/images/01.png");
const image2 = require("./../../../../assets/images/02.png");
const image3 = require("./../../../../assets/images/03.png");
const image4 = require("./../../../../assets/images/04.png");
const image5 = require("../../../../assets/images/card5.png")
const plus = require("../../../../assets/images/plus.png")
const header = require("../../../../assets/images/header.png")
const body = require("../../../../assets/images/body.png")
const featureimage = require("../../../../assets/images/featureimage.png")
interface Prop {
    closeModal: () => void;
}
const PersonalizedImageModal: React.FC<Prop> = React.forwardRef(
    ({ closeModal }): JSX.Element => {
        const [showModal, setShowModal] = React.useState(false);
        const [newModal, setNewModal] = React.useState(false);
        const [ShowToolTip, setShowToolTip] = React.useState(false);
        const [CreatePersonalizedImageModal, setCreatePersonalizedImageModal] = useState(false);
        // const [openDropDown, setopenDropDown] = useState(false);
        // const [openMergeDropdown, setopenMergeDropdown] = useState(false);
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
                <div className="fixed inset-0 z-50 flex items-center justify-center h-full overflow-x-hidden overflow-y-scroll outline-none focus:outline-none">
                    <div
                        className="relative z-50 mx-auto bg-white rounded-md"
                        style={{ width: "803px", height: "577px", }}
                    >
                        {" "}
                        <div className="relative flex flex-col w-full h-full border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                            <div>
                                <div className="top-0 ">
                                    <button
                                        className="flex items-center mt-4 ml-auto mr-5 text-sm font-semibold leading-none text-black rounded-full outline-none focus:outline-none"
                                        onClick={() => closeModal()}
                                    >
                                        <span className="top-0 text-2xl outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                <div className="px-32 mt-3 mb-3 text-3xl not-italic font-bold leading-9 text-center font-inter text-gray94">
                                    <h1>Where do you want to send your personalized image?</h1>
                                </div>
                            </div>
                            <div className="flex justify-center gap-10 mt-8 ">
                                <div style={{ width: "289px", height: "363px", boxShadow: " -16px 16px 20px  rgba(129,140,248,0.43)", }} className="rounded-md bg-SolidColor">
                                    <button
                                        onClick={() => {
                                            setNewModal(true);// select Template modal
                                            setShowModal(false); //where do you want personalized image modal
                                        }}
                                    >

                                        <div className="flex justify-center mt-8 ">
                                            <img className="w-32 h-16" src={socialmedia} alt="" />
                                        </div>
                                        <div className="mb-2 mt-7">
                                            <h3 className="text-3xl not-italic font-bold leading-9 text-center text-white font-inter ">Social media</h3>
                                        </div>
                                        <div className="p-6" >
                                            <p className="text-sm font-normal leading-5 text-center text-white font-inter ">You can get a code of the personalized image created and it use it on your preferred email marketing tool </p>
                                        </div>
                                    </button>
                                </div>

                                <div style={{ width: "289px", height: "363px", boxShadow: " -16px 16px 20px  rgba(129,140,248,0.43)", }} className="rounded-md bg-SolidColor ">
                                    <button>
                                        <div className="flex justify-center mt-8 ">
                                            <img className="w-20 h-16" src={email} alt="" />
                                        </div>
                                        <div className="mb-2 mt-7">
                                            <h3 className="text-3xl not-italic font-bold leading-9 text-center text-white font-inter ">Email</h3>
                                        </div>
                                        <div className="p-6" >
                                            <p className="text-sm font-normal leading-5 text-center text-white font-inter ">You can get a code of the personalized image created and it use it on your preferred email marketing tool </p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* select template Modal */}

                    <div>
                        {newModal ? (
                            <>
                                {" "}
                                <div className="fixed z-50 flex items-center justify-center h-full overflow-x-hidden overflow-y-scroll outline-none inset-1 focus:outline-none">
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
                                                        onClick={() => setNewModal(false)}
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
                                                            onClick={() => {
                                                                setCreatePersonalizedImageModal(true);
                                                                setNewModal(false);
                                                                setShowModal(false); //where do you want personalized image modal
                                                            }}
                                                            className="flex flex-col items-center justify-center py-3 border-2 border-dashed rounded-md w-52 border-bordercolor"
                                                        >
                                                            <img className="w-8 h-8" src={plus} alt="" />
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
                                                            <img
                                                                src={image5}
                                                                className="rounded-md"
                                                                width="200"
                                                                height="110"
                                                            />
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
                                                            <img
                                                                src={image2}
                                                                className="rounded-md"
                                                                width="200"
                                                                height="110"
                                                            />
                                                            <p className="mt-2 text-sm not-italic font-semibold text-lightGray">
                                                                Warm welcome to employees
                                                            </p>
                                                            <p className="text-sm not-italic font-normal leading-5 font-inter text-createcolor">Creators:</p>
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <button className="flex flex-col items-center justify-center rounded-md border-bordercolor">
                                                            <img
                                                                src={image2}
                                                                className="rounded-md"
                                                                width="200"
                                                                height="110"
                                                            />
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
                                                            <img
                                                                src={image4}
                                                                className="rounded-md"
                                                                width="200"
                                                                height="110"
                                                            />
                                                            <p className="mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray">
                                                                Warm welcome to employees
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
                                                            <p className="mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray">
                                                                Card design
                                                            </p>
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <button className="flex flex-col items-center justify-center rounded-md border-bordercolor">
                                                            <img
                                                                src={image1}
                                                                className="rounded-md"
                                                                width="200"
                                                                height="110"
                                                            />
                                                            <p className="mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray">
                                                                Warm welcome to employees                                                            </p>
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
                        ) : null}
                    </div>

                    {/* select template modal end */}
                    {/* modal for personalized modal */}
                    <div>
                        {CreatePersonalizedImageModal ? (
                            <>
                                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                                    <div className="relative w-auto max-w-3xl mx-auto my-6">
                                        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                            <div className="flex items-start justify-between p-5 rounded-t border-blueGray-200">
                                                <h3 className="text-3xl font-bold leading-9 font-inter text-gray900">
                                                    Create New Personalized Email
                                                </h3>
                                                <button
                                                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-20 focus:outline-none"
                                                    onClick={() => setCreatePersonalizedImageModal(false)}
                                                >
                                                    <span className="block w-6 h-6 text-2xl text-black bg-white outline-none focus:outline-none">
                                                        ×
                                                    </span>
                                                </button>
                                            </div>
                                            <div className="relative flex-auto p-6 mb-6 text-lg font-bold text-createEmail font-inter ">
                                                <p> Create For Email</p>
                                                <div className="flex justify-between gap-4 ">
                                                    <div className="h-40 border-2 border-transparent shadow-md w-96 ">
                                                        <button>
                                                            <div className="flex p-10 ">
                                                                <img src={header} alt="" />
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
                                                                <img src={body} alt="" />
                                                                <div className="mt-2 ml-4">
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
                                                                <img src={featureimage} alt="" />
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fixed inset-0 z-0 bg-black opacity-25 "></div>
                            </>
                        ) : null}
                    </div>
                    {/* modal for personalized modal end */}









                </div>
                <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
            </>
        );
    }
);
export default PersonalizedImageModal;
