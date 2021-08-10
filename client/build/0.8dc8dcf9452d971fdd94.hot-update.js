exports.id = 0;
exports.modules = {

/***/ "./src/contexts/DesignTool/NavBarActions.ts":
/*!**************************************************!*\
  !*** ./src/contexts/DesignTool/NavBarActions.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DesignToolContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesignToolContext */ "./src/contexts/DesignTool/DesignToolContext.tsx");



const NavBarActions = () => {
  const {
    designToolDispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__["DesignToolContext"]);

  const selectElementNav = () => {
    designToolDispatch({
      type: "Select_Element_Nav"
    });
  };

  const selectTextNav = () => {
    designToolDispatch({
      type: "Select_Text_Nav"
    });
  };

  const selectImagesNav = () => {
    designToolDispatch({
      type: "Select_Images_Nav"
    });
  };

  const selectBackgroundNav = () => {
    designToolDispatch({
      type: "Select_Background_Nav"
    });
  };

  const selectLogoNav = () => {
    designToolDispatch({
      type: "Select_Logo_Nav"
    });
  };

  return {
    selectElementNav,
    selectTextNav,
    selectImagesNav,
    selectBackgroundNav,
    selectLogoNav
  };
};

/* harmony default export */ __webpack_exports__["default"] = (NavBarActions);

/***/ })

};
//# sourceMappingURL=0.8dc8dcf9452d971fdd94.hot-update.js.map