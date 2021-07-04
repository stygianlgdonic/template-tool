import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';
import * as svg from "../utils/svg"

interface Props {
    svgProps: any
    onChange: any
    onSelect: any
}

const USvg: React.FC<Props> = ({ svgProps, onChange, onSelect, }) => {

    const colors = svg.getColors(svgProps.svgString);
    const [colorMap, setColorMap] = React.useState({});
    const modifiedSVG = svg.replaceColors(svgProps.svgString, colorMap);
    const [image] = useImage(svg.svgToURL(modifiedSVG));

    return (
        <>
            <Image
                {...svgProps}
                image={image}
                onClick={() => onSelect(svgProps.id)}
                onTap={() => onSelect(svgProps.id)}
                onDragEnd={onChange}
                onTransformEnd={onChange}
            />
        </>
    );

}
export default USvg
