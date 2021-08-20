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





const DesignTool = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! ./components/DesignTool/index */ "./src/components/DesignTool/index.tsx")));
const SelectPalette = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./components/SelectPalette/index */ "./src/components/SelectPalette/index.tsx")));
const Home = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! ./components/Home */ "./src/components/Home/index.tsx")));


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
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/razzle/config/babel-loader/razzle-babel-loader.js):\nSyntaxError: D:\\dev\\cardclan-backend\\template-tool\\src\\contexts\\TemplateContext.tsx: Unexpected token (39:43)\n\n\u001b[0m \u001b[90m 37 |\u001b[39m \u001b[36mconst\u001b[39m \u001b[33mTemplateProvider\u001b[39m \u001b[33m=\u001b[39m ({ children }) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 38 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 39 |\u001b[39m     \u001b[36mconst\u001b[39m { templateData\u001b[33m,\u001b[39m setTemplateData\u001b[33m,\u001b[39m { goForward\u001b[33m,\u001b[39m goBack\u001b[33m,\u001b[39m stepNum\u001b[33m,\u001b[39m history }\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                            \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 40 |\u001b[39m } \u001b[33m=\u001b[39m useImmerState(\u001b[33mINITIAL_STATE\u001b[39m)\u001b[0m\n\u001b[0m \u001b[90m 41 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 42 |\u001b[39m \u001b[36mreturn\u001b[39m (\u001b[0m\n    at Object._raise (D:\\dev\\cardclan-backend\\template-tool\\node_modules\\@babel\\parser\\lib\\index.js:798:17)\n    at Object.raiseWithData (D:\\dev\\cardclan-backend\\template-tool\\node_modules\\@babel\\parser\\lib\\index.js:791:17)\n    at Object.raise (D:\\dev\\cardclan-backend\\template-tool\\node_modules\\@babel\\parser\\lib\\index.js:752:17)\n    at Object.unexpected (D:\\dev\\cardclan-backend\\template-tool\\node_modules\\@babel\\parser\\lib\\index.js:3257:16)\n    at Object.parseIdentifierName (D:\\dev\\cardclan-backend\\template-tool\\node_modules\\@babel\\parser\\lib\\index.js:12362:18)\n    at Object.parseIdentifier (D:\\dev\\cardclan-backend\\template-tool\\node_modules\\@babel\\parser\\lib\\index.js:12340:23)\n    at Object.parseMaybePrivateName (D:\\dev\\cardclan-backend\\template-tool\\node_modules\\@babel\\parser\\lib\\index.js:11630:19)\n    at Object.parsePropertyName (D:\\dev\\cardclan-backend\\template-tool\\node_modules\\@babel\\parser\\lib\\index.js:12154:151)\n    at Object.parsePropertyDefinition (D:\\dev\\cardclan-backend\\template-tool\\node_modules\\@babel\\parser\\lib\\index.js:12037:22)\n    at Object.parseObjectLike (D:\\dev\\cardclan-backend\\template-tool\\node_modules\\@babel\\parser\\lib\\index.js:11953:25)\n    at Object.parseBindingAtom (D:\\dev\\cardclan-backend\\template-tool\\node_modules\\@babel\\parser\\lib\\index.js:10517:21)\n    at Object.parseBindingAtom (D:\\dev\\cardclan-backend\\template-tool\\node_modules\\@babel\\parser\\lib\\index.js:9681:22)\n    at Object.parseVarId (D:\\dev\\cardclan-backend\\template-tool\\node_modules\\@babel\\parser\\lib\\index.js:13487:20)\n    at Object.parseVarId (D:\\dev\\cardclan-backend\\template-tool\\node_modules\\@babel\\parser\\lib\\index.js:9458:11)\n    at Object.parseVar (D:\\dev\\cardclan-backend\\template-tool\\node_modules\\@babel\\parser\\lib\\index.js:13463:12)\n    at Object.parseVarStatement (D:\\dev\\cardclan-backend\\template-tool\\node_modules\\@babel\\parser\\lib\\index.js:13280:10)");

/***/ }),

/***/ "./src/utils/defaults.ts":
false

};
//# sourceMappingURL=server.bad94a3a8c433cd75d89.hot-update.js.map