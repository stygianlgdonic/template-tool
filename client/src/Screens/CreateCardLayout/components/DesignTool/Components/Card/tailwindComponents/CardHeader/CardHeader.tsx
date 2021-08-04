import React, { useContext } from "react";
import ElementHeader from "./components/ElementHeader/ElementHeader";
import TextHeader from "./components/TextHeader/TextHeader";
import Imageheader from "./components/ImageHeader/imageheader";
import { TemplateContext } from "../../../../../../../../contexts/TemplateContext";

const CardHeader: React.FC = (): JSX.Element => {
    const [templateData, setTemplateData, { goForward, goBack, stepNum }] =
        useContext(TemplateContext);
    return (
        <div className="z-50 flex-col py-2  h-18">
            <TextHeader />
        </div>
    );
};
export default CardHeader;
