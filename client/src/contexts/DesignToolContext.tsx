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
        fillLinearGradientColorStops: [0, '#ffffff', 1, '#ffffff'],
        draggable: false,
    }],
}


export const DesignToolContext = createContext(null)

export const DesignToolProvider = ({ children }) => {

    const [designToolnavigator, setDesignToolnavigator] = useState('element')
    const [dashboardnavigator, setDashboardnavigator] = useState('home')
    const [sidebarnavigator, setSidebarnavigator] = useState('')
    const [designHeadernavigator, setDesignHeadernavigator] = useState('')
    const [cardData, setCardData, { goForward, goBack, stepNum, history }] = useImmerState(INITIAL_STATE)
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <DesignToolContext.Provider
            value={{
                designToolnavigator, setDesignToolnavigator,
                sidebarnavigator, setSidebarnavigator,
                dashboardnavigator, setDashboardnavigator,
                designHeadernavigator, setDesignHeadernavigator,
                selectedId, setSelectedId,
                cardData, setCardData,
                cardHistory: { goForward, goBack, stepNum, history }
            }}
        >
            {children}
        </DesignToolContext.Provider >
    );

}
