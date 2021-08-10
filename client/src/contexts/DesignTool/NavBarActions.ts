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

    return {
        selectElementNav,
        selectTextNav,
        selectImagesNav,
        selectBackgroundNav,
        selectLogoNav,
    }

}

export default NavBarActions


