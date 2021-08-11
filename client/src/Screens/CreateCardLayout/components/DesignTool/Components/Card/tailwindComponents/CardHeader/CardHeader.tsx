import React, { useContext } from "react";
import ElementHeader from "./components/ElementHeader/ElementHeader";
import TextHeader from "./components/TextHeader/TextHeader";
import { DesignToolContext } from "../../../../../../../../contexts/DesignTool/DesignToolContext";
import CardElementsFunctions from "../../../../../../../../Hooks/CardElementsFunctions";

interface Props {
    $tr: any
}

const CardHeader: React.FC<Props> = ({ $tr }): JSX.Element => {
    const {
        designToolState
    } = useContext(DesignToolContext)
    const { handleDeleteSelectedItem } = CardElementsFunctions()

    const handleDeleteClick = () => {
        $tr?.current?.detach()
        handleDeleteSelectedItem()
    }

    return (

        <div style={{ height: "61px" }} className="z-50 flex-col py-2  
        ">
            <div className={designToolState.card_header_state === "text" ? "" : "hidden"}>
                <TextHeader handleDeleteClick={handleDeleteClick} />
            </div>
            <div className={designToolState.card_header_state === "shape" ? "" : "hidden"}>
                <ElementHeader handleDeleteClick={handleDeleteClick} />
            </div>
        </div>
    );
};
export default CardHeader;
