import React, { useContext } from 'react';
import { DesignToolContext } from '../../../../../../contexts/DesignToolContext';
import BackgroundSelector from './components/BackgroundSelector/BackgroundSelector';
import ElementSelector from './components/ElementSelector/ElementSelector';
import ImageSelector from './components/ImageSelector/ImageSelector';
import TextSelector from './components/TextSelector/TextSelector';

const SubNavBar: React.FC = (): JSX.Element => {
    const [designToolnavigator, setDesignToolnavigator] = useContext(DesignToolContext)
    return (
        <div className="border-bordercolor border-r-2 ">

            <div className="h-full flex flex-col w-full">

                {designToolnavigator === 'element' && <ElementSelector />}

            </div>
            <div className="h-full flex flex-col  w-full">

                {designToolnavigator === 'text' && <TextSelector />}

            </div>
            <div className="h-full flex flex-col  w-full">

                {designToolnavigator === 'images' && <ImageSelector />}

            </div>
            <div className=" flex flex-col w-full">

                {designToolnavigator === 'background' && <BackgroundSelector />}

            </div>
            <div className="h-full flex flex-col  w-full">

                {designToolnavigator === 'logo' && <TextSelector />}

            </div>

        </div>
    )
};
export default SubNavBar;
