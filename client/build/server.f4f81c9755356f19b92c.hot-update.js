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
/* harmony import */ var _src_Screens_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../src/Screens/Dashboard/Dashboard */ "./src/Screens/Dashboard/Dashboard.tsx");
/* harmony import */ var _src_Screens_CreateCardLayout_CreateCardLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../src/Screens/CreateCardLayout/CreateCardLayout */ "./src/Screens/CreateCardLayout/CreateCardLayout.tsx");
/* harmony import */ var _components_Centerboard_Centerboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Centerboard/Centerboard */ "./src/components/Centerboard/Centerboard.tsx");
/* harmony import */ var _components_LeftSideBar_LeftSidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/LeftSideBar/LeftSidebar */ "./src/components/LeftSideBar/LeftSidebar.tsx");
/* harmony import */ var _contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contexts/TemplateContext */ "./src/contexts/TemplateContext.tsx");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\App.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // const Dashboard = React.lazy(() => import('./Screens/Dashboard/Dashboard'));





 // const CreateCardLayout = React.lazy(() => import('./../src/Screens/CreateCardLayout/CreateCardLayout'));
// const CreateCardLayout = React.lazy(() => import('./Screens/CreateCardLayout/CreateCardLayout'));

const App = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: __jsx(_src_Screens_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Routes"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "dashboard",
    element: __jsx(_src_Screens_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 50
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/sss",
    element: __jsx(_components_Centerboard_Centerboard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 49
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/404",
    element: __jsx(_components_LeftSideBar_LeftSidebar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 49
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  })), __jsx(_NoSSR__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx(_contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_9__["TemplateProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "createcard",
    element: __jsx(_src_Screens_CreateCardLayout_CreateCardLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 59
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/sss",
    element: __jsx(_components_Centerboard_Centerboard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 57
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/404",
    element: __jsx(_components_LeftSideBar_LeftSidebar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 57
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

};
//# sourceMappingURL=server.f4f81c9755356f19b92c.hot-update.js.map