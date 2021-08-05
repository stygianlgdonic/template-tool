exports.id = 0;
exports.modules = {

/***/ "./src/ErrorFallacks/SaveVariationFallback.tsx":
/*!*****************************************************!*\
  !*** ./src/ErrorFallacks/SaveVariationFallback.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\ErrorFallacks\\SaveVariationFallback.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SaveVariationFallback = ({
  error,
  resetErrorBoundary
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    sweetalert__WEBPACK_IMPORTED_MODULE_1___default()("Oops!", "Something is wrong with sidebar, try reloading the page.", "error").then(resetErrorBoundary);
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, error.message);
};

/* harmony default export */ __webpack_exports__["default"] = (SaveVariationFallback);

/***/ })

};
//# sourceMappingURL=0.2c71c9995ceff0fb29d5.hot-update.js.map