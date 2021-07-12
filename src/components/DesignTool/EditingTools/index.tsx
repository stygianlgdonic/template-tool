import React from 'react'
import EditTextBox from '../../tailwindComponents/EditTextBox'
import ShapeColorSelector from '../../tailwindComponents/ShapeColorSelector'
import SvgColorSelector from '../../tailwindComponents/SvgColorSelector'

const EditingTools = ({
    selectedId,
    isOpenColorPicker,
    handleCloseColorPicker,
    isEditTextBox,
    templateData,
    setTemplateData,
    variationIndex,
    handleEditSelectedItem,
    handleDeleteSelectedItem,
    handleGradientColorChange,
    handleRectPropsChange,
    handleCornerRadiusChange,
    handleSvgElementColorChange,
    colors,
    colorMap,
    handleSaveSvg,
    handleCloseEditTextModal
}) => {
    return (
        <div className="h-screen overflow-y-scroll">
            <div className="flex justify-center">
                <button
                    onClick={handleEditSelectedItem}
                    className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                >Edit</button>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={handleDeleteSelectedItem}
                    className={selectedId === "shape_background" ? "hidden" : "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"}
                >Delete</button>
            </div>
            {isOpenColorPicker && selectedId?.split('_')[0] === "shapes" && (
                <ShapeColorSelector
                    selectedId={selectedId}
                    templateData={templateData}
                    setTemplateData={setTemplateData}
                    variationIndex={variationIndex}
                    handleGradientColorChange={handleGradientColorChange}
                    currentSelectedColor={templateData.variations[variationIndex].shapes?.find(item => item.id === selectedId)?.fill || "#000000"}
                    currentPalette={templateData.palette}
                    handleCloseColorPicker={handleCloseColorPicker}
                    handleRectPropsChange={handleRectPropsChange}
                    handleCornerRadiusChange={handleCornerRadiusChange}
                />
            )}

            {isOpenColorPicker && selectedId?.split('_')[0] === "svgs" && (
                <SvgColorSelector
                    colors={colors}
                    colorMap={colorMap}
                    currentPalette={templateData.palette}
                    handleSvgElementColorChange={handleSvgElementColorChange}
                    handleSaveSvg={handleSaveSvg}
                />
            )}

            {isEditTextBox && <EditTextBox
                selectedId={selectedId}
                templateData={templateData}
                setTemplateData={setTemplateData}
                variationIndex={variationIndex}
                handleCloseEditTextModal={handleCloseEditTextModal}
            />}



        </div>
    )
}

export default EditingTools
