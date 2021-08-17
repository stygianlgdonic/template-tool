const URL_ENDPOINTS = {
    getAllCategoriesURL: "https://polar-tor-04971.herokuapp.com/templatecategory",
    getCategoryByIdURL: "https://polar-tor-04971.herokuapp.com/templatecategory",
    createCategoryURL: "https://polar-tor-04971.herokuapp.com/templatecategory",
    updateCategoryByIdURL: "https://polar-tor-04971.herokuapp.com/templatecategory",
    deleteCategoryByIdURL: "https://polar-tor-04971.herokuapp.com/templatecategory"
}

export const category_service = {
    getAllCategories,
    addNewCategory,
    getCategoryByID,
    updateCategoryByID,
    deleteCategoryByID
}

async function getAllCategories() {
    const response = await fetch(URL_ENDPOINTS.getAllCategoriesURL)
    if (!response.ok) {
        throw new Error("Error while fetching Categories")
    }
    return response.json()
}

async function addNewCategory(categoryData: any) {
    const response = await fetch(URL_ENDPOINTS.createCategoryURL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoryData)
    })
    if (!response.ok) {
        throw new Error("Error while adding new category")
    }
    return response.json()
}

async function getCategoryByID(categoryID: string | undefined) {
    if (!categoryID) return

    const response = await fetch(`${URL_ENDPOINTS.getAllCategoriesURL}/${categoryID}`)
    if (!response.ok) {
        throw new Error("Error while fetching Category")
    }
    return response.json()
}

async function updateCategoryByID(categoryID: string, categoryData: any) {

    console.log({ JSON: JSON.stringify(categoryData), categoryData })

    const response = await fetch(`${URL_ENDPOINTS.updateCategoryByIdURL}/${categoryID}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoryData)
    })
    console.log({ response })
    if (!response.ok) {
        throw new Error("Error while updating category")
    }
    return response.json()
}

async function deleteCategoryByID(categoryID: string) {
    const response = await fetch(`${URL_ENDPOINTS.deleteCategoryByIdURL}/${categoryID}`, {
        method: "DELETE",
    })
    console.log({ response })
    if (!response.ok) {
        throw new Error("Error while delete category")
    }
    return response.json()
}

