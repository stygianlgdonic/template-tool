exports.id = "server";
exports.modules = {

/***/ "./src/routes/Private/index.tsx":
/*!**************************************!*\
  !*** ./src/routes/Private/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validation */ "./src/routes/validation.ts");
var _jsxFileName = "D:\\Hyper Engage Backend\\cardclan-backend\\client\\src\\routes\\Private\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PrivateRoute = ({
  element: RouteComponent,
  path
}) => {
  const condition = Object(_validation__WEBPACK_IMPORTED_MODULE_2__["validation"])();
  console.log(condition);
  return !!condition ? __jsx(RouteComponent, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 26
    }
  }) : __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Navigate"], {
    to: "/signin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 47
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PrivateRoute);

/***/ }),

/***/ "./src/routes/Private/validation.ts":
false

};
//# sourceMappingURL=server.ea1bacbe3a589f128753.hot-update.js.map