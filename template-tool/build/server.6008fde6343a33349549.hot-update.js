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
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Home */ "./src/components/Home/index.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\App.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const DesignTool = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./components/DesignTool/index */ "./src/components/DesignTool/index.tsx")));
const SelectPalette = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./components/SelectPalette/index */ "./src/components/SelectPalette/index.tsx")));



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
  }, __jsx(_components_Home__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
}))));

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "react-query":
false

};
//# sourceMappingURL=server.6008fde6343a33349549.hot-update.js.map