import React, { useContext, useEffect } from 'react';
import { DesignToolContext } from '../../../../../../../../../../contexts/DesignToolContext';
const image = require('./../../../../../../../../../../assets/images/hollow.png');
const FontStyletool: React.FC = (): JSX.Element => {
    const [designToolnavigator, setDesignToolnavigator] = useContext(DesignToolContext)

    return (

        <div className="h-full flex  flex-col w-full px-6 ">


            <div> <h1 className="font-bold text-xl mt-6">
                Effects
            </h1>
            </div>
            <div className="border-b-2 border-bordercolor mt-6" ></div>
            <div> <h1 className="font-medium text-lg mt-6">
                Style
            </h1>
            </div >
            <div className="w-full gap-4 flex-wrap flex flex-row mt-4">
                <button><img src={image} className="w-24" /> <p>Hollow</p></button>


            </div>
        </div>
    )
};
export default FontStyletool;
