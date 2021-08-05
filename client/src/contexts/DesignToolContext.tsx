import React, { createContext, useState } from 'react'

import { useImmerState } from '@shrugsy/use-immer-state';
import { stageDimensions } from '../utils/defaults';

export const INITIAL_STATE = {
    dimensions: { width: stageDimensions.width, height: stageDimensions.height },
    labels: [],
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
        fillLinearGradientColorStops: [0, '#60affa', 1, '#60affa'],
        draggable: false,
    }],
}


export const DesignToolContext = createContext(null)

export const DesignToolProvider = ({ children }) => {

    const [designToolnavigator, setDesignToolnavigator] = useState('element')
    const [cardData, setCardData, { goForward, goBack, stepNum, history }] = useImmerState(INITIAL_STATE)

    return (
        <DesignToolContext.Provider
            value={[
                designToolnavigator, setDesignToolnavigator,
                cardData, setCardData, { goForward, goBack, stepNum, history }
            ]}
        >
            {children}
        </DesignToolContext.Provider >
    );

}
