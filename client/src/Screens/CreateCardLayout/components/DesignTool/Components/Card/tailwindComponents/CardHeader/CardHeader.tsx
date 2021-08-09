import React, { useContext } from "react";
import ElementHeader from "./components/ElementHeader/ElementHeader";
import TextHeader from "./components/TextHeader/TextHeader";
import Imageheader from "./components/ImageHeader/imageheader";
import { TemplateContext } from "../../../../../../../../contexts/TemplateContext";
import { DesignToolContext } from "../../../../../../../../contexts/DesignToolContext";

const CardHeader: React.FC = (): JSX.Element => {
    const {
        designToolnavigator, setDesignToolnavigator,
        designHeadernavigator, setDesignHeadernavigator,
        selectedId, setSelectedId,
        cardData, setCardData,
        cardHistory: { goForward, goBack, stepNum, history }
    } = useContext(DesignToolContext)
    return (

        <div style={{ height: "61px" }} className="z-50 flex-col py-2  
        ">
            {!!selectedId && designHeadernavigator === "text" && <TextHeader />}
            {!!selectedId && designHeadernavigator === "rect" && <ElementHeader />}
        </div>
    );
};
export default CardHeader;
