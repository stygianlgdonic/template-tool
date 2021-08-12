import React, { useEffect, useRef, useState } from "react";
import CardElementsFunctions from "../../../../../../Hooks/CardElementsFunctions";
import Picker from "./Picker";

interface Props {
    closeModal: () => void
}
const CustomColorPicker: React.FC<Props> = ({
    closeModal,
}): JSX.Element => {
    const [fillType, setfillType] = useState<"" | "solid" | "gradient">("");
    const [gradientType, setGradientType] = useState<"linear" | "radial">("linear")
    const myRef = useRef(null);
    const { getSelectedElementData, handleFill, handleGradientColor, handleRadialGradientColor } = CardElementsFunctions()
    const [gradientColorNumber, setGradientColorNumber] = useState<1 | 3>(1)

    const selectedElementData = getSelectedElementData()

    const linearGradColor1 = !!selectedElementData?.fillLinearGradientColorStops ?
        selectedElementData?.fillLinearGradientColorStops[1] : "#171717"
    const linearGradColor2 = !!selectedElementData?.fillLinearGradientColorStops ?
        selectedElementData?.fillLinearGradientColorStops[3] : "#171717"
    const radialGradColor1 = !!selectedElementData?.fillRadialGradientColorStops ?
        selectedElementData?.fillRadialGradientColorStops[1] : "#171717"
    const radialGradColor2 = !!selectedElementData?.fillRadialGradientColorStops ?
        selectedElementData?.fillRadialGradientColorStops[3] : "#171717"

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

    const handleGradientTypeChange = (e) => {
        setGradientType(e.target.value)
    }

    const handleSolidColorChange = (color) => {
        handleFill(color.hex)
    }
    const handleGradientColorChange = (color) => {
        if (gradientType === "linear") {
            const color1 = gradientColorNumber === 1 ? color.hex : linearGradColor1
            const color2 = gradientColorNumber === 3 ? color.hex : linearGradColor2
            handleGradientColor(color1, color2)
        }
        if (gradientType === "radial") {
            const color1 = gradientColorNumber === 1 ? color.hex : radialGradColor1
            const color2 = gradientColorNumber === 3 ? color.hex : radialGradColor2
            handleRadialGradientColor(color1, color2)
        }
    }

    return (
        <>
            <div
                ref={myRef}
                className=" shadow rounded fixed z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
            >
                <div className="relative w-auto max-w-3xl mx-auto">
                    <div className="relative flex flex-col w-full p-2 bg-white border-0 rounded-lg  border-bordercolor focus:outline-none">
                        <label className="mt-4 ml-6 text-base font-medium leading-5 text-left text-black font-inter">
                            Fill type
                        </label>

                        <div className="flex items-start justify-between p-5 rounded-t border-blueGray-200 ">
                            <div className="flex gap-2 ml-2">
                                <div>
                                    <button
                                        onClick={() => {
                                            setfillType("solid")
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
                        <div className={fillType === "solid" ? "" : "hidden"}>
                            <div className="w-60">
                                <Picker
                                    color={selectedElementData?.fill ? selectedElementData?.fill : "#171717"}
                                    onChange={handleSolidColorChange}
                                />
                            </div>
                        </div>
                        <div className={fillType === "gradient" ? "" : "hidden"}>
                            <div className=" flex justify-evenly ">

                                <label><input
                                    onChange={handleGradientTypeChange}
                                    checked={gradientType === "linear"}
                                    value="linear"
                                    id="linear"
                                    name="linear"
                                    type="radio"
                                    className="w-4 h-4 mt-1 mb-1 mr-3 text-indigo600 border-gray300 focus:ring-indigo500"
                                />
                                    Linear
                                </label>

                                <label><input
                                    onChange={handleGradientTypeChange}
                                    checked={gradientType === "radial"}
                                    value="radial"
                                    id="radial"
                                    name="radial"
                                    type="radio"
                                    className="w-4 h-4 mt-1 mb-1 mr-3 text-left text-indigo600 border-gray300 focus:ring-indigo500"
                                />
                                    Radial
                                </label>

                            </div>
                            <div className={gradientType === "linear" ? "w-60" : "hidden"}>
                                <Picker
                                    color={
                                        !!selectedElementData?.fillLinearGradientColorStops ?
                                            selectedElementData.fillLinearGradientColorStops[gradientColorNumber] :
                                            "#171717"}
                                    onChange={handleGradientColorChange}
                                />
                            </div>
                            <div className={gradientType === "radial" ? "w-60" : "hidden"}>
                                <Picker
                                    color={
                                        !!selectedElementData?.fillRadialGradientColorStops ?
                                            selectedElementData.fillRadialGradientColorStops[gradientColorNumber] :
                                            "#171717"}
                                    onChange={handleGradientColorChange}
                                />
                            </div>

                        </div>
                        <div className="flex justify-between mt-2">
                            <div className={fillType === "gradient" ? "flex gap-2" : "hidden"}>
                                <button
                                    className={"h-10 w-10 rounded-md border " + (
                                        gradientColorNumber === 1 ? "border-gray94" : "border-bluish"
                                    )}
                                    style={{ backgroundColor: gradientType === "linear" ? linearGradColor1 : radialGradColor1 }}
                                    onClick={() => setGradientColorNumber(1)}
                                />
                                <button
                                    className={"h-10 w-10 rounded-md border " + (
                                        gradientColorNumber === 3 ? "border-gray94" : "border-bluish"
                                    )}
                                    style={{ backgroundColor: gradientType === "radial" ? radialGradColor2 : linearGradColor2 }}
                                    onClick={() => setGradientColorNumber(3)}
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
export default CustomColorPicker;
