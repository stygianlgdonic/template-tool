exports.id = "server";
exports.modules = {

/***/ "./src/contexts/DesignToolReducer.ts":
/*!*******************************************!*\
  !*** ./src/contexts/DesignToolReducer.ts ***!
  \*******************************************/
/*! exports provided: designToolState, designToolReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "designToolState", function() { return designToolState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "designToolReducer", function() { return designToolReducer; });
const designToolState = {
  navbar_selection: ""
};
const designToolReducer = (designToolState, action) => {
  if (action.type == 'Navbar_Select_Elements') {
    return designToolState.navbar_selection = "element";
  }

  if (action.type == 'Navbar_Select_Text') {
    return designToolState.navbar_selection = "text";
  }

  if (action.type == 'Navbar_Select_Image') {
    return designToolState.navbar_selection = "image";
  }

  if (action.type == 'Navbar_Select_Background') {
    return designToolState.navbar_selection = "background";
  }

  if (action.type == 'Navbar_Select_Logo') {
    return designToolState.navbar_selection = "logo";
  }
};

/***/ })

};
//# sourceMappingURL=server.a611b6b602bab526f543.hot-update.js.map