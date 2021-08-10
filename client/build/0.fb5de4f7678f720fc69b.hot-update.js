exports.id = 0;
exports.modules = {

/***/ "./src/contexts/DesignTool/SubnavbarActions.ts":
/*!*****************************************************!*\
  !*** ./src/contexts/DesignTool/SubnavbarActions.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DesignToolContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesignToolContext */ "./src/contexts/DesignTool/DesignToolContext.tsx");



const SubNavbarActions = () => {
  const {
    designToolDispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__["DesignToolContext"]);

  const selectTextToolSubNav = () => {
    designToolDispatch({
      type: "Select_Texttool_Nav"
    });
  };

  const selectFontToolSubNav = () => {
    designToolDispatch({
      type: "Select_Fonttool_Nav"
    });
  };

  const selectEffectToolSubNav = () => {
    designToolDispatch({
      type: "Select_Effecttool_Nav"
    });
  };

  return {
    selectTextToolSubNav,
    selectFontToolSubNav,
    selectEffectToolSubNav
  };
};

/* harmony default export */ __webpack_exports__["default"] = (SubNavbarActions);

/***/ })

};
//# sourceMappingURL=0.fb5de4f7678f720fc69b.hot-update.js.map