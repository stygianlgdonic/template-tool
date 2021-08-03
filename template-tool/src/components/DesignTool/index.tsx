import React, { useContext, useEffect, useState } from 'react';
import { INITIAL_STATE, TemplateContext } from '../../contexts/TemplateContext';
import SelectVariation from "../tailwindComponents/SelectVariation"
import SaveVariation from "../tailwindComponents/SaveVariation"
import SaveTemplate from "../tailwindComponents/SaveTemplate"
import swal from "sweetalert"
import SideBar from './SideBar';
import WebFont from "webfontloader";
import TopToolBar from './TopToolBar';
import MainStage from './MainStage';
import EditingTools from './EditingTools';
import { NavLink } from 'react-router-dom';
import { ROUTE_NAMES } from '../../routes/route_names';
import { addNewTemplate } from '../../services/templateService';
// import { useMutation } from 'react-query';

const DesignTool: React.FC = () => {

    // const addNewTemplateMutation = useMutation(addNewTemplate)

    const [variationIndex, setVariationIndex] = useState<number>(0)

    const [showSaveVariationModal, setShowSaveVariationModal] = useState(false)

    const [templateData, setTemplateData, { goForward, goBack, stepNum, history }] = useContext(TemplateContext)
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [isOpenColorPicker, setIsOpenColorPicker] = useState<boolean>(false)
    const [isEditTextBox, setIsEditTextBox] = useState(false)
    const [isOpenSaveTemplateModal, setIsOpenSaveTemplateModal] = useState(false)

    useEffect(() => {
        setIsOpenColorPicker(false)
        setIsEditTextBox(false)
    }, [selectedId])

    const unSelectAll = () => {
        setIsOpenColorPicker(false)
        setIsEditTextBox(false)
        setSelectedId(null)
    }

    const handleEscape = (e) => {
        if (e.key === "Escape") {
            unSelectAll()
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

    const onUndo = () => {
        !!setSelectedId && unSelectAll();
        if (stepNum > 0) {
            if (variationIndex > 0 && (history[stepNum].variations.length > history[stepNum - 1].variations.length)) {
                setVariationIndex(variationIndex - 1)
            }
            goBack();
        }
    };
    const onRedo = () => {
        !!setSelectedId && unSelectAll();
        if (stepNum > 0) {
            if (variationIndex > 0 && (history[stepNum].variations.length > history[stepNum + 1].variations.length)) {
                setVariationIndex(variationIndex - 1)
            }
        }
        stepNum < (history.length - 1) && goForward();
    };

    const handleSaveVariation = (variationData: any) => {
        setTemplateData(prev => {
            prev.variations[variationIndex].name = variationData.name
            prev.variations[variationIndex].face = variationData.face
        })
        setShowSaveVariationModal(false)
    }

    const handleAddVariation = () => {
        if (templateData.variations.length < 3) {
            setTemplateData(prev => {
                prev.variations.push(templateData.variations[variationIndex])
            })
            setVariationIndex(prev => (prev + 1))
        } else {
            swal("Cannot create more than 3 variations!")
        }
    }

    const handleDeleteVariation = () => {
        const variationsLength = templateData.variations.length
        swal({
            title: "Are you sure?",
            text: "Do you want to delete this variation?",
            icon: "warning",
            buttons: ["Cancel", "Confirm"],
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                if (variationsLength > 1) {
                    setTemplateData(prev => {
                        prev.variations.splice(variationIndex, 1)
                        if (variationIndex === (variationsLength - 1)) setVariationIndex(variationIndex - 1)
                    })
                } else {
                    setTemplateData(INITIAL_STATE)
                }
            }
        });
    }

    const handleEditSelectedItem = () => {
        if (selectedId.split("_")[0] === "textBoxes") {
            setIsEditTextBox(true)
            return
        }
        setIsOpenColorPicker(true)
    }

    const handleDeleteSelectedItem = () => {
        setTemplateData(prev => {
            prev.variations[variationIndex].elements = prev.variations[variationIndex].elements.filter(
                item => item.id !== selectedId
            )
            unSelectAll()
        })
    }

    const handleCloseEditTextModal = () => {
        setIsEditTextBox(false)
    }

    const openSaveTemplateModal = () => {
        setIsOpenSaveTemplateModal(true)
    }

    const handleSaveTemplate = (tags: string[], selectedCategory: string) => {
        console.log({ tags, selectedCategory })
        // TODO - handle crud into db here
        addNewTemplate({ ...templateData, tags })
        setIsOpenSaveTemplateModal(false)
    }

    return (
        <div className="min-w-max bg-gray300 h-screen">
            <div className="h-20 mb-5 flex flex-wrap justify-evenly content-center bg-gray900">
                <NavLink
                    to={ROUTE_NAMES.select_palette}
                    className="text-white font-semibold py-2 px-4 border border-white-500 rounded" >Select Palette</NavLink>
                <p className="text-xl text-white">Tempalte Design</p>
                <button
                    onClick={openSaveTemplateModal}
                    className="text-white font-semibold py-2 px-4 border border-white-500 rounded" >Save Template</button>
            </div>

            {showSaveVariationModal && (
                <SaveVariation
                    templateData={templateData}
                    handleSaveVariation={handleSaveVariation}
                />
            )}

            {isOpenSaveTemplateModal && (
                <SaveTemplate
                    templateData={templateData}
                    handleSaveTemplate={handleSaveTemplate}
                />
            )}

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
                            unSelectAll={unSelectAll}
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
                        <button
                            className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                            onClick={handleDeleteVariation}
                        >Delete variation</button>
                    </div>
                </div>

                {/* third col */}
                <div className={selectedId ? "" : "hidden"}>
                    <EditingTools
                        selectedId={selectedId}
                        unSelectAll={unSelectAll}
                        isOpenColorPicker={isOpenColorPicker}
                        isEditTextBox={isEditTextBox}
                        templateData={templateData}
                        setTemplateData={setTemplateData}
                        variationIndex={variationIndex}
                        handleEditSelectedItem={handleEditSelectedItem}
                        handleDeleteSelectedItem={handleDeleteSelectedItem}
                        handleCloseEditTextModal={handleCloseEditTextModal}
                    />
                </div>

            </div>


        </div >
    );
};
export default DesignTool
