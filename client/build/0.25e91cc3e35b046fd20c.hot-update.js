exports.id = 0;
exports.modules = {

/***/ "./src/services/cardService.ts":
/*!*************************************!*\
  !*** ./src/services/cardService.ts ***!
  \*************************************/
/*! exports provided: card_service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "card_service", function() { return card_service; });
const URL_ENDPOINTS = {
  getAllCardsURL: "https://hyper-engage-staging.herokuapp.com/card",
  getCardByIdURL: "https://hyper-engage-staging.herokuapp.com/card",
  createCardURL: "https://hyper-engage-staging.herokuapp.com/card",
  updateCardByIdURL: "https://hyper-engage-staging.herokuapp.com/card",
  deleteCardByIdURL: "https://hyper-engage-staging.herokuapp.com/card"
};
const card_service = {
  getAllCards,
  addNewCard,
  getCardByID,
  updateCardByID,
  deleteCardByID
};

async function getAllCards() {
  const response = await fetch(URL_ENDPOINTS.getAllCardsURL);

  if (!response.ok) {
    throw new Error("Error while fetching Cards");
  }

  return response.json();
}

async function addNewCard(cardData) {
  const response = await fetch(URL_ENDPOINTS.createCardURL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cardData)
  });

  if (!response.ok) {
    throw new Error("Error while adding new card");
  }

  return response.json();
}

async function getCardByID(cardID) {
  const response = await fetch(`${URL_ENDPOINTS.getAllCardsURL}/${cardID}`);

  if (!response.ok) {
    throw new Error("Error while fetching Cards");
  }

  return response.json();
}

async function updateCardByID(cardID, cardData) {
  console.log({
    JSON: JSON.stringify(cardData),
    cardData
  });
  const response = await fetch(`${URL_ENDPOINTS.updateCardByIdURL}/${cardID}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cardData)
  });
  console.log({
    response
  });

  if (!response.ok) {
    throw new Error("Error while updating card");
  }

  return response.json();
}

async function deleteCardByID(cardID) {
  const response = await fetch(`${URL_ENDPOINTS.deleteCardByIdURL}/${cardID}`, {
    method: "DELETE"
  });
  console.log({
    response
  });

  if (!response.ok) {
    throw new Error("Error while updating card");
  }

  return response.json();
}

/***/ })

};
//# sourceMappingURL=0.25e91cc3e35b046fd20c.hot-update.js.map