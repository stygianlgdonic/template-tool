import React from 'react';
import "./../Stickers/styles.css"
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
const Buttons: React.FC = (): JSX.Element => {

    const contentWrapper = React.useRef(null);
    return (
        <div className="h-full flex  flex-col">


            <div className="flex flex-row justify-between items-center w-full mb-4 px-4">

                <h1 className="text-lg text-gray94 font-bold">Buttons</h1>


                <button className="text-md text-gray95 font-medium">See all</button>
            </div>
            <div className="flex flex-row items-center justify-between h-28 px-1" >
                <div>

                    <button className=" mt-2" onClick={() => {
                        sideScroll(contentWrapper.current, 25, 100, -10);
                    }}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 13L6 10M6 10L9 7M6 10L14 10M1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10Z" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                </div>
                <div className="flex flex-row flex-grow  gap-4 w-80  overflow-x-scroll flex-shrink-0  mx-2 no-scrollbar " ref={contentWrapper} >
                    <div className="bg-fuschia text-white flex flex-row w-40 justify-center  h-12 rounded-md flex-shrink-0">
                        <button className="flex flex-row justify-center items-center">
                            <svg className="mr-2" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.00300002 1.884L8 5.882L15.997 1.884C15.9674 1.37444 15.7441 0.895488 15.3728 0.545227C15.0016 0.194965 14.5104 -9.35847e-05 14 3.36834e-08H2C1.48958 -9.35847e-05 0.998447 0.194965 0.627178 0.545227C0.255908 0.895488 0.0326041 1.37444 0.00300002 1.884Z" fill="white" />
                                <path d="M16 4.118L8 8.118L0 4.118V10C0 10.5304 0.210714 11.0391 0.585786 11.4142C0.960859 11.7893 1.46957 12 2 12H14C14.5304 12 15.0391 11.7893 15.4142 11.4142C15.7893 11.0391 16 10.5304 16 10V4.118Z" fill="white" />
                            </svg>
                            Button text

                        </button>
                    </div>
                    <div className="bg-bluish text-white flex flex-row w-40 justify-center h-12 rounded-md  flex-shrink-0">
                        <button className="flex flex-row justify-center items-center">
                            <svg className="mr-2" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.00300002 1.884L8 5.882L15.997 1.884C15.9674 1.37444 15.7441 0.895488 15.3728 0.545227C15.0016 0.194965 14.5104 -9.35847e-05 14 3.36834e-08H2C1.48958 -9.35847e-05 0.998447 0.194965 0.627178 0.545227C0.255908 0.895488 0.0326041 1.37444 0.00300002 1.884Z" fill="white" />
                                <path d="M16 4.118L8 8.118L0 4.118V10C0 10.5304 0.210714 11.0391 0.585786 11.4142C0.960859 11.7893 1.46957 12 2 12H14C14.5304 12 15.0391 11.7893 15.4142 11.4142C15.7893 11.0391 16 10.5304 16 10V4.118Z" fill="white" />
                            </svg>
                            Button text

                        </button>
                    </div>
                    <div className="bg-yellowish text-white flex flex-row w-40 justify-center h-12 rounded-md flex-shrink-0">
                        <button className="flex flex-row justify-center items-center">
                            <svg className="mr-2" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.00300002 1.884L8 5.882L15.997 1.884C15.9674 1.37444 15.7441 0.895488 15.3728 0.545227C15.0016 0.194965 14.5104 -9.35847e-05 14 3.36834e-08H2C1.48958 -9.35847e-05 0.998447 0.194965 0.627178 0.545227C0.255908 0.895488 0.0326041 1.37444 0.00300002 1.884Z" fill="white" />
                                <path d="M16 4.118L8 8.118L0 4.118V10C0 10.5304 0.210714 11.0391 0.585786 11.4142C0.960859 11.7893 1.46957 12 2 12H14C14.5304 12 15.0391 11.7893 15.4142 11.4142C15.7893 11.0391 16 10.5304 16 10V4.118Z" fill="white" />
                            </svg>
                            Button text

                        </button>
                    </div>
                    <div className="bg-greenish text-white flex flex-row w-40 justify-center h-12 rounded-md flex-shrink-0">
                        <button className="flex flex-row justify-center items-center">
                            <svg className="mr-2" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.00300002 1.884L8 5.882L15.997 1.884C15.9674 1.37444 15.7441 0.895488 15.3728 0.545227C15.0016 0.194965 14.5104 -9.35847e-05 14 3.36834e-08H2C1.48958 -9.35847e-05 0.998447 0.194965 0.627178 0.545227C0.255908 0.895488 0.0326041 1.37444 0.00300002 1.884Z" fill="white" />
                                <path d="M16 4.118L8 8.118L0 4.118V10C0 10.5304 0.210714 11.0391 0.585786 11.4142C0.960859 11.7893 1.46957 12 2 12H14C14.5304 12 15.0391 11.7893 15.4142 11.4142C15.7893 11.0391 16 10.5304 16 10V4.118Z" fill="white" />
                            </svg>
                            Button text

                        </button>
                    </div>
                </div>
                <div className="">

                    <button className="mt-2" onClick={() => {
                        sideScroll(contentWrapper.current, 25, 100, 10);
                    }}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 7L14 10M14 10L11 13M14 10L6 10M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>

            </div>

        </div>
    )
};
export default Buttons;
