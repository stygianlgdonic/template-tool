import React from 'react';
import BackgroundSelector from './components/BackgroundSelector/BackgroundSelector';
import ElementSelector from './components/ElementSelector/ElementSelector';
import ImageSelector from './components/ImageSelector/ImageSelector';
import TextSelector from './components/TextSelector/TextSelector';

const SubNavBar: React.FC = (): JSX.Element => {
    return (
        <div className="h-full flex flex-col border-bordercolor border-r-2 w-full">

            <ElementSelector />

        </div>
    )
};
export default SubNavBar;
