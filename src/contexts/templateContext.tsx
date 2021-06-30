import React from "react";
import { useImmerState } from "@shrugsy/use-immer-state";
import { stageDimensions } from "../utils/defaults";

export const TemplateContext = React.createContext(null);

export const TemplateProvider: React.FC = ({ children }) => {

    const [templateData, setTemplateData] = useImmerState({
        rectangles: [{
            id: 'background',
            name: 'background',
            type: "shape",
            x: 0,
            y: 0,
            width: stageDimensions.width,
            height: stageDimensions.height,
            fill: '#559955',
            draggable: false,
        }]
    })

    return (
        <TemplateContext.Provider
            value={{ templateData, setTemplateData }}
        >
            {children}
        </TemplateContext.Provider>
    );
};