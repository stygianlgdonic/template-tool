import React, { useContext, useState } from 'react';
import { DesignToolContext } from '../../../../../../../contexts/DesignTool/DesignToolContext';
import NavBarActions from '../../../../../../../contexts/DesignTool/NavBarActions';
import "./style.css"
const SideBarNav: React.FC = () => {
    const {
        designToolState
    } = useContext(DesignToolContext)

    const { selectElementNav, selectTextNav, selectImagesNav, selectBackgroundNav, selectLogoNav } = NavBarActions()

    const [showModal, setShowModal] = React.useState(false);
    return (
        <div className="h-full fixed flex  flex-col w-2/12 " >

            <div className="flex flex-col justify-start text-left items-start leading-10  px-2 text-lightGray w-full  h-full mt-6 ">
                <button className={designToolState.navbar_selection === 'element' ? "w-full   bg-rightbackgroundcolor  h-10" : "w-full h-10 "} onClick={selectElementNav}>
                    <div className="flex items-center  hover:bg-rightbackgroundcolor  w-full hover:rounded-lg border-0 rounded-sm  pl-5 h-10 mb-1">

                        <svg className="text-svgcolor" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.31802 2.31802C0.56066 4.07538 0.56066 6.92462 2.31802 8.68198L10.0001 16.364L17.682 8.68198C19.4393 6.92462 19.4393 4.07538 17.682 2.31802C15.9246 0.56066 13.0754 0.56066 11.318 2.31802L10.0001 3.63609L8.68198 2.31802C6.92462 0.56066 4.07538 0.56066 2.31802 2.31802Z" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>



                        <p className="text-lightGray font-medium pl-3">Elements</p>
                    </div>
                </button>
                <button className={designToolState.navbar_selection === "text" ? "w-full bg-rightbackgroundcolor h-10" : "w-full  h-10"} onClick={selectTextNav}>
                    <div className="flex items-center hover:bg-rightbackgroundcolor w-full hover:rounded-lg border-0 rounded-sm  pl-5 mb-1">
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.8867 0.109375L14.0625 3.83594H13.6172C13.5312 3.17969 13.4141 2.71094 13.2656 2.42969C13.0234 1.97656 12.6992 1.64453 12.293 1.43359C11.8945 1.21484 11.3672 1.10547 10.7109 1.10547H8.47266V13.2461C8.47266 14.2227 8.57812 14.832 8.78906 15.0742C9.08594 15.4023 9.54297 15.5664 10.1602 15.5664H10.7109V16H3.97266V15.5664H4.53516C5.20703 15.5664 5.68359 15.3633 5.96484 14.957C6.13672 14.707 6.22266 14.1367 6.22266 13.2461V1.10547H4.3125C3.57031 1.10547 3.04297 1.16016 2.73047 1.26953C2.32422 1.41797 1.97656 1.70312 1.6875 2.125C1.39844 2.54688 1.22656 3.11719 1.17188 3.83594H0.726562L0.914062 0.109375H13.8867Z" fill="#D1D5DB" />
                        </svg>

                        <p className="text-lightGray font-medium pl-4">Text</p>
                    </div>
                </button>
                <button className={designToolState.navbar_selection === "images" ? "w-full bg-rightbackgroundcolor h-10" : "w-full  h-10"} onClick={selectImagesNav}>
                    <div className="flex items-center hover:bg-rightbackgroundcolor w-full hover:rounded-sm border-0 rounded-sm  pl-5 mb-1">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L5.58579 8.41421C6.36683 7.63317 7.63316 7.63316 8.41421 8.41421L13 13M11 11L12.5858 9.41421C13.3668 8.63317 14.6332 8.63316 15.4142 9.41421L17 11M11 5H11.01M3 17H15C16.1046 17 17 16.1046 17 15V3C17 1.89543 16.1046 1 15 1H3C1.89543 1 1 1.89543 1 3V15C1 16.1046 1.89543 17 3 17Z" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>


                        <p className="text-lightGray font-medium pl-4">Images</p>
                    </div>
                </button>
                <button className={designToolState.navbar_selection === "background" ? "w-full bg-rightbackgroundcolor h-10" : "w-full  h-10"} onClick={selectBackgroundNav}>
                    <div className="flex items-center hover:bg-rightbackgroundcolor w-full hover:rounded-sm border-0 rounded-sm  pl-5 mb-1">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 10V3C17 1.89543 16.1046 1 15 1H3C1.89543 1 1 1.89543 1 3V10M17 10V15C17 16.1046 16.1046 17 15 17H3C1.89543 17 1 16.1046 1 15V10M17 10H14.4142C14.149 10 13.8946 10.1054 13.7071 10.2929L11.2929 12.7071C11.1054 12.8946 10.851 13 10.5858 13H7.41421C7.149 13 6.89464 12.8946 6.70711 12.7071L4.29289 10.2929C4.10536 10.1054 3.851 10 3.58579 10H1" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>



                        <p className="text-lightGray font-medium pl-4" >Backgrounds</p>
                    </div>

                </button>
                <button className={designToolState.navbar_selection === "logo" ? "w-full bg-rightbackgroundcolor h-10" : "w-full  h-10"} onClick={selectLogoNav}>

                    <div className="flex items-center hover:bg-lightrightbackgroundcolor w-full hover:rounded-sm border-0 rounded-sm  pl-5 mb-1">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3V4C14 4.55228 14.4477 5 15 5H18C18.5523 5 19 5.44772 19 6V9C19 9.55228 18.5523 10 18 10H17C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14H18C18.5523 14 19 14.4477 19 15V18C19 18.5523 18.5523 19 18 19H15C14.4477 19 14 18.5523 14 18V17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17V18C10 18.5523 9.55228 19 9 19H6C5.44772 19 5 18.5523 5 18V15C5 14.4477 4.55228 14 4 14H3C1.89543 14 1 13.1046 1 12C1 10.8954 1.89543 10 3 10H4C4.55228 10 5 9.55228 5 9V6C5 5.44772 5.44772 5 6 5H9C9.55228 5 10 4.55228 10 4V3Z" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>



                        <p className="text-lightGray font-medium pl-4">Logo</p>
                    </div>
                </button>



                <div className=" mt-6  mb-1 flex  w-full justify-end relative items-center  mx-auto " onClick={() => setShowModal(!showModal)}>
                    <button onClick={() => setShowModal(true)}>

                        <svg className="mr-8" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55229 6.44772 9 7 9V12C7 12.5523 7.44772 13 8 13H9C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11V8C9 7.44772 8.55228 7 8 7H7Z" fill="#4338CA" />
                        </svg>
                    </button>
                    {showModal ? (
                        <>
                            <div className="absolute bottom-0   flex-col  mb-6 flex ">
                                <span className="relative z-10 p-3 text-xs leading-none text-white whitespace-no-wrap rounded-md bg-indigo500 shadow-lg">Brandify Everything.</span>
                                <div className="w-3 h-3 transform rotate-45 -mt-2  flex justify-end bg-indigo500 z-50" style={{ marginLeft: '94px' }}></div>
                            </div>
                        </>
                    ) : null}
                </div>



                <button className="w-full">

                    <div className="flex w-9/12 items-center justify-center h-12 border-0 rounded-md bg-indigo600 px-auto  mx-auto relative">



                        <svg className="" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.2995 17.5994H0.5V0.800049H14.0994V15.1995" stroke="#F9FAFB" stroke-linejoin="round" />
                            <path d="M0.5 6.7998L5.2998 2L10.0996 6.7998" stroke="#F9FAFB" stroke-linejoin="round" />
                            <path d="M8.09961 4.79988L10.2995 2.59998L14.0994 6.39982" stroke="#F9FAFB" stroke-linejoin="round" />
                            <path d="M8.09985 9.19904L6.49902 10.7999L14.8991 19.1999L16.4999 17.5991L8.09985 9.19904Z" stroke="#F9FAFB" stroke-linejoin="round" />
                            <path d="M8.89551 13.1955L10.4954 11.5956" stroke="#F9FAFB" stroke-linejoin="round" />
                            <path d="M6.49935 9.19973L4.89941 7.59979" stroke="#F9FAFB" stroke-linejoin="round" />
                            <path d="M5.30013 10.7996H3.7002" stroke="#F9FAFB" stroke-linejoin="round" />
                            <path d="M8.09961 7.99978V6.39984" stroke="#F9FAFB" stroke-linejoin="round" />
                            <path d="M6.49976 12.3996L5.2998 13.5995" stroke="#F9FAFB" stroke-linejoin="round" />
                            <path d="M9.69922 9.19971L10.8992 7.99976" stroke="#F9FAFB" stroke-linejoin="round" />
                            <path d="M0.5 15.5994H11.2996" stroke="#F9FAFB" stroke-linejoin="round" />
                        </svg>


                        <p className="text-white font-medium pl-2">Brandify</p>

                    </div>
                </button>
            </div>


        </div>

    )

};

export default SideBarNav;