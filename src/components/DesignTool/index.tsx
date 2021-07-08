import React, { useContext, useEffect, useState } from 'react';
import { stageDimensions } from "../../utils/defaults"
import * as svg from "./../../utils/svg"
import { TemplateContext } from '../../contexts/TemplateContext';
import EditTextBox from "../tailwindComponents/EditTextBox"
import ShapeColorSelector from "../tailwindComponents/ShapeColorSelector"
import SvgColorSelector from "../tailwindComponents/SvgColorSelector"
import SelectVariation from "../tailwindComponents/SelectVariation"
import SaveVariation from "../tailwindComponents/SaveVariation"
import swal from "sweetalert"
import SideBar from './SideBar';
import WebFont from "webfontloader";
import TopToolBar from './TopToolBar';
import MainStage from './MainStage';

const DesignTool: React.FC = () => {

    const [variationIndex, setVariationIndex] = useState<number>(0)

    const [showSaveVariationModal, setShowSaveVariationModal] = useState(false)

    const [templateData, setTemplateData, { goForward, goBack, stepNum }] = useContext(TemplateContext)
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [isOpenColorPicker, setIsOpenColorPicker] = useState<boolean>(false)
    const [isEditTextBox, setIsEditTextBox] = useState(false)

    // NOTE - for svgs
    const [svgString, setSvgString] = useState<string | null>(null)
    const colors = svg.getColors(svgString);
    const [colorMap, setColorMap] = useState({});

    const handleEscape = (e) => {
        if (e.key === "Escape") {
            setIsOpenColorPicker(false)
            setIsEditTextBox(false)
            setSelectedId(null)
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleEscape, false);
        WebFont.load({
            google: {
                families: ['Comfortaa', 'Josefin Sans', 'Euphoria Script', 'Oswald', 'Alfa Slab One', 'Bangers', 'Caveat', 'DM Sans', 'East Sea Dokdo', 'Homemade Apple', 'Kristi', 'Lobster Two', 'Maven Pro', 'Monoton', 'Montserrat', 'Playfair Display', 'Press Start 2P', 'Raleway', 'Roboto Slab', 'Shadows Into Light', 'Swanky and Moo Moo']
            }
        });

        return () => {
            document.removeEventListener("keydown", handleEscape, false);
        };
    }, []);

    useEffect(() => {
        if (selectedId?.split("_")[0] === "svgs") {
            const svgIndex = templateData.variations[variationIndex].svgs?.findIndex(item => item.id === selectedId)
            setSvgString(templateData.variations[variationIndex].svgs[svgIndex].svgString)
            setColorMap(templateData.variations[variationIndex].svgs[svgIndex].colorMap)
        }
    }, [selectedId])

    const onUndo = () => {
        !!setSelectedId && setSelectedId(null);
        stepNum > 1 && goBack();
    };
    const onRedo = () => {
        !!setSelectedId && setSelectedId(null);
        stepNum < (history.length - 1) && goForward();
    };

    const handleSvgElementColorChange = (oldColor, newColor) => {
        setColorMap({
            ...colorMap,
            [oldColor]: newColor
        });
    }

    const handleSaveSvg = () => {
        setTemplateData(prev => {
            prev.variations[variationIndex].svgs.find(item => item.id === selectedId).colorMap = colorMap
        })
        setSelectedId(null)
        setIsOpenColorPicker(false)
    }

    const handleGradientColorChange = (color1: string, color2: string) => {
        setTemplateData((prev) => {
            const index = prev.variations[variationIndex].shapes?.findIndex(shape => shape.id === selectedId)

            const fillLinearGradientColorStops = [0, color1, 1, color2]
            const fillLinearGradientStartPoint = { x: 0, y: 0 }
            const fillLinearGradientEndPoint = {
                x: selectedId === "shapes_background" ? stageDimensions.width : 100,
                y: selectedId === "shapes_background" ? stageDimensions.height : 100
            }
            prev.variations[variationIndex].shapes[index] = {
                ...prev.variations[variationIndex].shapes[index],
                fill: "",
                fillLinearGradientStartPoint,
                fillLinearGradientEndPoint,
                fillLinearGradientColorStops,
            }
        })
    }

    const handleStrokeChange = (width: number, strokeColor: string) => {
        setTemplateData(prev => {
            const index = prev.variations[variationIndex].shapes?.findIndex(shape => shape.id === selectedId)
            prev.variations[variationIndex].shapes[index].stroke = strokeColor
            prev.variations[variationIndex].shapes[index].strokeWidth = width
        })
    }

    const handleCornerRadiusChange = (radius: number) => {
        setTemplateData(prev => {
            const index = prev.variations[variationIndex].shapes?.findIndex(shape => shape.id === selectedId)
            prev.variations[variationIndex].shapes[index].cornerRadius = radius
        })
    }

    const handleCloseColorPicker = () => {
        setIsOpenColorPicker(false)
        setSelectedId(null)
    }

    const handleSaveVariation = (variationData: any) => {
        setTemplateData(prev => {
            prev.variations[variationIndex].name = variationData.name
            prev.variations[variationIndex].face = variationData.face
        })
        setShowSaveVariationModal(false)
    }

    const handleAddVariation = () => {
        if (templateData.variations.length < 4) {
            setTemplateData(prev => {
                prev.variations.push(templateData.variations[variationIndex])
            }, false)
            setVariationIndex(prev => (prev + 1))
        } else {
            swal("Cannot create more than 4 variations!")
        }
    }

    const handleEditSelectedItem = () => {
        if (selectedId.split("_")[0] === "textBoxes") {
            setIsEditTextBox(true)
            return
        }
        setIsOpenColorPicker(true)
    }

    const handleDeleteSelectedItem = () => {
        const type = selectedId.split("_")[0]
        setTemplateData(prev => {
            prev.variations[variationIndex][type] = prev.variations[variationIndex][type].filter(
                item => item.id !== selectedId
            )
            setSelectedId(null)
        })
    }

    const handleCloseEditTextModal = () => {
        setIsEditTextBox(false)
    }

    return (
        <div>
            <div className="h-20 mb-5 flex flex-wrap justify-center content-center bg-green-800">
                <p className="text-xl text-white">Tempalte Design</p>
            </div>

            {isOpenColorPicker && selectedId?.split('_')[0] === "shapes" && (
                <ShapeColorSelector
                    selectedId={selectedId}
                    templateData={templateData}
                    variationIndex={variationIndex}
                    handleGradientColorChange={handleGradientColorChange}
                    currentSelectedColor={templateData.variations[variationIndex].shapes?.find(item => item.id === selectedId)?.fill || "#000000"}
                    currentPalette={templateData.palette}
                    handleCloseColorPicker={handleCloseColorPicker}
                    handleStrokeChange={handleStrokeChange}
                    handleCornerRadiusChange={handleCornerRadiusChange}
                />
            )}

            {isOpenColorPicker && selectedId?.split('_')[0] === "svgs" && (
                <SvgColorSelector
                    colors={colors}
                    colorMap={colorMap}
                    currentPalette={templateData.palette}
                    handleSvgElementColorChange={handleSvgElementColorChange}
                    handleSaveSvg={handleSaveSvg}
                />
            )}

            {showSaveVariationModal && (
                <SaveVariation
                    templateData={templateData}
                    handleSaveVariation={handleSaveVariation}
                />
            )}

            {isEditTextBox && <EditTextBox
                selectedId={selectedId}
                templateData={templateData}
                setTemplateData={setTemplateData}
                variationIndex={variationIndex}
                handleCloseEditTextModal={handleCloseEditTextModal}
            />}

            <div className="grid grid-cols-3 gap-4">

                {/* first col */}
                <SideBar variationIndex={variationIndex} setTemplateData={setTemplateData} />

                {/* Center column */}
                <div>
                    <TopToolBar
                        onUndo={onUndo}
                        onRedo={onRedo}
                        setTemplateData={setTemplateData}
                        variationIndex={variationIndex}
                        selectedId={selectedId}
                    />
                    <div className="flex justify-center mt-5">
                        <MainStage
                            templateData={templateData}
                            setTemplateData={setTemplateData}
                            variationIndex={variationIndex}
                            selectedId={selectedId}
                            setSelectedId={setSelectedId}
                            handleEditSelectedItem={handleEditSelectedItem}
                        />
                    </div>

                    <div className="flex justify-center mt-5">
                        <SelectVariation
                            variations={templateData.variations}
                            variationIndex={variationIndex}
                            setVariationIndex={setVariationIndex}
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                            onClick={() => setShowSaveVariationModal(true)}
                        >Save Variation</button>
                        <button
                            className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                            onClick={handleAddVariation}
                        >Add New Variation</button>
                    </div>
                </div>

                {/* third col */}
                <div className={selectedId ? "" : "hidden"}>
                    <div className="flex justify-center">
                        <button
                            onClick={handleEditSelectedItem}
                            className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                        >Edit</button>
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={handleDeleteSelectedItem}
                            className={selectedId === "shape_background" ? "hidden" : "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"}
                        >Delete</button>
                    </div>
                </div>

            </div>


        </div >
    );
};
export default DesignTool
