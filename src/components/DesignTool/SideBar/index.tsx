import React from 'react'
import { defaultCircle, defaultPolygon, defaultRect, defaultRoundedRect, defaultTextBox, defaultTriangle } from '../../../utils/defaults';
import * as svg from "../../../utils/svg"

const SideBar = ({ variationIndex, setTemplateData }) => {

    const handleAddNewRect = () => {
        setTemplateData((prev) => {
            let shapeID = new Date().getTime();
            prev.variations[variationIndex].shapes.push({ ...defaultRect, id: `shapes_${shapeID.toString()}` })
        })
    }

    const handleAddNewCircle = () => {
        setTemplateData((prev) => {
            let shapeID = new Date().getTime();
            prev.variations[variationIndex].shapes.push({ ...defaultCircle, id: `shapes_${shapeID.toString()}` })
        })
    }
    const handleAddNewTrianlge = () => {
        setTemplateData((prev) => {
            let shapeID = new Date().getTime();
            prev.variations[variationIndex].shapes.push({ ...defaultTriangle, id: `shapes_${shapeID.toString()}` })
        })
    }
    const handleAddNewPolygon = () => {
        setTemplateData((prev) => {
            let shapeID = new Date().getTime();
            prev.variations[variationIndex].shapes.push({ ...defaultPolygon, id: `shapes_${shapeID.toString()}` })
        })
    }
    const handleAddNewRoundedRect = () => {
        setTemplateData((prev) => {
            let shapeID = new Date().getTime();
            prev.variations[variationIndex].shapes.push({ ...defaultRoundedRect, id: `shapes_${shapeID.toString()}` })
        })
    }

    const handleSvgUpload = (e) => {
        svg.getSvgStringFromUpload(e.target.files).then((SVG_STRING) => {

            setTemplateData((prev) => {
                let svgId = new Date().getTime()
                prev.variations[variationIndex].svgs.push({

                    id: `svgs_${svgId.toString()}`,
                    type: "svg",
                    svgString: SVG_STRING,
                    colorMap: {},
                    x: 100,
                    y: 200,
                    width: 100,
                    height: 100,
                    draggable: true,

                })
            })
        })
    }

    const handleAddNewText = () => [
        setTemplateData((prev) => {
            let textID = new Date().getTime();
            prev.variations[variationIndex].textBoxes.push({ ...defaultTextBox, id: `textBoxes_${textID.toString()}` })
        })
    ]

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
                <p>upload svg</p>
                <input className="" type="file" accept=".svg" onChange={handleSvgUpload} />
            </div>
            <div className="flex justify-center">
                <button
                    className="inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                    onClick={handleAddNewText}
                >Add new Text</button>
            </div>

        </div>
    )
}

export default SideBar
