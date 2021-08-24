const secret_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMWI5Y2MwZjEwNTJjMzU2YzM1Njk2ZiIsImVtYWlsIjoic3R5Z2lhbmxnZG9uaWNAZ21haWwuY29tIn0sImlhdCI6MTYyOTI4MjA5Nn0.PYOgPEwiLIyHI_22bjWEaPrykb-RzXKup9MRFzKZt_4"
const URL_ENDPOINTS = {
    svgURL: "https://hyper-engage-staging.herokuapp.com/svg",
}

interface Svg {
    svgURL: string
    svgString: string
    tags: string[]
}

export const svg_service = {
    getAllSvgs,
    getSvgByID,
    deleteSvgByID,
    searchSvgsByTags,
    addNewSvg
}

async function getAllSvgs() {
    const response = await fetch(`${URL_ENDPOINTS.svgURL}?secret_token=${secret_token}`)
    if (!response.ok) {
        throw new Error("Error while adding new svg")
    }
    return response.json()
}

async function searchSvgsByTags(tagsArray: string[]) {
    const response = await fetch(`${URL_ENDPOINTS.svgURL}?tags=${tagsArray}&secret_token=${secret_token}`)
    if (!response.ok) {
        throw new Error("Error while adding new svg")
    }
    return response.json()
}

async function getSvgByID(svgID: string) {
    const response = await fetch(`${URL_ENDPOINTS.svgURL}/${svgID}?secret_token=${secret_token}`)
    if (!response.ok) {
        throw new Error("Error while adding new svg")
    }
    return response.json()
}

async function deleteSvgByID(svgID: string) {
    const response = await fetch(`${URL_ENDPOINTS.svgURL}/${svgID}?secret_token=${secret_token}`, {
        method: "DELETE"
    })
    if (!response.ok) {
        throw new Error("Error while adding new svg")
    }
    return response.json()
}

async function addNewSvg(svgData: Svg) {
    const response = await fetch(`${URL_ENDPOINTS.svgURL}?secret_token=${secret_token}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(svgData)
    })
    if (!response.ok) {
        throw new Error("Error while adding new svg")
    }
    return response.json()
}

