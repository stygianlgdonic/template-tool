import { useContext } from "react"
import { DesignToolContext } from "./DesignToolContext"

const NavBarActions = () => {
    const { designToolDispatch } = useContext(DesignToolContext)

    const selectElementNav = () => {
        designToolDispatch({ type: "Select_Element_Nav" })
    }
    const selectTextNav = () => {
        designToolDispatch({ type: "Select_Text_Nav" })
    }
    const selectImagesNav = () => {
        designToolDispatch({ type: "Select_Images_Nav" })
    }
    const selectBackgroundNav = () => {
        designToolDispatch({ type: "Select_Background_Nav" })
    }
    const selectLogoNav = () => {
        designToolDispatch({ type: "Select_Logo_Nav" })
    }
    const selectTextToolNav = () => {
        designToolDispatch({ type: "Select_Texttool_Nav" })
    }
    const selectFontToolNav = () => {
        designToolDispatch({ type: "Select_Fonttool_Nav" })
    }
    const selectEffectToolNav = () => {
        designToolDispatch({ type: "Select_Effecttool_Nav" })
    }

    return {
        selectElementNav,
        selectTextNav,
        selectImagesNav,
        selectBackgroundNav,
        selectLogoNav,
        selectTextToolNav,
        selectFontToolNav,
        selectEffectToolNav,
    }

}

export default NavBarActions


