import React from 'react';
import { ORIGINAL_SVG_updownicon } from './../../../../utils/defaults'
import { ORIGINAL_SVG_bluedoticon } from './../../../../utils/defaults'
import { ORIGINAL_SVG_greendoticon } from './../../../../utils/defaults'
import generatesvgUrl from './../../../../utils/generatesvgUrl'
const image1 = require('./../../../../assets/images/fb.png');
const image2 = require('./../../../../assets/images/insta.png');

interface BioProps {
    fb_impressions: number,
    fb_clicks: number,
    socialmedia1: string,
    insta_impressions: number,
    insta_clicks: number,
    socialmedia2: string,
}

const StatGraph: React.FC<BioProps> = ({ fb_impressions, fb_clicks, socialmedia1, insta_impressions, insta_clicks, socialmedia2 }): JSX.Element => {
    const svg1 = generatesvgUrl(ORIGINAL_SVG_updownicon)
    const svg2 = generatesvgUrl(ORIGINAL_SVG_bluedoticon)
    const svg3 = generatesvgUrl(ORIGINAL_SVG_greendoticon)
    return (
        <div className=" border shadow-md rounded-md bg-white  w-full   py-6">
            <div>
                <h1 className="text-xl leading-7 font-medium px-6 mb-4">Sources</h1>


            </div>
            <div className="bg-jacksonsGray text-gray95 text-xs w-full flex flex-row leading-4 font-medium h-10 justify-start px-6 items-center">
                <h1 className="w-32 ">Name</h1>
                <h1 className="w-20 ">Clicks</h1>
                <h1>Impressions</h1>
            </div>
            <div className=" text-gray95 text-xs w-full flex flex-row leading-4 font-medium h-10 justify-start px-6 items-center mb-2 mt-2">
                <div className="flex flex-row w-32 items-center">
                    <img src={image1} className="w-7 " />
                    <h1 className="pl-2 text-gray900"> {socialmedia1}</h1>
                </div>
                <div className="">

                    <h1 className="w-20">{fb_clicks}</h1>
                </div>
                <h1>{fb_impressions}</h1>
            </div>
            <div className=" text-gray95 text-xs w-full flex flex-row leading-4 font-medium h-10 justify-start px-6 items-center mb-2">
                <div className="flex flex-row w-32 items-center">
                    <img src={image1} className="w-7 " />
                    <h1 className="pl-2 text-gray900"> {socialmedia2}</h1>
                </div>
                <div className="">

                    <h1 className="w-20">{insta_clicks}</h1>
                </div>
                <h1>{insta_impressions}</h1>
            </div>
        </div>

    )

};

export default StatGraph;
