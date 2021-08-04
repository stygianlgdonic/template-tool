import React, { useContext, useEffect } from 'react';
import { DesignToolContext } from '../../../../../../../../../../contexts/DesignToolContext';
const image1 = require('./../../../../../../../../../../assets/images/hollow.png');
const image2 = require('./../../../../../../../../../../assets/images/splice.png');
const image3 = require('./../../../../../../../../../../assets/images/echo.png');
const image4 = require('./../../../../../../../../../../assets/images/neon.png');
const image5 = require('./../../../../../../../../../../assets/images/glitch.png');
const image6 = require('./../../../../../../../../../../assets/images/lift.png');
const image7 = require('./../../../../../../../../../../assets/images/shadow.png');
const FontStyletool: React.FC = (): JSX.Element => {
    const [designToolnavigator, setDesignToolnavigator] = useContext(DesignToolContext)

    return (

        <div className="h-full flex  flex-col w-full px-6">


            <div> <h1 className="font-bold text-xl mt-6">
                Effects
            </h1>
            </div>
            <div className="border-b-2 border-bordercolor mt-6 " ></div>
            <div> <h1 className="font-medium text-lg mt-6">
                Style
            </h1>
            </div >
            <div className="w-full gap-4  flex-wrap flex flex-row mt-4">
                <button><img src={image6} className="w-24" /> <p className="text-gray94 mt-1">None</p></button>
                <button><img src={image1} className="w-24" /> <p className="text-gray94 mt-1">Hollow</p></button>
                <button><img src={image6} className="w-24" /> <p className="text-gray94 mt-1">Lift</p></button>
                <button><img src={image7} className="w-24" /> <p className="text-gray94 mt-1">Shadow</p></button>
                <button><img src={image4} className="w-24" /> <p className="text-gray94 mt-1">Neon</p></button>
                <button><img src={image5} className="w-24" /> <p className="text-gray94 mt-1">glitch</p></button>
                <button><img src={image3} className="w-24" /> <p className="text-gray94 mt-1">echo</p></button>
                <button><img src={image2} className="w-24" /> <p className="text-gray94 mt-1">splice</p></button>


            </div>
        </div>
    )
};
export default FontStyletool;
