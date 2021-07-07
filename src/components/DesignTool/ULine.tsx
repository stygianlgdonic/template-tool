import React from 'react';
import { Line } from 'react-konva';

interface Props {
    shapeProps: any
    onSelect: any
    onChange: any
}

const ULine: React.FC<Props> = ({ shapeProps, onSelect, onChange }) => {

    return (
        <React.Fragment>
            <Line
                onClick={onSelect}
                onTap={onSelect}
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
