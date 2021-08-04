import React, { useContext, useEffect } from 'react';
import { DesignToolContext } from '../../../../../../../../../../contexts/DesignToolContext';
import { googleFontsList } from '../../../../../../../../../../utils/defaults'
import WebFont from "webfontloader";
const FontStyletool: React.FC = (): JSX.Element => {
    const [designToolnavigator, setDesignToolnavigator] = useContext(DesignToolContext)
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Comfortaa', 'Josefin Sans', 'Euphoria Script', 'Oswald', 'Alfa Slab One', 'Bangers', 'Caveat', 'DM Sans', 'East Sea Dokdo', 'Homemade Apple', 'Kristi', 'Lobster Two', 'Maven Pro', 'Monoton', 'Montserrat', 'Playfair Display', 'Press Start 2P', 'Raleway', 'Roboto Slab', 'Shadows Into Light', 'Swanky and Moo Moo']
            }
        });


    }, []);
    return (

        <div className="h-full flex  flex-col w-full px-6 ">

            <div className=" flex justify-center items-center  w-full mt-6">

                <div className="flex h-14 rounded-md border-bordercolor border justify-center items-center w-full z-50">
                    <button>
                        <span className="w-auto flex justify-end items-center text-grey text-sm p-3">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6Z" fill="#9CA3AF" />
                            </svg>

                        </span>
                    </button>
                    <input className="w-full rounded text-sm text-gray95 outline-none h-10 z-0 " type="text" placeholder="Search Fonts" />
                </div>
            </div>

            <div className="flex-row flex justify-between items-center mt-6  ">
                <h1 className="text-md text-gray40 mt-2" >My Fonts</h1>
                <button className="text-md text-indigo600 font-medium"> <span className="text-2xl ">+</span>Add new Font</button>
            </div>
            <div>
                <h1 className="text-lg text-black mt-4 pl-2" style={{ fontFamily: "Montserrat" }} >Montserrrat</h1>
            </div>
            <div className="border-b-2 border-bordercolor mt-4" ></div>
            <div >
                <h1 className="text-md text-gray40 mt-4" >Template Fonts</h1>
                <div className="flex flex-col justify-end w-full ">
                    <button className="text-lg text-black mt-1 pl-2 flex justify-start" style={{ fontFamily: "Maven Pro" }} >Maven Pro</button>
                    <button className="text-lg text-black mt-1 pl-2 flex justify-start" style={{ fontFamily: "Shadows Into Light" }} >Shadows Into Light</button>
                    <button className="text-lg text-black mt-1 pl-2 flex justify-start" style={{ fontFamily: "Euphoria Script" }} >Euphoria Script</button>
                </div>
            </div>
            <div className="border-b-2 border-bordercolor mt-4" ></div>
            <div>
                <h1 className="text-md text-gray40 mt-4" >Popular Fonts</h1>
                <div className="flex flex-col justify-end w-full ">
                    <button className="text-lg text-black mt-1 pl-2 flex justify-start" style={{ fontFamily: "Playfair Display" }} >Playfair Display</button>
                    <button className="text-lg text-black mt-1 pl-2 flex justify-start" style={{ fontFamily: "East Sea Dokdo" }} >East Sea Dokdo</button>
                    <button className="text-lg text-black mt-1 pl-2 flex justify-start" style={{ fontFamily: "Kristi" }} >Kristi</button>
                    <button className="text-lg text-black mt-1 pl-2 flex justify-start" style={{ fontFamily: "Lobster Two" }} >Lobster Two</button>
                    <button className="text-lg text-black mt-1 pl-2 flex justify-start" style={{ fontFamily: "Caveat" }} >Caveat</button>
                    <button className="text-lg text-black mt-1 pl-2 flex justify-start" style={{ fontFamily: "Swanky and Moo Moo" }} >Swanky and Moo Moo</button>
                </div>
            </div>

        </div>
    )
};
export default FontStyletool;
