import React, { useContext } from 'react';
import { HeaderContext } from '../../contexts/HeaderContext';
import DesignTool from './components/DesignTool/DesigntTool';
import Header from './components/Header/Header'

let document_title = "Untitled design - Employees"


const CreateCardLayout: React.FC = () => {
    const [open, setOpen] = useContext(HeaderContext)
    return (
        <div className=" ">
            <div style={{ height: '8vh' }} className="">
                <Header document_title={document_title} />
            </div>
            <div className="relative" style={{ height: '92vh' }}>

                <DesignTool />
                <div className="w-10 absolute h-full right-0 top-0 bg-white " style={{ paddingTop: '54px' }}>
                    <div className="w-6  "></div>
                    <button onClick={() => setOpen(!open)} className="flex  bg-canvasbgcolor items-center h-full pt-10 ">
                        <div className="w-4 h-8 bg-white rounded-r rounded-full flex items-center pl-1">

                            <svg className="w-3 h-3" width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 20L2 11L11 2" stroke="#374151" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>

                    </button>
                </div>


            </div>
        </div>


    )

};

export default CreateCardLayout;
