import React from 'react';
import TextHeader from './components/TextHeader/TextHeader';

const CardHeader: React.FC = (): JSX.Element => {
    return (
        <div className=" h-18  flex flex-col">

            <div className=" py-2">
                <TextHeader />
            </div>
            <div className="border-b-2 border-bordercolor">

            </div>
        </div>
    )
};
export default CardHeader;
