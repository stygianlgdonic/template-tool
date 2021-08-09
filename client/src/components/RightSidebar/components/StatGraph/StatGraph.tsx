import React from 'react';
import { ORIGINAL_SVG_updownicon } from './../../../../utils/defaults'
import { ORIGINAL_SVG_bluedoticon } from './../../../../utils/defaults'
import { ORIGINAL_SVG_greendoticon } from './../../../../utils/defaults'
import generatesvgUrl from './../../../../utils/generatesvgUrl'
const image = require('./../../../../assets/images/Chart.png');


interface BioProps {
    impressions: number,
    link_clicks: number,
    conversionrate: number,
}

const StatGraph: React.FC<BioProps> = ({ impressions, link_clicks, conversionrate }): JSX.Element => {
    const svg1 = generatesvgUrl(ORIGINAL_SVG_updownicon)
    const svg2 = generatesvgUrl(ORIGINAL_SVG_bluedoticon)
    const svg3 = generatesvgUrl(ORIGINAL_SVG_greendoticon)
    return (
        <div className="  rounded-md bg-white  w-full px-4  py-6 shadow-md border">
            <div className="flex flex-row justify-between">
                <div>
                    <h1 className="text-xl text-black leading-7 font-medium">Stats</h1>
                </div>
                <div className="flex flex-row">

                    <div className="flex flex-row px-2 border-2 border-bordercolor rounded-md  mr-2">
                        <button className="pr-2">Last week </button>
                        <img className="w-2 " src={svg1} />
                    </div>
                    <div className="flex flex-row px-2 border-2 border-bordercolor rounded-md">
                        <button className="pr-2">Sources </button>
                        <img className="w-2 " src={svg1} />
                    </div>
                </div>
            </div>
            <div className="flex flex-row mt-6">
                <div className="flex flex-col border-r-2 border-bordercolor pr-4">
                    <div className="flex flex-row">
                        <img className="" src={svg2} />
                        <h1 className="ml-2 text-xs text-gray95 leading-4 font-medium">Impressions</h1>
                    </div>
                    <div>
                        <h1 className="text-sm text-lightGray leading-5 font-normal">{impressions}</h1>
                    </div>
                </div>
                <div className="flex flex-col  px-4">
                    <div className="flex flex-row">
                        <img className="" src={svg3} />
                        <h1 className="ml-2 text-xs text-gray95 leading-4 font-medium">Link Clicks</h1>
                    </div>
                    <div>
                        <h1 className="text-sm text-lightGray leading-5 font-normal">{link_clicks}</h1>
                    </div>
                </div>
            </div>
            <div className="mt-4 flex justify-end">
                <p className="bg-indigo100 text-sm leading-5 font-normal border-0 rounded-xl text-lightGray px-4 ">{conversionrate}<span>%</span></p>
            </div>
            <div className="flex justify-end mb-4">

                <p className="text-base text-gray95 leading-4 font-medium mt-1 ">Conversion rate</p>
            </div>
            <div className="flex justify-center">
                <img src={image} className="w-10/12" />
            </div>


        </div>

    )

};

export default StatGraph;
