const URL_ENDPOINTS = {
    getAllTemplatesURL: "https://polar-tor-04971.herokuapp.com/template",
    getTemplateByIdURL: "https://polar-tor-04971.herokuapp.com/template",
    createTemplateURL: "https://polar-tor-04971.herokuapp.com/template",
    updateTemplateByIdURL: "https://polar-tor-04971.herokuapp.com/template",
    deleteTemplateByIdURL: "https://polar-tor-04971.herokuapp.com/template"
}

export const template_service = {
    getAllTemplates,
    addNewTemplate,
    getTemplateByID,
    updateTemplateByID,
    deleteTemplateByID
}

async function getAllTemplates() {
    const response = await fetch(URL_ENDPOINTS.getAllTemplatesURL)
    if (!response.ok) {
        throw new Error("Error while fetching Templates")
    }
    return response.json()
}

async function addNewTemplate(templateData: any) {
    const response = await fetch(URL_ENDPOINTS.createTemplateURL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(templateData)
    })
    if (!response.ok) {
        throw new Error("Error while adding new template")
    }
    return response.json()
}

async function getTemplateByID(templateID: string) {
    const response = await fetch(`${URL_ENDPOINTS.getAllTemplatesURL}/${templateID}`)
    if (!response.ok) {
        throw new Error("Error while fetching Templates")
    }
    return response.json()
}

async function updateTemplateByID(templateID: string, templateData: any) {

    console.log({ JSON: JSON.stringify(templateData), templateData })

    const response = await fetch(`${URL_ENDPOINTS.updateTemplateByIdURL}/${templateID}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(templateData)
    })
    console.log({ response })
    if (!response.ok) {
        throw new Error("Error while updating template")
    }
    return response.json()
}

async function deleteTemplateByID(templateID: string) {
    const response = await fetch(`${URL_ENDPOINTS.deleteTemplateByIdURL}/${templateID}`, {
        method: "DELETE",
    })
    console.log({ response })
    if (!response.ok) {
        throw new Error("Error while updating template")
    }
    return response.json()
}

