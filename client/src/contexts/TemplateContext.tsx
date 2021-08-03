import React, { createContext } from 'react'
import { useImmerState } from '@shrugsy/use-immer-state';
import { stageDimensions } from '../utils/defaults';

export const INITIAL_STATE = {
    dimensions: { width: stageDimensions.width, height: stageDimensions.height },
    tags: [],
    palette: [
        { name: "primary", color: "#ff0000" },
        { name: "secondary", color: "#00ff00" },
        { name: "tertiary", color: "#0000ff" }
    ],
    variations: [
        {
            name: "untitled",
            face: "",
            elements: [{
                id: 'shapes_background',
                type: "rectangle",
                x: 0,
                y: 0,
                width: stageDimensions.width,
                height: stageDimensions.height,
                // fill: '#F0F0F0',
                fillLinearGradientStartPoint: { x: 0, y: 0 },
                fillLinearGradientEndPoint: { x: stageDimensions.width, y: stageDimensions.height },
                fillLinearGradientColorStops: [0, '#Ffffff', 1, '#ffffff'],
                draggable: false,
            }, { name: "object", x: 150, y: 150, width: 100, stroke: "#000000", strokeWidth: 4, height: 100, fill: '#FF0000', draggable: true, type: "rectangle" }],
        }
    ],
}

export const TemplateContext = createContext(null)

export const TemplateProvider = ({ children }) => {

    const [templateData, setTemplateData, { goForward, goBack, stepNum, history }] = useImmerState(INITIAL_STATE)

    return (
        <TemplateContext.Provider
            value={[templateData, setTemplateData, { goForward, goBack, stepNum, history }]}
        >
            {children}
        </TemplateContext.Provider >
    );

}
