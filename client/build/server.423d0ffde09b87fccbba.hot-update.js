exports.id = "server";
exports.modules = {

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@tailwind base;\n\n@tailwind components;\n\n@tailwind utilities;\n", "",{"version":3,"sources":["webpack://./node_modules/tailwindcss/tailwind.css"],"names":[],"mappings":"AAAA,cAAc;;AAEd,oBAAoB;;AAEpB,mBAAmB","sourcesContent":["@tailwind base;\n\n@tailwind components;\n\n@tailwind utilities;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;", "",{"version":3,"sources":["webpack://./src/App.css"],"names":[],"mappings":"AAAA,cAAc;AACd,oBAAoB;AACpB,mBAAmB","sourcesContent":["@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var _NoSSR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoSSR */ "./src/NoSSR.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contexts/DesignToolContext */ "./src/contexts/DesignToolContext.tsx");
/* harmony import */ var _contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contexts/TemplateContext */ "./src/contexts/TemplateContext.tsx");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\App.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // const Dashboard = React.lazy(() => import('./Screens/Dashboard/Dashboard'));



const Registration = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./Screens/Registration/Registration */ "./src/Screens/Registration/Registration.tsx")));
const Dashboard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./Screens/Dashboard/Dashboard */ "./src/Screens/Dashboard/Dashboard.tsx")));
const CreateCardLayout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./../src/Screens/CreateCardLayout/CreateCardLayout */ "./src/Screens/CreateCardLayout/CreateCardLayout.tsx")));

const App = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 29
      }
    }, "Loading ..."),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(_NoSSR__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Routes"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/",
    element: __jsx(Dashboard, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 46
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }), __jsx(_contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_5__["DesignToolProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, __jsx(_contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_6__["TemplateProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "createcard",
    element: __jsx(CreateCardLayout, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 63
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }
  }))), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/signin",
    element: __jsx(Registration, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 52
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/NoSSR.tsx":
/*!***********************!*\
  !*** ./src/NoSSR.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const NoSSR = ({
  children
}) => {
  const {
    0: isClient,
    1: setIsClient
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setIsClient(true);
  }, []);
  return isClient ? children : null;
};

/* harmony default export */ __webpack_exports__["default"] = (NoSSR);

/***/ }),

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
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\contexts\\DesignToolContext.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const INITIAL_STATE = {};
const DesignToolContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
const DesignToolProvider = ({
  children
}) => {
  const {
    0: designToolnavigator,
    1: setDesignToolnavigator
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('element');
  return __jsx(DesignToolContext.Provider, {
    value: [designToolnavigator, setDesignToolnavigator],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, children);
};

/***/ }),

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
    textBoxes: [],
    images: [],
    svgs: [],
    shapes: [{
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
      fillLinearGradientColorStops: [0, '#F0F0F0', 1, '#F0F0F0'],
      draggable: false
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
      lineNumber: 42,
      columnNumber: 9
    }
  }, children);
};

/***/ }),

/***/ "./src/utils/defaults.ts":
/*!*******************************!*\
  !*** ./src/utils/defaults.ts ***!
  \*******************************/
/*! exports provided: stageDimensions, ORIGINAL_SVG, defaultImage, defaultSvg, defaultRect, defaultRoundedRect, defaultCircle, defaultPolygon, defaultTriangle, defaultTextBox, googleFontsList, fontSizeArray, ORIGINAL_SVG_mailicon, ORIGINAL_SVG_imageicon, ORIGINAL_SVG_eyeicon, ORIGINAL_SVG_impressionicon, ORIGINAL_SVG_arrow_upicon, ORIGINAL_SVG_editicon, ORIGINAL_SVG_attachementicon, ORIGINAL_SVG_deleteicon, ORIGINAL_SVG_updownicon, ORIGINAL_SVG_bluedoticon, ORIGINAL_SVG_greendoticon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stageDimensions", function() { return stageDimensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_SVG", function() { return ORIGINAL_SVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultImage", function() { return defaultImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSvg", function() { return defaultSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRect", function() { return defaultRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRoundedRect", function() { return defaultRoundedRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCircle", function() { return defaultCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPolygon", function() { return defaultPolygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTriangle", function() { return defaultTriangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTextBox", function() { return defaultTextBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleFontsList", function() { return googleFontsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSizeArray", function() { return fontSizeArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_SVG_mailicon", function() { return ORIGINAL_SVG_mailicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_SVG_imageicon", function() { return ORIGINAL_SVG_imageicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_SVG_eyeicon", function() { return ORIGINAL_SVG_eyeicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_SVG_impressionicon", function() { return ORIGINAL_SVG_impressionicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_SVG_arrow_upicon", function() { return ORIGINAL_SVG_arrow_upicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_SVG_editicon", function() { return ORIGINAL_SVG_editicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_SVG_attachementicon", function() { return ORIGINAL_SVG_attachementicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_SVG_deleteicon", function() { return ORIGINAL_SVG_deleteicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_SVG_updownicon", function() { return ORIGINAL_SVG_updownicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_SVG_bluedoticon", function() { return ORIGINAL_SVG_bluedoticon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGINAL_SVG_greendoticon", function() { return ORIGINAL_SVG_greendoticon; });
const stageDimensions = {
  width: 500,
  height: 500
};
const ORIGINAL_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g data-name="discount(Splash tag)"><path fill="#db5669" d="M45.93,26.39a3.2,3.2,0,0,0-.76,3.79,3.21,3.21,0,0,1-1.83,4.42,3.19,3.19,0,0,0-2.15,3c0,.06,0,.36,0,.39a3.21,3.21,0,0,1-3.4,3.2,3.19,3.19,0,0,0-3.21,2.14,3.2,3.2,0,0,1-4.42,1.83,3.2,3.2,0,0,0-3.79.76,3.2,3.2,0,0,1-4.78,0,3.2,3.2,0,0,0-3.79-.76,3.2,3.2,0,0,1-4.42-1.83,3.18,3.18,0,0,0-3.21-2.14A3.2,3.2,0,0,1,6.8,37.81,3.19,3.19,0,0,0,4.66,34.6a3.2,3.2,0,0,1-1.83-4.42,3.2,3.2,0,0,0-.76-3.79,3.2,3.2,0,0,1,0-4.78,3.2,3.2,0,0,0,.76-3.79A3.2,3.2,0,0,1,4.66,13.4,3.18,3.18,0,0,0,6.8,10.19,3.2,3.2,0,0,1,10.1,6.8h.29a3.19,3.19,0,0,0,3-2.15,3.21,3.21,0,0,1,4.42-1.83,3.2,3.2,0,0,0,3.79-.76,3.2,3.2,0,0,1,4.78,0,3.21,3.21,0,0,0,3.79.76A3.2,3.2,0,0,1,34.6,4.66a3.19,3.19,0,0,0,3,2.15l.39,0a3.21,3.21,0,0,1,3.2,3.4,3.19,3.19,0,0,0,2.14,3.21,3.19,3.19,0,0,1,2.15,3c0,1.29-.64,1.52-.64,2.79C44.85,21.68,47,21.53,47,24A3.19,3.19,0,0,1,45.93,26.39Z"/><path fill="#f26674" d="M45.93,26.39a3.2,3.2,0,0,0-.76,3.79,3.12,3.12,0,0,1,.18,2.3c0,.1-.76,1.28-.82,1.38a3.08,3.08,0,0,1-1.19.74,3.19,3.19,0,0,0-2.15,3s0,.14,0,.29C27.32,51.18,4,41.37,4,22A21.9,21.9,0,0,1,10.1,6.8a3.2,3.2,0,0,0,3.3-2.14c.38-1.13,1-1.39,2.11-2a2.89,2.89,0,0,1,.91-.14c1.29,0,1.52.64,2.79.64C21.68,3.15,21.53,1,24,1a3.19,3.19,0,0,1,2.39,1.07,3.21,3.21,0,0,0,3.79.76A3.2,3.2,0,0,1,34.6,4.66,3.18,3.18,0,0,0,37.81,6.8a3.2,3.2,0,0,1,3.39,3.39,3.19,3.19,0,0,0,2.14,3.21,3.2,3.2,0,0,1,1.83,4.42,3.2,3.2,0,0,0,.76,3.79A3.2,3.2,0,0,1,45.93,26.39Z"/><path fill="#c4455e" d="M41,24A17,17,0,0,1,24,41C8.17,41,1,21.21,13,11,23.87,1.82,41,9.36,41,24Z"/><path fill="#db5669" d="M41,24a16.91,16.91,0,0,1-4,11,16.91,16.91,0,0,1-11,4C11.38,39,3.81,21.88,13,11,23.87,1.82,41,9.36,41,24Z"/><path fill="#ffde76" d="M16 33a1 1 0 0 1-.71-1.71l16-16a1 1 0 0 1 1.42 1.42C15.31 34.1 16.59 33 16 33zM19 22a4 4 0 1 0-4-4A4 4 0 0 0 19 22zm0-6a2 2 0 1 1-2 2A2 2 0 0 1 19 16zM29 26a4 4 0 1 0 4 4A4 4 0 0 0 29 26zm0 6a2 2 0 1 1 2-2A2 2 0 0 1 29 32z"/></g></svg>`;
const defaultImage = {
  name: "object",
  x: 200,
  y: 250,
  width: 200,
  height: 200,
  draggable: true,
  type: "image"
};
const defaultSvg = {
  name: "object",
  colorMap: {},
  type: "svg",
  x: 100,
  y: 200,
  width: 100,
  height: 100,
  draggable: true
};
const defaultRect = {
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
};
const defaultRoundedRect = {
  name: "object",
  x: 150,
  y: 250,
  width: 100,
  stroke: "#000000",
  strokeWidth: 4,
  height: 100,
  cornerRadius: 10,
  fill: '#FF0000',
  draggable: true,
  type: "rectangle"
};
const defaultCircle = {
  name: "object",
  x: 200,
  y: 100,
  radius: 50,
  stroke: "#000000",
  strokeWidth: 4,
  fill: '#FF0000',
  draggable: true,
  type: "circle"
};
const defaultPolygon = {
  name: "object",
  x: 100,
  y: 150,
  sides: 6,
  stroke: "#000000",
  strokeWidth: 4,
  radius: 70,
  fill: '#FF0000',
  type: "polygon"
};
const defaultTriangle = {
  name: "object",
  x: 20,
  y: 200,
  stroke: "#000000",
  strokeWidth: 4,
  fill: "#FF0000",
  points: [0, 100, 50, 0, 100, 100],
  tension: 0,
  closed: true,
  type: "line"
};
const defaultTextBox = {
  name: "object",
  text: 'New text',
  x: 150,
  y: 200,
  fontSize: 20,
  draggable: true,
  width: 200,
  type: "text"
};
const googleFontsList = ['Montserrat', 'Comfortaa', 'Euphoria Script', 'Josefin Sans', 'Oswald', 'Alfa Slab One', 'Bangers', 'Caveat', 'DM Sans', 'East Sea Dokdo', 'Homemade Apple', 'Kristi', 'Lobster Two', 'Maven Pro', 'Monoton', 'Playfair Display', 'Raleway', 'Roboto Slab', 'Shadows Into Light', 'Swanky and Moo Moo'];
const fontSizeArray = [{
  name: "Header",
  size: 40
}, {
  name: "Sub header",
  size: 25
}, {
  name: "body text",
  size: 15
}];
const ORIGINAL_SVG_mailicon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 13.4088V6.30415C1 5.77211 1.25994 5.27527 1.69269 4.98015L7.13713 1.26725C7.65964 0.910917 8.34036 0.910917 8.86287 1.26725L14.3073 4.98015C14.7401 5.27527 15 5.77211 15 6.30415V13.4088M1 13.4088C1 14.2876 1.69645 15 2.55556 15H13.4444C14.3036 15 15 14.2876 15 13.4088M1 13.4088L6.25 9.82846M15 13.4088L9.75 9.82846M1 6.24816L6.25 9.82846M15 6.24816L9.75 9.82846M9.75 9.82846L8.86287 10.4334C8.34036 10.7898 7.65964 10.7898 7.13713 10.4334L6.25 9.82846" stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const ORIGINAL_SVG_imageicon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 13L5.58579 8.41421C6.36683 7.63317 7.63316 7.63316 8.41421 8.41421L13 13M11 11L12.5858 9.41421C13.3668 8.63317 14.6332 8.63316 15.4142 9.41421L17 11M11 5H11.01M3 17H15C16.1046 17 17 16.1046 17 15V3C17 1.89543 16.1046 1 15 1H3C1.89543 1 1 1.89543 1 3V15C1 16.1046 1.89543 17 3 17Z" stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const ORIGINAL_SVG_eyeicon = `<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.54325 6C9.54325 7.18347 8.62832 8.14286 7.49969 8.14286C6.37107 8.14286 5.45614 7.18347 5.45614 6C5.45614 4.81653 6.37107 3.85714 7.49969 3.85714C8.62832 3.85714 9.54325 4.81653 9.54325 6Z" stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 5.99998C1.86802 3.10205 4.4499 1 7.49999 1C10.5501 1 13.132 3.10208 14 6.00003C13.132 8.89795 10.5501 11 7.50001 11C4.4499 11 1.868 8.89792 1 5.99998Z" stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const ORIGINAL_SVG_impressionicon = `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3404 10.3404L8.87657 14L5.9489 5.94887L14 8.87655L10.3404 10.3404ZM10.3404 10.3404L14 14M4.62283 1L5.19114 3.12094M3.12094 5.19112L1 4.62282M9.57168 2.32607L8.01905 3.87871M3.87876 8.01901L2.32613 9.57165" stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const ORIGINAL_SVG_arrow_upicon = `<svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.293153 5.70679C0.105447 5.51926 0 5.26495 0 4.99979C0 4.73462 0.105447 4.48031 0.293153 4.29279L4.29816 0.292787C4.48592 0.105316 4.74055 0 5.00604 0C5.27154 0 5.52617 0.105316 5.71393 0.292787L9.71894 4.29279C9.90132 4.48139 10.0022 4.73399 9.99996 4.99619C9.99768 5.25838 9.89238 5.5092 9.70674 5.6946C9.5211 5.88001 9.26997 5.98518 9.00745 5.98746C8.74492 5.98974 8.49201 5.88894 8.30317 5.70679L6.0073 3.41379L6.0073 10.9998C6.0073 11.265 5.90181 11.5194 5.71404 11.7069C5.52627 11.8944 5.27159 11.9998 5.00604 11.9998C4.7405 11.9998 4.48582 11.8944 4.29805 11.7069C4.11028 11.5194 4.00479 11.265 4.00479 10.9998L4.00479 3.41379L1.70892 5.70679C1.52116 5.89426 1.26653 5.99957 1.00104 5.99957C0.735542 5.99957 0.480915 5.89426 0.293153 5.70679Z" fill="#6366F1"/>
</svg>
`;
const ORIGINAL_SVG_editicon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.58824 2.88236H2.88235C1.84276 2.88236 1 3.72511 1 4.76471V15.1176C1 16.1572 1.84276 17 2.88235 17H13.2353C14.2749 17 15.1176 16.1572 15.1176 15.1176V10.4118M13.7866 1.55133C14.5217 0.816224 15.7136 0.816224 16.4487 1.55133C17.1838 2.28643 17.1838 3.47827 16.4487 4.21338L8.36793 12.2941H5.70588L5.70588 9.63207L13.7866 1.55133Z" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const ORIGINAL_SVG_attachementicon = `<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.156 4.55556L5.1689 10.4096C4.45885 11.1039 4.45885 12.2295 5.1689 12.9237C5.87894 13.618 7.03015 13.618 7.7402 12.9237L13.5713 7.06971C14.9914 5.68118 14.9914 3.42993 13.5713 2.0414C12.1512 0.652867 9.84879 0.652867 8.4287 2.0414L2.5976 7.89543C0.467467 9.97823 0.467467 13.3551 2.5976 15.4379C4.72773 17.5207 8.18136 17.5207 10.3115 15.4379L16 9.88889" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const ORIGINAL_SVG_deleteicon = `<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.125 4.55556L13.3661 15.3489C13.3007 16.2792 12.5387 17 11.6205 17H4.37946C3.46134 17 2.69932 16.2792 2.63391 15.3489L1.875 4.55556M6.25 8.11111V13.4444M9.75 8.11111V13.4444M10.625 4.55556V1.88889C10.625 1.39797 10.2332 1 9.75 1H6.25C5.76675 1 5.375 1.39797 5.375 1.88889V4.55556M1 4.55556H15" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const ORIGINAL_SVG_updownicon = `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 0C4.26522 5.96046e-08 4.51957 0.105357 4.70711 0.292893L7.70711 3.29289C8.09763 3.68342 8.09763 4.31658 7.70711 4.70711C7.31658 5.09763 6.68342 5.09763 6.29289 4.70711L4 2.41421L1.70711 4.70711C1.31658 5.09763 0.683417 5.09763 0.292893 4.70711C-0.0976311 4.31658 -0.097631 3.68342 0.292893 3.29289L3.29289 0.292893C3.48043 0.105357 3.73478 0 4 0ZM0.292893 9.29289C0.683417 8.90237 1.31658 8.90237 1.70711 9.29289L4 11.5858L6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289C8.09763 9.68342 8.09763 10.3166 7.70711 10.7071L4.70711 13.7071C4.31658 14.0976 3.68342 14.0976 3.29289 13.7071L0.292893 10.7071C-0.0976311 10.3166 -0.0976311 9.68342 0.292893 9.29289Z" fill="#9CA3AF"/>
</svg>`;
const ORIGINAL_SVG_bluedoticon = `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5.5" cy="5.5" r="5.5" fill="#4F46E5"/>
</svg>
`;
const ORIGINAL_SVG_greendoticon = `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5.5" cy="5.5" r="5.5" fill="#10B981"/>
</svg>
`;

/***/ }),

/***/ "@heroicons/react/outline":
/*!*******************************************!*\
  !*** external "@heroicons/react/outline" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ "@heroicons/react/solid":
/*!*****************************************!*\
  !*** external "@heroicons/react/solid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ "@shrugsy/use-immer-state":
/*!*******************************************!*\
  !*** external "@shrugsy/use-immer-state" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shrugsy/use-immer-state");

/***/ }),

/***/ "react-konva":
/*!******************************!*\
  !*** external "react-konva" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-konva");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "use-image":
/*!****************************!*\
  !*** external "use-image" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("use-image");

/***/ }),

/***/ "webfontloader":
/*!********************************!*\
  !*** external "webfontloader" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webfontloader");

/***/ })

};
//# sourceMappingURL=server.423d0ffde09b87fccbba.hot-update.js.map