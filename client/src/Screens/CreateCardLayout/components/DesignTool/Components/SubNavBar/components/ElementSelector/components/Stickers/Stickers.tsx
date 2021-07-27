import React from 'react';
import { ORIGINAL_SVG_mailicon } from '../../../../../../../../../../utils/defaults';
import generatesvgUrl from '../../../../../../../../../../utils/generatesvgUrl';

const Stickers: React.FC = (): JSX.Element => {
    const svg = generatesvgUrl(ORIGINAL_SVG_mailicon)
    return (
        <div className="h-full flex  flex-col">


            <div className="flex flex-row justify-between items-center w-full">

                <h1 className="text-lg text-gray94 font-bold">Stickers</h1>


                <button className="text-md text-gray95 font-medium">See all</button>
            </div>
            <div className="flex flex-row mt-4  h-28 overflow-x-scroll flex-shrink-0">

                <button className="flex-shrink-0"> <img src={svg} className="w-12 flex-shrink-0" /></button>
                <button className="flex-shrink-0"> <img src={svg} className="w-12 flex-shrink-0" /></button>
                <button className="flex-shrink-0"> <img src={svg} className="w-12 flex-shrink-0" /></button>
                <button className="flex-shrink-0"> <img src={svg} className="w-12 flex-shrink-0" /></button>
                <button className="flex-shrink-0"> <img src={svg} className="w-12 flex-shrink-0" /></button>
                <button className="flex-shrink-0"> <img src={svg} className="w-12 flex-shrink-0" /></button>
                <button className="flex-shrink-0"> <img src={svg} className="w-12 flex-shrink-0" /></button>


                <div><button></button></div>
                <div><button></button></div>


            </div>

        </div >
    )
};
export default Stickers;
