import React, { useContext, useEffect } from 'react';
import WebFont from "webfontloader";
import MainStage from './MainStage';
import { DesignToolContext } from '../../../../../../../contexts/DesignTool/DesignToolContext';
import CardHeaderActions from '../../../../../../../contexts/DesignTool/CardHeaderActions';

const DesignTool: React.FC = () => {

    const { selectShapeCardHeader, selectTextCardHeader, emptyCardHeader } = CardHeaderActions()

    const {
        selectedId, setSelectedId,
        cardData, setCardData,
    } = useContext(DesignToolContext)

    useEffect(() => {
        if (!!selectedId) {
            const dude = cardData.elements.find((item, index) => selectedId === item.id)
            if (dude?.type === 'text') {
                selectTextCardHeader()
            }
            if (dude?.type === 'rectangle' || dude?.type === 'svg' || dude?.type === 'circle' || dude?.type === 'polygon') {
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
