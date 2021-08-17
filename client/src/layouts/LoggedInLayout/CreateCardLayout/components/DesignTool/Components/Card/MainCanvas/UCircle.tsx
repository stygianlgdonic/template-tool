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
    const imageWidth = image ? image.width : 10;
    const imageHeight = image ? image.height : 10;

    const Xpoint = (imageWidth / 2)
    const Ypoint = (imageHeight / 2)

    return (
        <React.Fragment>
            <Circle
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
                fillPatternOffset={{ x: Xpoint, y: Ypoint }}
                fillPatternScaleX={1.4}
                fillPatternScaleY={1.4}
                fillPatternRepeat="no-repeat"
            />
        </React.Fragment>
    );
};
export default UCircle
