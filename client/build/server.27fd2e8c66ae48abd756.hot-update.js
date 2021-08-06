exports.id = "server";
exports.modules = {

/***/ "./src/contexts/TemplateContext.tsx":
/*!******************************************!*\
  !*** ./src/contexts/TemplateContext.tsx ***!
  \******************************************/
/*! exports provided: INITIAL_STATE, TemplateContext, TemplateProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateContext", function() { return TemplateContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateProvider", function() { return TemplateProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shrugsy/use-immer-state */ "@shrugsy/use-immer-state");
/* harmony import */ var _shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/defaults */ "./src/utils/defaults.ts");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\contexts\\TemplateContext.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const INITIAL_STATE = {
  dimensions: {
    width: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["stageDimensions"].width,
    height: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["stageDimensions"].height
  },
  tags: [],
  palette: [{
    name: "primary",
    color: "#ff0000"
  }, {
    name: "secondary",
    color: "#00ff00"
  }, {
    name: "tertiary",
    color: "#0000ff"
  }],
  variations: [{
    name: "untitled",
    face: "",
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
      fillLinearGradientColorStops: [0, '#60affa', 1, '#60affa'],
      draggable: false
    }, {
      name: "object",
      x: 150,
      y: 150,
      width: 100,
      stroke: "#000000",
      strokeWidth: 4,
      height: 100,
      fill: '#FF0000',
      draggable: true,
      type: "rectangle"
    }, {
      name: "object",
      x: 150,
      y: 150,
      width: 100,
      stroke: "#000000",
      strokeWidth: 4,
      height: 100,
      fill: '#FF0000',
      draggable: true,
      type: "rectangle"
    }, {
      name: "object",
      x: 150,
      y: 150,
      width: 100,
      stroke: "#000000",
      strokeWidth: 4,
      height: 100,
      fill: '#FF0000',
      draggable: true,
      type: "rectangle"
    }, {
      name: "object",
      x: 150,
      y: 150,
      width: 100,
      stroke: "#000000",
      strokeWidth: 4,
      height: 100,
      fill: '#FF0000',
      draggable: true,
      type: "rectangle"
    }, {
      name: "object",
      text: 'New text',
      x: 150,
      y: 200,
      fontSize: 20,
      draggable: true,
      width: 200,
      type: "text"
    }]
  }]
};
const TemplateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
const TemplateProvider = ({
  children
}) => {
  const [templateData, setTemplateData, {
    goForward,
    goBack,
    stepNum,
    history
  }] = Object(_shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_1__["useImmerState"])(INITIAL_STATE);
  return __jsx(TemplateContext.Provider, {
    value: [templateData, setTemplateData, {
      goForward,
      goBack,
      stepNum,
      history
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, children);
};

/***/ })

};
//# sourceMappingURL=server.27fd2e8c66ae48abd756.hot-update.js.map