import React from 'react';
import LeftSidebar from '../../../components/LeftSideBar/LeftSidebar'
import RightSidebar from '../../../components/RightSidebar/RightSidebar';
import {
    Outlet
} from 'react-router-dom';
import Centerboard from '../../../components/Centerboard/Centerboard';
const Dashboard: React.FC = () => {

    return (
        <div>


            <div className="w-full mx-auto grid grid-cols-12 font-inter ">
                <div className="col-span-2  w-full">

                    <LeftSidebar />
                </div>
                <div className="col-span-7 bg-jacksonsGray overflow-y-auto">

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
