exports.id = 1;
exports.modules = {

/***/ "./src/services/templateService.ts":
/*!*****************************************!*\
  !*** ./src/services/templateService.ts ***!
  \*****************************************/
/*! exports provided: template_service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template_service", function() { return template_service; });
const secret_token = window.localStorage.getItem("Token");
const URL_ENDPOINTS = {
  getAllTemplatesURL: "https://hyper-engage-staging.herokuapp.com/template",
  getTemplateByIdURL: "https://hyper-engage-staging.herokuapp.com/template",
  createTemplateURL: "https://hyper-engage-staging.herokuapp.com/template",
  updateTemplateByIdURL: "https://hyper-engage-staging.herokuapp.com/template",
  deleteTemplateByIdURL: "https://hyper-engage-staging.herokuapp.com/template"
};
const template_service = {
  getAllTemplates,
  addNewTemplate,
  getTemplateByID,
  updateTemplateByID,
  deleteTemplateByID
};

async function getAllTemplates() {
  const response = await fetch(URL_ENDPOINTS.getAllTemplatesURL);

  if (!response.ok) {
    throw new Error("Error while fetching Templates");
  }

  return response.json();
}

async function addNewTemplate(templateData) {
  const response = await fetch(URL_ENDPOINTS.createTemplateURL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(templateData)
  });

  if (!response.ok) {
    throw new Error("Error while adding new template");
  }

  return response.json();
}

async function getTemplateByID(templateID) {
  const response = await fetch(`${URL_ENDPOINTS.getAllTemplatesURL}/${templateID}`);

  if (!response.ok) {
    throw new Error("Error while fetching Templates");
  }

  return response.json();
}

async function updateTemplateByID(templateID, templateData) {
  console.log({
    JSON: JSON.stringify(templateData),
    templateData
  });
  const response = await fetch(`${URL_ENDPOINTS.updateTemplateByIdURL}/${templateID}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(templateData)
  });
  console.log({
    response
  });

  if (!response.ok) {
    throw new Error("Error while updating template");
  }

  return response.json();
}

async function deleteTemplateByID(templateID) {
  const response = await fetch(`${URL_ENDPOINTS.deleteTemplateByIdURL}/${templateID}`, {
    method: "DELETE"
  });
  console.log({
    response
  });

  if (!response.ok) {
    throw new Error("Error while updating template");
  }

  return response.json();
}

/***/ })

};
//# sourceMappingURL=1.1060e67eb171377e51b0.hot-update.js.map