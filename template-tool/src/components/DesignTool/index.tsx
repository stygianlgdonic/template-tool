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
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { ROUTE_NAMES } from '../../routes/route_names';
import { useQuery } from 'react-query';
import { template_service } from '../../services/templateService';
import { ErrorBoundary } from 'react-error-boundary';
import MainStageFallback from '../../ErrorFallacks/MainStageFallBack';
import TopToolBarFallback from '../../ErrorFallacks/TopToolBarFallback';
import SideBarFallback from '../../ErrorFallacks/SideBarFallback';
import SaveVariationFallback from '../../ErrorFallacks/SaveVariationFallback';
import SaveTemplateFallback from '../../ErrorFallacks/SaveTemplateFallback';

const DesignTool: React.FC = () => {
    const browserHistory = useHistory()

    const [templateData, setTemplateData, { goForward, goBack, stepNum, history }] = useContext(TemplateContext)
    const [justUpdated, setJustUpdated] = useState(false)

    let { templateID } = useParams<{ templateID: string | undefined }>()
    const { data, error, isLoading } = useQuery<any, Error>(["currentTemplate", templateID], () => template_service.getTemplateByID(templateID))

    useEffect(() => {
        if (!!justUpdated) return

        if (!!data && !error) {
            setTemplateData(data)
            setJustUpdated(true)
        }
    }, [data])

    const [variationIndex, setVariationIndex] = useState<number>(0)

    const [showSaveVariationModal, setShowSaveVariationModal] = useState(false)

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

    const handleSaveTemplate = async (tags: string[], selectedCategory: string) => {
        if (!!templateID) {
            await template_service.updateTemplateByID(templateID, { ...templateData, tags })
        } else {
            await template_service.addNewTemplate({ ...templateData, tags })
            browserHistory.push(ROUTE_NAMES.home)
        }
        setIsOpenSaveTemplateModal(false)
    }

    const handleDeleteTemplate = () => {
        swal({
            title: "Are you sure?",
            text: "Do you want to delete this Template?",
            icon: "warning",
            buttons: ["Cancel", "Confirm"],
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                if (!!templateID) {
                    await template_service.deleteTemplateByID(templateID)
                } else {
                    setTemplateData(INITIAL_STATE)
                }
                browserHistory.push(ROUTE_NAMES.home)
            }
        });
    }

    return (
        <div className="min-w-max bg-gray300 h-screen">
            <div className="h-20 mb-5 flex flex-wrap justify-evenly content-center bg-gray900">
                <div className="flex gap-2">
                    <NavLink
                        to={ROUTE_NAMES.home}
                        className="text-white font-semibold py-2 px-4 border border-white-500 rounded" >
                        Back to Home
                    </NavLink>
                    <NavLink
                        to={ROUTE_NAMES.select_palette}
                        className="text-white font-semibold py-2 px-4 border border-white-500 rounded" >
                        Select Palette
                    </NavLink>
                </div>
                <p className="text-xl text-white">Tempalte Design</p>
                <div className="flex gap-2">
                    <button
                        onClick={openSaveTemplateModal}
                        className="text-white font-semibold py-2 px-4 border border-white-500 rounded" >Save Template</button>
                    <button
                        onClick={handleDeleteTemplate}
                        className="text-white font-semibold py-2 px-4 border border-red rounded" >Delete Template</button>
                </div>
            </div>

            {showSaveVariationModal && (
                <ErrorBoundary
                    FallbackComponent={SaveVariationFallback}
                    onReset={() => { }}
                >
                    <SaveVariation
                        templateData={templateData}
                        handleSaveVariation={handleSaveVariation}
                    />
                </ErrorBoundary>
            )}

            {isOpenSaveTemplateModal && (
                <ErrorBoundary
                    FallbackComponent={SaveTemplateFallback}
                    onReset={() => { }}
                >
                    <SaveTemplate
                        templateData={templateData}
                        handleSaveTemplate={handleSaveTemplate}
                    />
                </ErrorBoundary>
            )}

            <div className="grid grid-cols-3 gap-4">

                {/* first col */}
                <ErrorBoundary
                    FallbackComponent={SideBarFallback}
                    onReset={() => { }}
                >
                    <SideBar variationIndex={variationIndex} setTemplateData={setTemplateData} />
                </ErrorBoundary>

                {/* Center column */}
                <div>
                    <ErrorBoundary
                        FallbackComponent={TopToolBarFallback}
                        onReset={() => { }}
                    >
                        <TopToolBar
                            onUndo={onUndo}
                            onRedo={onRedo}
                            setTemplateData={setTemplateData}
                            variationIndex={variationIndex}
                            selectedId={selectedId}
                        />
                    </ErrorBoundary>
                    <div className="flex justify-center mt-5">
                        <ErrorBoundary
                            FallbackComponent={MainStageFallback}
                            onReset={() => browserHistory.push(ROUTE_NAMES.home)}
                        >
                            <MainStage
                                templateData={templateData}
                                setTemplateData={setTemplateData}
                                variationIndex={variationIndex}
                                selectedId={selectedId}
                                setSelectedId={setSelectedId}
                                unSelectAll={unSelectAll}
                                handleEditSelectedItem={handleEditSelectedItem}
                            />
                        </ErrorBoundary>
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
