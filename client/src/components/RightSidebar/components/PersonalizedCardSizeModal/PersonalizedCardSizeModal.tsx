import React, { useEffect, useRef, useState } from "react";
// import "../../../../../SubNavBar/components/ElementSelector/components/Stickers/styles.css";
import SearchBar from "../../../../Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar";
// const header = require("../../../../assets/images/header.png")
// const body = require("../../../../assets/images/body.png")
// const featureimage = require("../../../../assets/images/featureimage.png")
import { CardType } from "./MockData"
interface Prop {
    closeModal: () => void
}
const SelectSocialMediaTemplateModal: React.FC<Prop> = ({ closeModal }): JSX.Element => {
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
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div
                    // ref={myRef}
                    className="relative max-w-3xl mx-auto my-6" style={{ width: "765px" }}>
                    <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 rounded-t border-blueGray-200">
                            <h3 className="text-3xl font-bold leading-9 font-inter text-gray900">
                                Create New Personalized Email
                            </h3>
                            <button
                                className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-20 focus:outline-none"
                                onClick={closeModal}
                            >
                                <span className="block w-6 h-6 text-2xl text-black bg-white outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        <div className="relative flex-auto p-6 mb-6 text-lg font-bold text-createEmail font-inter ">
                            <p> Create For Email</p>
                            <div className="grid grid-cols-2 gap-x-12 gap-y-6  pl-2  ">
                                {CardType.map((item, index) => (<div key={item.name} style={{ backgroundColor: index === 0 ? "white" : "white", height: index === 0 ? "160px" : "160px", width: index === 1 ? "300px" : "auto" }} className="relative h-40 border-2 border-transparent shadow-md gap-4 rounded-md  text-center pt-10 mb-3">
                                    <div style={{ display: index === 2 ? "" : "none", marginTop: index === 2 ? "20px" : "20px", top: -50, }} className="absolute  mt-6 mb-6 text-lg font-bold text-createEmail font-inter">
                                        Create For Social Media
                                    </div>

                                    <button>
                                        <div className="flex ">
                                            {/* <img src={header} alt="" /> */}
                                            <div className="mt-2 pl-4">
                                                <div className="font-bold text-left text-createEmail font-inter">
                                                    <h1>{item.name}</h1>
                                                </div>
                                                <div className="text-sm text-createEmail2 font-inter">
                                                    <p>Dimensions:{item.dimension.width}  {item.dimension.height}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </div>))}
                                {/* <div className="h-40 border-2 border-transparent shadow-md w-72 ">
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
                                </div> */}
                            </div>
                            {/* <div className="mt-6 mb-6 text-lg font-bold text-createEmail font-inter">
                                Create For Social Media
                            </div> */}
                            {/* <div className="flex justify-between gap-4 mb-3">
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
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed inset-0 z-0 bg-black opacity-25 "></div>
        </>
    );
};
export default SelectSocialMediaTemplateModal;
