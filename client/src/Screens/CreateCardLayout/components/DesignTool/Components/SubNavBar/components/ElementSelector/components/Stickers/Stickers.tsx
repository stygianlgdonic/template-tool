import React from 'react';
import CardElementsFunctions from '../../../../../../../../../../Hooks/CardElementsFunctions';
import { defaultSvg, ORIGINAL_SVG_mailicon } from '../../../../../../../../../../utils/defaults';
import generatesvgUrl from '../../../../../../../../../../utils/generatesvgUrl';
import "./styles.css"

const sideScroll = (
    element: HTMLDivElement,
    speed: number,
    distance: number,
    step: number
) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
        element.scrollLeft += step;
        scrollAmount += Math.abs(step);
        if (scrollAmount >= distance) {
            clearInterval(slideTimer);
        }
    }, speed);
};
const Stickers: React.FC = (): JSX.Element => {
    const { handleAddSvg } = CardElementsFunctions()
    const svg = generatesvgUrl(ORIGINAL_SVG_mailicon)

    const contentWrapper = React.useRef(null);
    return (
        <div className="h-full flex  flex-col ">


            <div className="flex flex-row justify-between items-center w-full px-4">

                <h1 className="text-lg text-gray94 font-bold">Stickers</h1>


                <button className="text-md text-gray95 font-medium">See all</button>
            </div>

            <div className="flex flex-row mt-4    overflow-x-scroll  items-center overflow-hidden  no-scrollbar"  >
                <div>

                    <button className=" pl-2 mt-3" onClick={() => {
                        sideScroll(contentWrapper.current, 25, 100, -10);
                    }}><svg width="26" height="26" viewBox="0 0 20 20" fill="#D1D5DB" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 13L6 10M6 10L9 7M6 10L14 10M1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                </div>
                <div className=" h-28 z-50 -mr-8 bg-gradient-to-r w-8 from-white  bg-opacity-80 to-transparent"></div>
                <div className="flex flex-row flex-grow  gap-4 h-28  w-56 overflow-x-scroll z-10 no-scrollbar flex-shrink-0    relative" ref={contentWrapper}>

                    <button className="flex-shrink-0" onClick={() => handleAddSvg(ORIGINAL_SVG_mailicon)}> <img src={svg} className="w-12 flex-shrink-0 flex-grow" /></button>
                    <button className="flex-shrink-0" onClick={() => handleAddSvg(ORIGINAL_SVG_mailicon)}> <img src={svg} className="w-12 flex-shrink-0" /></button>
                    <button className="flex-shrink-0" onClick={() => handleAddSvg(ORIGINAL_SVG_mailicon)}> <img src={svg} className="w-12 flex-shrink-0" /></button>
                    <button className="flex-shrink-0" onClick={() => handleAddSvg(ORIGINAL_SVG_mailicon)}> <img src={svg} className="w-12 flex-shrink-0" /></button>
                    <button className="flex-shrink-0" onClick={() => handleAddSvg(ORIGINAL_SVG_mailicon)}> <img src={svg} className="w-12 flex-shrink-0" /></button>
                    <button className="flex-shrink-0" onClick={() => handleAddSvg(ORIGINAL_SVG_mailicon)}> <img src={svg} className="w-12 flex-shrink-0" /></button>
                    <button className="flex-shrink-0" onClick={() => handleAddSvg(ORIGINAL_SVG_mailicon)}> <img src={svg} className="w-12 flex-shrink-0" /></button>
                    <button className="flex-shrink-0" onClick={() => handleAddSvg(ORIGINAL_SVG_mailicon)}> <img src={svg} className="w-12 flex-shrink-0" /></button>
                    <button className="flex-shrink-0" onClick={() => handleAddSvg(ORIGINAL_SVG_mailicon)}> <img src={svg} className="w-12 flex-shrink-0" /></button>

                </div>
                <div className=" h-28 z-50 -ml-8 bg-gradient-to-l w-8 from-white  bg-opacity-50 to-transparent"></div>
                <div className="">

                    <button className="pr-2  mt-3" onClick={() => {
                        sideScroll(contentWrapper.current, 25, 100, 10);
                    }}><svg width="26" height="26" viewBox="0 0 20 20" fill="#D1D5DB" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 7L14 10M14 10L11 13M14 10L6 10M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>



        </div >
    )
};
export default Stickers;
