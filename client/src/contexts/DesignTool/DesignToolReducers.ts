export const designToolInit: any = {
    navbar_selection: "element"
}

export const designToolReducer = (designToolState, action) => {
    if (action.type == 'Select_Element_Nav') {
        return {
            ...designToolState,
            navbar_selection: "element"
        }
    }
    if (action.type == 'Select_Text_Nav') {
        return {
            ...designToolState,
            navbar_selection: "text"
        }
    }
    if (action.type == 'Select_Images_Nav') {
        return {
            ...designToolState,
            navbar_selection: "images"
        }
    }
    if (action.type == 'Select_Background_Nav') {
        return {
            ...designToolState,
            navbar_selection: "background"
        }
    }
    if (action.type == 'Select_Logo_Nav') {
        return {
            ...designToolState,
            navbar_selection: "logo"
        }
    }
    if (action.type == 'Select_Texttool_Nav') {
        return {
            ...designToolState,
            navbar_selection: "texttool"
        }
    }
    if (action.type == 'Select_Fonttool_Nav') {
        return {
            ...designToolState,
            navbar_selection: "fonttool"
        }
    }
    if (action.type == 'Select_Effecttool_Nav') {
        return {
            ...designToolState,
            navbar_selection: "effecttool"
        }
    }
}