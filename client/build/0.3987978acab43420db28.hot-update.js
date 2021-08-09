exports.id = 0;
exports.modules = {

/***/ "./src/Screens/CreateCardLayout/CreateCardLayout.tsx":
/*!***********************************************************!*\
  !*** ./src/Screens/CreateCardLayout/CreateCardLayout.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/DesignToolContext */ "./src/contexts/DesignToolContext.tsx");
/* harmony import */ var _contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/HeaderContext */ "./src/contexts/HeaderContext.tsx");
/* harmony import */ var _components_DesignTool_DesigntTool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/DesignTool/DesigntTool */ "./src/Screens/CreateCardLayout/components/DesignTool/DesigntTool.tsx");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Header/Header */ "./src/Screens/CreateCardLayout/components/Header/Header.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_cardService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/cardService */ "./src/services/cardService.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\CreateCardLayout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








let document_title = "Untitled design - Employees";

const CreateCardLayout = () => {
  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useNavigate"])();
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_2__["HeaderContext"]);
  const {
    cardData,
    setCardData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__["DesignToolContext"]); // TODO - use this method for creating new card with selected dimensions

  const createNewCard = cardDimensions => {
    setCardData(prev => {
      prev.dimensions = _objectSpread({}, cardDimensions);
      prev.labels = [];
      prev.elements = [_objectSpread(_objectSpread({}, _contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__["INITIAL_STATE"].elements[0]), {}, {
        width: cardDimensions.width,
        height: cardDimensions.height
      })];
    }, false);
    navigate("/createcard");
  };

  const handleSaveCard = async () => {
    const res = await _services_cardService__WEBPACK_IMPORTED_MODULE_6__["card_service"].addNewCard(cardData);
    console.log({
      res
    });
  };

  return __jsx("div", {
    className: "overflow-hidden ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      height: "8vh"
    },
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    document_title: document_title,
    createNewCard: createNewCard,
    handleSaveCard: handleSaveCard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "relative",
    style: {
      height: "88vh"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(_components_DesignTool_DesigntTool__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "absolute top-0 right-0 h-full bg-white w-14",
    style: {
      paddingTop: "54px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }), __jsx("button", {
    onClick: () => setOpen(!open),
    className: "flex items-center h-full pt-10 bg-canvasbgcolor ",
    style: {
      marginTop: "7px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "relative flex items-center w-10 h-20 pl-1 bg-white rounded-full rounded-r -right-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("svg", {
    className: "w-3 h-3",
    width: "13",
    height: "22",
    viewBox: "0 0 13 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, __jsx("path", {
    d: "M11 20L2 11L11 2",
    stroke: "#374151",
    "stroke-width": "4",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateCardLayout);

/***/ })

};
//# sourceMappingURL=0.3987978acab43420db28.hot-update.js.map