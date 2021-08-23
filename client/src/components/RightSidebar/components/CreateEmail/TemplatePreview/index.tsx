import React, { useContext } from 'react'
import { Layer, Stage } from 'react-konva'
import { useNavigate } from 'react-router-dom'
import { DesignToolContext } from '../../../../../contexts/DesignTool/DesignToolContext'
import Elements from '../Elements'

interface Props {
    templateObj: any
    width: number
    height: number
}

const TemplatePreview: React.FC<Props> = ({ templateObj, width, height }) => {
    const { setCardData } = useContext(DesignToolContext)

    const navigate = useNavigate()
    const handleSelectTemplate = () => {
        setCardData(prev => {
            prev.templateId = templateObj.id
            prev.dimensions = templateObj.dimensions
            prev.elements = [...templateObj.variations[0].elements]
        }, false)
        navigate(`/createcard`)
    }

    const ScaleX = templateObj?.dimensions?.width ? (width / templateObj?.dimensions?.width) : 0.2
    const ScaleY = templateObj?.dimensions?.height ? (height / templateObj?.dimensions?.height) : 0.2

    return (
        <button
            onClick={handleSelectTemplate}
            className="border-2 rounded-md justify-center items-center flex flex-col "
            style={{ width, height }}
        >
            <Stage
                width={width}
                height={height}
                scaleX={Math.max(ScaleX, ScaleY)}
                scaleY={Math.max(ScaleX, ScaleY)}
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
