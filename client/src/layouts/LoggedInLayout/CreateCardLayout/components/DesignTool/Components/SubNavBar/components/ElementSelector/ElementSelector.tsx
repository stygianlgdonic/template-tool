import React, { useState } from 'react';
import Buttons from './components/Buttons/Buttons';
import SearchBar from './components/SearchBar/SearchBar';
import Shapes from './components/Shapes/Shapes';
import Stickers from './components/Stickers/Stickers';

const initial_state = [
    {
        name: "rect",
        labels: ["rectangle", "square"],
        element: `<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="63" height="63" fill="#D1D5DB" />
                </svg>`
    },
    {
        name: "circle",
        labels: ["circle", "ellipse"],
        element: `<svg width="64" height="63" viewBox="0 0 64 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="32" cy="31.5" rx="32" ry="31.5" fill="#D1D5DB" />
                    </svg>`
    },
    {
        name: "triangle",
        labels: ["triangle"],
        element: `<svg width="80" height="69" viewBox="0 0 80 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40 0L79.8372 69H0.16283L40 0Z" fill="#D1D5DB" />
                    </svg>`
    },
    {
        name: "polygon",
        labels: ["polygon", "hexagon"],
        element: `<svg width="64" height="63" viewBox="0 0 64 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="32" cy="31.5" rx="32" ry="31.5" fill="#D1D5DB" />
                    </svg>`
    },
]

const ElementSelector: React.FC = (): JSX.Element => {

    const [shapesArray, setShapesArray] = useState(initial_state)

    return (
        <div className=" flex   flex-col justify-center w-full  ">

            <div className="mt-6 w-full">
                <SearchBar
                    shapesArray={shapesArray}
                    setShapesArray={setShapesArray}
                    initial_state={initial_state}
                />

            </div>
            <div className="mt-6 w-full px-4">
                <Shapes shapesArray={shapesArray} />
            </div>
            <div className="mt-6 w-full">
                <Stickers />
            </div>
            <div className="mt-6 w-full">
                <Buttons />
            </div>
        </div>
    )
};
export default ElementSelector;
