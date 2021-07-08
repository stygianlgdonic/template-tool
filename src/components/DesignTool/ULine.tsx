import React from 'react';
import { Line } from 'react-konva';

interface Props {
    shapeProps: any
    onSelect: any
    onChange: any
    onEditClick: any
}

const ULine: React.FC<Props> = ({ shapeProps, onSelect, onChange, onEditClick }) => {

    return (
        <React.Fragment>
            <Line
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
                {...shapeProps}
            />
        </React.Fragment>
    );
};
export default ULine
