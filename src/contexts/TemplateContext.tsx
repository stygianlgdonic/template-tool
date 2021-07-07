import React, { createContext } from 'react'
import { useImmerState } from '@shrugsy/use-immer-state';
import { ORIGINAL_SVG, stageDimensions } from '../utils/defaults';

export const INITIAL_STATE = {
    palette: [
        { name: "primary", color: "#ff0000" },
        { name: "secondary", color: "#00ff00" },
        { name: "tertiary", color: "#0000ff" }
    ],
    variations: [
        {
            name: "untitled",
            face: "",
            svgs: [{
                id: "svgs_default",
                type: "svg",
                svgString: ORIGINAL_SVG,
                colorMap: { "#db5669": "#2c1e20", "#f26674": "#c50a1d", "#c4455e": "#45b9c4", "#ffde76": "#2a6a17" },
                x: 10,
                y: 20,
                width: 100,
                height: 100,
                draggable: true,
            }],
            shapes: [{
                id: 'shapes_background',
                type: "rectangle",
                x: 0,
                y: 0,
                width: stageDimensions.width,
                height: stageDimensions.height,
                // fill: '#559955',
                fillLinearGradientStartPoint: { x: 0, y: 0 },
                fillLinearGradientEndPoint: { x: stageDimensions.width, y: stageDimensions.height },
                fillLinearGradientColorStops: [0, '#559955', 1, '#559955'],
                draggable: false,
            }],
            textBoxes: [{ id: "textBoxes_default", text: 'New text', x: 150, y: 180, fontSize: 20, draggable: true, width: 200, type: "text" }],
            images: []
        }
    ],
}

export const TemplateContext = createContext(null)

export const TemplateProvider = ({ children }) => {

    const [templateData, setTemplateData] = useImmerState(INITIAL_STATE)

    return (
        <TemplateContext.Provider
            value={[templateData, setTemplateData]}
        >
            {children}
        </TemplateContext.Provider >
    );

}
