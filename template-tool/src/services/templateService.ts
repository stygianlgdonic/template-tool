const secret_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMWI5Y2MwZjEwNTJjMzU2YzM1Njk2ZiIsImVtYWlsIjoic3R5Z2lhbmxnZG9uaWNAZ21haWwuY29tIn0sImlhdCI6MTYyOTI4MjA5Nn0.PYOgPEwiLIyHI_22bjWEaPrykb-RzXKup9MRFzKZt_4"
const URL_ENDPOINTS = {
    getAllTemplatesURL: "https://polar-tor-04971.herokuapp.com/template",
    getTemplateByIdURL: "https://polar-tor-04971.herokuapp.com/template",
    createTemplateURL: `https://polar-tor-04971.herokuapp.com/template?secret_token=${secret_token}`,
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
    console.log({ response })
    if (!response.ok) {
        throw new Error("Error while adding new template")
    }
    return response.json()
}

async function getTemplateByID(templateID: string | undefined) {
    if (!templateID) return

    const response = await fetch(`${URL_ENDPOINTS.getAllTemplatesURL}/${templateID}`)
    if (!response.ok) {
        throw new Error("Error while fetching Template")
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
        throw new Error("Error while delete template")
    }
    return response.json()
}

