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
    const {
        designToolState,
    } = useContext(DesignToolContext)
    return (

        <div className="h-full flex flex-col w-full border-bordercolor border ">

            {designToolState.navbar_selection === 'element' && <ElementSelector />}
            {designToolState.navbar_selection === 'text' && <TextSelector />}
            {designToolState.navbar_selection === 'images' && <ImageSelector />}
            {designToolState.navbar_selection === 'background' && <BackgroundSelector />}
            {designToolState.navbar_selection === 'logo' && <LogoSelector />}
            {designToolState.navbar_selection === 'texttool' && <FontStyletool />}
            {designToolState.navbar_selection === 'fonttool' && <FontColortool />}
            {designToolState.navbar_selection === 'effecttool' && <EffectStyletool />}

        </div>
    )
};
export default SubNavBar;
