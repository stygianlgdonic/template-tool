import React, { useContext, useEffect, useState } from 'react';
import WebFont from "webfontloader";
import MainStage from './MainStage';
import { DesignToolContext } from '../../../../../../../contexts/DesignToolContext';

const DesignTool: React.FC = () => {

    const {
        designToolnavigator, setDesignToolnavigator,
        selectedId, setSelectedId,
        cardData, setCardData,
        cardHistory: { goForward, goBack, stepNum, history }
    } = useContext(DesignToolContext)

    const handleEscape = (e) => {
        if (e.key === "Escape") {
            setSelectedId()
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
                    unSelectAll={() => setSelectedId(null)}
                />
            </div>
        </div>
    );
};
export default DesignTool
