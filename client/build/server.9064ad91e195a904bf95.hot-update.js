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
/* harmony import */ var _contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contexts/DesignToolContext */ "./src/contexts/DesignToolContext.tsx");
/* harmony import */ var _contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contexts/TemplateContext */ "./src/contexts/TemplateContext.tsx");
/* harmony import */ var _contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contexts/HeaderContext */ "./src/contexts/HeaderContext.tsx");
/* harmony import */ var _routes_Private__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/Private */ "./src/routes/Private/index.tsx");
/* harmony import */ var _routes_Public__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/Public */ "./src/routes/Public/index.tsx");
/* harmony import */ var _layouts_LoggedOutLayout_Registration_Signup_Signup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/LoggedOutLayout/Registration/Signup/Signup */ "./src/layouts/LoggedOutLayout/Registration/Signup/Signup.tsx");
/* harmony import */ var _layouts_LoggedOutLayout_Registration_Registration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/LoggedOutLayout/Registration/Registration */ "./src/layouts/LoggedOutLayout/Registration/Registration.tsx");
var _jsxFileName = "D:\\Hyper Engage Backend\\cardclan-backend\\client\\src\\App.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // const Dashboard = React.lazy(() => import('./Screens/Dashboard/Dashboard'));








const Dashboard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./layouts/LoggedInLayout/Dashboard/Dashboard */ "./src/layouts/LoggedInLayout/Dashboard/Dashboard.tsx")));
const CreateCardLayout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./layouts/LoggedInLayout/CreateCardLayout/CreateCardLayout */ "./src/layouts/LoggedInLayout/CreateCardLayout/CreateCardLayout.tsx")));

const App = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_NoSSR__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 37
      }
    }, "Loading ..."),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx(_contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_5__["DesignToolProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx(_contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_6__["TemplateProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Routes"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  }, __jsx(_routes_Public__WEBPACK_IMPORTED_MODULE_9__["default"], {
    path: "/signin",
    element: _layouts_LoggedOutLayout_Registration_Registration__WEBPACK_IMPORTED_MODULE_11__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 33
    }
  }), __jsx(_routes_Public__WEBPACK_IMPORTED_MODULE_9__["default"], {
    path: "/signup",
    element: _layouts_LoggedOutLayout_Registration_Signup_Signup__WEBPACK_IMPORTED_MODULE_10__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 33
    }
  }), __jsx(_routes_Private__WEBPACK_IMPORTED_MODULE_8__["default"], {
    path: "/",
    element: Dashboard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 33
    }
  }), __jsx(_contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_7__["HeaderProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  }, __jsx(_routes_Private__WEBPACK_IMPORTED_MODULE_8__["default"], {
    path: "/createcard",
    element: CreateCardLayout,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 37
    }
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/routes/Public/index.tsx":
/*!*************************************!*\
  !*** ./src/routes/Public/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validation */ "./src/routes/validation.ts");
var _jsxFileName = "D:\\Hyper Engage Backend\\cardclan-backend\\client\\src\\routes\\Public\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PublicRoute = ({
  element: RouteComponent,
  path
}) => {
  const condition = Object(_validation__WEBPACK_IMPORTED_MODULE_2__["validation"])();
  console.log(condition);
  return !condition ? __jsx(RouteComponent, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 25
    }
  }) : __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Navigate"], {
    to: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 46
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PublicRoute);

/***/ }),

/***/ "./src/routes/validation.ts":
/*!**********************************!*\
  !*** ./src/routes/validation.ts ***!
  \**********************************/
/*! exports provided: validation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validation", function() { return validation; });
const validation = () => {
  if (localStorage.getItem("Token")) {
    return true;
  }

  return false; // try {
  //     const res = await fetch("https://hyper-engage-staging.herokuapp.com/signup",
  //         {
  //             // credentials: "same-origin",
  //             // mode: 'cors'
  //             headers: {
  //                 "credentials": "include",
  //                 'Access-Control-Allow-Origin': '*',
  //                 'Accept': 'application/json',
  //                 'Content-Type': 'application/json',
  //                 'Access-Control-Allow-Credentials': "true",
  //             },
  //             method: "POST",
  //             body: JSON.stringify({ secret_token: localStorage.getItem("Token") })
  //         })
  //     console.log({ res })
  //     return (res.json())
  // }
  // catch (err) {
  //     console.log("Sign Up error =>", err)
  //     return (err)
  // }
};

/***/ })

};
//# sourceMappingURL=server.9064ad91e195a904bf95.hot-update.js.map