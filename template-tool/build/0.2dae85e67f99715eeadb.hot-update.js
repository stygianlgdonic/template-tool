exports.id = 0;
exports.modules = {

/***/ "./src/ErrorFallacks/TopToolBarFallback.tsx":
/*!**************************************************!*\
  !*** ./src/ErrorFallacks/TopToolBarFallback.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\ErrorFallacks\\TopToolBarFallback.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const TopToolBarFallback = ({
  error,
  resetErrorBoundary
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    sweetalert__WEBPACK_IMPORTED_MODULE_1___default()("Oops!", "Something is wrong with toolbar, try reloading the page.", "error");
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, error.message);
};

/* harmony default export */ __webpack_exports__["default"] = (TopToolBarFallback);

/***/ })

};
//# sourceMappingURL=0.2dae85e67f99715eeadb.hot-update.js.map