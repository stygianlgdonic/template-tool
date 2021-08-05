import * as svg from "../../utils/svg"
import { useFileUpload } from 'use-file-upload'
import { useContext } from 'react';
import { DesignToolContext } from '../../contexts/DesignToolContext';
import { defaultImage, defaultSvg, fontSizeArray } from "../../utils/defaults";

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
            prev.elements[shapeIndex].fontSize = fontSizeArray.find(item => item.name === type).size
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
            prev.elements[shapeIndex].textAlign = type
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

    return {
        handleAddNewRect,
        handleAddNewCircle,
        handleAddNewTrianlge,
        handleAddNewPolygon,
        handleSvgUpload,
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
        handleTextColor,
        handleFontFamily
    }
}

export default CardElementsFunctions
