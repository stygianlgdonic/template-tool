import React, { useRef } from 'react';
import { Line } from 'react-konva';
import useImage from 'use-image';

interface Props {
    shapeProps: any
    onSelect: any
    onChange: any
}

const ULine: React.FC<Props> = ({ shapeProps, onSelect, onChange }) => {

    const shapeRef = useRef(null)

    const { patternImageUrl, ...restProps } = shapeProps
    const [image] = useImage(patternImageUrl || null)
    const Xpoint = 0
    const Ypoint = 0

    return (
        <React.Fragment>
            <Line
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
export default ULine
