import React, { useContext } from "react";
import ElementHeader from "./components/ElementHeader/ElementHeader";
import TextHeader from "./components/TextHeader/TextHeader";
import { DesignToolContext } from "../../../../../../../../contexts/DesignTool/DesignToolContext";

const CardHeader: React.FC = (): JSX.Element => {
    const {
        designToolState
    } = useContext(DesignToolContext)
    return (

        <div style={{ height: "61px" }} className="z-50 flex-col py-2  
        ">
            <div className={designToolState.card_header_state === "text" ? "" : "hidden"}>
                <TextHeader />
            </div>
            <div className={designToolState.card_header_state === "shape" ? "" : "hidden"}>
                <ElementHeader />
            </div>
        </div>
    );
};
export default CardHeader;
