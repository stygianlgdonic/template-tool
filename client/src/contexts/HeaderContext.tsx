import React, { createContext, useState } from 'react'

export const INITIAL_STATE = {}

export const HeaderContext = createContext(null)

export const HeaderProvider = ({ children }) => {

    const [open, setOpen] = useState(false)

    return (
        <HeaderContext.Provider
            value={[open, setOpen]}
        >
            {children}
        </HeaderContext.Provider >
    );

}
