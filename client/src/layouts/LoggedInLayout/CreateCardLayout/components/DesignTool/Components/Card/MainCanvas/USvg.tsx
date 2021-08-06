import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';
import * as svg from "../../../../../../../../utils/svg"

interface Props {
    svgProps: any
    onChange: any
    onSelect: any
}

const USvg: React.FC<Props> = ({ svgProps, onChange, onSelect }) => {

    const [image] = useImage(svg.svgToURL(svg.replaceColors(svgProps.svgString, svgProps.colorMap)));

    return (
        <>
            <Image
                {...svgProps}
                image={image}
                onClick={onSelect}
                onTap={onSelect}
                onDragEnd={onChange}
                onTransformEnd={onChange}
            />
        </>
    );

}
export default USvg
