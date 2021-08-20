import React, { useContext, useEffect, useRef } from "react";
import { INITIAL_STATE, TemplateContext } from "../../../../contexts/TemplateContext";
import { templateDimensions } from "./dimensions"
import { useHistory } from "react-router";
import { ROUTE_NAMES } from "../../../../routes/route_names";
const featureimage = require("../../../../assets/images/featureimage.png")
interface Prop {
    closeModal: () => void
}
const SelectTemplateDimensions: React.FC<Prop> = ({ closeModal }): JSX.Element => {
    const routerHistory = useHistory()
    const myRef = useRef(null);
    const [, setTemplateData] = useContext(TemplateContext)


    const handleClickOutside = (e) => {
        if (!myRef.current?.contains(e.target)) {
            closeModal();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    });

    const createNewTemplate = (templateDimensions: { width: number, height: number }) => {
        setTemplateData(prev => {
            prev.dimensions = { ...templateDimensions }
            prev.tags = []
            prev.variations[0].elements = [{
                ...INITIAL_STATE.variations[0].elements[0],
                width: templateDimensions.width,
                height: templateDimensions.height
            }]
        }, false)
        routerHistory.push(ROUTE_NAMES.select_palette)
    }

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div
                    ref={myRef}
                    className="relative max-w-3xl mx-auto my-6" style={{ width: "765px" }}>
                    <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                        <div className=" flex flex-row-reverse mt-2 ml-2  ">
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
                        </div>
                        <div className="relative flex-auto p-6 mb-6 text-lg font-bold text-createEmail font-inter ">
                            <div className="mb-4 ">
                                <p> Create For Email</p>
                            </div>
                            <div className="grid grid-cols-2 gap-x-12 gap-y-6  pl-2  ">
                                {templateDimensions.map((item, index) => (
                                    <div key={item.name} style={{ display: item.name === "Header" ? "" : "", backgroundColor: index === 0 ? "white" : "white", height: index === 0 ? "160px" : "160px", width: index === 1 ? "300px" : "auto" }} className="relative h-40 border-2 border-transparent shadow-md gap-4 rounded-md  text-center pt-10 mb-3">
                                        <div style={{ display: index === 2 ? "" : "none", marginTop: index === 2 ? "20px" : "20px", top: -55, }} className="absolute  mt-6 mb-6 text-lg font-bold text-createEmail font-inter">
                                            Create For Social Media
                                        </div>

                                        <button onClick={() => createNewTemplate({ width: (item.dimension.width * item.scaleFactor), height: (item.dimension.height * item.scaleFactor) })}>
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
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed inset-0 z-0 bg-black opacity-25 "></div>
        </>
    );
};
export default SelectTemplateDimensions;
