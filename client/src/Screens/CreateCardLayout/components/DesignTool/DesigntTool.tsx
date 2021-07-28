import React from 'react';
import Card from './Components/Card/Card';
import NavBar from './Components/NavBar/NavBar';
import SubNavBar from './Components/SubNavBar/SubNavBar';



const DesignTool: React.FC = () => {

    return (


        <div className="w-full grid grid-cols-12 font-inter h-full">
            <div className="col-span-2 w-full border-bordercolor border-r-2 ">
                <NavBar />
            </div>
            <div className="col-span-3 h-full w-full  ">
                <SubNavBar />
            </div>
            <div className="col-span-7 h-full ">
                <Card />
            </div>
        </div>




    )

};

export default DesignTool;
