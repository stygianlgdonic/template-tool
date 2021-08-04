exports.id = 0;
exports.modules = {

/***/ "./src/components/tailwindComponents/EditTextBox.tsx":
/*!***********************************************************!*\
  !*** ./src/components/tailwindComponents/EditTextBox.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-color */ "react-color");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/defaults */ "./src/utils/defaults.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\tailwindComponents\\EditTextBox.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const EditTextBox = ({
  selectedId,
  variationIndex,
  templateData,
  setTemplateData,
  handleCloseEditTextModal
}) => {
  const {
    0: inputValue,
    1: setInputValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: fontSize,
    1: setFontSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(20);
  const {
    0: fontStyle,
    1: setFontStyle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("normal");
  const {
    0: fontFamily,
    1: setFontFamily
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["googleFontsList"][0]);
  const {
    0: textAlign,
    1: setTextAlign
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("left");
  const {
    0: fontColor,
    1: setFontColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("#000000");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if ((selectedId === null || selectedId === void 0 ? void 0 : selectedId.split("_")[0]) === "textBoxes") {
      const index = templateData.variations[variationIndex].elements.findIndex(item => item.id === selectedId);
      setInputValue(templateData.variations[variationIndex].elements[index].text);
      setFontSize(templateData.variations[variationIndex].elements[index].fontSize);
      setFontFamily(templateData.variations[variationIndex].elements[index].fontFamily);
      setTextAlign(templateData.variations[variationIndex].elements[index].align);
      setFontColor(templateData.variations[variationIndex].elements[index].color);
    }
  }, [selectedId]);

  const handleSave = () => {
    setTemplateData(prev => {
      const index = prev.variations[variationIndex].elements.findIndex(item => item.id === selectedId);
      prev.variations[variationIndex].elements[index].text = inputValue;
      prev.variations[variationIndex].elements[index].fontSize = fontSize;
      prev.variations[variationIndex].elements[index].fontStyle = fontStyle;
      prev.variations[variationIndex].elements[index].fontFamily = fontFamily;
      prev.variations[variationIndex].elements[index].align = textAlign;
      prev.variations[variationIndex].elements[index].color = fontColor;
    });
    handleCloseEditTextModal();
  };

  return __jsx("div", {
    className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, "Font Size:"), __jsx("input", {
    className: "border mb-5",
    type: "number",
    value: fontSize,
    onChange: e => setFontSize(parseInt(e.target.value)),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, "Select Font style:"), __jsx("select", {
    className: "border mb-5",
    name: "font-style",
    onChange: e => setFontStyle(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx("option", {
    value: "normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, "normal"), __jsx("option", {
    value: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, "bold"), __jsx("option", {
    value: "italic",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, "italic"), __jsx("option", {
    value: "italic bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, "italic bold")), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, "Select Text Alignment:"), __jsx("select", {
    className: "border mb-5",
    name: "text-align",
    onChange: e => setTextAlign(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx("option", {
    value: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, "left"), __jsx("option", {
    value: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, "center"), __jsx("option", {
    value: "right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, "right")), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, "Select font family:"), __jsx("select", {
    value: fontFamily,
    style: {
      fontFamily: fontFamily
    },
    onChange: e => setFontFamily(e.target.value),
    className: "border mb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["googleFontsList"].map((val, index) => {
    return __jsx("option", {
      className: "bg-white text-black",
      style: {
        fontFamily: val
      },
      key: index,
      selected: val === fontFamily,
      value: val,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 33
      }
    }, val);
  })), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, "Text color:"), __jsx(react_color__WEBPACK_IMPORTED_MODULE_1__["SketchPicker"], {
    width: "150px",
    color: fontColor,
    onChange: color => setFontColor(color.hex),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "mt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, __jsx("textarea", {
    className: "border h-40 w-full",
    style: {
      fontFamily: fontFamily,
      fontSize: fontSize,
      fontStyle: fontStyle,
      textAlign: textAlign,
      color: fontColor
    },
    value: inputValue,
    onChange: e => setInputValue(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: handleSave,
    type: "button",
    className: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, "Done")));
};

/* harmony default export */ __webpack_exports__["default"] = (EditTextBox);

/***/ })

};
//# sourceMappingURL=0.ec6565fb8b2de58fd7bf.hot-update.js.map