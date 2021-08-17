import React, { useContext, useEffect, useState } from 'react';
import { Transformer } from 'react-konva'
import ImageFallbackModal from '../tailwindComponents/CardHeader/components/ImageFallbackModal/ImageFallbackModal';
import { Html } from "react-konva-utils"
export const MIN_WIDTH = 50
export const MIN_HEIGHT = 30

interface Props {
    id: any
    $tr: any
    selectedShapeName: any
    setSelectedId: any
    cardData: any
}

const TransformerComponent: React.FC<Props> = ({
    id,
    $tr,
    selectedShapeName,
    setSelectedId,
    cardData
}) => {

    const [isOpenFallbackModal, setIsOpenFallbackModal] = useState<boolean>(false)
    const selectedshape = cardData.elements.find(item => item.id === selectedShapeName)

    useEffect(() => {
        checkNode();
    }, [selectedShapeName])

    const checkNode = () => {
        const trNodes = $tr.current.nodes()
        const stage = $tr.current.getStage();
        const selectedNode = stage.findOne("#" + selectedShapeName);
        if (selectedNode) {
            $tr.current.nodes([selectedNode])
        } else {
            !trNodes.length && $tr.current.detach();
            setSelectedId(null)
        }
        $tr.current.getLayer().batchDraw();
    }

    const handleOpenFallbackModal = () => {
        const nodes = $tr.current.nodes()
        if (!!nodes.length && nodes[0]?.attrs?.id.split("_")[0] === "shapes") {
            setIsOpenFallbackModal(!isOpenFallbackModal)
        }
    }

    return (
        <>
            <Transformer
                // shouldOverdrawWholeArea
                id={id}
                ref={$tr}
                padding={5}
                rotationSnaps={[0, 90, 180, 270]}
                ignoreStroke={true}
                boundBoxFunc={(oldBox, newBox) => {
                    if (selectedShapeName === "shapes_background") return oldBox
                    if (newBox.width < MIN_WIDTH) {
                        return { ...oldBox, width: MIN_WIDTH };
                    }
                    return newBox;
                }}
            >
                <Html >
                    <div className={!!selectedshape?.isFrame ? "" : "hidden"} >
                        <button onClick={handleOpenFallbackModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </button>
                        <div className={!!isOpenFallbackModal ? "" : "hidden"}>
                            <ImageFallbackModal
                                closeModal={() => {
                                    // setIsOpenFallbackModal(false);
                                }}
                            />
                        </div>
                    </div>
                </Html>
            </Transformer>
        </>
    );
}

export default TransformerComponent