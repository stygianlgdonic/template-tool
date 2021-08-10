import * as svg from "../../utils/svg"
import { useFileUpload } from 'use-file-upload'
import { useContext } from 'react';
import { DesignToolContext } from '../../contexts/DesignToolContext';
import { defaultImage, defaultSvg, fontSizeArray, stageDimensions } from "../../utils/defaults";

const CardElementsFunctions = () => {
    const {
        designToolnavigator, setDesignToolnavigator,
        selectedId, setSelectedId,
        cardData, setCardData,
        cardHistory: { goForward, goBack, stepNum, history }
    } = useContext(DesignToolContext)

    const [file, selectFile] = useFileUpload()


    const handleAddNewRect = (rectData: any) => {
        setCardData((prev) => {
            let shapeID = new Date().getTime();
            prev.elements.push({ ...rectData, id: `shapes_${shapeID.toString()}` })
        })
    }

    const handleAddNewCircle = (circleData: any) => {
        setCardData((prev) => {
            let shapeID = new Date().getTime();
            prev.elements.push({ ...circleData, id: `shapes_${shapeID.toString()}` })
        })
    }
    const handleAddNewTrianlge = (triangleData: any) => {
        setCardData((prev) => {
            let shapeID = new Date().getTime();
            prev.elements.push({ ...triangleData, id: `shapes_${shapeID.toString()}` })
        })
    }
    const handleAddNewPolygon = (polygonData: any) => {
        setCardData((prev) => {
            let shapeID = new Date().getTime();
            prev.elements.push({ ...polygonData, id: `shapes_${shapeID.toString()}` })
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
                    })
                };
            })
    }

    const handleAddNewText = (textData: any) => {
        setCardData((prev) => {
            let textID = new Date().getTime();
            prev.elements.push({ ...textData, id: `textBoxes_${textID.toString()}` })
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
        })
    }

    const onUndo = () => {
        !!setSelectedId && setSelectedId(null);
        stepNum > 1 && goBack();
    };
    const onRedo = () => {
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

    const handleFontStyle = (type: "normal" | "bold" | "italic") => {
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

    const handleTextColor = (color: string) => {
        setCardData(prev => {
            const shapeIndex = prev.elements.findIndex(
                (item) => item.id === selectedId
            );
            prev.elements[shapeIndex].fill = color
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

    const handleShapeFill = (color: string) => {
        setCardData(prev => {
            const selectedShape = prev.elements.find(item => item.id === selectedId)
            selectedShape.fill = color
            selectedShape.patternImageUrl = undefined
        })
    }

    const handleGradientColor = (color1: string, color2: string) => {
        setCardData(prev => {
            const selectedShape = prev.elements.find(item => item.id === selectedId)
            selectedShape.fill = ""
            selectedShape.fillLinearGradientColorStops = [0, color1, 1, color2]
            selectedShape.fillLinearGradientStartPoint = { x: 0, y: 0 }
            selectedShape.fillLinearGradientEndPoint = {
                x: selectedId === "shapes_background" ? stageDimensions.width : 100,
                y: selectedId === "shapes_background" ? stageDimensions.height : 100
            }
            selectedShape.patternImageUrl = undefined
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



    return {
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
        handleTextColor,
        handleFontFamily,
        handleBorderWidthChange,
        handleFillImagePattern,
        handleStrokeWidthChange,
        handleCornerRadius,
        handleOpacity,
        handleStrokeColor,
        handleShapeFill,
        handleGradientColor,
        handleFillPatternScaleX,
        handleFillPatternScaleY,
        handleFillPatternOffsetX,
        handleFillPatternOffsetY
    }
}

export default CardElementsFunctions
