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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation */ "./src/routes/Private/validation.ts");



const PrivateRoute = ({
  element,
  path
}) => {
  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["useNavigate"])();
  const condition = Object(_validation__WEBPACK_IMPORTED_MODULE_1__["validation"])();
  console.log(condition);
  !!condition ? navigate(path) : navigate("/signup");
};

/* harmony default export */ __webpack_exports__["default"] = (PrivateRoute);

/***/ })

};
//# sourceMappingURL=server.2aab7e76b7f91c3baf55.hot-update.js.map