exports.id = 0;
exports.modules = {

/***/ "./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/CustomColorPicker/CustomReactColor.js":
/*!****************************************************************************************************************************!*\
  !*** ./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/CustomColorPicker/CustomReactColor.js ***!
  \****************************************************************************************************************************/
/*! exports provided: MyPicker, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPicker", function() { return MyPicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-color */ "react-color");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_color_lib_components_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-color/lib/components/common */ "react-color/lib/components/common");
/* harmony import */ var react_color_lib_components_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_color_lib_components_common__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\layouts\\LoggedInLayout\\CreateCardLayout\\components\\DesignTool\\Components\\CustomColorPicker\\CustomReactColor.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const MyPicker = ({
  hex,
  hsl,
  hsv,
  onChange
}) => {
  const styles = {
    pickerContainer: {
      width: "100%"
    },
    hue: {
      width: "100%",
      height: 12,
      margin: "10px 0px",
      position: "relative"
    },
    saturation: {
      width: "100%",
      height: 150,
      margin: "10px 0px",
      position: "relative"
    },
    input: {
      width: "100px",
      height: 30,
      borderRadius: 5,
      outline: "none",
      margin: "10px 0px",
      border: `1px solid ${hex}`,
      paddingLeft: 10,
      paddingTop: 15,
      paddingBottom: 15
    },
    confirm: {
      width: "100px",
      height: 30,
      borderRadius: 5,
      outline: "none",
      margin: "10px 0px",
      paddingTop: 5,
      paddingBottom: 5
    }
  };
  return __jsx("div", {
    style: styles.pickerContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: styles.saturation,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(react_color_lib_components_common__WEBPACK_IMPORTED_MODULE_2__["Saturation"], {
    hsl: hsl,
    hsv: hsv,
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: styles.hue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(react_color_lib_components_common__WEBPACK_IMPORTED_MODULE_2__["Hue"], {
    pointer: Pointer,
    hsl: hsl,
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(react_color_lib_components_common__WEBPACK_IMPORTED_MODULE_2__["EditableInput"], {
    style: {
      input: styles.input
    },
    value: hex,
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }), __jsx("button", {
    style: styles.confirm,
    className: "bg-bluish text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "Confirm")));
};

const Pointer = () => {
  return __jsx("div", {
    style: {
      backgroundColor: "transparent",
      border: "2px solid white",
      boxShadow: "0px 0px 2px 1px rgba(0,0,0,0.75)",
      borderRadius: "50%",
      width: "12px",
      height: "12px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_color__WEBPACK_IMPORTED_MODULE_1__["CustomPicker"])(MyPicker));

/***/ })

};
//# sourceMappingURL=0.972eca957099edd06c55.hot-update.js.map