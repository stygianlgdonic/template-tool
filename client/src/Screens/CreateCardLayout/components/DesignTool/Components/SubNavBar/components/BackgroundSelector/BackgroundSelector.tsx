import React from 'react';
import SearchBar from '../ElementSelector/components/SearchBar/SearchBar';
import AddBackgroundImage from './components/AddBackgroundImage/AddBackgroundImage';
import BackgroundColor from './components/BackgroundColor/BackgroundColor';
import "./style.css"
const BackgroundSelector: React.FC = (): JSX.Element => {
    return (
        <div className=" flex   flex-col justify-center w-full ">

            <div className="mt-6 w-full">
                <SearchBar />

            </div>
            <div className="flex flex-col p-6">

                <BackgroundColor />
            </div>
            <div className="p-6 text-gray95">
                <p className="separator"></p>
            </div>
            <div>
                <AddBackgroundImage />
            </div>

        </div>
    )
};
export default BackgroundSelector;
