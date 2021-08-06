exports.id = 1;
exports.modules = {

/***/ "./src/components/Home/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Home/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-error-boundary */ "react-error-boundary");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_error_boundary__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ErrorFallacks_CategoryListFallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ErrorFallacks/CategoryListFallback */ "./src/ErrorFallacks/CategoryListFallback.tsx");
/* harmony import */ var _ErrorFallacks_TemplateListFallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ErrorFallacks/TemplateListFallback */ "./src/ErrorFallacks/TemplateListFallback.tsx");
/* harmony import */ var _routes_route_names__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../routes/route_names */ "./src/routes/route_names.tsx");
/* harmony import */ var _components_CategoryList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/CategoryList */ "./src/components/Home/components/CategoryList/index.tsx");
/* harmony import */ var _components_TemplateList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/TemplateList */ "./src/components/Home/components/TemplateList/index.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const navLinksList = ["categories", "templates"];

const Home = () => {
  const {
    0: selectedNavLink,
    1: setSelectedNavLink
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(navLinksList[0]);
  return __jsx("div", {
    className: "min-w-max",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "h-20 mb-5 flex flex-wrap justify-evenly content-center bg-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "text-xl text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "Home"), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: _routes_route_names__WEBPACK_IMPORTED_MODULE_5__["ROUTE_NAMES"].select_palette,
    className: "text-white font-semibold py-2 px-4 border border-white-500 rounded",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, "Create New Template")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-no-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      minHeight: "80vh"
    },
    className: "w-64 absolute sm:relative shadow flex-col justify-between flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "p-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, __jsx("ul", {
    className: "mt-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
    }
  }, __jsx("li", {
    onClick: () => setSelectedNavLink(navLinksList[0]),
    className: "flex w-full bg-gray300 justify-between hover:text-gray-900 cursor-pointer items-center mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "flex items-center  hover:bg-rightbackgroundcolor  w-full hover:rounded-lg border-0 rounded-sm  h-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: "text-gray900 font-medium pl-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 41
    }
  }, "Categories"))), __jsx("li", {
    onClick: () => setSelectedNavLink(navLinksList[1]),
    className: "flex w-full bg-gray300 justify-between text-gray900 hover:text-gray-900 cursor-pointer items-center mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "flex items-center  hover:bg-rightbackgroundcolor  w-full hover:rounded-lg border-0 rounded-sm h-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: "text-gray900 font-medium pl-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 41
    }
  }, "Templates")))))), __jsx("div", {
    className: "container mx-auto py-10 md:w-4/5 w-11/12 px-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "w-full h-full rounded border-dashed border-2 border-gray-300",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: selectedNavLink === navLinksList[0] ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }, __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_1__["ErrorBoundary"], {
    FallbackComponent: _ErrorFallacks_CategoryListFallback__WEBPACK_IMPORTED_MODULE_3__["default"],
    onReset: () => {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 33
    }
  }, __jsx(_components_CategoryList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 37
    }
  }))), __jsx("div", {
    className: selectedNavLink === navLinksList[1] ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }, __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_1__["ErrorBoundary"], {
    FallbackComponent: _ErrorFallacks_TemplateListFallback__WEBPACK_IMPORTED_MODULE_4__["default"],
    onReset: () => {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 33
    }
  }, __jsx(_components_TemplateList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 37
    }
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

};
//# sourceMappingURL=1.bfb8aa66d433f9ceaf61.hot-update.js.map