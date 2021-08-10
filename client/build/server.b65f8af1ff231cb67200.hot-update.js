exports.id = "server";
exports.modules = {

/***/ "./src/contexts/DesignToolReducer.ts":
/*!*******************************************!*\
  !*** ./src/contexts/DesignToolReducer.ts ***!
  \*******************************************/
/*! exports provided: designToolInit, designToolReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "designToolInit", function() { return designToolInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "designToolReducer", function() { return designToolReducer; });
const designToolInit = {
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
    return designToolState.navbar_selection = "images";
  }

  if (action.type == 'Navbar_Select_Background') {
    return designToolState.navbar_selection = "background";
  }

  if (action.type == 'Navbar_Select_Logo') {
    return designToolState.navbar_selection = "logo";
  }

  if (action.type == 'Navbar_Select_Logo') {
    return designToolState.navbar_selection = "texttool";
  }

  if (action.type == 'Navbar_Select_Logo') {
    return designToolState.navbar_selection = "fonttool";
  }

  if (action.type == 'Navbar_Select_Logo') {
    return designToolState.navbar_selection = "effecttool";
  }
};

/***/ })

};
//# sourceMappingURL=server.b65f8af1ff231cb67200.hot-update.js.map