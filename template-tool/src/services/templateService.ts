const URL_ENDPOINTS = {
    getAllTemplatesURL : "https://polar-tor-04971.herokuapp.com/template",
    createTemplateURL : "https://polar-tor-04971.herokuapp.com/template"
}

export const template_service = {
    getAllTemplates,
    addNewTemplate,
    getTemplateByID,
    updateTemplateByID,
    deleteTemplateByID
}

async function getAllTemplates (){
    const response = await fetch(URL_ENDPOINTS.getAllTemplatesURL)
    if (!response.ok) {
        throw new Error("Error while fetching Templates")
    }
    return response.json()
}

async function addNewTemplate (templateData: any) {
    const newData = { ...templateData, id: "opdude" }
    console.log({
        newData: JSON.stringify(newData)
    })

    const response = await fetch(URL_ENDPOINTS.createTemplateURL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    })
    console.log({ response })
    if (!response.ok) {
        throw new Error("Error while adding new template")
    }
    return response.json()
}

async function getTemplateByID (templateID: string) {
    return null
}

async function updateTemplateByID (templateID: string, templateData: any) {
    return null
}

async function deleteTemplateByID (templateID: string) {
    return null
}

