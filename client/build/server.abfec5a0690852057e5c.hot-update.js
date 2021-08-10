exports.id = "server";
exports.modules = {

/***/ "./src/contexts/DesignToolContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/DesignToolContext.tsx ***!
  \********************************************/
/*! exports provided: INITIAL_STATE, DesignToolContext, DesignToolProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignToolContext", function() { return DesignToolContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignToolProvider", function() { return DesignToolProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shrugsy/use-immer-state */ "@shrugsy/use-immer-state");
/* harmony import */ var _shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _DesignToolReducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DesignToolReducers */ "./src/contexts/DesignToolReducers.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\contexts\\DesignToolContext.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const INITIAL_STATE = {
  dimensions: {
    width: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["stageDimensions"].width,
    height: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["stageDimensions"].height
  },
  labels: [],
  elements: [{
    id: 'shapes_background',
    type: "rectangle",
    x: 0,
    y: 0,
    width: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["stageDimensions"].width,
    height: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["stageDimensions"].height,
    // fill: '#F0F0F0',
    fillLinearGradientStartPoint: {
      x: 0,
      y: 0
    },
    fillLinearGradientEndPoint: {
      x: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["stageDimensions"].width,
      y: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["stageDimensions"].height
    },
    fillLinearGradientColorStops: [0, '#ffffff', 1, '#ffffff'],
    draggable: false
  }]
};
const DesignToolContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
const DesignToolProvider = ({
  children
}) => {
  const {
    0: designToolnavigator,
    1: setDesignToolnavigator
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('element');
  const {
    0: designHeadernavigator,
    1: setDesignHeadernavigator
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [cardData, setCardData, {
    goForward,
    goBack,
    stepNum,
    history
  }] = Object(_shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_1__["useImmerState"])(INITIAL_STATE);
  const {
    0: selectedId,
    1: setSelectedId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: designToolState,
    1: designToolDispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_DesignToolReducers__WEBPACK_IMPORTED_MODULE_3__["designToolReducer"], _DesignToolReducers__WEBPACK_IMPORTED_MODULE_3__["designToolInit"]);
  console.log({
    designToolState
  });
  return __jsx(DesignToolContext.Provider, {
    value: {
      designToolnavigator,
      setDesignToolnavigator,
      designHeadernavigator,
      setDesignHeadernavigator,
      selectedId,
      setSelectedId,
      cardData,
      setCardData,
      cardHistory: {
        goForward,
        goBack,
        stepNum,
        history
      },
      designToolState,
      designToolDispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, children);
};

/***/ }),

/***/ "./src/contexts/DesignToolReducer.ts":
false,

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
//# sourceMappingURL=server.abfec5a0690852057e5c.hot-update.js.map