const secret_token = window.localStorage.getItem("Token")
const URL_ENDPOINTS = {
    tempurl: "http://localhost:5000/template",
    getAllTemplatesURL: "https://hyper-engage-staging.herokuapp.com/template",
    getTemplateByIdURL: "https://hyper-engage-staging.herokuapp.com/template",
    createTemplateURL: "https://hyper-engage-staging.herokuapp.com/template",
    updateTemplateByIdURL: "https://hyper-engage-staging.herokuapp.com/template",
    deleteTemplateByIdURL: "https://hyper-engage-staging.herokuapp.com/template"
}

export const template_service = {
    getAllTemplates,
    getAllTemplatesByTags,
    addNewTemplate,
    getTemplateByID,
    updateTemplateByID,
    deleteTemplateByID
}

async function getAllTemplates() {
    const response = await fetch(`${URL_ENDPOINTS.getAllTemplatesURL}?secret_token=${secret_token}`)
    if (!response.ok) {
        throw new Error("Error while fetching Templates")
    }
    return response.json()
}

async function getAllTemplatesByTags(tags: string[]) {
    let tagsString: string = ""
    if (!!tags.length) {
        tags.map((item, i) => {
            if (!(i === tags.length - 1)) {

                tagsString = tagsString + item + ","
            }
            else {
                tagsString = tagsString + item
            }
        })
        console.log(tagsString)
    }
    console.log(`${URL_ENDPOINTS.tempurl}?secret_token=${secret_token}&tags=${tagsString}`)
    const response = await fetch(`${URL_ENDPOINTS.tempurl}?secret_token=${secret_token}&tags=${tagsString}`)
    if (!response.ok) {
        throw new Error("Error while fetching Templates")
    }
    return response.json()
}

async function addNewTemplate(templateData: any) {
    const response = await fetch(`${URL_ENDPOINTS.createTemplateURL}?secret_token=${secret_token}`, {
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
    const response = await fetch(`${URL_ENDPOINTS.getTemplateByIdURL}/${templateID}?secret_token=${secret_token}`)
    if (!response.ok) {
        throw new Error("Error while fetching Templates")
    }
    return response.json()
}

async function updateTemplateByID(templateID: string, templateData: any) {

    console.log({ JSON: JSON.stringify(templateData), templateData })

    const response = await fetch(`${URL_ENDPOINTS.updateTemplateByIdURL}/${templateID}?secret_token=${secret_token}`, {
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
    const response = await fetch(`${URL_ENDPOINTS.deleteTemplateByIdURL}/${templateID}?secret_token=${secret_token}`, {
        method: "DELETE",
    })
    console.log({ response })
    if (!response.ok) {
        throw new Error("Error while updating template")
    }
    return response.json()
}

