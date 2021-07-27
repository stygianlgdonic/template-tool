import React from 'react';

const AddBackgroundImage: React.FC = (): JSX.Element => {
    return (
        <div className=" flex   flex-col justify-center w-full p-6 ">

            <div className="mt-2 w-full">
                <h1 className="font-bold text-xl text-gray95">Add background image</h1>
            </div>
            <div className="flex flex-row bg-bluish w-full rounded-md h-12 items-center justify-center mt-4">
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.00300002 1.884L8 5.882L15.997 1.884C15.9674 1.37444 15.7441 0.895488 15.3728 0.545227C15.0016 0.194965 14.5104 -9.35847e-05 14 3.36834e-08H2C1.48958 -9.35847e-05 0.998447 0.194965 0.627178 0.545227C0.255908 0.895488 0.0326041 1.37444 0.00300002 1.884Z" fill="white" />
                    <path d="M16 4.118L8 8.118L0 4.118V10C0 10.5304 0.210714 11.0391 0.585786 11.4142C0.960859 11.7893 1.46957 12 2 12H14C14.5304 12 15.0391 11.7893 15.4142 11.4142C15.7893 11.0391 16 10.5304 16 10V4.118Z" fill="white" />
                </svg>

                <button className=" text-white ml-2" >Select from gallery</button>

            </div>
            <div className="flex flex-row bg-jacksonsGray w-full border-2 border-lightGray rounded-md h-12 items-center justify-center mt-4">
                <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.503 1.884L8.5 5.882L16.497 1.884C16.4674 1.37444 16.2441 0.895488 15.8728 0.545227C15.5016 0.194965 15.0104 -9.35847e-05 14.5 3.36834e-08H2.5C1.98958 -9.35847e-05 1.49845 0.194965 1.12718 0.545227C0.755908 0.895488 0.532604 1.37444 0.503 1.884Z" fill="#4B5563" />
                    <path d="M16.5 4.118L8.5 8.118L0.5 4.118V10C0.5 10.5304 0.710714 11.0391 1.08579 11.4142C1.46086 11.7893 1.96957 12 2.5 12H14.5C15.0304 12 15.5391 11.7893 15.9142 11.4142C16.2893 11.0391 16.5 10.5304 16.5 10V4.118Z" fill="#4B5563" />
                </svg>


                <button className=" text-lightGray ml-2" >Design on Canva</button>

            </div>

        </div>
    )
};
export default AddBackgroundImage;
