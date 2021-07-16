import React, { useRef } from 'react';
import { RegularPolygon } from 'react-konva';
import useImage from 'use-image';

interface Props {
    shapeProps: any
    onSelect: any
    onChange: any
    onEditClick: any
}

const UPolygon: React.FC<Props> = ({ shapeProps, onSelect, onChange, onEditClick }) => {

    const shapeRef = useRef(null)

    const { patternImageUrl, ...restProps } = shapeProps
    const [image] = useImage(patternImageUrl || null)
    const polRadius = restProps.radius;
    const imageWidth = image ? image.width : 10;
    const imageHeight = image ? image.height : 10;
    console.log({ imageWidth, imageHeight, offset: shapeRef?.current?.fillPatternOffset(), scale: shapeRef?.current?.fillPatternScale() })
    // const patternScale = restProps.patternScale || Math.max(
    //     polRadius / imageWidth,
    //     polRadius / imageHeight
    // );

    return (
        <React.Fragment>
            <RegularPolygon
                ref={shapeRef}
                onClick={onSelect}
                onTap={onSelect}
                onDblClick={onEditClick}
                onDblTap={onEditClick}
                draggable
                strokeScaleEnabled={false}
                onDragEnd={(e) => {
                    onChange({
                        ...shapeProps,
                        x: e.target.x(),
                        y: e.target.y(),
                    });
                }}
                onTransformEnd={(e) => {
                    onChange({
                        ...shapeProps,
                        scaleX: e.target.attrs.scaleX,
                        scaleY: e.target.attrs.scaleY,
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
export default UPolygon
