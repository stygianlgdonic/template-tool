import React from 'react';
import { Image } from 'react-konva';

interface Props {
    imageProps: any
    onChange: any
    onSelect: any
    image: any
}

const UImage: React.FC<Props> = ({ imageProps, onChange, onSelect, image }) => {

    return (
        <>
            <Image
                {...imageProps}
                image={image}
                onClick={() => onSelect(imageProps.id)}
                onTap={() => onSelect(imageProps.id)}
                onDragEnd={onChange}
                onTransformEnd={onChange}
            />
        </>
    );

}

export default UImage