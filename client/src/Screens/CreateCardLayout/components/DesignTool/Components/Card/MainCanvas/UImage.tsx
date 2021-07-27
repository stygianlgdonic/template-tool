import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

interface Props {
    imageProps: any
    onChange: any
    onSelect: any
}

const UImage: React.FC<Props> = ({ imageProps, onChange, onSelect }) => {

    const [image] = useImage(imageProps.src)

    const { src, ...rest } = imageProps
    return (
        <>
            <Image
                {...rest}
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