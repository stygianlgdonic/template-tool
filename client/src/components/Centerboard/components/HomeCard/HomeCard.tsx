import React from 'react';


const HomeCard: React.FC = () => {

    return (
        <div className="">

            <div className="inline-block  pl-10 h-28 w-full pt-6 items-center justify-center justify-items-center align-middle border-0 rounded-xl bg-white shadow-md">
                <div className=" flex flex-row">

                    <button className="text-gray95 mr-6">Dashboard</button>
                    <svg className="w-2 mr-6 mt-2 text-gray95" width="9" height="12" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.999999 1L8 8L1 15" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <button className="text-gray95">Home</button>

                </div>
                <div>
                    <h1 className="text-xl font-sans font-bold">Home</h1>
                </div>


            </div>




        </div>

    )

};

export default HomeCard;
