export const getAllTemplates = async () => {
    const response = await fetch(`https://polar-tor-04971.herokuapp.com/template`)
    if (!response.ok) {
        throw new Error("Error while fetching Templates")
    }
    return response.json()
}

export const addNewTemplate = async (templateData: any) => {
    const newData = { ...templateData, id: "opdude" }
    console.log({
        newData: JSON.stringify(newData)
    })

    const response = await fetch(`https://polar-tor-04971.herokuapp.com/template`, {
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

export const getTemplateByID = (templateID: string) => {
    return null
}

export const updateTemplateByID = (templateID: string, templateData: any) => {
    return null
}

export const deleteTemplateByID = (templateID: string) => {
    return null
}

