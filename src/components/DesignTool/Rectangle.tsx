import React from 'react';
import { Rect } from 'react-konva';

interface Props {
    shapeProps: any
    onSelect: any
    onChange: any
    onEditClick: any
}

const Rectangle: React.FC<Props> = ({ shapeProps, onSelect, onChange, onEditClick }) => {

    const { patternImageUrl, ...restProps } = shapeProps

    // TODO - patternImageUrl thing tbd

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
            />
        </React.Fragment>
    );
};
export default Rectangle
