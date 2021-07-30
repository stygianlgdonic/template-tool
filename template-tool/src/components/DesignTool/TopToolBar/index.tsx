import React from 'react'

const TopToolBar = ({
    onUndo,
    onRedo,
    setTemplateData,
    variationIndex,
    selectedId
}) => {

    const onBringtoFront = () => {
        if (!selectedId || selectedId === "shapes_background") return
        setTemplateData((prev) => {
            const shapeIndex = prev.variations[variationIndex].elements.findIndex(
                (item) => item.id === selectedId
            );
            if (shapeIndex < (prev.variations[variationIndex].elements.length - 1)) {

                const temp = prev.variations[variationIndex].elements[shapeIndex + 1]

                prev.variations[variationIndex].elements[shapeIndex + 1] = prev.variations[variationIndex].elements[shapeIndex]

                prev.variations[variationIndex].elements[shapeIndex] = temp

            }
        });
    };

    const onBringtoBack = () => {
        if (!selectedId || selectedId === "shapes_background") return
        setTemplateData((prev) => {
            const shapeIndex = prev.variations[variationIndex].elements.findIndex(
                (item) => item.id === selectedId
            );

            // NOTE - shapeIndex > 1 because index 0 is for background
            if (shapeIndex > 1) {

                const temp = prev.variations[variationIndex].elements[shapeIndex - 1]

                prev.variations[variationIndex].elements[shapeIndex - 1] = prev.variations[variationIndex].elements[shapeIndex]

                prev.variations[variationIndex].elements[shapeIndex] = temp

            }
        });
    };

    return (
        <div className="flex justify-center">
            <div className="flex justify-center">
                <button
                    onClick={onBringtoFront}
                    className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                >Bring to front</button>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={onBringtoBack}
                    className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                >Bring to Back</button>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={onUndo}
                    className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                >Undo</button>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={onRedo}
                    className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                >Redo</button>
            </div>
        </div>
    )
}

export default TopToolBar
