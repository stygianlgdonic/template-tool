exports.id = 0;
exports.modules = {

/***/ "./src/components/tailwindComponents/ShapeColorSelector.tsx":
/*!******************************************************************!*\
  !*** ./src/components/tailwindComponents/ShapeColorSelector.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-color */ "react-color");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-file-upload */ "use-file-upload");
/* harmony import */ var use_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/defaults */ "./src/utils/defaults.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\tailwindComponents\\ShapeColorSelector.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ShapeColorSelector = ({
  selectedId,
  templateData,
  setTemplateData,
  variationIndex,
  currentPalette
}) => {
  const [file, selectFile] = Object(use_file_upload__WEBPACK_IMPORTED_MODULE_2__["useFileUpload"])();

  const handleFillImagePattern = () => {
    selectFile({
      accept: "image/png, image/jpg, image/jpeg",
      multiple: false
    }, ({
      file
    }) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        //base64encoded string => reader.result
        setTemplateData(prev => {
          const selectedShape = prev.variations[variationIndex].elements.find(item => item.id === selectedId);
          selectedShape.fill = "";
          selectedShape.patternImageUrl = reader.result;
        });
      };
    });
  };

  const handleStrokeWidthChange = e => {
    setTemplateData(prev => {
      const selectedShape = prev.variations[variationIndex].elements.find(item => item.id === selectedId);
      selectedShape.strokeWidth = parseInt(e.target.value);
    });
  };

  const handleCornerRadius = e => {
    setTemplateData(prev => {
      const selectedShape = prev.variations[variationIndex].elements.find(item => item.id === selectedId);
      selectedShape.cornerRadius = parseInt(e.target.value);
    });
  };

  const handleOpacity = e => {
    setTemplateData(prev => {
      const selectedShape = prev.variations[variationIndex].elements.find(item => item.id === selectedId);
      selectedShape.opacity = parseFloat(e.target.value);
    });
  };

  const handleStrokeColor = color => {
    setTemplateData(prev => {
      const selectedShape = prev.variations[variationIndex].elements.find(item => item.id === selectedId);
      selectedShape.stroke = color.hex;
    });
  };

  const handleShapeFill = color => {
    setTemplateData(prev => {
      const selectedShape = prev.variations[variationIndex].elements.find(item => item.id === selectedId);
      selectedShape.fill = color;
      selectedShape.patternImageUrl = undefined;
    });
  };

  const handleGradientColor = (color1, color2) => {
    setTemplateData(prev => {
      const selectedShape = prev.variations[variationIndex].elements.find(item => item.id === selectedId);
      selectedShape.fill = "";
      selectedShape.fillLinearGradientColorStops = [0, color1, 1, color2];
      selectedShape.fillLinearGradientStartPoint = {
        x: 0,
        y: 0
      };
      selectedShape.fillLinearGradientEndPoint = {
        x: selectedId === "shapes_background" ? _utils_defaults__WEBPACK_IMPORTED_MODULE_3__["stageDimensions"].width : 100,
        y: selectedId === "shapes_background" ? _utils_defaults__WEBPACK_IMPORTED_MODULE_3__["stageDimensions"].height : 100
      };
      selectedShape.patternImageUrl = undefined;
    });
  };

  const handleFillPatternScaleX = e => {
    setTemplateData(prev => {
      const selectedShape = prev.variations[variationIndex].elements.find(item => item.id === selectedId);
      selectedShape.fillPatternScaleX = parseFloat(e.target.value);
    });
  };

  const handleFillPatternScaleY = e => {
    setTemplateData(prev => {
      const selectedShape = prev.variations[variationIndex].elements.find(item => item.id === selectedId);
      selectedShape.fillPatternScaleY = parseFloat(e.target.value);
    });
  };

  const handleFillPatternOffsetX = e => {
    setTemplateData(prev => {
      const selectedShape = prev.variations[variationIndex].elements.find(item => item.id === selectedId);
      selectedShape.fillPatternOffsetX = parseInt(e.target.value);
    });
  };

  const handleFillPatternOffsetY = e => {
    setTemplateData(prev => {
      const selectedShape = prev.variations[variationIndex].elements.find(item => item.id === selectedId);
      selectedShape.fillPatternOffsetY = parseInt(e.target.value);
    });
  };

  const selectedShapeData = templateData.variations[variationIndex].elements.find(item => item.id === selectedId);
  return __jsx("div", {
    className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  }, "Border width: "), __jsx("input", {
    className: "border mb-5",
    type: "number",
    min: 0,
    value: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.strokeWidth,
    onChange: handleStrokeWidthChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 21
    }
  }, "Corner radius:"), __jsx("input", {
    className: "border mb-5",
    type: "number",
    min: 0,
    value: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.cornerRadius,
    onChange: handleCornerRadius,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  }, "Opacity: "), __jsx("input", {
    className: "border mb-5",
    type: "number",
    value: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.opacity,
    step: 0.1,
    min: 0.1,
    max: 1.0,
    onChange: handleOpacity,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 21
    }
  }, "Image Scale X: "), __jsx("input", {
    className: "border mb-5",
    type: "number",
    step: 0.1,
    value: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fillPatternScaleX,
    onChange: handleFillPatternScaleX,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
    }
  }, "Image Scale Y: "), __jsx("input", {
    className: "border mb-5",
    type: "number",
    step: 0.1,
    value: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fillPatternScaleY,
    onChange: handleFillPatternScaleY,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 21
    }
  }, "Image offset X: "), __jsx("input", {
    className: "border mb-5",
    type: "number",
    step: 10,
    value: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fillPatternOffsetX,
    onChange: handleFillPatternOffsetX,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 21
    }
  }, "Image offset Y: "), __jsx("input", {
    className: "border mb-5",
    type: "number",
    step: 10,
    value: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fillPatternOffsetY,
    onChange: handleFillPatternOffsetY,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 21
    }
  }, "Borer color:"), __jsx(react_color__WEBPACK_IMPORTED_MODULE_1__["SketchPicker"], {
    width: "150px",
    color: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.stroke,
    onChange: handleStrokeColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: !!(selectedShapeData !== null && selectedShapeData !== void 0 && selectedShapeData.fillPatternImage) ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 21
    }
  }, "Image Offset X: "), __jsx("input", {
    className: "border mb-5",
    type: "number",
    value: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fillPatternOffsetX,
    step: 0.1,
    min: 0.1,
    max: 1.0,
    onChange: handleFillPatternOffsetX,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 21
    }
  }, "Image Offset Y: "), __jsx("input", {
    className: "border mb-5",
    type: "number",
    value: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fillPatternOffsetY,
    step: 0.1,
    min: 0.1,
    max: 1.0,
    onChange: handleFillPatternOffsetY,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 21
    }
  }, "Image Scale X: "), __jsx("input", {
    className: "border mb-5",
    type: "number",
    value: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fillPatternScaleX,
    step: 0.1,
    min: 0.1,
    max: 1.0,
    onChange: handleFillPatternScaleX,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 21
    }
  }, "Image Scale Y: "), __jsx("input", {
    className: "border mb-5",
    type: "number",
    value: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fillPatternScaleY,
    step: 0.1,
    min: 0.1,
    max: 1.0,
    onChange: handleFillPatternScaleY,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 17
    }
  }, currentPalette.map((item, index) => __jsx("div", {
    key: index,
    className: "h-10 mt-5 mb-5 flex flex-wrap justify-center content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "w-48",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 29
    }
  }, "Select ", item.name), " ", __jsx("div", {
    className: "w-10 h-10 border border-black",
    style: {
      backgroundColor: item.color
    },
    onClick: () => handleShapeFill(item.color),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 72
    }
  })))), __jsx("div", {
    className: "sm:flex sm:items-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 17
    }
  }, __jsx(react_color__WEBPACK_IMPORTED_MODULE_1__["SketchPicker"], {
    width: "100%",
    color: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fill,
    onChange: color => handleShapeFill(color.hex),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    onClick: handleFillImagePattern,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 21
    }
  }, "Insert image"))), __jsx("div", {
    className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 17
    }
  }, "Gradient:"), __jsx("div", {
    className: "grid grid-cols-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 25
    }
  }, "Color 1"), __jsx("div", {
    className: "sm:flex sm:items-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 25
    }
  }, __jsx(react_color__WEBPACK_IMPORTED_MODULE_1__["SketchPicker"], {
    width: "150px",
    color: selectedShapeData !== null && selectedShapeData !== void 0 && selectedShapeData.fillLinearGradientColorStops ? selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fillLinearGradientColorStops[1] : "#171717",
    onChange: color => handleGradientColor(color.hex, selectedShapeData !== null && selectedShapeData !== void 0 && selectedShapeData.fillLinearGradientColorStops ? selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fillLinearGradientColorStops[3] : "#171717"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 25
    }
  }, "Color 2"), __jsx("div", {
    className: "sm:flex sm:items-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 25
    }
  }, __jsx(react_color__WEBPACK_IMPORTED_MODULE_1__["SketchPicker"], {
    width: "150px",
    color: selectedShapeData !== null && selectedShapeData !== void 0 && selectedShapeData.fillLinearGradientColorStops ? selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fillLinearGradientColorStops[3] : selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fill,
    onChange: color => handleGradientColor(selectedShapeData !== null && selectedShapeData !== void 0 && selectedShapeData.fillLinearGradientColorStops ? selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fillLinearGradientColorStops[1] : selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fill, color.hex),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ShapeColorSelector);

/***/ })

};
//# sourceMappingURL=0.c182cdfc359ea0b97390.hot-update.js.map