import React from 'react';
interface BioProps {
    document_title: string,
}
const Header: React.FC<BioProps> = ({ document_title }): JSX.Element => {
    return (
        <div className="bg-indigo600 h-16 flex">

            <div className="flex flex-row items-center justify-between w-full px-8">

                <div className="flex flex-row items-center">
                    <button className="flex flex-row items-center">

                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 15L1 8L8 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h1 className="text-white pl-2">Back to Dashboard</h1>
                    </button>
                </div>
                <div>
                    <h1 className="text-white">{document_title}</h1>
                </div>
                <div className="bg-white p-2 border-0 rounded-md">
                    <button className="text-base text-gray94 leading-6 font-medium">Save & Share</button>
                </div>
            </div>
        </div>
    )
};
export default Header;
