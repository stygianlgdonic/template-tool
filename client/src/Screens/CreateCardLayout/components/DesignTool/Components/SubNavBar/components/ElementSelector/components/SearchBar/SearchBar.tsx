import React from 'react';

const SearchBar: React.FC = (): JSX.Element => {
    return (
        <div className=" flex justify-center items-center  w-full">

            <div className="flex h-14 rounded-md border-bordercolor border justify-center items-center w-11/12 z-50">
                <button>
                    <span className="w-auto flex justify-end items-center text-grey text-sm p-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6Z" fill="#9CA3AF" />
                        </svg>

                    </span>
                </button>
                <input className="w-full rounded text-sm text-gray95 outline-none h-12 z-0 " type="text" placeholder="Search anything from elements" />
            </div>
        </div>
    )
};
export default SearchBar;
