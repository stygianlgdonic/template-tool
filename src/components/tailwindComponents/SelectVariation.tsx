import React, { useState } from 'react'

const SelectVariation = ({ variations, variationIndex, setVariationIndex }) => {

    const [displayChoices, setDisplayChoices] = useState(false)

    return (
        <div className="flex">
            {variations.map((item, index) => (
                <p
                    key={index}
                    className="text-red-100 block px-4 py-2 mr-1 ml-1 text-sm cursor-pointer bg-red-700 hover:bg-red-800"
                    onClick={() => {
                        setVariationIndex(index)
                        setDisplayChoices(false)
                    }}
                    role="menuitem"
                    tabIndex={-1}
                >{item.name}</p>
            ))}
        </div>
    )
}

export default SelectVariation
