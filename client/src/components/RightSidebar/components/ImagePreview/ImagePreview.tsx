import React from 'react';
import { ORIGINAL_SVG_editicon } from '../../../../utils/defaults'
import { ORIGINAL_SVG_attachementicon } from '../../../../utils/defaults'
import { ORIGINAL_SVG_deleteicon } from '../../../../utils/defaults'
import generatesvgUrl from '../../../../utils/generatesvgUrl'


interface BioProps {
    date: string,
    creator: string,
    last_edited_by: string,
    image: any,
}
const ImagePreview: React.FC<BioProps> = ({ date, creator, last_edited_by, image }): JSX.Element => {

    const svg1 = generatesvgUrl(ORIGINAL_SVG_editicon)
    const svg2 = generatesvgUrl(ORIGINAL_SVG_attachementicon)
    const svg3 = generatesvgUrl(ORIGINAL_SVG_deleteicon)

    return (
        <div className="mt-4 overflow-y-auto overscroll-y-auto w-full  flex self-center  justify-center border  rounded-lg pb-10 shadow-md">
            <div className=" pt-4">
                <div className="flex justify-center flex-col items-center px-6">
                    <div className="flex flex-row">
                        <div className="w-full">

                            <img className="w-24 h-24 border-0 rounded-md ml-24" src={image} />
                        </div>
                        <button className="top-0 pb-16 ml-8 text-indigo600">Preview</button>
                    </div>
                    <p className="text-base leading-6 font-medium text-gray900 pt-2">My brand sales campaign</p>
                </div>
                <div className="flex flex-row justify-center mt-4 px-8">
                    <div className="flex flex-row">

                        <button className="flex flex-row border px-2 py-1 rounded-md items-center text-sm text-gray94 border-bordercolor shadow-sm "><img className="pr-2 w-6" src={svg1} />Edit</button>
                    </div>
                    <div className="flex flex-row px-2">


                        <button className="flex flex-row border px-2 py-1 rounded-md items-center text-gray94 text-sm border-bordercolor shadow-sm"><img className="pr-2 w-6" src={svg2} />Use as</button>
                    </div>
                    <div className="flex flex-row">


                        <button className="flex flex-row border px-2 py-1 rounded-md items-center text-sm text-gray94 border-bordercolor shadow-sm"><img className="pr-2 w-6" src={svg3} />Archive</button>
                    </div>
                </div>
                <div className=" flex justify-center border-t border-gallery mt-4 mb-4 w-full px-0">
                </div>
                <div className="flex flex-col justify-evenly">
                    <div className="flex flex-row justify-evenly mb-2">
                        <h1 className=" text-gray95 font-medium">Date Created</h1><p>{date}</p>
                    </div>
                    <div className="flex flex-row justify-between px-16 mb-2">
                        <h1 className="text-gray95 font-medium">Created by</h1><p>{creator}</p>
                    </div>
                    <div className="flex flex-row justify-evenly mb-2">
                        <h1 className="text-gray95 font-medium">Last Edited by</h1><p>{last_edited_by}</p>
                    </div>


                </div>

            </div>


        </div>

    )

};

export default ImagePreview;
