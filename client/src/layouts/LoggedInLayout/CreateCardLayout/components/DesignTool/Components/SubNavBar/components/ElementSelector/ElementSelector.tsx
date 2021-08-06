import React from 'react';
import Buttons from './components/Buttons/Buttons';
import SearchBar from './components/SearchBar/SearchBar';
import Shapes from './components/Shapes/Shapes';
import Stickers from './components/Stickers/Stickers';

const ElementSelector: React.FC = (): JSX.Element => {
    return (
        <div className=" flex   flex-col justify-center w-full  ">

            <div className="mt-6 w-full">
                <SearchBar />

            </div>
            <div className="mt-6 w-full px-4">
                <Shapes />
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
