import React from 'react';
import Frames from './components/Frames/Frames';

const ImageSelector: React.FC = (): JSX.Element => {
    return (
        <div className=" flex   flex-col  w-full p-6 ">
            <div className="mt-6 w-full">
                <Frames />

            </div>

        </div>
    )
};
export default ImageSelector;
