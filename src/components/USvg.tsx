import React, { useState } from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';
import * as svg from "../utils/svg"

interface Props {
    svgProps: any
    onChange: any
    onSelect: any
    onEdit: any
}

const USvg: React.FC<Props> = ({ svgProps, onChange, onSelect, onEdit }) => {

    const [image] = useImage(svg.svgToURL(svg.replaceColors(svgProps.svgString, svgProps.colorMap)));

    return (
        <>
            <Image
                {...svgProps}
                image={image}
                onClick={onSelect}
                onTap={onSelect}
                onDblClick={onEdit}
                onDblTap={onEdit}
                onDragEnd={onChange}
                onTransformEnd={onChange}
            />
        </>
    );

}
export default USvg
