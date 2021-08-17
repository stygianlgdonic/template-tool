import * as svg from "../../utils/svg"
import { useFileUpload } from 'use-file-upload'
import { useContext } from 'react';
import { DesignToolContext } from '../../contexts/DesignTool/DesignToolContext';
import { defaultImage, defaultSvg, fontSizeArray, hex_regex, stageDimensions } from "../../utils/defaults";
import CardHeaderActions from "../../contexts/DesignTool/CardHeaderActions";

const CardElementsFunctions = () => {
    const {
        $tr,
        designToolnavigator, setDesignToolnavigator,
        selectedId, setSelectedId,
        cardData, setCardData,
        cardHistory: { goForward, goBack, stepNum, history }
    } = useContext(DesignToolContext)
    const { emptyCardHeader } = CardHeaderActions()

    const [file, selectFile] = useFileUpload()

    const getDocumentColors = () => {
        const stringifyData = JSON.stringify(cardData)
        const docColors = new Set(stringifyData.match(hex_regex))
        return [...docColors]
    }

    const getSelectedElementData = () => {
        if (selectedId) {
            const selectedShape = cardData.elements.find(item => item.id === selectedId)
            return selectedShape
        } else {
            return null
        }

    }

    const handleAddNewRect = (rectData: any) => {
        setCardData((prev) => {
            let shapeID = new Date().getTime();
            prev.elements.push({ ...rectData, id: `shapes_${shapeID.toString()}` })
            setSelectedId(`shapes_${shapeID.toString()}`)
        })
    }

    const handleAddNewCircle = (circleData: any) => {
        setCardData((prev) => {
            let shapeID = new Date().getTime();
            prev.elements.push({ ...circleData, id: `shapes_${shapeID.toString()}` })
            setSelectedId(`shapes_${shapeID.toString()}`)
        })
    }
    const handleAddNewTrianlge = (triangleData: any) => {
        setCardData((prev) => {
            let shapeID = new Date().getTime();
            prev.elements.push({ ...triangleData, id: `shapes_${shapeID.toString()}` })
            setSelectedId(`shapes_${shapeID.toString()}`)
        })
    }
    const handleAddNewPolygon = (polygonData: any) => {
        setCardData((prev) => {
            let shapeID = new Date().getTime();
            prev.elements.push({ ...polygonData, id: `shapes_${shapeID.toString()}` })
            setSelectedId(`shapes_${shapeID.toString()}`)
        })
    }

    const handleSvgUpload = (e) => {
        svg.getSvgStringFromUpload(e.target.files).then((SVG_STRING) => {

            setCardData((prev) => {
                let svgId = new Date().getTime()
                prev.elements.push({

                    id: `svgs_${svgId.toString()}`,
                    svgString: SVG_STRING,
                    ...defaultSvg
                })
                setSelectedId(`svgs_${svgId.toString()}`)
            })
        })
    }

    const handleAddSvg = (SVG_STRING: string) => {
        setCardData((prev) => {
            let svgId = new Date().getTime()
            prev.elements.push({

                id: `svgs_${svgId.toString()}`,
                svgString: SVG_STRING,
                ...defaultSvg
            })
            setSelectedId(`svgs_${svgId.toString()}`)
        })
    }

    const handleImageUpload = () => {
        selectFile({ accept: "image/png, image/jpg, image/jpeg", multiple: false },
            ({ file }: any) => {

                const reader = new FileReader();
                reader.readAsDataURL(file);

                reader.onload = () => {
                    //base64encoded string
                    setCardData((prev) => {
                        let imageID = new Date().getTime();
                        prev.elements.push({
                            ...defaultImage,
                            src: reader.result,
                            id: `images_${imageID.toString()}`
                        })
                        setSelectedId(`images_${imageID.toString()}`)
                    })
                };
            })
    }

    const handleAddNewText = (textData: any) => {
        setCardData((prev) => {
            let textID = new Date().getTime();
            prev.elements.push({ ...textData, id: `textBoxes_${textID.toString()}` })
            setSelectedId(`textBoxes_${textID.toString()}`)
        })
    }

    const onBringtoFront = () => {
        if (!selectedId) return
        setCardData((prev) => {
            const shapeIndex = prev.elements.findIndex(
                (item) => item.id === selectedId
            );
            if (shapeIndex < (prev.elements.length - 1)) {

                const temp = prev.elements[shapeIndex]

                prev.elements[shapeIndex] = prev.elements[shapeIndex + 1]

                prev.elements[shapeIndex + 1] = temp

            }
        });
    };

    const onBringtoBack = () => {
        if (!selectedId) return
        setCardData((prev) => {
            const shapeIndex = prev.elements.findIndex(
                (item) => item.id === selectedId
            );

            // NOTE - shapeIndex > 1 because index 0 is for background
            if (shapeIndex > 1) {

                const temp = prev.elements[shapeIndex]

                prev.elements[shapeIndex] = prev.elements[shapeIndex - 1]

                prev.elements[shapeIndex - 1] = temp

            }
        });
    };


    const handleDeleteSelectedItem = () => {
        setCardData(prev => {
            prev.elements = prev.elements.filter(
                item => item.id !== selectedId
            )
            setSelectedId(null)
            emptyCardHeader()
        })
    }

    const onUndo = () => {
        emptyCardHeader()
        !!setSelectedId && setSelectedId(null);
        stepNum > 1 && goBack();
    };
    const onRedo = () => {
        emptyCardHeader()
        !!setSelectedId && setSelectedId(null);
        stepNum < (history.length - 1) && goForward();
    };

    const handleChangeFontSize = (type: "Header" | "Sub header" | "body text") => {
        setCardData(prev => {
            const shapeIndex = prev.elements.findIndex(
                (item) => item.id === selectedId
            );
            prev.elements[shapeIndex].fontSize = fontSizeArray.find(item => item.name === type).size
        })
    }

    const handleFontStyle = (type: "normal" | "italic" | "bold" | "italic bold") => {

        setCardData(prev => {
            const shapeIndex = prev.elements.findIndex(
                (item) => item.id === selectedId
            );
            prev.elements[shapeIndex].fontStyle = type
        })
    }

    const handleTextTransform = (type: "uppercase" | "lowercase" | "capitalize" | "none") => {
        setCardData(prev => {
            const shapeIndex = prev.elements.findIndex(
                (item) => item.id === selectedId
            );
            prev.elements[shapeIndex].textTransform = type
        })
    }

    const handleTextAlign = (type: "center" | "left" | "right" | "justify") => {
        setCardData(prev => {
            const shapeIndex = prev.elements.findIndex(
                (item) => item.id === selectedId
            );
            prev.elements[shapeIndex].align = type
        })
    }

    const handleTextOpacity = (value: any) => {
        setCardData(prev => {
            const shapeIndex = prev.elements.findIndex(
                (item) => item.id === selectedId
            );
            prev.elements[shapeIndex].opacity = parseFloat(value)
        })
    }

    const handleTextEffect = (textObj: any) => {
        setCardData(prev => {
            const shapeIndex = prev.elements.findIndex(
                (item) => item.id === selectedId
            );
            prev.elements[shapeIndex] = textObj
        })
    }

    const handleFontFamily = (value: string) => {
        setCardData(prev => {
            const shapeIndex = prev.elements.findIndex(
                (item) => item.id === selectedId
            );
            prev.elements[shapeIndex].fontFamily = value
        })
    }

    const handleBorderWidthChange = (value: any) => {
        setCardData(prev => {
            const shapeIndex = prev.elements.findIndex(
                (item) => item.id === selectedId
            );
            prev.elements[shapeIndex].strokeWidth = value
        })
    }

    const handleFillImagePattern = () => {
        selectFile({ accept: "image/png, image/jpg, image/jpeg", multiple: false },
            ({ file }: any) => {

                const reader = new FileReader();
                reader.readAsDataURL(file);

                reader.onload = () => {
                    //base64encoded string => reader.result
                    setCardData((prev) => {
                        const selectedShape = prev.elements.find(item => item.id === selectedId)
                        selectedShape.fill = ""
                        selectedShape.patternImageUrl = reader.result
                    })
                };
            })
    }

    const handleStrokeWidthChange = e => {
        setCardData(prev => {
            const selectedShape = prev.elements.find(item => item.id === selectedId)
            selectedShape.strokeWidth = parseInt(e.target.value)
        })
    }

    const handleCornerRadius = e => {
        setCardData(prev => {
            const selectedShape = prev.elements.find(item => item.id === selectedId)
            selectedShape.cornerRadius = parseInt(e.target.value)
        })
    }

    const handleOpacity = e => {
        setCardData(prev => {
            const selectedShape = prev.elements.find(item => item.id === selectedId)
            selectedShape.opacity = parseFloat(e.target.value)
        })
    }

    const handleStrokeColor = (color: string) => {
        setCardData(prev => {
            const selectedShape = prev.elements.find(item => item.id === selectedId)
            selectedShape.stroke = color
        })
    }

    const handleFill = (color: string, backgroundID?: undefined | "shapes_background") => {
        setCardData(prev => {
            if (!!backgroundID) {
                prev.elements[0].fill = color
                prev.elements[0].patternImageUrl = undefined
            } else {
                const selectedShape = prev.elements.find(item => item.id === selectedId)
                selectedShape.fill = color
                selectedShape.patternImageUrl = undefined
            }
        })
    }

    const handleGradientColor = (color1: string, color2: string, backgroundID?: undefined | "shapes_background") => {
        setCardData(prev => {
            if (!!backgroundID) {
                prev.elements[0].fill = ""
                prev.elements[0].patternImageUrl = undefined
                prev.elements[0].fillLinearGradientColorStops = [0, color1, 1, color2]
                prev.elements[0].fillLinearGradientStartPoint = { x: 0, y: 0 }
                prev.elements[0].fillLinearGradientEndPoint = {
                    x: stageDimensions.width,
                    y: stageDimensions.height
                }
            } else {

                const stage = $tr?.current?.getStage();
                const selectedNode = stage?.findOne("#" + selectedId);
                const clientRect = selectedNode?.getClientRect()

                const selectedShape = prev.elements.find(item => item.id === selectedId)
                selectedShape.fill = ""
                selectedShape.patternImageUrl = undefined
                selectedShape.fillLinearGradientColorStops = [0, color1, 1, color2]
                selectedShape.fillLinearGradientStartPoint = { x: 0, y: 0 }
                selectedShape.fillLinearGradientEndPoint = {
                    x: clientRect.width,
                    y: clientRect.height
                }
            }
        })
    }

    const handleRadialGradientColor = (color1: string, color2: string, backgroundID?: undefined | "shapes_background") => {
        setCardData(prev => {
            if (!!backgroundID) {
                prev.elements[0].fill = ""
                prev.elements[0].fillLinearGradientColorStops = undefined
                prev.elements[0].fillLinearGradientStartPoint = undefined
                prev.elements[0].fillLinearGradientEndPoint = undefined
                prev.elements[0].patternImageUrl = undefined
                prev.elements[0].fillRadialGradientStartPoint = { x: stageDimensions.width / 2, y: stageDimensions.height / 2 }
                prev.elements[0].fillRadialGradientStartRadius = 0
                prev.elements[0].fillRadialGradientEndPoint = { x: stageDimensions.width / 2, y: stageDimensions.height / 2 }
                prev.elements[0].fillRadialGradientEndRadius = 360
                prev.elements[0].fillRadialGradientColorStops = [0, color1, 1, color2]
            } else {
                const stage = $tr?.current?.getStage();
                const selectedNode = stage?.findOne("#" + selectedId);
                const clientRect = selectedNode?.getClientRect()

                const selectedShape = prev.elements.find(item => item.id === selectedId)
                selectedShape.fill = ""
                selectedShape.fillLinearGradientColorStops = undefined
                selectedShape.fillLinearGradientStartPoint = undefined
                selectedShape.fillLinearGradientEndPoint = undefined
                selectedShape.patternImageUrl = undefined
                selectedShape.fillRadialGradientStartPoint = { x: clientRect.width / 2, y: clientRect.height / 2 }
                selectedShape.fillRadialGradientStartRadius = 0
                selectedShape.fillRadialGradientEndPoint = { x: clientRect.width / 2, y: clientRect.height / 2 }
                selectedShape.fillRadialGradientEndRadius = 360
                selectedShape.fillRadialGradientColorStops = [0, color1, 1, color2]
            }
        })
    }

    const handleFillPatternScaleX = (e) => {
        setCardData(prev => {
            const selectedShape = prev.elements.find(item => item.id === selectedId)
            selectedShape.fillPatternScaleX = parseFloat(e.target.value)
        })
    }

    const handleFillPatternScaleY = (e) => {
        setCardData(prev => {
            const selectedShape = prev.elements.find(item => item.id === selectedId)
            selectedShape.fillPatternScaleY = parseFloat(e.target.value)
        })
    }

    const handleFillPatternOffsetX = (e) => {
        setCardData(prev => {
            const selectedShape = prev.elements.find(item => item.id === selectedId)
            selectedShape.fillPatternOffsetX = parseInt(e.target.value)
        })
    }

    const handleFillPatternOffsetY = (e) => {
        setCardData(prev => {
            const selectedShape = prev.elements.find(item => item.id === selectedId)
            selectedShape.fillPatternOffsetY = parseInt(e.target.value)
        })
    }

    const handleTextEdit = (text: string) => {
        setCardData(prev => {
            const selectedText = prev.elements.find(item => item.id === selectedId)
            selectedText.text = text
        })
    }

    return {
        getDocumentColors,
        getSelectedElementData,
        handleAddNewRect,
        handleAddNewCircle,
        handleAddNewTrianlge,
        handleAddNewPolygon,
        handleSvgUpload,
        handleAddSvg,
        handleImageUpload,
        handleAddNewText,
        handleDeleteSelectedItem,
        handleChangeFontSize,
        onBringtoBack,
        onBringtoFront,
        onUndo,
        onRedo,
        handleFontStyle,
        handleTextTransform,
        handleTextAlign,
        handleTextOpacity,
        handleTextEffect,
        handleFontFamily,
        handleBorderWidthChange,
        handleFillImagePattern,
        handleStrokeWidthChange,
        handleCornerRadius,
        handleOpacity,
        handleStrokeColor,
        handleFill,
        handleGradientColor,
        handleRadialGradientColor,
        handleFillPatternScaleX,
        handleFillPatternScaleY,
        handleFillPatternOffsetX,
        handleFillPatternOffsetY,
        handleTextEdit
    }
}

export default CardElementsFunctions
