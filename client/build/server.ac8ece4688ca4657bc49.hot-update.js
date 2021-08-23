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
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var _NoSSR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoSSR */ "./src/NoSSR.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contexts/DesignTool/DesignToolContext */ "./src/contexts/DesignTool/DesignToolContext.tsx");
/* harmony import */ var _contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contexts/TemplateContext */ "./src/contexts/TemplateContext.tsx");
/* harmony import */ var _contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contexts/HeaderContext */ "./src/contexts/HeaderContext.tsx");
/* harmony import */ var _routes_Private__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/Private */ "./src/routes/Private/index.tsx");
/* harmony import */ var _routes_Public__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/Public */ "./src/routes/Public/index.tsx");
/* harmony import */ var _layouts_LoggedOutLayout_Registration_Signup_Signup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/LoggedOutLayout/Registration/Signup/Signup */ "./src/layouts/LoggedOutLayout/Registration/Signup/Signup.tsx");
/* harmony import */ var _layouts_LoggedOutLayout_Registration_Registration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/LoggedOutLayout/Registration/Registration */ "./src/layouts/LoggedOutLayout/Registration/Registration.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\App.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const Dashboard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./layouts/LoggedInLayout/Dashboard/Dashboard */ "./src/layouts/LoggedInLayout/Dashboard/Dashboard.tsx")));
const CreateCardLayout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./layouts/LoggedInLayout/CreateCardLayout/CreateCardLayout */ "./src/layouts/LoggedInLayout/CreateCardLayout/CreateCardLayout.tsx")));

const App = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_NoSSR__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 37
      }
    }, "Loading ..."),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx(_contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_5__["DesignToolProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx(_contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_6__["TemplateProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Routes"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  }, __jsx(_routes_Public__WEBPACK_IMPORTED_MODULE_9__["default"], {
    path: "/signin",
    element: _layouts_LoggedOutLayout_Registration_Registration__WEBPACK_IMPORTED_MODULE_11__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 33
    }
  }), __jsx(_routes_Public__WEBPACK_IMPORTED_MODULE_9__["default"], {
    path: "/signup",
    element: _layouts_LoggedOutLayout_Registration_Signup_Signup__WEBPACK_IMPORTED_MODULE_10__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 33
    }
  }), __jsx(_routes_Private__WEBPACK_IMPORTED_MODULE_8__["default"], {
    path: "/",
    element: Dashboard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 33
    }
  }), __jsx(_contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_7__["HeaderProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 33
    }
  }, __jsx(_routes_Private__WEBPACK_IMPORTED_MODULE_8__["default"], {
    path: "/createcard",
    element: CreateCardLayout,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 37
    }
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/routes/Private/index.tsx":
/*!**************************************!*\
  !*** ./src/routes/Private/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validation */ "./src/routes/validation.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\routes\\Private\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PrivateRoute = ({
  element: RouteComponent,
  path
}) => {
  const condition = Object(_validation__WEBPACK_IMPORTED_MODULE_2__["validation"])();
  console.log(condition);
  return condition ? __jsx(RouteComponent, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 24
    }
  }) : __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Navigate"], {
    to: "/signin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 45
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PrivateRoute);

/***/ })

};
//# sourceMappingURL=server.ac8ece4688ca4657bc49.hot-update.js.map