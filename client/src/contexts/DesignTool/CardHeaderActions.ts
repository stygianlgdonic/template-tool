import { useContext } from "react"
import { DesignToolContext } from "./DesignToolContext"

const CardHeaderActions = () => {
    const { designToolDispatch } = useContext(DesignToolContext)

    const emptyCardHeader = () => {
        designToolDispatch({ type: "Empty_Card_Header" })
    }
    const selectTextCardHeader = () => {
        designToolDispatch({ type: "Select_Text_Card_Header" })
    }
    const selectShapeCardHeader = () => {
        designToolDispatch({ type: "Select_Shape_Card_Header" })
    }

    return {
        emptyCardHeader,
        selectTextCardHeader,
        selectShapeCardHeader
    }

}

export default CardHeaderActions


