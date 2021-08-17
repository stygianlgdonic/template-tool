import React, { useRef } from 'react';
import { Rect } from 'react-konva';
import useImage from "use-image"

interface Props {
    shapeProps: any
    onSelect: any
    onChange: any
}

const Rectangle: React.FC<Props> = ({ shapeProps, onSelect, onChange }) => {

    const shapeRef = useRef(null)

    const { patternImageUrl, ...restProps } = shapeProps
    const [image] = useImage(patternImageUrl || null)

    return (
        <React.Fragment>
            <Rect
                ref={shapeRef}
                onClick={onSelect}
                onTap={onSelect}
                draggable
                strokeScaleEnabled={false}
                onDragEnd={(e) => {
                    onChange({
                        ...shapeProps,
                        x: e.target.x(),
                        y: e.target.y(),
                    });
                }}
                {...restProps}
                fillPatternImage={image}
                fillPatternOffset={{ x: 0, y: 0 }}
                fillPatternScaleX={1.4}
                fillPatternScaleY={1.4}
                fillPatternRepeat="no-repeat"
            />
        </React.Fragment>
    );
};
export default Rectangle
