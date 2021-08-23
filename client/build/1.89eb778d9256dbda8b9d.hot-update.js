exports.id = 1;
exports.modules = {

/***/ "./src/Hooks/useTemplateList.ts":
/*!**************************************!*\
  !*** ./src/Hooks/useTemplateList.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_templateService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/templateService */ "./src/services/templateService.ts");



const useTemplateList = () => {
  const {
    data,
    error,
    isLoading
  } = Object(react_query__WEBPACK_IMPORTED_MODULE_0__["useQuery"])("templates", _services_templateService__WEBPACK_IMPORTED_MODULE_1__["template_service"].getAllTemplates);
  return {
    templateList: data,
    templateListError: error,
    templateListLoading: isLoading
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useTemplateList);

/***/ })

};
//# sourceMappingURL=1.89eb778d9256dbda8b9d.hot-update.js.map