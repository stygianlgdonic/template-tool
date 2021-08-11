exports.id = 0;
exports.modules = {

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ImageSelector/components/Frames/Frames.tsx":
/*!***************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ImageSelector/components/Frames/Frames.tsx ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../Hooks/CardElementsFunctions */ "./src/Hooks/CardElementsFunctions/index.tsx");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\ImageSelector\\components\\Frames\\Frames.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const image1 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/polygon.png */ "./src/assets/images/polygon.png");

const image2 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/circle.png */ "./src/assets/images/circle.png");

const image3 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/square.png */ "./src/assets/images/square.png");

const image4 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/triangle.png */ "./src/assets/images/triangle.png");

const Frames = () => {
  const {
    handleAddNewRect,
    handleAddNewCircle,
    handleAddNewTrianlge,
    handleAddNewPolygon
  } = Object(_Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return __jsx("div", {
    className: "flex flex-col w-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-col w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-xl font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "Frames"), __jsx("div", {
    className: "grid w-full grid-cols-4 gap-4 mt-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => handleAddNewCircle(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultCircle"]), {}, {
      isFrame: true,
      fill: undefined,
      patternImageUrl: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image2,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => handleAddNewRect(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultRect"]), {}, {
      isFrame: true,
      fill: undefined,
      patternImageUrl: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image3,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => handleAddNewPolygon(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultPolygon"]), {}, {
      isFrame: true,
      fill: undefined,
      patternImageUrl: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image1,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => handleAddNewTrianlge(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultTriangle"]), {}, {
      fill: undefined,
      patternImageUrl: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image4,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => handleAddNewCircle(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultCircle"]), {}, {
      fill: undefined,
      patternImageUrl: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image2,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => handleAddNewRect(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultRect"]), {}, {
      fill: undefined,
      patternImageUrl: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image3,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => handleAddNewPolygon(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultPolygon"]), {}, {
      fill: undefined,
      patternImageUrl: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image1,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => handleAddNewTrianlge(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultTriangle"]), {}, {
      fill: undefined,
      patternImageUrl: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image4,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => handleAddNewCircle(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultCircle"]), {}, {
      fill: undefined,
      patternImageUrl: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image2,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => handleAddNewRect(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultRect"]), {}, {
      fill: undefined,
      patternImageUrl: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image3,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => handleAddNewPolygon(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultPolygon"]), {}, {
      fill: undefined,
      patternImageUrl: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image1,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => handleAddNewTrianlge(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultTriangle"]), {}, {
      fill: undefined,
      patternImageUrl: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image4,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Frames);

/***/ })

};
//# sourceMappingURL=0.6b247655043dda971953.hot-update.js.map