import React from 'react';
import CardElementsFunctions from '../../../../../../../../../../Hooks/CardElementsFunctions';
import { defaultCircle, defaultPolygon, defaultRect, defaultTriangle } from '../../../../../../../../../../utils/defaults';
import generatesvgUrl from '../../../../../../../../../../utils/generatesvgUrl';

interface Props {
    shapesArray: any
}

const Shapes: React.FC<Props> = ({ shapesArray }): JSX.Element => {
    const { handleAddNewRect, handleAddNewCircle, handleAddNewTrianlge, handleAddNewPolygon } = CardElementsFunctions()

    const handleAddElement = (elementName: string) => {
        elementName === "rect" && handleAddNewRect(defaultRect)
        elementName === "circle" && handleAddNewCircle(defaultCircle)
        elementName === "triangle" && handleAddNewTrianlge(defaultTriangle)
        elementName === "polygon" && handleAddNewPolygon(defaultPolygon)
    }

    return (
        <div className="h-full flex w-full  flex-col">

            <div className="flex flex-row justify-between items-center w-full mb-6">

                <h1 className="text-lg text-gray94 font-bold">Shapes</h1>


                <button className="text-md text-gray95 font-medium">See all</button>
            </div>
            <div className="flex flex-row justify-between mt-4">
                {shapesArray.map((item, index) => (
                    <div key={index}>
                        <button className=" focus:ring focus:outline-none" onClick={() => handleAddElement(item.name)}>
                            <img alt="shape" src={generatesvgUrl(item.element)} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
};
export default Shapes;
