exports.id = 0;
exports.modules = {

/***/ "./src/Hooks/CardElementsFunctions/index.tsx":
/*!***************************************************!*\
  !*** ./src/Hooks/CardElementsFunctions/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/svg */ "./src/utils/svg.ts");
/* harmony import */ var use_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-file-upload */ "use-file-upload");
/* harmony import */ var use_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(use_file_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/DesignToolContext */ "./src/contexts/DesignToolContext.tsx");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/defaults */ "./src/utils/defaults.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const CardElementsFunctions = () => {
  const {
    designToolnavigator,
    setDesignToolnavigator,
    selectedId,
    setSelectedId,
    cardData,
    setCardData,
    cardHistory: {
      goForward,
      goBack,
      stepNum,
      history
    }
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_3__["DesignToolContext"]);
  const [file, selectFile] = Object(use_file_upload__WEBPACK_IMPORTED_MODULE_1__["useFileUpload"])();

  const handleAddNewRect = rectData => {
    setCardData(prev => {
      let shapeID = new Date().getTime();
      prev.elements.push(_objectSpread(_objectSpread({}, rectData), {}, {
        id: `shapes_${shapeID.toString()}`
      }));
    });
  };

  const handleAddNewCircle = circleData => {
    setCardData(prev => {
      let shapeID = new Date().getTime();
      prev.elements.push(_objectSpread(_objectSpread({}, circleData), {}, {
        id: `shapes_${shapeID.toString()}`
      }));
    });
  };

  const handleAddNewTrianlge = triangleData => {
    setCardData(prev => {
      let shapeID = new Date().getTime();
      prev.elements.push(_objectSpread(_objectSpread({}, triangleData), {}, {
        id: `shapes_${shapeID.toString()}`
      }));
    });
  };

  const handleAddNewPolygon = polygonData => {
    setCardData(prev => {
      let shapeID = new Date().getTime();
      prev.elements.push(_objectSpread(_objectSpread({}, polygonData), {}, {
        id: `shapes_${shapeID.toString()}`
      }));
    });
  };

  const handleSvgUpload = e => {
    _utils_svg__WEBPACK_IMPORTED_MODULE_0__["getSvgStringFromUpload"](e.target.files).then(SVG_STRING => {
      setCardData(prev => {
        let svgId = new Date().getTime();
        prev.elements.push(_objectSpread({
          id: `svgs_${svgId.toString()}`,
          svgString: SVG_STRING
        }, _utils_defaults__WEBPACK_IMPORTED_MODULE_4__["defaultSvg"]));
      });
    });
  };

  const handleAddSvg = SVG_STRING => {
    setCardData(prev => {
      let svgId = new Date().getTime();
      prev.elements.push(_objectSpread({
        id: `svgs_${svgId.toString()}`,
        svgString: SVG_STRING
      }, _utils_defaults__WEBPACK_IMPORTED_MODULE_4__["defaultSvg"]));
    });
  };

  const handleImageUpload = () => {
    selectFile({
      accept: "image/png, image/jpg, image/jpeg",
      multiple: false
    }, ({
      file
    }) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        //base64encoded string
        setCardData(prev => {
          let imageID = new Date().getTime();
          prev.elements.push(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_4__["defaultImage"]), {}, {
            src: reader.result,
            id: `images_${imageID.toString()}`
          }));
        });
      };
    });
  };

  const handleAddNewText = textData => {
    setCardData(prev => {
      let textID = new Date().getTime();
      prev.elements.push(_objectSpread(_objectSpread({}, textData), {}, {
        id: `textBoxes_${textID.toString()}`
      }));
    });
  };

  const onBringtoFront = () => {
    if (!selectedId) return;
    setCardData(prev => {
      const shapeIndex = prev.elements.findIndex(item => item.id === selectedId);

      if (shapeIndex < prev.elements.length - 1) {
        const temp = prev.elements[shapeIndex];
        prev.elements[shapeIndex] = prev.elements[shapeIndex + 1];
        prev.elements[shapeIndex + 1] = temp;
      }
    });
  };

  const onBringtoBack = () => {
    if (!selectedId) return;
    setCardData(prev => {
      const shapeIndex = prev.elements.findIndex(item => item.id === selectedId); // NOTE - shapeIndex > 1 because index 0 is for background

      if (shapeIndex > 1) {
        const temp = prev.elements[shapeIndex];
        prev.elements[shapeIndex] = prev.elements[shapeIndex - 1];
        prev.elements[shapeIndex - 1] = temp;
      }
    });
  };

  const handleDeleteSelectedItem = () => {
    setCardData(prev => {
      prev.elements = prev.elements.filter(item => item.id !== selectedId);
      setSelectedId(null);
    });
  };

  const onUndo = () => {
    !!setSelectedId && setSelectedId(null);
    stepNum > 1 && goBack();
  };

  const onRedo = () => {
    !!setSelectedId && setSelectedId(null);
    stepNum < history.length - 1 && goForward();
  };

  const handleChangeFontSize = type => {
    setCardData(prev => {
      const shapeIndex = prev.elements.findIndex(item => item.id === selectedId);
      prev.elements[shapeIndex].fontSize = _utils_defaults__WEBPACK_IMPORTED_MODULE_4__["fontSizeArray"].find(item => item.name === type).size;
    });
  };

  const handleFontStyle = type => {
    setCardData(prev => {
      const shapeIndex = prev.elements.findIndex(item => item.id === selectedId);
      prev.elements[shapeIndex].fontSize = _utils_defaults__WEBPACK_IMPORTED_MODULE_4__["fontSizeArray"].find(item => item.name === type).size;
    });
  };

  const handleTextTransform = type => {
    setCardData(prev => {
      const shapeIndex = prev.elements.findIndex(item => item.id === selectedId);
      prev.elements[shapeIndex].textTransform = type;
    });
  };

  const handleTextAlign = type => {
    setCardData(prev => {
      const shapeIndex = prev.elements.findIndex(item => item.id === selectedId);
      prev.elements[shapeIndex].textAlign = type;
    });
  };

  const handleTextOpacity = value => {
    setCardData(prev => {
      const shapeIndex = prev.elements.findIndex(item => item.id === selectedId);
      prev.elements[shapeIndex].opacity = parseFloat(value);
    });
  };

  const handleTextColor = color => {
    setCardData(prev => {
      const shapeIndex = prev.elements.findIndex(item => item.id === selectedId);
      prev.elements[shapeIndex].fill = color;
    });
  };

  const handleFontFamily = value => {
    setCardData(prev => {
      const shapeIndex = prev.elements.findIndex(item => item.id === selectedId);
      prev.elements[shapeIndex].fontFamily = value;
    });
  };

  const handleBorderWidthChange = value => {
    setCardData(prev => {
      const shapeIndex = prev.elements.findIndex(item => item.id === selectedId);
      prev.elements[shapeIndex].fontFamily = value;
    });
  };

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
        setCardData(prev => {
          const selectedShape = prev.elements.find(item => item.id === selectedId);
          selectedShape.fill = "";
          selectedShape.patternImageUrl = reader.result;
        });
      };
    });
  };

  const handleStrokeWidthChange = e => {
    setCardData(prev => {
      const selectedShape = prev.elements.find(item => item.id === selectedId);
      selectedShape.strokeWidth = parseInt(e.target.value);
    });
  };

  const handleCornerRadius = e => {
    setCardData(prev => {
      const selectedShape = prev.elements.find(item => item.id === selectedId);
      selectedShape.cornerRadius = parseInt(e.target.value);
    });
  };

  const handleOpacity = e => {
    setCardData(prev => {
      const selectedShape = prev.elements.find(item => item.id === selectedId);
      selectedShape.opacity = parseFloat(e.target.value);
    });
  };

  const handleStrokeColor = color => {
    setCardData(prev => {
      const selectedShape = prev.elements.find(item => item.id === selectedId);
      selectedShape.stroke = color.hex;
    });
  };

  const handleShapeFill = color => {
    setCardData(prev => {
      const selectedShape = prev.elements.find(item => item.id === selectedId);
      selectedShape.fill = color;
      selectedShape.patternImageUrl = undefined;
    });
  };

  const handleGradientColor = (color1, color2) => {
    setCardData(prev => {
      const selectedShape = prev.elements.find(item => item.id === selectedId);
      selectedShape.fill = "";
      selectedShape.fillLinearGradientColorStops = [0, color1, 1, color2];
      selectedShape.fillLinearGradientStartPoint = {
        x: 0,
        y: 0
      };
      selectedShape.fillLinearGradientEndPoint = {
        x: selectedId === "shapes_background" ? _utils_defaults__WEBPACK_IMPORTED_MODULE_4__["stageDimensions"].width : 100,
        y: selectedId === "shapes_background" ? _utils_defaults__WEBPACK_IMPORTED_MODULE_4__["stageDimensions"].height : 100
      };
      selectedShape.patternImageUrl = undefined;
    });
  };

  const handleFillPatternScaleX = e => {
    setCardData(prev => {
      const selectedShape = prev.elements.find(item => item.id === selectedId);
      selectedShape.fillPatternScaleX = parseFloat(e.target.value);
    });
  };

  const handleFillPatternScaleY = e => {
    setCardData(prev => {
      const selectedShape = prev.elements.find(item => item.id === selectedId);
      selectedShape.fillPatternScaleY = parseFloat(e.target.value);
    });
  };

  const handleFillPatternOffsetX = e => {
    setCardData(prev => {
      const selectedShape = prev.elements.find(item => item.id === selectedId);
      selectedShape.fillPatternOffsetX = parseInt(e.target.value);
    });
  };

  const handleFillPatternOffsetY = e => {
    setCardData(prev => {
      const selectedShape = prev.elements.find(item => item.id === selectedId);
      selectedShape.fillPatternOffsetY = parseInt(e.target.value);
    });
  };

  return {
    handleAddNewRect,
    handleAddNewCircle,
    handleAddNewTrianlge,
    handleAddNewPolygon,
    handleSvgUpload,
    handleAddSvg,
    handleImageUpload,
    handleAddNewText,
    handleDeleteSelectedItem,
    handleChangeFontSize,
    onBringtoBack,
    onBringtoFront,
    onUndo,
    onRedo,
    handleFontStyle,
    handleTextTransform,
    handleTextAlign,
    handleTextOpacity,
    handleTextColor,
    handleFontFamily,
    handleBorderWidthChange,
    handleFillImagePattern,
    handleStrokeWidthChange,
    handleCornerRadius,
    handleOpacity,
    handleStrokeColor,
    handleShapeFill,
    handleGradientColor,
    handleFillPatternScaleX,
    handleFillPatternScaleY,
    handleFillPatternOffsetX,
    handleFillPatternOffsetY
  };
};

/* harmony default export */ __webpack_exports__["default"] = (CardElementsFunctions);

/***/ }),

/***/ "./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Shapes/Shapes.tsx":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Shapes/Shapes.tsx ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../../Hooks/CardElementsFunctions */ "./src/Hooks/CardElementsFunctions/index.tsx");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../../utils/defaults */ "./src/utils/defaults.ts");
var _jsxFileName = "D:\\Hyper Engage Backend\\cardclan-backend\\client\\src\\layouts\\LoggedInLayout\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\ElementSelector\\components\\Shapes\\Shapes.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Shapes = () => {
  const {
    handleAddNewRect,
    handleAddNewCircle,
    handleAddNewTrianlge,
    handleAddNewPolygon
  } = Object(_Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return __jsx("div", {
    className: "h-full flex w-full  flex-col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-row justify-between items-center w-full mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-lg text-gray94 font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, "Shapes"), __jsx("button", {
    className: "text-md text-gray95 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "See all")), __jsx("div", {
    className: "flex flex-row justify-between mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: " focus:ring focus:outline-none",
    onClick: () => handleAddNewRect(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["defaultRect"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "63",
    height: "63",
    viewBox: "0 0 63 63",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, __jsx("rect", {
    width: "63",
    height: "63",
    fill: "#D1D5DB",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 29
    }
  })))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: " focus:ring focus:outline-none",
    onClick: () => handleAddNewCircle(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["defaultCircle"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "64",
    height: "63",
    viewBox: "0 0 64 63",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, __jsx("ellipse", {
    cx: "32",
    cy: "31.5",
    rx: "32",
    ry: "31.5",
    fill: "#D1D5DB",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  })))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: " focus:ring focus:outline-none",
    onClick: () => handleAddNewTrianlge(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["defaultTriangle"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "80",
    height: "69",
    viewBox: "0 0 80 69",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M40 0L79.8372 69H0.16283L40 0Z",
    fill: "#D1D5DB",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  })))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: " focus:ring focus:outline-none",
    onClick: () => handleAddNewPolygon(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["defaultPolygon"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "64",
    height: "63",
    viewBox: "0 0 64 63",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }, __jsx("ellipse", {
    cx: "32",
    cy: "31.5",
    rx: "32",
    ry: "31.5",
    fill: "#D1D5DB",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Shapes);

/***/ }),

/***/ "./src/utils/svg.ts":
/*!**************************!*\
  !*** ./src/utils/svg.ts ***!
  \**************************/
/*! exports provided: parseSVG, getElementColor, getColors, svgToURL, replaceColors, getSvgStringFromUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSVG", function() { return parseSVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementColor", function() { return getElementColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColors", function() { return getColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgToURL", function() { return svgToURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceColors", function() { return replaceColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSvgStringFromUpload", function() { return getSvgStringFromUpload; });
// parse svg string into DOM
function parseSVG(svgString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, "image/svg+xml");
  return doc;
} // get color of element
// we can also check styles of element and other properties like "stroke"

function getElementColor(el) {
  return el.getAttribute("fill");
} // find all colors used in svg

function getColors(svgString) {
  const doc = parseSVG(svgString);
  var elements = doc.getElementsByTagName("*");
  const usedColors = [];

  for (const element of elements) {
    const color = getElementColor(element); // if color is defined and uniq we will add it

    if (color && usedColors.indexOf(color) === -1) {
      usedColors.push(color);
    }
  }

  return usedColors;
} // convert svg string into base64 data URL

function svgToURL(s) {
  const uri = window.btoa(unescape(encodeURIComponent(s)));
  return "data:image/svg+xml;base64," + uri;
} // replace colors in svg string

function replaceColors(svgString, map) {
  // we can do some RegExp magic here
  // but I will just manually check every element
  const doc = parseSVG(svgString);
  var elements = doc.getElementsByTagName("*");

  for (const element of elements) {
    const color = getElementColor(element);

    if (map[color]) {
      element.setAttribute("fill", map[color]);
    }
  }

  var xmlSerializer = new XMLSerializer();
  const str = xmlSerializer.serializeToString(doc);
  return str;
}
function getSvgStringFromUpload(files) {
  return new Promise((resolve, reject) => {
    try {
      var reader = new FileReader();

      reader.onload = function (e) {
        var svgData = e.target.result;
        var parser = new DOMParser();
        var doc = parser.parseFromString(svgData, "image/svg+xml");
        resolve(doc.documentElement.outerHTML);
      };

      reader.readAsText(files[0]);
    } catch (error) {
      reject(error);
    }
  });
}

/***/ })

};
//# sourceMappingURL=0.db39c9992f0b093e64f1.hot-update.js.map