import React from 'react';
import Card from './Components/Card/Card';
import NavBar from './Components/NavBar/NavBar';
import SubNavBar from './Components/SubNavBar/SubNavBar';



const DesignTool: React.FC = () => {

    return (
        <div className="w-full grid grid-cols-12 font-inter " style={{ height: '92vh' }}>
            <div className="col-span-2 w-full border-bordercolor border-r-2 ">
                <NavBar />
            </div>
            <div className="col-span-3 h-full w-full  ">
                <SubNavBar />
            </div>
            <div className="col-span-7 h-full ">
                <Card />
            </div>
            <div></div>
            <div>
                <nav className=" w-64 absolute overflow-x-scroll bg-gray-700 top-10  right-0 h-screen text-black">
                    <div className="flex pr-2 justify-end">
                        <button className="p-2 text-xl font-bold"></button>
                    </div>
                    <h1 className="text-xl text-center font-bold pt-5">Menu</h1>
                    <ul className="list-none  text-center">
                        <li className="my-8">
                            <a href="#"></a>Teams
                        </li>
                        <li className="my-8">
                            <a href="#"></a>Projects
                        </li>
                        <li className="my-8">
                            <a href="#"></a>Favourites
                        </li>
                        <li className="my-8">
                            <a href="#"></a>Notifications
                        </li>
                        <li className="my-8">
                            <a href="#"></a>Members
                        </li>
                    </ul>
                </nav>
            </div>
        </div >


    )
};

export default DesignTool;
