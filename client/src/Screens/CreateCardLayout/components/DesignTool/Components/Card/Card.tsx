import React, { useContext } from 'react';
import { HeaderContext } from '../../../../../../contexts/HeaderContext';
import Drawer from '../Preview/components/Drawer/Drawer';
import Preview from '../Preview/Preview';
import MainCanvas from "./MainCanvas"
import CardHeader from './tailwindComponents/CardHeader/CardHeader';

const Card: React.FC = (): JSX.Element => {
    const [open, setOpen] = useContext(HeaderContext)


    return (
        <div className="h-full  bg-gray50 ">
            <div className="bg-white">
                <CardHeader />
            </div>
            <div className=" ">

                <MainCanvas />
            </div>
            <div className="z-50" >
                <Drawer isOpen={open} setIsOpen={setOpen}></Drawer>
            </div >

        </div>
    )
};
export default Card;
