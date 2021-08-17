import React, { createContext, useState, useReducer, useRef } from 'react'

import { useImmerState } from '@shrugsy/use-immer-state';
import { stageDimensions } from '../../utils/defaults';
import { designToolReducer, designToolInit } from './DesingToolReducers';

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

    const $stage = useRef(null)
    const $layer = useRef(null)
    const $tr = useRef(null)

    const [designToolnavigator, setDesignToolnavigator] = useState('element')
    const [dashboardnavigator, setDashboardnavigator] = useState('home')
    const [sidebarnavigator, setSidebarnavigator] = useState('')
    const [cardData, setCardData, { goForward, goBack, stepNum, history }] = useImmerState(INITIAL_STATE)
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const [designToolState, designToolDispatch] = useReducer(designToolReducer, designToolInit)

    return (
        <DesignToolContext.Provider
            value={{
                $stage, $layer, $tr,
                designToolnavigator, setDesignToolnavigator,
                sidebarnavigator, setSidebarnavigator,
                dashboardnavigator, setDashboardnavigator,
                selectedId, setSelectedId,
                cardData, setCardData,
                cardHistory: { goForward, goBack, stepNum, history },
                designToolState, designToolDispatch
            }}
        >
            {children}
        </DesignToolContext.Provider >
    );

}
