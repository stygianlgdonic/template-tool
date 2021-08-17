import React, { useContext, useEffect, useRef, useState } from "react";
import { SketchPicker } from "react-color"
import { DesignToolContext } from "../../../../../../../../../../contexts/DesignTool/DesignToolContext";
import CardElementsFunctions from "../../../../../../../../../../Hooks/CardElementsFunctions";
interface Prop {
    closeModal: () => void
    currentColor: string
}
const BackgroundColorModal: React.FC<Prop> = ({
    closeModal,
    currentColor
}): JSX.Element => {
    const [fillType, setfillType] = useState<"solid" | "gradient">("solid");
    const [gradientType, setGradientType] = useState<"linear" | "radial">("linear")
    const myRef = useRef(null);
    const { handleFill, handleGradientColor, handleRadialGradientColor } = CardElementsFunctions()
    const { cardData } = useContext(DesignToolContext)

    const handleColorChange = (color: string, colorType) => {

        if (colorType === "linear") {
            handleGradientColor(color, "#F9F9F9", "shapes_background")
        }
        if (colorType === "radial") {
            handleRadialGradientColor(color, "#F9F9F9", "shapes_background")
        }
        if (colorType === "solid") {
            handleFill(color, "shapes_background")
        }
    }

    const handleClickOutside = (e) => {
        //   console.log({ LOL: reference.current.contains(e.target), ee: e.target });
        if (!myRef.current.contains(e.target)) {
            // setShowModal(false);
            closeModal();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    });

    return (
        <>
            <div
                ref={myRef}
                className="fixed z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
            >
                <div className="relative w-auto max-w-3xl mx-auto my-6">
                    <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg border-bordercolor focus:outline-none">
                        <label className="mt-4 ml-6 text-base font-medium leading-5 text-left text-black font-inter">
                            Fill type
                        </label>

                        <div className="flex items-start justify-between p-5 rounded-t border-blueGray-200 ">
                            <div className="flex gap-2 ml-2">
                                <div>
                                    <button
                                        onClick={() => {
                                            setfillType("solid")
                                            handleColorChange(currentColor, "solid")
                                        }}
                                        type="button"
                                        className={
                                            " w-14 font-inter h-10 inline-flex items-center px-3 py-1.5 border-2 border-gray300 text-xs font-medium rounded-md shadow-sm   " +
                                            (fillType === "solid"
                                                ? "bg-SolidColor text-white"
                                                : "text-gradientColor bg-jacksonsGray")
                                        }
                                    >
                                        Solid
                                    </button>
                                </div>
                                <div>
                                    <button
                                        onClick={() => setfillType("gradient")}
                                        type="button"
                                        className={"w-28 font-inter h-10 inline-flex text-center items-center px-5 py-1.5 border-2 border-gray300 text-xs font-medium  rounded-md shadow-sm "
                                            + (fillType === "gradient"
                                                ? "bg-SolidColor text-white"
                                                : "text-gradientColor bg-jacksonsGray")}
                                    >
                                        Fill gradient
                                    </button>
                                </div>
                                <div className="mt-2 ml-2"></div>
                            </div>
                        </div>
                        <div className={fillType === "solid" ? "hidden" : ""}>
                            <div className="flex ">
                                <div className="flex">
                                    <input
                                        onClick={() => setGradientType("linear")}
                                        checked={gradientType === "linear"}
                                        id="push-everything"
                                        name="push-notifications"
                                        type="radio"
                                        className="w-4 h-4 mt-1 text-indigo600 border-gray300 focus:ring-indigo500"
                                    />
                                    <p className="ml-1 text-base font-medium leading-5 text-lightGray font-inter">
                                        Linear
                                    </p>
                                </div>
                                <div className="flex">
                                    <input
                                        onClick={() => setGradientType("radial")}
                                        checked={gradientType === "radial"}
                                        id="push-everything"
                                        name="push-notifications"
                                        type="radio"
                                        className="w-4 h-4 mt-1 text-left text-indigo600 border-gray300 focus:ring-indigo500"
                                    />
                                    <p className="ml-1 text-base font-medium leading-5 text-lightGray font-inter">
                                        Radial
                                    </p>
                                </div>
                            </div>
                            <div className={" w-60 " + (gradientType === "linear" ? "" : "hidden")} >
                                <SketchPicker
                                    width="w-60"
                                    color={
                                        !!cardData?.elements[0]?.fillLinearGradientColorStops &&
                                        cardData?.elements[0]?.fillLinearGradientColorStops[1]
                                    }
                                    onChange={(color) => handleColorChange(color.hex, "linear")}
                                />
                            </div>
                            <div className={" w-60 " + (gradientType === "radial" ? "" : "hidden")} >
                                <SketchPicker
                                    width="w-60"
                                    color={
                                        !!cardData?.elements[0]?.fillRadialGradientColorStops &&
                                        cardData?.elements[0]?.fillRadialGradientColorStops[1]
                                    }
                                    onChange={(color) => handleColorChange(color.hex, "radial")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed inset-0 z-40 bg-transparent opacity-25"></div>
        </>
    );
};
export default BackgroundColorModal;
