import React from 'react';
import DesignTool from './components/DesignTool/DesigntTool';
import Header from './components/Header/Header'

let document_title = "Untitled design - Employees"


const CreateCardLayout: React.FC = () => {

    return (
        <div className=" ">
            <div style={{ height: '8vh' }} className="">
                <Header document_title={document_title} />
            </div>
            <div className="" style={{ height: '92vh' }}>

                <DesignTool />

            </div>
        </div>


    )

};

export default CreateCardLayout;
