import React, { useContext } from "react";
import ElementHeader from "./components/ElementHeader/ElementHeader";
import TextHeader from "./components/TextHeader/TextHeader";
import Imageheader from "./components/ImageHeader/imageheader";
import { TemplateContext } from "../../../../../../../../contexts/TemplateContext";

const CardHeader: React.FC = (): JSX.Element => {
    const [templateData, setTemplateData, { goForward, goBack, stepNum }] = useContext(TemplateContext)
    return (
        <div className=" flex-col h-18 z-50 py-2" >
            <TextHeader />
        </div>
    );
};
export default CardHeader;
