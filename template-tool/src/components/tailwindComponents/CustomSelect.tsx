import React, { memo } from 'react'
import dropdownIcon from "../../assets/svgs/chevron-down.svg"
import useComponentVisible from '../../hooks/useComponentVisible';
import { titleCase } from '../../utils/titleCase';

const CustomSelect: React.FC<any> = ({ label, value, onChange, dataArray, width, ...res }) => {

    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

    return (
        <>
            <div className={`flex flex-col bg-gray94  w-60 `}>
                <label className='text-base text-left text-grey top-16  '>
                    {label}
                </label>
                <div className=" w-full relative" ref={ref}>
                    <button
                        onClick={() => setIsComponentVisible(!isComponentVisible)}
                        className="relative bg-white text-left pl-5 w-full border py-2 border-gray95 rounded-md shadow-sm cursor-pointer focus:outline-none text-jacksonsPurple focus:ring-1 focus:ring-radicalRed focus:border-radicalRed text-base">
                        <h2 className="truncate">
                            {titleCase(value)}
                        </h2>
                        <div className="absolute inset-y-0 right-0 pr-2 flex items-center  pointer-events-none">
                            <img src={dropdownIcon} className='w-4 ' />
                        </div>
                    </button>


                    <ul className={isComponentVisible ? "w-full absolute z-20 mt-1  bg-white shadow-lg  rounded-md py-1 text-base ring-1 ring-black ring-opacity-5  focus:outline-none sm:text-sm" : "hidden"} >
                        {dataArray?.length && dataArray.map((val, ind) => (
                            <li
                                key={ind}
                                className="text-mineShaft select-none cursor-pointer relative py-2 pl-3 pr-9 hover:bg-gray94  "
                                value={val.name}
                                onClick={() => {
                                    onChange(val)
                                    setIsComponentVisible(false)
                                }}
                            >
                                <div className="flex items-center">
                                    <h2 className="text-jacksonsPurple font-normal ml-3 block truncate ">
                                        {titleCase(val.name)}
                                    </h2>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default memo(CustomSelect)
