exports.id = "server";
exports.modules = {

/***/ "./src/contexts/HeaderContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/HeaderContext.tsx ***!
  \****************************************/
/*! exports provided: INITIAL_STATE, HeaderContext, HeaderProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContext", function() { return HeaderContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderProvider", function() { return HeaderProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\contexts\\HeaderContext.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const INITIAL_STATE = {};
const HeaderContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
const HeaderProvider = ({
  children
}) => {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(HeaderContext.Provider, {
    value: [open, setOpen],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, children);
};

/***/ })

};
//# sourceMappingURL=server.9399a92f760c923bd20d.hot-update.js.map