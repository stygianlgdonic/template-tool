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
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\App.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Registration = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./Screens/Registration/Registration */ "./src/Screens/Registration/Registration.tsx")));
const Dashboard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./Screens/Dashboard/Dashboard */ "./src/Screens/Dashboard/Dashboard.tsx")));
const CreateCardLayout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./../src/Screens/CreateCardLayout/CreateCardLayout */ "./src/Screens/CreateCardLayout/CreateCardLayout.tsx")));
const SignUp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./Screens/Registration/Signup/Signup */ "./src/Screens/Registration/Signup/Signup.tsx")));

const App = () => {
  return __jsx(_NoSSR__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 33
      }
    }, "Loading ..."),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(_contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_5__["DesignToolProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx(_contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_6__["TemplateProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Routes"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/",
    element: __jsx(Dashboard, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 54
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  }), __jsx(_contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_7__["HeaderProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "createcard",
    element: __jsx(CreateCardLayout, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 67
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 33
    }
  })), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/signin",
    element: __jsx(Registration, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 60
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/signup",
    element: __jsx(SignUp, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 60
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/contexts/DesignTool/DesignToolContext.tsx":
/*!*******************************************************!*\
  !*** ./src/contexts/DesignTool/DesignToolContext.tsx ***!
  \*******************************************************/
/*! exports provided: INITIAL_STATE, DesignToolContext, DesignToolProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignToolContext", function() { return DesignToolContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignToolProvider", function() { return DesignToolProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shrugsy/use-immer-state */ "@shrugsy/use-immer-state");
/* harmony import */ var _shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _DesingToolReducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DesingToolReducers */ "./src/contexts/DesignTool/DesingToolReducers.ts");
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\contexts\\DesignTool\\DesignToolContext.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const INITIAL_STATE = {
  dimensions: {
    width: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["stageDimensions"].width,
    height: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["stageDimensions"].height
  },
  labels: [],
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
    fillLinearGradientColorStops: [0, '#ffffff', 1, '#ffffff'],
    draggable: false
  }]
};
const DesignToolContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
const DesignToolProvider = ({
  children
}) => {
  const {
    0: designToolnavigator,
    1: setDesignToolnavigator
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('element');
  const {
    0: dashboardnavigator,
    1: setDashboardnavigator
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('home');
  const {
    0: sidebarnavigator,
    1: setSidebarnavigator
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [cardData, setCardData, {
    goForward,
    goBack,
    stepNum,
    history
  }] = Object(_shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_1__["useImmerState"])(INITIAL_STATE);
  const {
    0: selectedId,
    1: setSelectedId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: designToolState,
    1: designToolDispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_DesingToolReducers__WEBPACK_IMPORTED_MODULE_3__["designToolReducer"], _DesingToolReducers__WEBPACK_IMPORTED_MODULE_3__["designToolInit"]);
  return __jsx(DesignToolContext.Provider, {
    value: {
      designToolnavigator,
      setDesignToolnavigator,
      sidebarnavigator,
      setSidebarnavigator,
      dashboardnavigator,
      setDashboardnavigator,
      selectedId,
      setSelectedId,
      cardData,
      setCardData,
      cardHistory: {
        goForward,
        goBack,
        stepNum,
        history
      },
      designToolState,
      designToolDispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, children);
};

/***/ }),

/***/ "./src/contexts/DesignTool/DesingToolReducers.ts":
/*!*******************************************************!*\
  !*** ./src/contexts/DesignTool/DesingToolReducers.ts ***!
  \*******************************************************/
/*! exports provided: designToolInit, designToolReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "designToolInit", function() { return designToolInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "designToolReducer", function() { return designToolReducer; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const designToolInit = {
  navbar_selection: "element",
  sub_navbar_selection: "element",
  card_header_state: ""
};
const designToolReducer = (designToolState, action) => {
  switch (action.type) {
    case 'Select_Element_Nav':
      {
        return _objectSpread(_objectSpread({}, designToolState), {}, {
          navbar_selection: "element",
          sub_navbar_selection: "element"
        });
      }

    case 'Select_Text_Nav':
      {
        return _objectSpread(_objectSpread({}, designToolState), {}, {
          navbar_selection: "text",
          sub_navbar_selection: "text"
        });
      }

    case 'Select_Images_Nav':
      {
        return _objectSpread(_objectSpread({}, designToolState), {}, {
          navbar_selection: "images",
          sub_navbar_selection: "images"
        });
      }

    case 'Select_Background_Nav':
      {
        return _objectSpread(_objectSpread({}, designToolState), {}, {
          navbar_selection: "background",
          sub_navbar_selection: "background"
        });
      }

    case 'Select_Logo_Nav':
      {
        return _objectSpread(_objectSpread({}, designToolState), {}, {
          navbar_selection: "logo",
          sub_navbar_selection: "logo"
        });
      }

    case 'Select_Shape_Color_Nav':
      {
        return _objectSpread(_objectSpread({}, designToolState), {}, {
          navbar_selection: "element",
          sub_navbar_selection: "shapeColor"
        });
      }

    case 'Select_Texttool_Nav':
      {
        return _objectSpread(_objectSpread({}, designToolState), {}, {
          navbar_selection: "text",
          sub_navbar_selection: "texttool"
        });
      }

    case 'Select_Font_Color_Tool_Nav':
      {
        return _objectSpread(_objectSpread({}, designToolState), {}, {
          navbar_selection: "text",
          sub_navbar_selection: "fontColorTool"
        });
      }

    case 'Select_Effecttool_Nav':
      {
        return _objectSpread(_objectSpread({}, designToolState), {}, {
          navbar_selection: "text",
          sub_navbar_selection: "effecttool"
        });
      }

    case 'Select_Shape_Card_Header':
      {
        return _objectSpread(_objectSpread({}, designToolState), {}, {
          card_header_state: "shape"
        });
      }

    case 'Select_Text_Card_Header':
      {
        return _objectSpread(_objectSpread({}, designToolState), {}, {
          card_header_state: "text"
        });
      }

    case 'Empty_Card_Header':
      {
        return _objectSpread(_objectSpread({}, designToolState), {}, {
          card_header_state: ""
        });
      }

    default:
      throw new Error("cannot update reducer");
  }
};

/***/ }),

/***/ "./src/contexts/DesignToolContext.tsx":
false

};
//# sourceMappingURL=server.fefb1baabfba915a17fe.hot-update.js.map