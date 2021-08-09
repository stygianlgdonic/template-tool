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
    const rectWidth = restProps.width;
    const rectHeight = restProps.height;
    const imageWidth = image ? image.width : 10;
    const imageHeight = image ? image.height : 10;
    const patternScale = restProps.patternScale || Math.max(
        rectWidth / imageWidth,
        rectHeight / imageHeight
    );

    return (
        <React.Fragment>
            <Rect
                ref={shapeRef}
                onClick={onSelect}
                onTap={onSelect}
                draggable
                strokeScaleEnabled={false}
                onTransformEnd={(e) => {
                    // transformer is changing scale of the node
                    // and NOT its width or height
                    // but in the store we have only width and height
                    // to match the data better we will reset scale on transform end
                    const node = shapeRef.current;
                    const scaleX = node.scaleX();
                    const scaleY = node.scaleY();

                    // we will reset it back
                    node.scaleX(1);
                    node.scaleY(1);
                    onChange({
                        ...shapeProps,
                        x: node.x(),
                        y: node.y(),
                        width: Math.max(node.width() * scaleX),
                        height: Math.max(node.height() * scaleY)
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
                fillPatternOffset={{ x: 0, y: 0 }}
                fillPatternScaleX={patternScale}
                fillPatternScaleY={patternScale}
                fillPatternRepeat="no-repeat"
            />
        </React.Fragment>
    );
};
export default Rectangle
