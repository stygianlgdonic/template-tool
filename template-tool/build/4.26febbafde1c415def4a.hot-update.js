exports.id = 4;
exports.modules = {

/***/ "./src/services/svgService.ts":
/*!************************************!*\
  !*** ./src/services/svgService.ts ***!
  \************************************/
/*! exports provided: svg_service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg_service", function() { return svg_service; });
const secret_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMWI5Y2MwZjEwNTJjMzU2YzM1Njk2ZiIsImVtYWlsIjoic3R5Z2lhbmxnZG9uaWNAZ21haWwuY29tIn0sImlhdCI6MTYyOTI4MjA5Nn0.PYOgPEwiLIyHI_22bjWEaPrykb-RzXKup9MRFzKZt_4";
const URL_ENDPOINTS = {
  svgURL: "https://hyper-engage-staging.herokuapp.com/svg"
};
const svg_service = {
  getAllSvgs,
  getSvgByID,
  deleteSvgByID,
  searchSvgsByTags,
  addNewSvg
};

async function getAllSvgs() {
  const response = await fetch(`${URL_ENDPOINTS.svgURL}?secret_token=${secret_token}`);

  if (!response.ok) {
    throw new Error("Error while adding new svg");
  }

  return response.json();
}

async function searchSvgsByTags(tagsArray) {
  const response = await fetch(`${URL_ENDPOINTS.svgURL}?tags=${tagsArray}&secret_token=${secret_token}`);

  if (!response.ok) {
    throw new Error("Error while adding new svg");
  }

  return response.json();
}

async function getSvgByID(svgID) {
  const response = await fetch(`${URL_ENDPOINTS.svgURL}/${svgID}?secret_token=${secret_token}`);

  if (!response.ok) {
    throw new Error("Error while adding new svg");
  }

  return response.json();
}

async function deleteSvgByID(svgID) {
  const response = await fetch(`${URL_ENDPOINTS.svgURL}/${svgID}?secret_token=${secret_token}`, {
    method: "DELETE"
  });

  if (!response.ok) {
    throw new Error("Error while adding new svg");
  }

  return response.json();
}

async function addNewSvg(svgData) {
  const response = await fetch(`${URL_ENDPOINTS.svgURL}?secret_token=${secret_token}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(svgData)
  });

  if (!response.ok) {
    throw new Error("Error while adding new svg");
  }

  return response.json();
}

/***/ })

};
//# sourceMappingURL=4.26febbafde1c415def4a.hot-update.js.map