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
//# sourceMappingURL=server.35f20135de53b2009d77.hot-update.js.map