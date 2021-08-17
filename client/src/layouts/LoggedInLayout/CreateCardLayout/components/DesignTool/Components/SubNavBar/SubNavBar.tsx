import React, { useContext } from 'react';
import { DesignToolContext } from '../../../../../../../contexts/DesignTool/DesignToolContext';
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
        designToolState
    } = useContext(DesignToolContext)
    return (

        <div className="h-full flex flex-col w-full border-bordercolor border ">

            {designToolState.sub_navbar_selection === 'element' && <ElementSelector />}
            {designToolState.sub_navbar_selection === 'text' && <TextSelector />}
            {designToolState.sub_navbar_selection === 'images' && <ImageSelector />}
            {designToolState.sub_navbar_selection === 'background' && <BackgroundSelector />}
            {designToolState.sub_navbar_selection === 'logo' && <LogoSelector />}
            {designToolState.sub_navbar_selection === 'texttool' && <FontStyletool />}
            {designToolState.sub_navbar_selection === 'fontColorTool' && <FontColortool />}
            {designToolState.sub_navbar_selection === 'shapeColor' && <FontColortool />}
            {designToolState.sub_navbar_selection === 'effecttool' && <EffectStyletool />}

        </div>
    )
};
export default SubNavBar;
