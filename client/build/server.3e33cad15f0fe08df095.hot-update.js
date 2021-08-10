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
const designToolReducer = (designToolInit, action) => {
  if (action.type == 'Navbar_Select_Elements') {
    return designToolInit.navbar_selection = "element";
  }

  if (action.type == 'Navbar_Select_Text') {
    return designToolInit.navbar_selection = "text";
  }

  if (action.type == 'Navbar_Select_Image') {
    return designToolInit.navbar_selection = "image";
  }

  if (action.type == 'Navbar_Select_Background') {
    return designToolInit.navbar_selection = "background";
  }

  if (action.type == 'Navbar_Select_Logo') {
    return designToolInit.navbar_selection = "logo";
  }
};

/***/ })

};
//# sourceMappingURL=server.3e33cad15f0fe08df095.hot-update.js.map