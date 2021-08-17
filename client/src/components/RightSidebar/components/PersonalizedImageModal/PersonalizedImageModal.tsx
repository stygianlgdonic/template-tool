import React, { useEffect, useRef, useState } from "react";
// import SearchBar from "../../../../Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar";
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
    displayModalChange: any
}
const PersonalizedImageModal: React.FC<Prop> = React.forwardRef(
    ({ closeModal, displayModalChange }): JSX.Element => {
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
                        // ref={myRef}
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
                                        onClick={() => displayModalChange("SocialMedia")}
                                    // onClick={() => {
                                    //     setNewModal(true);// select Template modal
                                    //     setShowModal(false); //where do you want personalized image modal
                                    // }}
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
                </div>
                <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
            </>
        );
    }
);
export default PersonalizedImageModal;
