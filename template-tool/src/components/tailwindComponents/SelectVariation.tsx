import React from 'react'

const SelectVariation = ({ variations, variationIndex, setVariationIndex }) => {

    return (
        <div className="flex">
            {variations.map((item, index) => (
                <p
                    key={index}
                    className={`${variationIndex === index ? "text-red-100" : "text-red-800"} block px-4 py-2 mr-1 ml-1 text-sm cursor-pointer rounded border border-gray-900 ${variationIndex === index ? "bg-red-700 hover:bg-red-800" : ""}`}
                    onClick={() => setVariationIndex(index)}
                    role="menuitem"
                    tabIndex={-1}
                >{item.name}</p>
            ))}
        </div>
    )
}

export default SelectVariation
