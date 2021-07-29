import React, { useContext } from 'react';
import { DesignToolContext } from '../../../../../../contexts/DesignToolContext';
import BackgroundSelector from './components/BackgroundSelector/BackgroundSelector';
import ElementSelector from './components/ElementSelector/ElementSelector';
import ImageSelector from './components/ImageSelector/ImageSelector';
import TextSelector from './components/TextSelector/TextSelector';

const SubNavBar: React.FC = (): JSX.Element => {
    const [designToolnavigator, setDesignToolnavigator] = useContext(DesignToolContext)
    return (

        <div className="h-full flex flex-col w-full border-bordercolor border-r-2 ">

            {designToolnavigator === 'element' && <ElementSelector />}
            {designToolnavigator === 'text' && <TextSelector />}
            {designToolnavigator === 'images' && <ImageSelector />}
            {designToolnavigator === 'background' && <BackgroundSelector />}
            {designToolnavigator === 'logo' && <TextSelector />}

        </div>
    )
};
export default SubNavBar;
