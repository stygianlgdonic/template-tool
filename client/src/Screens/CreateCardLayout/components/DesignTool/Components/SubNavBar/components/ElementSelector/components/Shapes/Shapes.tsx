import React from 'react';

const Shapes: React.FC = (): JSX.Element => {
    return (
        <div className="h-full flex w-full  flex-col">

            <div className="flex flex-row justify-between items-center w-full mb-6">

                <h1 className="text-lg text-gray94 font-bold">Shapes</h1>


                <button className="text-md text-gray95 font-medium">See all</button>
            </div>
            <div className="flex flex-row justify-between mt-4">

                <div>
                    <button className=" focus:ring focus:outline-none">

                        <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="63" height="63" fill="#D1D5DB" />
                        </svg>
                    </button>
                </div>
                <div>
                    <button className=" focus:ring focus:outline-none">
                        <svg width="64" height="63" viewBox="0 0 64 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="32" cy="31.5" rx="32" ry="31.5" fill="#D1D5DB" />
                        </svg>
                    </button >
                </div>
                <div>
                    <button className=" focus:ring focus:outline-none">
                        <svg width="80" height="69" viewBox="0 0 80 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40 0L79.8372 69H0.16283L40 0Z" fill="#D1D5DB" />
                        </svg>
                    </button>
                </div>
                <div>
                    <button className=" focus:ring focus:outline-none">
                        <svg width="64" height="63" viewBox="0 0 64 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="32" cy="31.5" rx="32" ry="31.5" fill="#D1D5DB" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    )
};
export default Shapes;
