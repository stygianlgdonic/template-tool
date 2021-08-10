export const designToolInit: any = {
    navbar_selection: "element"
}

export const designToolReducer = (designToolState, action) => {
    if (action.type == 'element') {
        return {
            ...designToolState,
            navbar_selection: "element"
        }
    }
    if (action.type == 'text') {
        return {
            ...designToolState,
            navbar_selection: "text"
        }
    }
    if (action.type == 'images') {
        return {
            ...designToolState,
            navbar_selection: "images"
        }
    }
    if (action.type == 'background') {
        return {
            ...designToolState,
            navbar_selection: "background"
        }
    }
    if (action.type == 'logo') {
        return {
            ...designToolState,
            navbar_selection: "logo"
        }
    }
    if (action.type == 'texttool') {
        return {
            ...designToolState,
            navbar_selection: "texttool"
        }
    }
    if (action.type == 'fonttool') {
        return {
            ...designToolState,
            navbar_selection: "fonttool"
        }
    }
    if (action.type == 'effecttool') {
        return {
            ...designToolState,
            navbar_selection: "effecttool"
        }
    }
}