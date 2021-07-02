import React, { createContext } from 'react'
import { useImmerState } from '@shrugsy/use-immer-state';
import { ORIGINAL_SVG, stageDimensions } from '../utils/defaults';

const INITIAL_STATE = {
    palette: [
        { name: "primary", color: "#ff0000" },
        { name: "secondary", color: "#00ff00" },
        { name: "tertiary", color: "#0000ff" }
    ],
    variations: [],
    svgs: [{
        id: "svg_default",
        type: "svg",
        svgString: ORIGINAL_SVG,
        x: 100,
        y: 200,
        // width: 100,
        // height: 100,
        draggable: true,
    }],
    rectangles: [{
        id: 'rect_background',
        type: "shape",
        x: 0,
        y: 0,
        width: stageDimensions.width,
        height: stageDimensions.height,
        fill: '#559955',
        draggable: false,
    }]
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
