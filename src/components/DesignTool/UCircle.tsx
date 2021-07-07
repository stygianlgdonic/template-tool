import React from 'react';
import { Circle } from 'react-konva';

interface Props {
    shapeProps: any
    onSelect: any
    onChange: any
}

const UCircle: React.FC<Props> = ({ shapeProps, onSelect, onChange }) => {

    return (
        <React.Fragment>
            <Circle
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
export default UCircle
