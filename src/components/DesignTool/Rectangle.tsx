import React from 'react';
import { Rect } from 'react-konva';
import useImage from "use-image"

interface Props {
    shapeProps: any
    onSelect: any
    onChange: any
    onEditClick: any
}

const Rectangle: React.FC<Props> = ({ shapeProps, onSelect, onChange, onEditClick }) => {

    const { patternImageUrl, ...restProps } = shapeProps
    const [image] = useImage(patternImageUrl || null)

    console.log({ image })

    const rectWidth = restProps.width;
    const rectHeight = restProps.height;
    const imageWidth = image ? image.width : 10;
    const imageHeight = image ? image.height : 10;
    const patternScale = Math.max(
        rectWidth / imageWidth,
        rectHeight / imageHeight
    );

    return (
        <React.Fragment>
            <Rect
                onClick={onSelect}
                onTap={onSelect}
                onDblClick={onEditClick}
                onDblTap={onEditClick}
                draggable
                onTransformEnd={(e) => {
                    onChange({
                        ...e.target.attrs,
                    })
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
                fillPatternOffset={{ x: 0, y: 0 }}
                fillPatternScaleX={patternScale}
                fillPatternScaleY={patternScale}
                fillPatternRepeat="no-repeat"
            />
        </React.Fragment>
    );
};
export default Rectangle
