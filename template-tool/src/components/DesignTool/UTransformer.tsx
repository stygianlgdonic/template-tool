import React, { useEffect } from 'react';
import { Transformer } from 'react-konva'

export const MIN_WIDTH = 50
export const MIN_HEIGHT = 30

interface Props {
    id: any
    selectedShapeName: any
    templateData: any
    $tr: any
}

const TransformerComponent: React.FC<Props> = ({ id, selectedShapeName, templateData, $tr }) => {

    useEffect(() => {
        checkNode();
    }, [selectedShapeName, templateData.variations])
    const checkNode = () => {
        const stage = $tr.current.getStage();
        const selectedNode = stage.findOne("#" + selectedShapeName);
        if (selectedNode) {
            $tr.current.nodes([selectedNode])
        } else {
            $tr.current.detach();
        }
        $tr.current.getLayer().batchDraw();
    }

    return (
        <>
            <Transformer
                id={id}
                ref={$tr}
                ignoreStroke={true}
                rotationSnaps={[0, 90, 180, 270]}
                boundBoxFunc={(oldBox, newBox) => {
                    if (selectedShapeName === "shapes_background") return oldBox
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