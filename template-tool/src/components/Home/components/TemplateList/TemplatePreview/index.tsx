import React, { useState } from 'react'
import { Layer, Stage } from 'react-konva'
import { stageDimensions } from '../../../../../utils/defaults'
import Elements from '../Elements'

interface Props {
    templateData: any
    index: number
}

const TemplatePreview: React.FC<Props> = ({ templateData, index }) => {
    const [selectedVariation, setSelectedVariation] = useState(0)

    return (
        <button className="border-2  border-dashed rounded-md border-bordercolor justify-center items-center flex flex-col py-4 ">
            <Stage
                width={stageDimensions.width * 0.3}
                height={stageDimensions.height * 0.3}
                scaleX={0.3}
                scaleY={0.3}
            >
                <Layer
                    listening={false}
                >
                    {templateData?.variations[selectedVariation]?.elements?.map((item, index) => (
                        <Elements konvaItem={item} index={index} />
                    ))}
                </Layer>
            </Stage>
        </button>
    )
}

export default TemplatePreview
