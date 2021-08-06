import React, { useState } from 'react';
import Card from './Components/Card/Card';
import NavBar from './Components/NavBar/NavBar';
import CardDesign from './Components/Preview/components/CardDesign/CardDesign';
import Drawer from './Components/Preview/components/Drawer/Drawer';
import Preview from './Components/Preview/Preview';
import SubNavBar from './Components/SubNavBar/SubNavBar';



const DesignTool: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full grid grid-cols-12 font-inter  h-full" >
            <div className="col-span-2 w-full  ">
                <NavBar />
            </div>
            <div className="col-span-3 h-full w-full  ">
                <SubNavBar />
            </div>
            <div className="col-span-7 h-full ">
                <Card />
            </div>

        </div >


    )
};

export default DesignTool;
