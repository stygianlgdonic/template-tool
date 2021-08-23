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
  tempurl: "http://localhost:5000/template",
  getAllTemplatesURL: "https://hyper-engage-staging.herokuapp.com/template",
  getTemplateByIdURL: "https://hyper-engage-staging.herokuapp.com/template",
  createTemplateURL: "https://hyper-engage-staging.herokuapp.com/template",
  updateTemplateByIdURL: "https://hyper-engage-staging.herokuapp.com/template",
  deleteTemplateByIdURL: "https://hyper-engage-staging.herokuapp.com/template"
};
const template_service = {
  getAllTemplates,
  getAllTemplatesByTags,
  addNewTemplate,
  getTemplateByID,
  updateTemplateByID,
  deleteTemplateByID
};

async function getAllTemplates() {
  const response = await fetch(`${URL_ENDPOINTS.getAllTemplatesURL}?secret_token=${secret_token}`);

  if (!response.ok) {
    throw new Error("Error while fetching Templates");
  }

  return response.json();
}

async function getAllTemplatesByTags(tags) {
  let tagsString = "";

  if (!!tags.length) {
    tags.map((item, i) => {
      if (!(i === tags.length - 1)) {
        tagsString = tagsString + item + ",";
      } else {
        tagsString = tagsString + item;
      }
    });
    console.log(tagsString);
  }

  console.log(`${URL_ENDPOINTS.tempurl}?secret_token=${secret_token}&tags=${tagsString}`);
  const response = await fetch(`${URL_ENDPOINTS.tempurl}?secret_token=${secret_token}&tags=${tagsString}`);

  if (!response.ok) {
    throw new Error("Error while fetching Templates");
  }

  return response.json();
}

async function addNewTemplate(templateData) {
  const response = await fetch(`${URL_ENDPOINTS.createTemplateURL}?secret_token=${secret_token}`, {
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
  const response = await fetch(`${URL_ENDPOINTS.getTemplateByIdURL}/${templateID}?secret_token=${secret_token}`);

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
  const response = await fetch(`${URL_ENDPOINTS.updateTemplateByIdURL}/${templateID}?secret_token=${secret_token}`, {
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
  const response = await fetch(`${URL_ENDPOINTS.deleteTemplateByIdURL}/${templateID}?secret_token=${secret_token}`, {
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
//# sourceMappingURL=1.06027fb3d2f26eeb103a.hot-update.js.map