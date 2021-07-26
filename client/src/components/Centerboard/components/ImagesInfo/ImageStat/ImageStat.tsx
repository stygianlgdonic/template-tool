import React from 'react';
import generatesvgUrl from '../../../../../utils/generatesvgUrl'
import { ORIGINAL_SVG_eyeicon } from './../../../../../utils/defaults'
import { ORIGINAL_SVG_impressionicon } from './../../../../../utils/defaults'
import { ORIGINAL_SVG_arrow_upicon } from './../../../../../utils/defaults'
interface BioProps {
    title: string,
    sale: any,
    views: number,
    clicks: number,
    time: any,
    image: string,
}
const ImageStat: React.FC<BioProps> = ({ title, sale, views, clicks, time, image }): JSX.Element => {

    const eyesvg = generatesvgUrl(ORIGINAL_SVG_eyeicon)
    const impressionsvg = generatesvgUrl(ORIGINAL_SVG_impressionicon)
    const arrowup = generatesvgUrl(ORIGINAL_SVG_arrow_upicon)

    return (

        <div className="w-11/12 border-0 rounded-md mb-8 shadow-md">

            <div className="flex justify-center border-0 rounded-t-md bg-grayshade ">
                <img className="w-32 h-32" src={image} />

            </div>
            <div className="flex flex-row justify-between space-x-14 text-sm leading-5 font-sans font-medium text-gray900 px-2 py-4">
                <div className="flex flex-row">

                    <h1 className="mr-1">{title}</h1>
                    <p className="mr-1">sale</p>
                    <p>{sale}</p>
                </div>
                <div className="flex flex-row ">
                    <img src={eyesvg} className="mr-2" />
                    <p className="mr-1">{views}</p>
                    <img src={impressionsvg} className="mr-2" />
                    <p>{clicks}</p>


                </div>
            </div>
            <div className="flex flex-row justify-between items-center px-2 text-sm leading-5 font-sans h-10 font-medium bg-grayshade">
                <div>

                    <button className="text-sm leading-5 font-sans pl-2 font-medium text-indigo600">View all</button>
                </div>
                <div className="flex flex-row bg-indigo100 px-2 rounded-lg">

                    <img src={arrowup} className="mr-1" />  <p className="text-indigo600"> {time}</p>
                </div>
            </div>

        </div>
    )

};

export default ImageStat;
