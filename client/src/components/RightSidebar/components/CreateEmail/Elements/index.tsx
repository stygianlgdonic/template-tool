import React from 'react'
import { Circle, Image, Line, Rect, RegularPolygon, Text } from 'react-konva';

interface Props {
    konvaItem: any
    index: number
}

const Elements: React.FC<Props> = ({ konvaItem, index }) => {

    if (!konvaItem) return (<></>)

    return (
        <>
            {konvaItem?.type === "rectangle" && (
                <Rect
                    key={index}
                    {...konvaItem}
                />
            )}

            {konvaItem?.type === "circle" && (
                <Circle
                    key={index}
                    {...konvaItem}
                />
            )}

            {konvaItem?.type === "line" && (
                <Line
                    key={index}
                    {...konvaItem}
                />
            )}

            {konvaItem?.type === "polygon" && (
                <RegularPolygon
                    key={index}
                    {...konvaItem}
                />
            )}

            {konvaItem?.type === "svg" && (
                <Image
                    key={index}
                    {...konvaItem}
                />
            )}

            {konvaItem?.type === "image" && (
                <Image
                    key={index}
                    {...konvaItem}
                />
            )}

            {konvaItem?.type === "text" && (
                <Text
                    key={index}
                    {...konvaItem}
                />
            )}
        </>
    )
}

export default Elements
