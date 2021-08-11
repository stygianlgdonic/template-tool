import React, { useContext, useEffect } from 'react';
import WebFont from "webfontloader";
import MainStage from './MainStage';
import { DesignToolContext } from '../../../../../../../contexts/DesignTool/DesignToolContext';
import CardHeaderActions from '../../../../../../../contexts/DesignTool/CardHeaderActions';

interface Props {
    $stage: any
    $layer: any
    $tr: any
}

const DesignTool: React.FC<Props> = ({ $stage, $layer, $tr }) => {

    const { selectShapeCardHeader, selectTextCardHeader, emptyCardHeader } = CardHeaderActions()

    const {
        selectedId, setSelectedId,
        cardData, setCardData,
    } = useContext(DesignToolContext)

    useEffect(() => {
        if (!!selectedId) {
            const shape = cardData.elements.find((item, index) => selectedId === item.id)
            if (shape?.type === 'text') {
                selectTextCardHeader()
            }
            if (shape?.type === 'rectangle' || shape?.type === 'svg' || shape?.type === 'circle' || shape?.type === 'polygon' || shape?.type === 'line') {
                selectShapeCardHeader()
            }
        }


    }, [selectedId])

    const handleEscape = (e) => {
        if (e.key === "Escape") {
            setSelectedId(null)
            emptyCardHeader()
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

    return (
        <div className="min-w-max  flex justify-center flex-col h-full">
            <div className="flex justify-center mt-5 h-full">
                <MainStage
                    $stage={$stage}
                    $layer={$layer}
                    $tr={$tr}
                    cardData={cardData}
                    setCardData={setCardData}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                />
            </div>
        </div>
    );
};
export default DesignTool
