import React from 'react';
import { Rect } from 'react-konva';

interface Props {
    shapeProps: any
    onSelect: any
    onChange: any
}

const Rectangle: React.FC<Props> = ({ shapeProps, onSelect, onChange }) => {

    return (
        <React.Fragment>
            <Rect
                onClick={onSelect}
                onTap={onSelect}
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
                {...shapeProps}
            />
        </React.Fragment>
    );
};
export default Rectangle
