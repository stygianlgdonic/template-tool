import React, { useContext } from 'react';
import { DesignToolContext } from '../../../../../../contexts/DesignToolContext';
import BackgroundSelector from './components/BackgroundSelector/BackgroundSelector';
import ElementSelector from './components/ElementSelector/ElementSelector';
import ImageSelector from './components/ImageSelector/ImageSelector';
import LogoSelector from './components/LogoSelector/LogoSelector';
import TextSelector from './components/TextSelector/TextSelector';
import FontStyletool from './components/TextSelector/components/FontStyleTool/FontStyletool';
import FontColortool from './components/TextSelector/components/FontColortool/FontColortool';
import EffectStyletool from './components/TextSelector/components/EffectStyletool/EffectStyletool';

const SubNavBar: React.FC = (): JSX.Element => {
    const [designToolnavigator, setDesignToolnavigator] = useContext(DesignToolContext)
    return (

        <div className="h-full flex flex-col w-full border-bordercolor border ">

            {designToolnavigator === 'element' && <ElementSelector />}
            {designToolnavigator === 'text' && <TextSelector />}
            {designToolnavigator === 'images' && <ImageSelector />}
            {designToolnavigator === 'background' && <BackgroundSelector />}
            {designToolnavigator === 'logo' && <LogoSelector />}
            {designToolnavigator === 'texttool' && <FontStyletool />}
            {designToolnavigator === 'fonttool' && <FontColortool />}
            {designToolnavigator === 'effecttool' && <EffectStyletool />}

        </div>
    )
};
export default SubNavBar;
