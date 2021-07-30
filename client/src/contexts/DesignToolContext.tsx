import React, { createContext, useState } from 'react'

export const INITIAL_STATE = {}

export const DesignToolContext = createContext(null)

export const DesignToolProvider = ({ children }) => {

    const [designToolnavigator, setDesignToolnavigator] = useState('element')

    return (
        <DesignToolContext.Provider
            value={[designToolnavigator, setDesignToolnavigator]}
        >
            {children}
        </DesignToolContext.Provider >
    );

}
