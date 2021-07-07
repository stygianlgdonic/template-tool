import React from 'react';
import { RegularPolygon } from 'react-konva';

interface Props {
    shapeProps: any
    onSelect: any
    onChange: any
}

const UPolygon: React.FC<Props> = ({ shapeProps, onSelect, onChange }) => {

    return (
        <React.Fragment>
            <RegularPolygon
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
export default UPolygon
