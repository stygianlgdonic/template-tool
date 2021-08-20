import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DesignToolContext, INITIAL_STATE } from "../../../../contexts/DesignTool/DesignToolContext";
const featureimage = require("../../../../assets/images/featureimage.png")
import { CardType } from "./MockData"
interface Prop {
    closeModal: () => void
    displayModalChange: any
}
const SelectSocialMediaTemplateModal: React.FC<Prop> = ({ closeModal, displayModalChange }): JSX.Element => {
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
    const navigate = useNavigate()
    const { cardData, setCardData } = useContext(DesignToolContext)

    // TODO - use this method for creating new card with selected dimensions
    const createNewCard = (cardDimensions: { width: number, height: number }) => {
        setCardData(prev => {
            prev.dimensions = { ...cardDimensions }
            prev.labels = []
            prev.elements = [{
                ...INITIAL_STATE.elements[0],
                width: cardDimensions.width,
                height: cardDimensions.height
            }]
        }, false)

        navigate("/createcard")

    }

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div
                    className="relative max-w-3xl mx-auto my-6" style={{ width: "765px" }}>
                    <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                        <div className=" flex justify-between mt-2 ml-2  ">
                            <div className="mt-2">
                                <button
                                    onClick={() => displayModalChange("SocialMedia")}
                                >
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
                            </div>
                            <div>
                                <button
                                    className=" text-base font-medium float-right mr-3  ml-auto  leading-none text-black border-0 outline-none  focus:outline-none"
                                    onClick={closeModal}
                                >x</button>
                            </div>
                        </div>

                        <div className="flex items-start justify-between p-5 rounded-t ">
                            <h3 className="text-3xl font-bold leading-9 font-inter text-gray900">
                                Create New Personalized Email
                            </h3>
                            {/* <button
                                className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none  focus:outline-none"
                                onClick={closeModal}
                            >
                                <span className="block w-6 h-6 text-2xl text-black bg-white outline-none focus:outline-none">
                                    ×
                                </span>
                            </button> */}
                        </div>
                        <div className="relative flex-auto p-6 mb-6 text-lg font-bold text-createEmail font-inter ">
                            <div className="mb-4 ">
                                <p> Create For Email</p>
                            </div>
                            <div className="grid grid-cols-2 gap-x-12 gap-y-6  pl-2  ">
                                {CardType.map((item, index) => (<div key={item.name} style={{ display: item.name === "Header" ? "" : "", backgroundColor: index === 0 ? "white" : "white", height: index === 0 ? "160px" : "160px", width: index === 1 ? "300px" : "auto" }} className="relative h-40 border-2 border-transparent shadow-md gap-4 rounded-md  text-center pt-10 mb-3">
                                    <div style={{ display: index === 2 ? "" : "none", marginTop: index === 2 ? "20px" : "20px", top: -55, }} className="absolute  mt-6 mb-6 text-lg font-bold text-createEmail font-inter">
                                        Create For Social Media
                                    </div>

                                    <button onClick={() => createNewCard({ width: (item.dimension.width * item.scaleFactor), height: (item.dimension.height * item.scaleFactor) })}>
                                        <div className="flex ">
                                            <img src={featureimage} alt="" />
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed inset-0 z-0 bg-black opacity-25 "></div>
        </>
    );
};
export default SelectSocialMediaTemplateModal;
