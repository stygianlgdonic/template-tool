exports.id = "server";
exports.modules = {

/***/ "./src/services/templateService.ts":
/*!*****************************************!*\
  !*** ./src/services/templateService.ts ***!
  \*****************************************/
/*! exports provided: getAllTemplates, getTemplateByID, updateTemplateByID, deleteTemplateByID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTemplates", function() { return getAllTemplates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplateByID", function() { return getTemplateByID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTemplateByID", function() { return updateTemplateByID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTemplateByID", function() { return deleteTemplateByID; });
const getAllTemplates = async () => {
  const response = await fetch(`https://polar-tor-04971.herokuapp.com/`);
  console.log({
    response
  });

  if (!response.ok) {
    console.log("Error while fetching Templates");
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
//# sourceMappingURL=server.e27536f235d34db28671.hot-update.js.map