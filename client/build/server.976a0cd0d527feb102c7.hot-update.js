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
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\App.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Dashboard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ./Screens/Dashboard/Dashboard */ "./src/Screens/Dashboard/Dashboard.tsx")));
const CreateCardLayout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./Screens/CreateCardLayout/CreateCardLayout */ "./src/Screens/CreateCardLayout/CreateCardLayout.tsx")));

const App = () => {
  return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(_NoSSR__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/",
    element: __jsx(Dashboard, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 42
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  })));
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

/***/ })

};
//# sourceMappingURL=server.976a0cd0d527feb102c7.hot-update.js.map