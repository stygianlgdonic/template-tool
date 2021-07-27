import React from 'react';

const TextHeader: React.FC = (): JSX.Element => {
    const [showModal, setShowModal] = React.useState(false);
    const [openstyle, setOpenstyle] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    return (
        <div className="px-6 flex flex-row items-center gap-4">

            <div className="flex items-center">
                <div className="relative inline-block text-left ">
                    <div role="menu" aria-orientation="vertical" aria-labelledby="menu-button" onClick={() => setOpen(!open)}>
                        <button onClick={() => setOpen(true)} type="button" className="inline-flex justify-center w-full rounded-md border border-bordercolor shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Poppins thin
                            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <div>

                        <div className={open ? " origin-top-left absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" : "hidden"} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" onClick={() => setOpen(false)}>
                            <div className="" role="none">
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-0">Poppins thin</a>
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-1">Poppins thin</a>
                            </div>
                            <div className="" role="none">
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">Poppins thin</a>
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-3">Poppins thin</a>
                            </div>
                            <div className="" role="none">
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-4">Poppins thin</a>
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-5">Poppins thin</a>
                            </div>
                            <div className="" role="none">
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-6">Poppins thin</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex items-center  z-50">
                <div className="relative inline-block text-left ">
                    <div role="menu" aria-orientation="vertical" aria-labelledby="menu-button" onClick={() => setOpenstyle(!openstyle)}>
                        <button onClick={() => setOpenstyle(true)} type="button" className="inline-flex justify-center w-full rounded-md border border-bordercolor shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Heading 1
                            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <div>

                        <div className={openstyle ? " origin-top-left absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" : "hidden"} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" onClick={() => setOpenstyle(false)}>
                            <div className="" role="none">
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-0">Heading 1</a>
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-1">Heading 2</a>
                            </div>
                            <div className="" role="none">
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">Heading 3</a>
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-3">Heading 4</a>
                            </div>
                            <div className="" role="none">
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-4">Heading 5</a>
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-5">Heading 6</a>
                            </div>
                            <div className="" role="none">
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-6">Heading 6</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};
export default TextHeader;
