import React from 'react';


interface BioProps {
    bio: string,
    bio1: number,
    bio2: number,
    bio3: string,
    bio4: string,
    bio5: string,
    image: string
}
const StatCard: React.FC<BioProps> = ({ bio, bio1, bio2, bio3, bio4, bio5, image }): JSX.Element => {

    return (
        <div className=" border-2 border-bordercolor rounded-xl w-2/3  bg-white shadow-md  ">
            <div className="flex flex-row mt-4 justify-center items-center ">


                <div>
                    <img className=" mt-6 ml-4" width="80" height="80" src={image} />
                </div>
                <div className="ml-4">


                    <div className="flex justify-start  text-gray95 mt-6">

                        <h1>{bio}</h1>
                    </div>
                    <div className="flex mt-1">
                        <p className="text-xl text-indigo font-bold">{bio1}</p>
                        <p className="text-indigo text-md mt-1 ml-2">{bio3}</p>
                    </div>
                    <div className="flex justify-center mt-2 align-middle items-center mb-4">
                        <svg className="" width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.293153 5.70679C0.105447 5.51926 0 5.26495 0 4.99979C0 4.73462 0.105447 4.48031 0.293153 4.29279L4.29816 0.292787C4.48592 0.105316 4.74055 0 5.00604 0C5.27154 0 5.52617 0.105316 5.71393 0.292787L9.71894 4.29279C9.90132 4.48139 10.0022 4.73399 9.99996 4.99619C9.99768 5.25838 9.89238 5.5092 9.70674 5.6946C9.5211 5.88001 9.26997 5.98518 9.00745 5.98746C8.74492 5.98974 8.49201 5.88894 8.30317 5.70679L6.0073 3.41379V10.9998C6.0073 11.265 5.90181 11.5194 5.71404 11.7069C5.52627 11.8944 5.27159 11.9998 5.00604 11.9998C4.7405 11.9998 4.48582 11.8944 4.29805 11.7069C4.11028 11.5194 4.00479 11.265 4.00479 10.9998V3.41379L1.70892 5.70679C1.52116 5.89426 1.26653 5.99957 1.00104 5.99957C0.735542 5.99957 0.480915 5.89426 0.293153 5.70679Z" fill="#10B981" />
                        </svg>
                        <p className="text-green ml-1">{bio2}</p>
                        <p className="ml-1 text-sm text-gray95 ">{bio5}</p>

                    </div>
                </div>
            </div>
            <div className="bg-jacksonsGray border-b-0 border-bordercolor rounded-b-xl py-2">
                <button className="ml-6 text-sm text-indigo600 leading-5 font-medium">View all</button>
            </div>


        </div>

    )

};

export default StatCard;
