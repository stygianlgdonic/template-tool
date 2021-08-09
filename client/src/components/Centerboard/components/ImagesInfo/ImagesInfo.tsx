import React, { useContext } from 'react';
import Imagestat from './ImageStat/ImageStat'
const image1 = require('./../../../../assets/images/ALP-Summer.png');
import generatesvgUrl from '../../../../utils/generatesvgUrl'
import { DesignToolContext } from '../../../../contexts/DesignToolContext';

const ImagesInfo: React.FC = () => {
    const {
        sidebarnavigator, setSidebarnavigator

    } = useContext(DesignToolContext)
    let Card_1_title = "ALP"
    let Card_1_views = 121
    let Card_1_clicks = 541
    let Card_1_time = '0.32%'
    let Card_1_sale = '5%'
    return (
        <div className=" w-full border-0 rounded-xl bg-white shadow-md pb-6 mb-4 h-auto mt-6 ">
            <div className=" ml-6 justify-between flex flex-row">
                <h1 className="mt-10 text-2xl font-bold">Your Personalized Images</h1>
                <button className="mt-10 mr-4 border-2 border-alto rounded-md px-4 py-2 mb-6 text-white bg-indigo600">Filters</button>
            </div>
            <div className=" flex justify-center mx-auto w-10/12 border-t-2 border-gallery mb-4">
            </div>
            <div className="flex flex-row px-4  mx-4">
                <div className="mb-6 w-full " onClick={() => setSidebarnavigator('stat')}>
                    <Imagestat title={Card_1_title} sale={Card_1_sale} views={Card_1_views} clicks={Card_1_clicks} time={Card_1_time} image={image1} />
                </div>

                <div className="mb-6 w-full" onClick={() => setSidebarnavigator('images')}>
                    <Imagestat title={Card_1_title} sale={Card_1_sale} views={Card_1_views} clicks={Card_1_clicks} time={Card_1_time} image={image1} />
                </div>
            </div>
        </div>


    )

};

export default ImagesInfo;
