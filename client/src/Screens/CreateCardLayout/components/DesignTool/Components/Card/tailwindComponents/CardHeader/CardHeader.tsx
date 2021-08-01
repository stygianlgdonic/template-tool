import React from "react";
import ElementHeader from "./components/ElementHeader/ElementHeader";
import TextHeader from "./components/TextHeader/TextHeader";
import Imageheader from "./components/ImageHeader/imageheader";

const CardHeader: React.FC = (): JSX.Element => {
    return (
        <div className="flex flex-col h-18">
            <div className="py-2 ">
                <TextHeader />
            </div>
            <div className="border-b-2 border-bordercolor"></div>
        </div>
    );
};
export default CardHeader;
