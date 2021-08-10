export const designToolInit: any = {
    navbar_selection: "element",
    sub_navbar_selection: "element",
    card_header_state: "",
}

export const designToolReducer = (designToolState, action) => {
    switch (action.type) {
        case 'Select_Element_Nav': {
            return {
                ...designToolState,
                navbar_selection: "element",
                sub_navbar_selection: "element"
            }
        }
        case 'Select_Text_Nav': {
            return {
                ...designToolState,
                navbar_selection: "text",
                sub_navbar_selection: "text"
            }
        }
        case 'Select_Images_Nav': {
            return {
                ...designToolState,
                navbar_selection: "images",
                sub_navbar_selection: "images"
            }
        }
        case 'Select_Background_Nav': {
            return {
                ...designToolState,
                navbar_selection: "background",
                sub_navbar_selection: "background",
            }
        }
        case 'Select_Logo_Nav': {
            return {
                ...designToolState,
                navbar_selection: "logo",
                sub_navbar_selection: "logo"
            }
        }
        case 'Select_Shape_Color_Nav': {
            return {
                ...designToolState,
                navbar_selection: "element",
                sub_navbar_selection: "shapeColor"
            }
        }
        case 'Select_Texttool_Nav': {
            return {
                ...designToolState,
                navbar_selection: "text",
                sub_navbar_selection: "texttool"
            }
        }
        case 'Select_Font_Color_Tool_Nav': {
            return {
                ...designToolState,
                navbar_selection: "text",
                sub_navbar_selection: "fontColorTool",
            }
        }
        case 'Select_Effecttool_Nav': {
            return {
                ...designToolState,
                navbar_selection: "text",
                sub_navbar_selection: "effecttool"
            }
        }
        case 'Select_Shape_Card_Header': {
            return {
                ...designToolState,
                card_header_state: "shape"
            }
        }
        case 'Select_Text_Card_Header': {
            return {
                ...designToolState,
                card_header_state: "text"
            }
        }
        case 'Empty_Card_Header': {
            return {
                ...designToolState,
                card_header_state: ""
            }
        }
        default:
            throw new Error("cannot update reducer")
    }
}