import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderContext } from '../../../../../contexts/HeaderContext';
interface BioProps {
    document_title: string,
    createNewCard: (cardDimensions: { width: number, height: number }) => void
    handleSaveCard: () => void
}
const Header: React.FC<BioProps> = ({ document_title, createNewCard, handleSaveCard }): JSX.Element => {
    return (
        <div className="bg-indigo600  flex h-full">

            <div className="flex flex-row items-center justify-between w-full px-8">

                <div className="flex flex-row items-center">
                    <NavLink to="/">

                        <button className="flex flex-row items-center">

                            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15L1 8L8 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h1 className="text-white pl-2">Back to Dashboard</h1>
                        </button>
                    </NavLink>
                </div>
                <div className="w-2/12">
                    <input className="text-white placeholder-white text-center  outline:none bg-transparent  w-full   " placeholder={document_title}></input>
                </div>
                <div className="gap-4">


                    {/* 
          TODO - remove this button when the select card dimensions flow is complete
              call this createNewCard function from the card dimensions selection flow
          */}
                    <button
                        onClick={() => createNewCard({ width: 500, height: 500 })}
                    >

                        <div className="bg-white p-2 border-0 rounded-md mr-4">
                            <p className="text-base text-gray94 leading-6 font-medium">Create New</p>
                        </div>
                    </button>

                    <button
                        onClick={handleSaveCard}
                    >

                        <div className="bg-white p-2 border-0 rounded-md mr-4">
                            <p className="text-base text-gray94 leading-6 font-medium">Save & Share</p>
                        </div>
                    </button>

                </div>
            </div>
        </div>
    )
};
export default Header;
