import React from 'react';
import ReceipentsLogo from './components/ReceipentsLogo/ReceipentsLogo';
import BrandLogo from './components/BrandLogo/Brandlogo';

const ElementSelector: React.FC = (): JSX.Element => {
    return (
        <div className=" flex flex-col justify-center w-full ">

            <ReceipentsLogo />
            <div className="border-b border-bordercolor mt-12 mx-4"></div>
            <BrandLogo />
        </div>
    )
};
export default ElementSelector;
