import { useContext } from "react"
import { DesignToolContext } from "./DesignToolContext"

const SubNavbarActions = () => {
    const { designToolDispatch } = useContext(DesignToolContext)

    const selectShapeColorSubNav = () => {
        designToolDispatch({ type: "Select_Shape_Color_Nav" })
    }
    const selectTextToolSubNav = () => {
        designToolDispatch({ type: "Select_Texttool_Nav" })
    }
    const selectFontColorToolSubNav = () => {
        designToolDispatch({ type: "Select_Font_Color_Tool_Nav" })
    }
    const selectEffectToolSubNav = () => {
        designToolDispatch({ type: "Select_Effecttool_Nav" })
    }

    return {
        selectShapeColorSubNav,
        selectTextToolSubNav,
        selectFontColorToolSubNav,
        selectEffectToolSubNav,
    }

}

export default SubNavbarActions


