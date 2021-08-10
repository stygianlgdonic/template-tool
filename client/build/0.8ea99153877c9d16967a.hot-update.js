exports.id = 0;
exports.modules = {

/***/ "./src/contexts/DesignTool/CardHeaderActions.ts":
/*!******************************************************!*\
  !*** ./src/contexts/DesignTool/CardHeaderActions.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DesignToolContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesignToolContext */ "./src/contexts/DesignTool/DesignToolContext.tsx");



const CardHeaderActions = () => {
  const {
    designToolDispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__["DesignToolContext"]);

  const emptyCardHeader = () => {
    designToolDispatch({
      type: "Empty_Card_Header"
    });
  };

  const selectTextCardHeader = () => {
    designToolDispatch({
      type: "Select_Text_Card_Header"
    });
  };

  const selectShapeCardHeader = () => {
    designToolDispatch({
      type: "Select_Shape_Card_Header"
    });
  };

  return {
    emptyCardHeader
  };
};

/* harmony default export */ __webpack_exports__["default"] = (CardHeaderActions);

/***/ })

};
//# sourceMappingURL=0.8ea99153877c9d16967a.hot-update.js.map