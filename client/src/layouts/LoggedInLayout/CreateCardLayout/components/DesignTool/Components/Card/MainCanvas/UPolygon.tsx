import React, { useRef } from 'react';
import { RegularPolygon } from 'react-konva';
import useImage from 'use-image';

interface Props {
    shapeProps: any
    onSelect: any
    onChange: any
}

const UPolygon: React.FC<Props> = ({ shapeProps, onSelect, onChange }) => {

    const shapeRef = useRef(null)

    const { patternImageUrl, ...restProps } = shapeProps
    const [image] = useImage(patternImageUrl || null, 'anonymous')
    const imageWidth = image ? image.width : 10;
    const imageHeight = image ? image.height : 10;

    const Xpoint = (imageWidth / 2)
    const Ypoint = (imageHeight / 2)


    return (
        <React.Fragment>
            <RegularPolygon
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
                fillPatternScaleX={2.0}
                fillPatternScaleY={2.0}
                fillPatternRepeat="no-repeat"
            />
        </React.Fragment>
    );
};
export default UPolygon
