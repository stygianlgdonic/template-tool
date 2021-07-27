import React from 'react';
import DesignTool from './components/DesignTool/DesigntTool';
import Header from './components/Header/Header'

let document_title = "Untitled design - Employees"


const CreateCardLayout: React.FC = () => {

    return (
        <div className="   ">
            <div>
                <Header document_title={document_title} />
            </div>
            <div className="h-full">
                <DesignTool />
            </div>
        </div>


    )

};

export default CreateCardLayout;
