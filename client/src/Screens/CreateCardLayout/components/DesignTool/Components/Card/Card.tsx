import React from 'react';
import MainCanvas from "./MainCanvas"
import CardHeader from './tailwindComponents/CardHeader/CardHeader';

const Card: React.FC = (): JSX.Element => {

    return (
        <div className="h-screen">
            <div>
                <CardHeader />
            </div>
            <div>

                <MainCanvas />
            </div>
        </div>
    )
};
export default Card;
