import React, { useContext } from 'react';
import { DesignToolContext } from '../../../../../../contexts/DesignToolContext';
import BackgroundSelector from './components/BackgroundSelector/BackgroundSelector';
import ElementSelector from './components/ElementSelector/ElementSelector';
import ImageSelector from './components/ImageSelector/ImageSelector';
import LogoSelector from './components/LogoSelector/LogoSelector';
import TextSelector from './components/TextSelector/TextSelector';

const SubNavBar: React.FC = (): JSX.Element => {
    const [designToolnavigator, setDesignToolnavigator] = useContext(DesignToolContext)
    return (

        <div className="h-full flex flex-col w-full border-bordercolor border ">

            {designToolnavigator === 'element' && <ElementSelector />}
            {designToolnavigator === 'text' && <TextSelector />}
            {designToolnavigator === 'images' && <ImageSelector />}
            {designToolnavigator === 'background' && <BackgroundSelector />}
            {designToolnavigator === 'logo' && <LogoSelector />}

        </div>
    )
};
export default SubNavBar;
