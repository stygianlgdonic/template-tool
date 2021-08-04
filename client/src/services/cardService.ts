const URL_ENDPOINTS = {
    getAllCardsURL: "https://polar-tor-04971.herokuapp.com/card",
    getCardByIdURL: "https://polar-tor-04971.herokuapp.com/card",
    createCardURL: "https://polar-tor-04971.herokuapp.com/card",
    updateCardByIdURL: "https://polar-tor-04971.herokuapp.com/card",
    deleteCardByIdURL: "https://polar-tor-04971.herokuapp.com/card"
}

export const card_service = {
    getAllCards,
    addNewCard,
    getCardByID,
    updateCardByID,
    deleteCardByID
}

async function getAllCards() {
    const response = await fetch(URL_ENDPOINTS.getAllCardsURL)
    if (!response.ok) {
        throw new Error("Error while fetching Cards")
    }
    return response.json()
}

async function addNewCard(cardData: any) {
    const response = await fetch(URL_ENDPOINTS.createCardURL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cardData)
    })
    if (!response.ok) {
        throw new Error("Error while adding new card")
    }
    return response.json()
}

async function getCardByID(cardID: string) {
    const response = await fetch(`${URL_ENDPOINTS.getAllCardsURL}/${cardID}`)
    if (!response.ok) {
        throw new Error("Error while fetching Cards")
    }
    return response.json()
}

async function updateCardByID(cardID: string, cardData: any) {

    console.log({ JSON: JSON.stringify(cardData), cardData })

    const response = await fetch(`${URL_ENDPOINTS.updateCardByIdURL}/${cardID}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cardData)
    })
    console.log({ response })
    if (!response.ok) {
        throw new Error("Error while updating card")
    }
    return response.json()
}

async function deleteCardByID(cardID: string) {
    const response = await fetch(`${URL_ENDPOINTS.deleteCardByIdURL}/${cardID}`, {
        method: "DELETE",
    })
    console.log({ response })
    if (!response.ok) {
        throw new Error("Error while updating card")
    }
    return response.json()
}

