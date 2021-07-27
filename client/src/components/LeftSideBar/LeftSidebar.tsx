import React, { useState } from 'react';
const image = require('./1.jpg')

const LeftSidebar: React.FC = () => {
    const [state, setState] = useState('')

    return (
        <div className="h-full fixed">
            <div className="flex justify-start ml-6 items-start mx-auto mt-6 align-middle mb-8">

                <div className="flex justify-items-center items-center">
                    <img src={image} className="w-12  rounded-3xl flex justify-items-center items-center" />
                </div>
                <div className="ml-4 font-sans leading-tight">
                    <h3 className="text-sm text-gray94 font-medium">Tom Cook</h3>
                    <button className="text-xs font-normal text-grey">View Profile</button>
                </div>

            </div>
            <div className="flex flex-col justify-start text-left items-start ml-6 leading-10 text-lightGray w-full">
                <div className="flex hover:bg-lightindigo w-full hover:rounded-lg border-0 rounded-md pl-2">

                    <svg className="mr-2 w-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 10L3 8M3 8L10 1L17 8M3 8V18C3 18.5523 3.44772 19 4 19H7M17 8L19 10M17 8V18C17 18.5523 16.5523 19 16 19H13M7 19C7.55228 19 8 18.5523 8 18V14C8 13.4477 8.44772 13 9 13H11C11.5523 13 12 13.4477 12 14V18C12 18.5523 12.4477 19 13 19M7 19H13" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>


                    <button className="text-lightGray font-medium">Home</button>
                </div>
                <div className="flex hover:bg-lightindigo w-full hover:rounded-lg border-0 rounded-md pl-2">
                    <svg className="mr-2 w-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 14.5L6.15901 9.34099C7.03769 8.46231 8.46231 8.46231 9.34099 9.34099L14.5 14.5M12.25 12.25L14.034 10.466C14.9127 9.58731 16.3373 9.58731 17.216 10.466L19 12.25M12.25 5.5H12.2613M3.25 19H16.75C17.9926 19 19 17.9926 19 16.75V3.25C19 2.00736 17.9926 1 16.75 1H3.25C2.00736 1 1 2.00736 1 3.25V16.75C1 17.9926 2.00736 19 3.25 19Z" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <button className="text-lightGray font-medium">Personlized Images </button>
                </div>
                <div className="flex hover:bg-lightindigo w-full hover:rounded-md border-0 rounded-md pl-2">
                    <svg className="mr-2 w-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 16.5963V7.66667C1 6.99796 1.3342 6.3735 1.8906 6.00257L8.8906 1.3359C9.5624 0.888033 10.4376 0.888034 11.1094 1.3359L18.1094 6.00257C18.6658 6.3735 19 6.99796 19 7.66667V16.5963M1 16.5963C1 17.7009 1.89543 18.5963 3 18.5963H17C18.1046 18.5963 19 17.7009 19 16.5963M1 16.5963L7.75 12.0963M19 16.5963L12.25 12.0963M1 7.5963L7.75 12.0963M19 7.5963L12.25 12.0963M12.25 12.0963L11.1094 12.8567C10.4376 13.3046 9.5624 13.3046 8.8906 12.8567L7.75 12.0963" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <button className="text-lightGray font-medium">Email Campaigns</button>
                </div>
                <div className="flex hover:bg-lightindigo w-full hover:rounded-md border-0 rounded-md pl-2">
                    <svg className="mr-2 w-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 19C2.79086 19 1 17.2091 1 15V3C1 1.89543 1.89543 1 3 1H7C8.10457 1 9 1.89543 9 3V15C9 17.2091 7.20914 19 5 19ZM5 19H17C18.1046 19 19 18.1046 19 17V13C19 11.8954 18.1046 11 17 11H14.6569M9.00002 5.34312L10.6569 3.68629C11.4379 2.90524 12.7042 2.90524 13.4853 3.68629L16.3137 6.51472C17.0948 7.29577 17.0948 8.5621 16.3137 9.34315L7.82843 17.8284M5 15H5.01" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>


                    <button className="text-lightGray font-medium">Activities</button>
                </div>
                <div className="flex hover:bg-lightindigo w-full hover:rounded-md border-0 rounded-md pl-2">
                    <svg className="mr-2 w-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2.35418C10.7329 1.52375 11.8053 1 13 1C15.2091 1 17 2.79086 17 5C17 7.20914 15.2091 9 13 9C11.8053 9 10.7329 8.47624 10 7.64582M13 19H1V18C1 14.6863 3.68629 12 7 12C10.3137 12 13 14.6863 13 18V19ZM13 19H19V18C19 14.6863 16.3137 12 13 12C11.9071 12 10.8825 12.2922 10 12.8027M11 5C11 7.20914 9.20914 9 7 9C4.79086 9 3 7.20914 3 5C3 2.79086 4.79086 1 7 1C9.20914 1 11 2.79086 11 5Z" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>


                    <button className="text-lightGray font-medium">Prospects</button>
                </div>
                <div className="flex hover:bg-lightindigo w-full hover:rounded-md border-0 rounded-lg pl-2">
                    <svg className="mr-2 w-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.32463 2.31731C8.75103 0.560897 11.249 0.560897 11.6754 2.31731C11.9508 3.45193 13.2507 3.99038 14.2478 3.38285C15.7913 2.44239 17.5576 4.2087 16.6172 5.75218C16.0096 6.74925 16.5481 8.04918 17.6827 8.32463C19.4391 8.75103 19.4391 11.249 17.6827 11.6754C16.5481 11.9508 16.0096 13.2507 16.6172 14.2478C17.5576 15.7913 15.7913 17.5576 14.2478 16.6172C13.2507 16.0096 11.9508 16.5481 11.6754 17.6827C11.249 19.4391 8.75103 19.4391 8.32463 17.6827C8.04918 16.5481 6.74926 16.0096 5.75219 16.6172C4.2087 17.5576 2.44239 15.7913 3.38285 14.2478C3.99038 13.2507 3.45193 11.9508 2.31731 11.6754C0.560897 11.249 0.560897 8.75103 2.31731 8.32463C3.45193 8.04918 3.99037 6.74926 3.38285 5.75218C2.44239 4.2087 4.2087 2.44239 5.75219 3.38285C6.74926 3.99037 8.04918 3.45193 8.32463 2.31731Z" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>


                    <button className="text-lightGray font-medium">Settings</button>
                </div>



            </div>
        </div>

    )

};

export default LeftSidebar;