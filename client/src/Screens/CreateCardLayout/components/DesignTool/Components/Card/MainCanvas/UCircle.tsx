import React, { useRef } from 'react';
import { Circle } from 'react-konva';
import useImage from "use-image"
interface Props {
    shapeProps: any
    onSelect: any
    onChange: any
}

const UCircle: React.FC<Props> = ({ shapeProps, onSelect, onChange }) => {
    const shapeRef = useRef(null)

    const { patternImageUrl, ...restProps } = shapeProps
    const [image] = useImage(patternImageUrl || null)

    return (
        <React.Fragment>
            <Circle
                ref={shapeRef}
                onClick={onSelect}
                onTap={onSelect}
                draggable
                strokeScaleEnabled={false}
                onTransformEnd={(e) => {
                    onChange({
                        ...shapeProps,
                        scaleX: e.target.attrs.scaleX,
                        scaleY: e.target.attrs.scaleY,
                    });
                }}
                onDragEnd={(e) => {
                    onChange({
                        ...shapeProps,
                        x: e.target.x(),
                        y: e.target.y(),
                    });
                }}
                {...restProps}
                fillPatternImage={image}
                fillPatternOffsetX={0}
                fillPatternOffsetY={0}
                fillPatternScaleX={0.1}
                fillPatternScaleY={0.1}
                fillPatternRepeat="no-repeat"
            />
        </React.Fragment>
    );
};
export default UCircle
