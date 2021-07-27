exports.id = "server";
exports.modules = {

/***/ "./build/assets.json":
/*!***************************!*\
  !*** ./build/assets.json ***!
  \***************************/
/*! exports provided: 0, 1, client, noentry, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"0\":{\"js\":[\"http://localhost:3001/static/js/0.chunk.js\"],\"map\":[\"http://localhost:3001/static/js/0.chunk.js.map\"],\"chunks\":[0]},\"1\":{\"js\":[\"http://localhost:3001/static/js/1.chunk.js\"],\"map\":[\"http://localhost:3001/static/js/1.chunk.js.map\"],\"chunks\":[1]},\"client\":{\"js\":[\"http://localhost:3001/static/js/client.js\"],\"map\":[\"http://localhost:3001/static/js/client.js.map\"],\"chunks\":[\"client\"]},\"noentry\":{}}");

/***/ }),

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NoSSR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoSSR */ "./src/NoSSR.tsx");
/* harmony import */ var _routes_route_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/route_names */ "./src/routes/route_names.tsx");
/* harmony import */ var _contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contexts/TemplateContext */ "./src/contexts/TemplateContext.tsx");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\App.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const DesignTool = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./components/DesignTool/index */ "./src/components/DesignTool/index.tsx")));
const SelectPalette = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./components/SelectPalette/index */ "./src/components/SelectPalette/index.tsx")));


const App = () => __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, __jsx(_NoSSR__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}, __jsx(_contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_4__["TemplateProvider"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 13
  }
}, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: _routes_route_names__WEBPACK_IMPORTED_MODULE_3__["ROUTE_NAMES"].select_palette,
  render: () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 51
      }
    }, "Loading ..."),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, __jsx(SelectPalette, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  })),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 17
  }
}), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: _routes_route_names__WEBPACK_IMPORTED_MODULE_3__["ROUTE_NAMES"].design_tool,
  render: () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 51
      }
    }, "Loading ..."),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, __jsx(DesignTool, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 29
    }
  })),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 17
  }
}))));

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
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\contexts\\TemplateContext.tsx";
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
    // background: {
    //     id: 'shapes_background',
    //     type: "rectangle",
    //     x: 0,
    //     y: 0,
    //     width: stageDimensions.width,
    //     height: stageDimensions.height,
    //     // fill: '#F0F0F0',
    //     fillLinearGradientStartPoint: { x: 0, y: 0 },
    //     fillLinearGradientEndPoint: { x: stageDimensions.width, y: stageDimensions.height },
    //     fillLinearGradientColorStops: [0, '#F0F0F0', 1, '#F0F0F0'],
    //     draggable: false,
    // },
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
TemplateContext.displayName = 'TemplateContext';

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
      lineNumber: 56,
      columnNumber: 9
    }
  }, children);
};



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);


let app = __webpack_require__(/*! ./server */ "./src/server.tsx").default;

if (true) {
  module.hot.accept(/*! ./server */ "./src/server.tsx", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (() => {
    console.log('🔁  HMR Reloading `./server`...');

    try {
      app = __webpack_require__(/*! ./server */ "./src/server.tsx").default;
    } catch (error) {
      console.error(error);
    }
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
  console.info('✅  Server-side HMR Enabled!');
}

console.log({
  potr: "3000"
});
const port =  true ? parseInt("3000") : undefined;
/* harmony default export */ __webpack_exports__["default"] = (express__WEBPACK_IMPORTED_MODULE_0___default()().use((req, res) => app.handle(req, res)).listen(port, () => {
  console.log(`> App started http://localhost:${port}`);
}));

/***/ }),

/***/ "./src/routes/route_names.tsx":
/*!************************************!*\
  !*** ./src/routes/route_names.tsx ***!
  \************************************/
/*! exports provided: ROUTE_NAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTE_NAMES", function() { return ROUTE_NAMES; });
const ROUTE_NAMES = {
  select_palette: "/",
  design_tool: "/tool"
};

/***/ }),

/***/ "./src/server.tsx":
/*!************************!*\
  !*** ./src/server.tsx ***!
  \************************/
/*! exports provided: renderApp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderApp", function() { return renderApp; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\server.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





let assets;

const syncLoadAssets = () => {
  assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");
};

syncLoadAssets();

const cssLinksFromAssets = (assets, entrypoint) => {
  return assets[entrypoint] ? assets[entrypoint].css ? assets[entrypoint].css.map(asset => `<link rel="stylesheet" href="${asset}">`).join('') : '' : '';
};

const jsScriptTagsFromAssets = (assets, entrypoint, extra = '') => {
  return assets[entrypoint] ? assets[entrypoint].js ? assets[entrypoint].js.map(asset => `<script src="${asset}"${extra}></script>`).join('') : '' : '';
};

const renderApp = (req, res) => {
  const context = {};
  const markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__["renderToString"])(__jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["StaticRouter"], {
    context: context,
    location: req.url,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  })));

  if (context.url) {
    return {
      redirect: context.url
    };
  } else {
    const html = // prettier-ignore
    `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${cssLinksFromAssets(assets, 'client')}
    </head>
    <body>
        <div id="root">${markup}</div>
        ${jsScriptTagsFromAssets(assets, 'client', ' defer crossorigin')}
    </body>
  </html>`;
    return {
      html
    };
  }
};
const server = express__WEBPACK_IMPORTED_MODULE_0___default()().disable('x-powered-by').use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static("D:\\dev\\cardclan-backend\\template-tool\\public")).get('/*', (req, res) => {
  const {
    html = '',
    redirect = false
  } = renderApp(req, res);

  if (redirect) {
    res.redirect(redirect);
  } else {
    res.send(html);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ }),

/***/ "./src/utils/defaults.ts":
/*!*******************************!*\
  !*** ./src/utils/defaults.ts ***!
  \*******************************/
/*! exports provided: stageDimensions, ORIGINAL_SVG, defaultImage, defaultSvg, defaultRect, defaultRoundedRect, defaultCircle, defaultPolygon, defaultTriangle, defaultTextBox, googleFontsList, fontSizeArray */
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
const stageDimensions = {
  width: 500,
  height: 600
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

/***/ }),

/***/ "@shrugsy/use-immer-state":
/*!*******************************************!*\
  !*** external "@shrugsy/use-immer-state" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shrugsy/use-immer-state");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-color":
/*!******************************!*\
  !*** external "react-color" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-color");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

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

/***/ "sweetalert":
/*!*****************************!*\
  !*** external "sweetalert" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sweetalert");

/***/ }),

/***/ "use-file-upload":
/*!**********************************!*\
  !*** external "use-file-upload" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("use-file-upload");

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
//# sourceMappingURL=server.c29c32ad88825106bcb4.hot-update.js.map