exports.id = "server";
exports.modules = {

/***/ "./src/services/templateService.ts":
/*!*****************************************!*\
  !*** ./src/services/templateService.ts ***!
  \*****************************************/
/*! exports provided: getAllTemplates, addNewTemplate, getTemplateByID, updateTemplateByID, deleteTemplateByID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTemplates", function() { return getAllTemplates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewTemplate", function() { return addNewTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplateByID", function() { return getTemplateByID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTemplateByID", function() { return updateTemplateByID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTemplateByID", function() { return deleteTemplateByID; });
const getAllTemplates = async () => {
  const response = await fetch(`https://polar-tor-04971.herokuapp.com/template`);

  if (!response.ok) {
    throw new Error("Error while fetching Templates");
  }

  return response.json();
};
const addNewTemplate = async templateData => {
  console.log({
    templateData
  });
  const response = await fetch(`https://polar-tor-04971.herokuapp.com/template`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "variations": [],
      "palette": [],
      "tags": [],
      "id": "sexytwice"
    })
  });
  console.log({
    response
  });

  if (!response.ok) {
    throw new Error("Error while adding new template");
  }

  return response.json();
};
const getTemplateByID = templateID => {
  return null;
};
const updateTemplateByID = (templateID, templateData) => {
  return null;
};
const deleteTemplateByID = templateID => {
  return null;
};

/***/ })

};
//# sourceMappingURL=server.2f821e6b025dba30aefd.hot-update.js.map