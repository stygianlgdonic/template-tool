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
                onDragEnd={(e) => {
                    onChange({
                        ...shapeProps,
                        x: e.target.x(),
                        y: e.target.y(),
                    });
                }}
                onTransformEnd={(e) => {
                    // transformer is changing scale of the node
                    // and NOT its width or height
                    // but in the store we have only width and height
                    // to match the data better we will reset scale on transform end
                    const node = shapeRef.current;
                    const scaleX = node.scaleX();
                    const scaleY = node.scaleY();


                    // // we will reset it back
                    // node.scaleX(1);
                    // node.scaleY(1);
                    console.log({ helo: node.scaleX() })
                    onChange({
                        ...shapeProps,
                        x: node.x(),
                        y: node.y(),
                        width: Math.max(node.width() * scaleX),
                        height: Math.max(node.height() * scaleY),
                        scaleX: 1,
                        scaleY: 1
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
