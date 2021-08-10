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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const designToolInit = {
  navbar_selection: ""
};
const designToolReducer = (designToolState, action) => {
  if (action.type == 'Navbar_Select_Elements') {
    return _objectSpread(_objectSpread({}, designToolState), {}, {
      navbar_selection: "element"
    });
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
//# sourceMappingURL=server.79967a37f7cf599e17d8.hot-update.js.map