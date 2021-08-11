import React, { useContext, useRef } from 'react';
import { HeaderContext } from '../../../../../../contexts/HeaderContext';
import Drawer from '../Preview/components/Drawer/Drawer';
import Preview from '../Preview/Preview';
import MainCanvas from "./MainCanvas"
import CardHeader from './tailwindComponents/CardHeader/CardHeader';

const Card: React.FC = (): JSX.Element => {
    const [open, setOpen] = useContext(HeaderContext)

    const $stage = useRef(null)
    const $layer = useRef(null)
    const $tr = useRef(null)

    return (
        <div className="h-full  bg-canvasbgcolor  ">
            <div className="bg-white">
                <CardHeader
                    $tr={$tr}
                />
            </div>
            <div className=" mt-10">

                <MainCanvas
                    $stage={$stage}
                    $layer={$layer}
                    $tr={$tr}
                />
            </div>
            <div className="z-50 overflow-y-hidden" >
                <Drawer isOpen={open} setIsOpen={setOpen}></Drawer>
            </div >

        </div>
    )
};
export default Card;
