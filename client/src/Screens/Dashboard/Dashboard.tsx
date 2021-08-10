import React from 'react';
import LeftSidebar from './../../components/LeftSideBar/LeftSidebar'
import RightSidebar from './../../components/RightSidebar/RightSidebar';
import Centerboard from './../../components/Centerboard/Centerboard';
import {
    Outlet
} from 'react-router-dom';
const Dashboard: React.FC = () => {

    return (
        <div>


            <div className="w-full  grid grid-cols-12 font-inter ">
                <div className="col-span-2 ">

                    <LeftSidebar />
                </div>
                <div className="col-span-7 bg-jacksonsGray overflow-y-auto h-sccreen">

                    <Centerboard />
                </div>
                <div className="col-span-3 overflow-hidden  overscroll-y-none">

                    <RightSidebar />
                </div>
            </div>
            <Outlet />
        </div>

    )

};

export default Dashboard;
