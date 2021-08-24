const secret_token = window.localStorage.getItem("Token")
const URL_ENDPOINTS = {
    getAllCategoriesURL: process.env.RAZZLE_APP__REST_URI + "/templatecategory",
    getCategoryByIdURL: process.env.RAZZLE_APP__REST_URI + "/templatecategory",
    createCategoryURL: process.env.RAZZLE_APP__REST_URI + "/templatecategory",
    updateCategoryByIdURL: process.env.RAZZLE_APP__REST_URI + "/templatecategory",
    deleteCategoryByIdURL: process.env.RAZZLE_APP__REST_URI + "/templatecategory"
}

export const category_service = {
    getAllCategories,
    addNewCategory,
    getCategoryByID,
    updateCategoryByID,
    deleteCategoryByID
}

async function getAllCategories() {
    const response = await fetch(`${URL_ENDPOINTS.getAllCategoriesURL}?secret_token=${secret_token}`)
    if (!response.ok) {
        throw new Error("Error while fetching Categories")
    }
    return response.json()
}

async function addNewCategory(categoryData: any) {
    const response = await fetch(`${URL_ENDPOINTS.createCategoryURL}?secret_token=${secret_token}`, {
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

    const response = await fetch(`${URL_ENDPOINTS.getAllCategoriesURL}/${categoryID}?secret_token=${secret_token}`)
    if (!response.ok) {
        throw new Error("Error while fetching Category")
    }
    return response.json()
}

async function updateCategoryByID(categoryID: string, categoryData: any) {

    console.log({ JSON: JSON.stringify(categoryData), categoryData })

    const response = await fetch(`${URL_ENDPOINTS.updateCategoryByIdURL}/${categoryID}?secret_token=${secret_token}`, {
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
    const response = await fetch(`${URL_ENDPOINTS.deleteCategoryByIdURL}/${categoryID}?secret_token=${secret_token}`, {
        method: "DELETE",
    })
    console.log({ response })
    if (!response.ok) {
        throw new Error("Error while delete category")
    }
    return response.json()
}

