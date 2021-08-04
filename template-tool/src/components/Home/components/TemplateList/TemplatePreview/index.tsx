import React, { useContext, useState } from 'react'
import { Layer, Stage } from 'react-konva'
import { TemplateContext } from '../../../../../contexts/TemplateContext'
import { stageDimensions } from '../../../../../utils/defaults'
import Elements from '../Elements'

interface Props {
    templateObj: any
}

const TemplatePreview: React.FC<Props> = ({ templateObj }) => {
    const [selectedVariation, setSelectedVariation] = useState(0)
    const [templateData, setTemplateData] = useContext(TemplateContext)

    const handleEditTemplate = () => {
        setTemplateData(templateObj, false)

    }

    return (
        <button
            onClick={handleEditTemplate}
            className="border-2  border-dashed rounded-md border-bordercolor justify-center items-center flex flex-col py-4 ">
            <Stage
                width={stageDimensions.width * 0.3}
                height={stageDimensions.height * 0.3}
                scaleX={0.3}
                scaleY={0.3}
            >
                <Layer
                    listening={false}
                >
                    {templateObj?.variations[selectedVariation]?.elements?.map((item, index) => (
                        <Elements key={index} konvaItem={item} index={index} />
                    ))}
                </Layer>
            </Stage>
        </button>
    )
}

export default TemplatePreview
