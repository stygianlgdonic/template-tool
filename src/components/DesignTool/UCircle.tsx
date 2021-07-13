import React from 'react';
import { Circle } from 'react-konva';

interface Props {
    shapeProps: any
    onSelect: any
    onChange: any
    onEditClick: any
}

const UCircle: React.FC<Props> = ({ shapeProps, onSelect, onChange, onEditClick }) => {

    return (
        <React.Fragment>
            <Circle
                onClick={onSelect}
                onTap={onSelect}
                onDblClick={onEditClick}
                onDblTap={onEditClick}
                draggable
                strokeScaleEnabled={false}
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
