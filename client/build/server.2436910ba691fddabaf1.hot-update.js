exports.id = "server";
exports.modules = {

/***/ "./src/contexts/DesignToolReducers.ts":
/*!********************************************!*\
  !*** ./src/contexts/DesignToolReducers.ts ***!
  \********************************************/
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
  if (action.type == 'element') {
    return _objectSpread(_objectSpread({}, designToolState), {}, {
      navbar_selection: "element"
    });
  }

  if (action.type == 'text') {
    return _objectSpread(_objectSpread({}, designToolState), {}, {
      navbar_selection: "text"
    });
  }

  if (action.type == 'images') {
    return _objectSpread(_objectSpread({}, designToolState), {}, {
      navbar_selection: "images"
    });
  }

  if (action.type == 'background') {
    return _objectSpread(_objectSpread({}, designToolState), {}, {
      navbar_selection: "background"
    });
  }

  if (action.type == 'logo') {
    return _objectSpread(_objectSpread({}, designToolState), {}, {
      navbar_selection: "logo"
    });
  }

  if (action.type == 'texttool') {
    return _objectSpread(_objectSpread({}, designToolState), {}, {
      navbar_selection: "texttool"
    });
  }

  if (action.type == 'fonttool') {
    return _objectSpread(_objectSpread({}, designToolState), {}, {
      navbar_selection: "fonttool"
    });
  }

  if (action.type == 'effecttool') {
    return _objectSpread(_objectSpread({}, designToolState), {}, {
      navbar_selection: "effecttool"
    });
  }
};

/***/ })

};
//# sourceMappingURL=server.2436910ba691fddabaf1.hot-update.js.map