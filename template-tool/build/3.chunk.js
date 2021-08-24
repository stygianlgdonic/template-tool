exports.ids = [3];
exports.modules = {

/***/ "./src/components/SelectPalette/index.tsx":
/*!************************************************!*\
  !*** ./src/components/SelectPalette/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes_route_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes/route_names */ "./src/routes/route_names.tsx");
/* harmony import */ var _contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/TemplateContext */ "./src/contexts/TemplateContext.tsx");
/* harmony import */ var _tailwindComponents_PaletteColorSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tailwindComponents/PaletteColorSelect */ "./src/components/tailwindComponents/PaletteColorSelect.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\SelectPalette\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const SelectPalette = () => {
  const {
    0: templateData,
    1: setTemplateData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_3__["TemplateContext"]);
  const {
    0: showColorPicker,
    1: setShowColorPicker
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: currentSelectedColor,
    1: setCurrentSelectedColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const handleShowColorPicker = Color => {
    setShowColorPicker(true);
    setCurrentSelectedColor(Color);
  };

  const handleCloseColorPicker = () => {
    setShowColorPicker(false);
  };

  const handleColorChange = color => {
    setTemplateData(prev => {
      const index = prev.palette.findIndex(item => item.name === (currentSelectedColor === null || currentSelectedColor === void 0 ? void 0 : currentSelectedColor.name));
      prev.palette[index].color = color;
      setCurrentSelectedColor(_objectSpread(_objectSpread({}, currentSelectedColor), {}, {
        color: color
      }));
    });
  };

  return __jsx("div", {
    className: "min-w-max",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, showColorPicker && __jsx(_tailwindComponents_PaletteColorSelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
    currentSelectedColor: currentSelectedColor.color,
    handleColorChange: handleColorChange,
    handleCloseColorPicker: handleCloseColorPicker,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "h-20 mb-5 flex flex-wrap justify-evenly content-center bg-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: _routes_route_names__WEBPACK_IMPORTED_MODULE_2__["ROUTE_NAMES"].home,
    className: "text-white font-semibold py-2 px-4 border border-white-500 rounded",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "Back to home"), __jsx("p", {
    className: "text-xl text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, "Select Palette"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  })), "            ", templateData.palette.map((item, index) => __jsx("div", {
    key: index,
    className: "h-10 mt-5 mb-5 flex flex-wrap justify-center content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "w-48",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, item.name), " ", __jsx("div", {
    className: "w-10 h-10 border border-black",
    style: {
      backgroundColor: item.color
    },
    onClick: () => handleShowColorPicker(item),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 57
    }
  }))), __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-gray300 hover:text-gray900 transition-colors duration-150 bg-gray900 rounded-lg focus:shadow-outline hover:bg-bluish",
    to: "/tool",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, "Proceed")));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectPalette);

/***/ }),

/***/ "./src/components/tailwindComponents/PaletteColorSelect.tsx":
/*!******************************************************************!*\
  !*** ./src/components/tailwindComponents/PaletteColorSelect.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-color */ "react-color");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\tailwindComponents\\PaletteColorSelect.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Modal = ({
  currentSelectedColor,
  handleColorChange,
  handleCloseColorPicker
}) => {
  const [currentColor, setCurrentColor] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("#000000");
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    setCurrentColor(currentSelectedColor);
  }, [currentSelectedColor]);

  const handleSave = () => {
    handleColorChange(currentColor);
    handleCloseColorPicker();
  };

  return __jsx("div", {
    className: "fixed z-10 inset-0 overflow-y-auto",
    "aria-labelledby": "modal-title",
    role: "dialog",
    "aria-modal": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "hidden sm:inline-block sm:align-middle sm:h-screen",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, "\u200B"), __jsx("div", {
    className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "sm:flex sm:items-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, __jsx(react_color__WEBPACK_IMPORTED_MODULE_1__["SketchPicker"], {
    color: currentColor,
    onChange: color => setCurrentColor(color.hex),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: handleSave,
    type: "button",
    className: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, "Done")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ })

};;
//# sourceMappingURL=3.chunk.js.map