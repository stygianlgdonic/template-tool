import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../../../../Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar';
import { ORIGINAL_SVG_updownicon } from '../../../../utils/defaults';
import generatesvgUrl from '../../../../utils/generatesvgUrl'
interface BioProps {
    bio1: string,
    bio2: string,
    bio3: string,
    bio4: string,

}
const CreateEmail: React.FC<BioProps> = ({ bio1, bio2, bio3, bio4 }): JSX.Element => {
    const svg1 = generatesvgUrl(ORIGINAL_SVG_updownicon)
    const svg = generatesvgUrl(bio4)
    const [showModal, setShowModal] = React.useState(false);

    return (
        <div>
            <div className="flex flex-col w-full mx-auto justify-center mt-4 ">


                <div className="flex flex-col border-dashed border-2 border-opacity-25 border-gray95 px-2 rounded-lg py-4 mb-6">
                    <div className="flex flex-row justify-center">
                        <img src={svg} className="mr-2" />

                        <h1 className="text-indigo text-base">
                            {bio1}
                        </h1>
                    </div>
                    <div className="flex justify-center mt-2">

                        <p className="text-gray95 flex justify-center leading-4 text-center" >{bio2}</p>
                    </div>
                    <NavLink to="/createcard">
                    </NavLink>
                    <button onClick={() => setShowModal(true)}>

                        <div className="bg-indigo flex flex-row border-0 rounded-lg justify-center p-2 mt-4" >
                            <svg className="mt-1 mr-4" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 2V12M12 7L2 7" stroke="#EEF2FF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <p className="text-white">{bio3}</p>
                        </div>
                    </button>



                </div>

            </div>
        </div >

    )

};

export default CreateEmail;
