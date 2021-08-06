import React, { useContext } from 'react'
import { Layer, Stage } from 'react-konva'
import { useNavigate } from 'react-router-dom'
import { TemplateContext } from '../../../../../contexts/TemplateContext'
import { stageDimensions } from '../../../../../utils/defaults'
import Elements from '../Elements'

interface Props {
    templateObj: any
}

const TemplatePreview: React.FC<Props> = ({ templateObj }) => {
    const navigate = useNavigate()
    const [templateData, setTemplateData] = useContext(TemplateContext)
    console.log(templateObj)
    const handleEditTemplate = () => {
        setTemplateData(templateObj, false)
        navigate(`/createcard`)
    }
    return (
        <button
            // onClick={handleEditTemplate}
            className="border-2   border-dashed rounded-md border-bordercolor justify-center items-center flex flex-col ">
            <Stage
                width={stageDimensions.width * 0.2}
                height={stageDimensions.height * 0.2}
                scaleX={0.2}
                scaleY={0.2}
            >
                <Layer
                    listening={false}
                >
                    {templateObj?.variations[0]?.elements?.map((item, index) => (
                        <Elements key={index} konvaItem={item} index={index} />
                    ))}
                </Layer>
            </Stage>

        </button>
    )
}

export default TemplatePreview
