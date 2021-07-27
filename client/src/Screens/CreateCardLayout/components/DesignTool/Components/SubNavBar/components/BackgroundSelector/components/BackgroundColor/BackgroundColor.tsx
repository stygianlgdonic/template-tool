import React from 'react';

const BackgroundColor: React.FC = (): JSX.Element => {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <div className=" flex   flex-col justify-center w-full  ">

            <div className=" mt-4">
                <h1 className="font-bold text-xl text-gray95">
                    Select background color
                </h1>
            </div>
            <div className=" mt-4 flex flex-row items-center gap-4">
                <button >

                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7059 4.05883H4.05882C2.36948 4.05883 1 5.42831 1 7.11765V23.9412C1 25.6305 2.36948 27 4.05882 27H20.8824C22.5717 27 23.9412 25.6305 23.9412 23.9412V16.2941M21.7783 1.89591C22.9728 0.701364 24.9095 0.701364 26.1041 1.89591C27.2986 3.09045 27.2986 5.02719 26.1041 6.22174L12.9729 19.3529H8.64706L8.64706 15.0271L21.7783 1.89591Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <button type="button"
                    onClick={() => setShowModal(true)}>

                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="39" height="39" rx="5.5" fill="#4F46E5" />
                        <rect x="0.5" y="0.5" width="39" height="39" rx="5.5" stroke="#EEF2FF" />
                    </svg>

                </button>

                <button>

                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="6" fill="#5DEFC3" />
                    </svg>


                </button>
                <button>

                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="6" fill="#EEA146" />
                    </svg>



                </button>
                <button>

                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="6" fill="#EE4646" />
                    </svg>



                </button>



            </div>
        </div>
    )
};
export default BackgroundColor;
