import React, { useRef, useEffect } from 'react'
import { Text } from 'react-konva'
import { Html } from 'react-konva-utils'
import { useImmerState } from '@shrugsy/use-immer-state';

const initial_textArea = {
    textEditVisible: false,
    textX: 0,
    textY: 0
}

const UText = ({ textProps, onChange, onSelect, handleTextEdit, isSelected, $tr }) => {
    const textNode = useRef(null)
    const [newTextObj, setNewTextObj] = useImmerState(initial_textArea)
    const textAreaRef = useRef(null)

    const handleClickOutside = (e) => {
        if (!textAreaRef.current.contains(e.target)) {
            setNewTextObj(prev => {
                prev.textEditVisible = false;
            })
            // $tr.current.visible(true)
            // console.log("$tr.current.visible()", $tr.current.visible())

            textNode.current.visible(true)
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    });

    const handleSelectText = () => {
        setNewTextObj(initial_textArea)
        onSelect()
    }

    const handleTextDblClick = e => {
        // textNode.current.hide()
        textNode.current.visible(false)

        // $tr.current.detach()
        // $tr.current.visible(false)
        // console.log("$tr.current.visible()", $tr.current.visible())
        const absPos = e.target.getAbsolutePosition();
        setNewTextObj(prev => {
            prev.textEditVisible = true;
            prev.textX = absPos.x;
            prev.textY = absPos.y;
        })
    };

    const handleTextChange = (e) => {
        handleTextEdit(e.target.value)
    }

    const { fill: color, fontFamily, fontSize } = textProps


    return (
        <>
            <Text
                ref={textNode}
                onClick={handleSelectText}
                onTap={handleSelectText}
                onDblClick={(e) => handleTextDblClick(e)}
                onDblTap={(e) => handleTextDblClick(e)}
                onTransform={(e) => {
                    let SX = textNode.current.scaleX();
                    let W = textNode.current.width();
                    // textAreaRef.current.style.transform = `rotateZ(${e.target.attrs?.rotation}deg)`
                    // textAreaRef.current.style.transformOrigin = "50% 50%"
                    textNode.current.setAttrs({
                        // ...textNode.current.getAttrs(),
                        // fontSize: isWordWrapping ? textNode.current.fontSize() : textNode.current.fontSize() * textNode.current.scaleX(),
                        width: W * SX,
                        scaleX: 1,
                        scaleY: 1,
                    });
                }}
                // opacity={!(isSelected && newTextObj.textEditVisible) ? textProps?.opacity : 0}
                // style={{
                //     display:  ? "none" : "block",
                // }}
                // onTransformEnd={onChange}
                onDragEnd={onChange}
                {...textProps}
            />
            <Html>
                <textarea
                    onInput={(e: any) => {
                        e.target.style.height = "5px"
                        e.target.style.height = (e.target.scrollHeight) + "px";
                    }}
                    ref={textAreaRef}
                    value={textProps.text}
                    style={{
                        display: isSelected && newTextObj.textEditVisible ? "block" : "none",
                        position: "absolute",
                        top: newTextObj.textY + "px",
                        left: newTextObj.textX + "px",
                        outline: "none",
                        // border: "2px solid blue",
                        // opacity: 0,
                        resize: 'none',
                        overflow: 'hidden',
                        minHeight: '50px',
                        color, fontFamily, fontSize,
                        width: textNode.current?.getClientRect()?.width,
                        height: textNode.current?.getClientRect()?.height,
                        lineHeight: 1,
                        background: 'transparent',
                        transform: `rotateZ(${textNode.current?.attrs?.rotation}deg)`,
                        transformOrigin: 'top left',
                    }}
                    onChange={handleTextChange}
                />
            </Html>
        </>
    )
}

export default UText
