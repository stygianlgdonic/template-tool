import React, { useEffect, useRef } from 'react';
import { Transformer } from 'react-konva'

export const MIN_WIDTH = 50
export const MIN_HEIGHT = 30

interface Props {
    id: any
    selectedShapeName: any
}

const TransformerComponent: React.FC<Props> = ({ id, selectedShapeName }) => {

    const transformer = useRef(null)
    useEffect(() => {
        checkNode();
    }, [selectedShapeName])
    const checkNode = () => {
        const stage = transformer.current.getStage();
        const selectedNode = stage.findOne("." + selectedShapeName);
        if (selectedNode) {
            transformer.current.nodes([selectedNode])
        } else {
            transformer.current.detach();
        }
        transformer.current.getLayer().batchDraw();
    }

    return (
        <>
            <Transformer
                id={id}
                ref={transformer}
                boundBoxFunc={(oldBox, newBox) => {
                    if (newBox.width < MIN_WIDTH) {
                        return { ...oldBox, width: MIN_WIDTH };
                    }
                    return newBox;
                }}
            />
        </>
    );
}

export default TransformerComponent