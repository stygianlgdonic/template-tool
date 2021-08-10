import React, { useContext } from "react";
import { DesignToolContext, INITIAL_STATE } from "../../contexts/DesignTool/DesignToolContext";
import { HeaderContext } from "../../contexts/HeaderContext";
import DesignTool from "./components/DesignTool/DesigntTool";
import Header from "./components/Header/Header";
import { useNavigate } from "react-router-dom"
import { card_service } from "../../services/cardService";

let document_title = "Untitled design - Employees";

const CreateCardLayout: React.FC = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useContext(HeaderContext);
    const { cardData, setCardData } = useContext(DesignToolContext)

    // TODO - use this method for creating new card with selected dimensions
    const createNewCard = (cardDimensions: { width: number, height: number }) => {
        setCardData(prev => {
            prev.dimensions = { ...cardDimensions }
            prev.labels = []
            prev.elements = [{
                ...INITIAL_STATE.elements[0],
                width: cardDimensions.width,
                height: cardDimensions.height
            }]
        }, false)

        navigate("/createcard")

    }

    const handleSaveCard = async () => {
        const res = await card_service.addNewCard(cardData)
        console.log({ res })
    }

    return (
        <div className="overflow-hidden ">
            <div style={{ height: "8vh" }} className="">
                <Header
                    document_title={document_title}
                    createNewCard={createNewCard}
                    handleSaveCard={handleSaveCard}
                />
            </div>
            <div className="relative" style={{ height: "88vh" }}>
                <DesignTool />
                <div
                    className="absolute top-0 right-0 h-full bg-white w-14"
                    style={{ paddingTop: "54px" }}
                >
                    <div className="w-6 "></div>
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex items-center h-full pt-10 bg-canvasbgcolor "
                        style={{ marginTop: "7px" }}
                    >
                        <div className="relative flex items-center w-10 h-20 pl-1 bg-white rounded-full rounded-r -right-6">
                            <svg
                                className="w-3 h-3"
                                width="13"
                                height="22"
                                viewBox="0 0 13 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11 20L2 11L11 2"
                                    stroke="#374151"
                                    stroke-width="4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateCardLayout;
