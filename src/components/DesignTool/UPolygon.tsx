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
                        ...e.target.attrs,
                    });
                }}
                {...restProps}
                fillPatternImage={image}
                fillPatternOffset={{ x: polRadius, y: polRadius }}
                fillPatternScaleX={polRadius}
                fillPatternScaleY={polRadius}
                fillPatternRepeat="no-repeat"
            />
        </React.Fragment>
    );
};
export default UPolygon
