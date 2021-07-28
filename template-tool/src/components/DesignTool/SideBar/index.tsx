import React from 'react'
import { defaultCircle, defaultImage, defaultPolygon, defaultRect, defaultRoundedRect, defaultSvg, defaultTextBox, defaultTriangle } from '../../../utils/defaults';
import * as svg from "../../../utils/svg"
import { useFileUpload } from 'use-file-upload'

const SideBar = ({ variationIndex, setTemplateData }) => {
    const [file, selectFile] = useFileUpload()

    const handleAddNewRect = () => {
        setTemplateData((prev) => {
            let shapeID = new Date().getTime();
            prev.variations[variationIndex].elements.push({ ...defaultRect, id: `shapes_${shapeID.toString()}` })
        })
    }

    const handleAddNewCircle = () => {
        setTemplateData((prev) => {
            let shapeID = new Date().getTime();
            prev.variations[variationIndex].elements.push({ ...defaultCircle, id: `shapes_${shapeID.toString()}` })
        })
    }
    const handleAddNewTrianlge = () => {
        setTemplateData((prev) => {
            let shapeID = new Date().getTime();
            prev.variations[variationIndex].elements.push({ ...defaultTriangle, id: `shapes_${shapeID.toString()}` })
        })
    }
    const handleAddNewPolygon = () => {
        setTemplateData((prev) => {
            let shapeID = new Date().getTime();
            prev.variations[variationIndex].elements.push({ ...defaultPolygon, id: `shapes_${shapeID.toString()}` })
        })
    }
    const handleAddNewRoundedRect = () => {
        setTemplateData((prev) => {
            let shapeID = new Date().getTime();
            prev.variations[variationIndex].elements.push({ ...defaultRoundedRect, id: `shapes_${shapeID.toString()}` })
        })
    }

    const handleSvgUpload = (e) => {
        svg.getSvgStringFromUpload(e.target.files).then((SVG_STRING) => {

            setTemplateData((prev) => {
                let svgId = new Date().getTime()
                prev.variations[variationIndex].elements.push({

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
                    setTemplateData((prev) => {
                        let imageID = new Date().getTime();
                        prev.variations[variationIndex].elements.push({
                            ...defaultImage,
                            src: reader.result,
                            id: `images_${imageID.toString()}`
                        })
                    })
                };
            })
    }

    const handleAddNewText = () => {
        setTemplateData((prev) => {
            let textID = new Date().getTime();
            prev.variations[variationIndex].elements.push({ ...defaultTextBox, id: `textBoxes_${textID.toString()}` })
        })
    }

    return (
        <div>

            <div className="flex justify-center">
                <button
                    className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                    onClick={handleAddNewRect}
                >Add new Square</button>
            </div>
            <div className="flex justify-center">
                <button
                    className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                    onClick={handleAddNewCircle}
                >Add new Circle</button>
            </div>
            <div className="flex justify-center">
                <button
                    className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                    onClick={handleAddNewTrianlge}
                >Add new Triangle</button>
            </div>
            <div className="flex justify-center">
                <button
                    className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                    onClick={handleAddNewPolygon}
                >Add new Pentagon</button>
            </div>
            <div className="flex justify-center">
                <button
                    className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                    onClick={handleAddNewRoundedRect}
                >Add new Rounded Square</button>
            </div>
            <div className="flex justify-center">
                <button
                    className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                    onClick={handleAddNewText}
                >Add new Text</button>
            </div>
            <div className="flex justify-center">
                <p>upload svg</p>
                <input className="" type="file" accept=".svg" onChange={handleSvgUpload} />
            </div>
            <div className="flex justify-center">
                <button
                    className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                    onClick={handleImageUpload}
                >Upload image</button>
            </div>

        </div>
    )
}

export default SideBar
