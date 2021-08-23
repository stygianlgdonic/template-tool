exports.id = "server";
exports.modules = {

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
const SelectPalette = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./components/SelectPalette/index */ "./src/components/SelectPalette/index.tsx")));
const Home = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./components/Home */ "./src/components/Home/index.tsx")));


const App = () => __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}, __jsx(_NoSSR__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}, __jsx(_contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_4__["TemplateProvider"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 13
  }
}, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: _routes_route_names__WEBPACK_IMPORTED_MODULE_3__["ROUTE_NAMES"].home,
  render: () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 51
      }
    }, "Loading ..."),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, __jsx(Home, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }
  })),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 17
  }
}), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: _routes_route_names__WEBPACK_IMPORTED_MODULE_3__["ROUTE_NAMES"].select_palette,
  render: () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 51
      }
    }, "Loading ..."),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, __jsx(SelectPalette, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  })),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
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
        lineNumber: 37,
        columnNumber: 51
      }
    }, "Loading ..."),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, __jsx(DesignTool, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  })),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 17
  }
}), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: _routes_route_names__WEBPACK_IMPORTED_MODULE_3__["ROUTE_NAMES"].design_tool_noID,
  render: () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 51
      }
    }, "Loading ..."),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, __jsx(DesignTool, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  })),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 17
  }
}))));

/* harmony default export */ __webpack_exports__["default"] = (App);

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
      fillLinearGradientColorStops: [0, '#FFFFFF', 1, '#FFFFFF'],
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
      lineNumber: 42,
      columnNumber: 9
    }
  }, children);
};



/***/ })

};
//# sourceMappingURL=server.1a5d4967d098f22fe0ad.hot-update.js.map