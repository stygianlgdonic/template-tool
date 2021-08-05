import React, { useContext, useEffect, useState } from 'react';
import WebFont from "webfontloader";
import MainStage from './MainStage';
import { DesignToolContext } from '../../../../../../../contexts/DesignToolContext';

const DesignTool: React.FC = () => {

    const [, , cardData, setCardData, { goForward, goBack, stepNum }] = useContext(DesignToolContext)
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [isOpenColorPicker, setIsOpenColorPicker] = useState<boolean>(false)
    const [isEditTextBox, setIsEditTextBox] = useState(false)

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
        stepNum > 1 && goBack();
    };
    const onRedo = () => {
        !!setSelectedId && unSelectAll();
        stepNum < (history.length - 1) && goForward();
    };

    const handleEditSelectedItem = () => {
        if (selectedId?.split("_")[0] === "textBoxes") {
            setIsEditTextBox(true)
            return
        }
        setIsOpenColorPicker(true)
    }

    const handleDeleteSelectedItem = () => {
        const type = selectedId?.split("_")[0]
        setCardData(prev => {
            prev.elements = prev.elements.filter(
                item => item.id !== selectedId
            )
            unSelectAll()
        })
    }

    const handleCloseEditTextModal = () => {
        setIsEditTextBox(false)
    }

    return (
        <div className="min-w-max  flex justify-center flex-col h-full">
            {/* <div className="h-20 mb-5 flex flex-wrap justify-center content-center bg-green-800">
                <p className="text-xl text-indigo600">Tempalte Design</p>
            </div> */}

            <div className="">

                {/* first col */}
                {/* <SideBar variationIndex={variationIndex} setTemplateData={setTemplateData} /> */}

                {/* Center column */}
                <div>
                    {/* <TopToolBar
                        onUndo={onUndo}
                        onRedo={onRedo}
                        setTemplateData={setTemplateData}
                        variationIndex={variationIndex}
                        selectedId={selectedId}
                    /> */}
                    <div className="flex justify-center mt-5 h-full">
                        <MainStage
                            cardData={cardData}
                            setCardData={setCardData}
                            selectedId={selectedId}
                            setSelectedId={setSelectedId}
                            unSelectAll={unSelectAll}
                            handleEditSelectedItem={handleEditSelectedItem}
                        />
                    </div>

                </div>

                {/* third col */}
                {/* <div className={selectedId ? "" : "hidden"}>
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
                </div> */}

            </div>


        </div >
    );
};
export default DesignTool
