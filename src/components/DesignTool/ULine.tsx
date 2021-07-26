import React, { useRef } from 'react';
import { Line } from 'react-konva';
import useImage from 'use-image';

interface Props {
    shapeProps: any
    onSelect: any
    onChange: any
    onEditClick: any
}

const ULine: React.FC<Props> = ({ shapeProps, onSelect, onChange, onEditClick }) => {

    const shapeRef = useRef(null)

    const { patternImageUrl, ...restProps } = shapeProps
    const [image] = useImage(patternImageUrl || null)
    const polRadius = restProps.radius;
    const imageWidth = image ? image.width : 10;
    const imageHeight = image ? image.height : 10;

    return (
        <React.Fragment>
            <Line
                ref={shapeRef}
                onClick={onSelect}
                onTap={onSelect}
                onDblClick={onEditClick}
                onDblTap={onEditClick}
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
export default ULine
