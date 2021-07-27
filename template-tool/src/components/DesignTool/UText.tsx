import React, { useRef } from 'react'
import { Text } from 'react-konva'

const UText = ({ textProps, onChange, onSelect, onEditClick }) => {
    const textNode = useRef(null)

    return (
        <Text
            ref={textNode}
            draggable
            onClick={onSelect}
            onTap={onSelect}
            onDblClick={onEditClick}
            onDblTap={onEditClick}
            onTransform={(e) => {
                let SX = textNode.current.scaleX();
                let W = textNode.current.width();

                textNode.current.setAttrs({
                    // ...textNode.current.getAttrs(),
                    // fontSize: isWordWrapping ? textNode.current.fontSize() : textNode.current.fontSize() * textNode.current.scaleX(),
                    width: W * SX,
                    scaleX: 1,
                    scaleY: 1
                });
            }}
            // onTransformEnd={onChange}
            onDragEnd={onChange}
            {...textProps}
        />
    )
}

export default UText
