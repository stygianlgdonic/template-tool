import React from 'react';
const image1 = require('./../../../../../../../../../../../assets/images/polygon.png')
const image2 = require('./../../../../../../../../../../../assets/images/circle.png')
const image3 = require('./../../../../../../../../../../../assets/images/square.png')
const Frames: React.FC = (): JSX.Element => {
    return (
        <div className=" flex   flex-col  w-full ">

            <div className="flex w-full flex-col">

                <h1 className="font-bold text-xl">
                    Frames
                </h1>
                <div className=" w-full gap-4 grid grid-cols-4     mt-6 ">
                    <div>
                        <button>
                            <img src={image2} className="w-16 h-18" />
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={image3} className="w-16 h-18" />
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={image1} className="w-16 h-18" />
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={image2} className="w-16 h-18" />
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={image3} className="w-16 h-18" />
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={image1} className="w-16 h-18" />
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={image2} className="w-16 h-18" />
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={image3} className="w-16 h-18" />
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={image1} className="w-16 h-18" />
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={image2} className="w-16 h-18" />
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={image3} className="w-16 h-18" />
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={image1} className="w-16 h-18" />
                        </button>
                    </div>


                </div>

            </div>
        </div>
    )
};
export default Frames;
