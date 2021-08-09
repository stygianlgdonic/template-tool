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
      prev.elements[shapeIndex].fontStyle = type;
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
      prev.elements[shapeIndex].align = type;
    });
  };

  const handleTextOpacity = value => {
    setCardData(prev => {
      const shapeIndex = prev.elements.findIndex(item => item.id === selectedId);
      prev.elements[shapeIndex].opacity = parseFloat(value);
    });
  };

  const handleTextEffect = textObj => {
    setCardData(prev => {
      const shapeIndex = prev.elements.findIndex(item => item.id === selectedId);
      prev.elements[shapeIndex] = textObj;
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
      prev.elements[shapeIndex].strokeWidth = value;
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
      selectedShape.stroke = color;
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
    handleTextEffect,
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
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\CreateCardLayout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







let document_title = "Untitled design - Employees";

const CreateCardLayout = () => {
  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useNavigate"])();
  const {
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

  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_2__["HeaderContext"]);
  return __jsx("div", {
    className: "overflow-hidden ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    document_title: document_title,
    createNewCard: createNewCard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
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
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(_components_DesignTool_DesigntTool__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "relative flex items-center w-10 h-20 pl-1 bg-white rounded-full rounded-r -right-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
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
      lineNumber: 49,
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
      lineNumber: 57,
      columnNumber: 17
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateCardLayout);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/Card.tsx":
/*!*************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/Card.tsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../contexts/HeaderContext */ "./src/contexts/HeaderContext.tsx");
/* harmony import */ var _Preview_components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Preview/components/Drawer/Drawer */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Preview/components/Drawer/Drawer.tsx");
/* harmony import */ var _MainCanvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainCanvas */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/index.tsx");
/* harmony import */ var _tailwindComponents_CardHeader_CardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tailwindComponents/CardHeader/CardHeader */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/CardHeader.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\Card.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Card = () => {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_1__["HeaderContext"]);
  return __jsx("div", {
    className: "h-full  bg-canvasbgcolor  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "bg-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(_tailwindComponents_CardHeader_CardHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: " mt-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(_MainCanvas__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "z-50 overflow-y-hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(_Preview_components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isOpen: open,
    setIsOpen: setOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/MainStage/index.tsx":
/*!***********************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/MainStage/index.tsx ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Rectangle */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/Rectangle.tsx");
/* harmony import */ var _UCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UCircle */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UCircle.tsx");
/* harmony import */ var _UPolygon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UPolygon */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UPolygon.tsx");
/* harmony import */ var _ULine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ULine */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/ULine.tsx");
/* harmony import */ var _USvg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../USvg */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/USvg.tsx");
/* harmony import */ var _UText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UText */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UText.tsx");
/* harmony import */ var _UTransformer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../UTransformer */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UTransformer.tsx");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _UImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../UImage */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UImage.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\MainCanvas\\MainStage\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const MainStage = ({
  cardData,
  setCardData,
  selectedId,
  setSelectedId,
  unSelectAll
}) => {
  var _cardData$elements;

  const GUIDELINE_OFFSET = 5;
  const $stage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const $layer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const $tr = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const selectionRectRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const selection = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    visible: false,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0
  });
  const {
    0: nodesArray,
    1: setNodes
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const Konva = window.Konva;

  const getLineGuideStops = skipShape => {
    const vertical = [0, _utils_defaults__WEBPACK_IMPORTED_MODULE_9__["stageDimensions"].width / 2, _utils_defaults__WEBPACK_IMPORTED_MODULE_9__["stageDimensions"].width];
    const horizontal = [0, _utils_defaults__WEBPACK_IMPORTED_MODULE_9__["stageDimensions"].height / 2, _utils_defaults__WEBPACK_IMPORTED_MODULE_9__["stageDimensions"].height]; // and we snap over edges and center of each object on the canvas

    $stage.current.find(".object").forEach(guideItem => {
      if (guideItem === skipShape) {
        return;
      }

      const box = guideItem.getClientRect(); // and we can snap to all edges of shapes

      vertical.push([box.x, box.x + box.width, box.x + box.width / 2]);
      horizontal.push([box.y, box.y + box.height, box.y + box.height / 2]);
    });
    return {
      vertical: vertical.flat(),
      horizontal: horizontal.flat()
    };
  };

  const getObjectSnappingEdges = node => {
    const box = node.getClientRect();
    return {
      vertical: [{
        guide: Math.round(box.x),
        offset: Math.round(node.x() - box.x),
        snap: "start"
      }, {
        guide: Math.round(box.x + box.width / 2),
        offset: Math.round(node.x() - box.x - box.width / 2),
        snap: "center"
      }, {
        guide: Math.round(box.x + box.width),
        offset: Math.round(node.x() - box.x - box.width),
        snap: "end"
      }],
      horizontal: [{
        guide: Math.round(box.y),
        offset: Math.round(node.y() - box.y),
        snap: "start"
      }, {
        guide: Math.round(box.y + box.height / 2),
        offset: Math.round(node.y() - box.y - box.height / 2),
        snap: "center"
      }, {
        guide: Math.round(box.y + box.height),
        offset: Math.round(node.y() - box.y - box.height),
        snap: "end"
      }]
    };
  };

  const getGuides = (lineGuideStops, itemBounds) => {
    const resultV = [];
    const resultH = [];
    lineGuideStops.vertical.forEach(lineGuide => {
      itemBounds.vertical.forEach(itemBound => {
        const diff = Math.abs(lineGuide - itemBound.guide); // if the distance between guild line and object snap point is close we can consider this for snapping

        if (diff < GUIDELINE_OFFSET) {
          resultV.push({
            lineGuide: lineGuide,
            diff: diff,
            snap: itemBound.snap,
            offset: itemBound.offset
          });
        }
      });
    });
    lineGuideStops.horizontal.forEach(lineGuide => {
      itemBounds.horizontal.forEach(itemBound => {
        const diff = Math.abs(lineGuide - itemBound.guide);

        if (diff < GUIDELINE_OFFSET) {
          resultH.push({
            lineGuide: lineGuide,
            diff: diff,
            snap: itemBound.snap,
            offset: itemBound.offset
          });
        }
      });
    });
    const guides = []; // find closest snap

    const minV = resultV === null || resultV === void 0 ? void 0 : resultV.sort((a, b) => a.diff - b.diff)[0];
    const minH = resultH === null || resultH === void 0 ? void 0 : resultH.sort((a, b) => a.diff - b.diff)[0];

    if (minV) {
      guides.push({
        lineGuide: minV.lineGuide,
        offset: minV.offset,
        orientation: "V",
        snap: minV.snap
      });
    }

    if (minH) {
      guides.push({
        lineGuide: minH.lineGuide,
        offset: minH.offset,
        orientation: "H",
        snap: minH.snap
      });
    }

    return guides;
  };

  const drawGuides = guides => {
    guides.forEach(lg => {
      if (lg.orientation === "H") {
        const lines = new Konva.Line({
          points: [-6000, lg.lineGuide, 6000, lg.lineGuide],
          stroke: "rgb(0, 161, 255)",
          strokeWidth: 1,
          name: "guid-line",
          dash: [4, 6]
        });
        $layer.current.add(lines);
        $layer.current.batchDraw();
      } else if (lg.orientation === "V") {
        const lines = new Konva.Line({
          points: [lg.lineGuide, -6000, lg.lineGuide, 6000],
          stroke: "rgb(0, 161, 255)",
          strokeWidth: 1,
          name: "guid-line",
          dash: [4, 6]
        });
        $layer.current.add(lines);
        $layer.current.batchDraw();
      }
    });
  };

  const _onDragMove = e => {
    const linesArray = $layer.current.find(".guid-line");

    if (!!linesArray.length) {
      linesArray.forEach(item => item.destroy());
    }

    const lineGuideStops = getLineGuideStops(e.target);
    const itemBounds = getObjectSnappingEdges(e.target);
    const guides = getGuides(lineGuideStops, itemBounds);

    if (!guides.length) {
      return;
    }

    drawGuides(guides);
    guides.forEach(lg => {
      switch (lg.snap) {
        case "start":
          {
            switch (lg.orientation) {
              case "V":
                {
                  e.target.x(lg.lineGuide + lg.offset);
                  break;
                }

              case "H":
                {
                  e.target.y(lg.lineGuide + lg.offset);
                  break;
                }

              default:
                return;
            }

            break;
          }

        case "center":
          {
            switch (lg.orientation) {
              case "V":
                {
                  e.target.x(lg.lineGuide + lg.offset);
                  break;
                }

              case "H":
                {
                  e.target.y(lg.lineGuide + lg.offset);
                  break;
                }

              default:
                return;
            }

            break;
          }

        case "end":
          {
            switch (lg.orientation) {
              case "V":
                {
                  e.target.x(lg.lineGuide + lg.offset);
                  break;
                }

              case "H":
                {
                  e.target.y(lg.lineGuide + lg.offset);
                  break;
                }

              default:
                return;
            }

            break;
          }

        default:
          return;
      }
    });
  };

  const _onDragEnd = e => {
    const linesArray = $layer.current.find(".guid-line");

    if (!!linesArray.length) {
      linesArray.forEach(item => item.destroy());
    }

    $layer.current.batchDraw();
  };

  const checkDeselect = e => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();

    if (clickedOnEmpty) {
      unSelectAll();
      $tr.current.nodes([]);
      setNodes([]); // layerRef.current.remove(selectionRectangle);
    }
  };

  const updateSelectionRect = () => {
    const node = selectionRectRef.current;
    node.setAttrs({
      visible: selection.current.visible,
      x: Math.min(selection.current.x1, selection.current.x2),
      y: Math.min(selection.current.y1, selection.current.y2),
      width: Math.abs(selection.current.x1 - selection.current.x2),
      height: Math.abs(selection.current.y1 - selection.current.y2),
      fill: "rgba(0, 161, 255, 0.3)"
    });
    node.getLayer().batchDraw();
  };

  const oldPos = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);

  const onMouseDown = e => {
    const isElement = e.target.findAncestor(".elements-container");
    const isTransformer = e.target.findAncestor("Transformer");

    if (isElement || isTransformer) {
      return;
    }

    const pos = e.target.getStage().getPointerPosition();
    selection.current.visible = true;
    selection.current.x1 = pos.x;
    selection.current.y1 = pos.y;
    selection.current.x2 = pos.x;
    selection.current.y2 = pos.y;
    updateSelectionRect();
  };

  const onMouseMove = e => {
    if (!selection.current.visible) {
      return;
    }

    const pos = e.target.getStage().getPointerPosition();
    selection.current.x2 = pos.x;
    selection.current.y2 = pos.y;
    updateSelectionRect();
  };

  const onMouseUp = () => {
    oldPos.current = null;

    if (!selection.current.visible) {
      return;
    }

    const selBox = selectionRectRef.current.getClientRect();
    const elements = [];
    $layer.current.find(".object").forEach(elementNode => {
      const elBox = elementNode.getClientRect();

      if (Konva.Util.haveIntersection(selBox, elBox)) {
        elements.push(elementNode);
      }
    });
    $tr.current.nodes(elements);
    selection.current.visible = false; // disable click event

    Konva.listenClickTap = false;
    updateSelectionRect();
  };

  const onClickTap = e => {
    // if we are selecting with rect, do nothing
    if (selectionRectRef.current.visible()) {
      return;
    }

    let stage = e.target.getStage();
    let layer = $layer.current;
    let tr = $tr.current; // if click on empty area - remove all selections

    if (e.target === stage) {
      unSelectAll();
      setNodes([]);
      tr.nodes([]);
      layer.draw();
      return;
    } // do nothing if clicked NOT on our rectangles


    if (!e.target.hasName(".object")) {
      return;
    } // do we pressed shift or ctrl?


    const metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey;
    const isSelected = tr.nodes().indexOf(e.target) >= 0;

    if (!metaPressed && !isSelected) {
      // if no key pressed and the node is not selected
      // select just one
      tr.nodes([e.target]);
    } else if (metaPressed && isSelected) {
      // if we pressed keys and node was selected
      // we need to remove it from selection:
      const nodes = tr.nodes().slice(); // use slice to have new copy of array
      // remove node from array

      nodes.splice(nodes.indexOf(e.target), 1);
      tr.nodes(nodes);
    } else if (metaPressed && !isSelected) {
      // add the node into selection
      const nodes = tr.nodes().concat([e.target]);
      tr.nodes(nodes);
    }

    layer.draw();
  };

  return __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Stage"], _extends({
    ref: $stage,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onMouseMove: onMouseMove,
    onTouchStart: checkDeselect,
    onClick: onClickTap
  }, _utils_defaults__WEBPACK_IMPORTED_MODULE_9__["stageDimensions"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 9
    }
  }), __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Layer"], {
    ref: $layer,
    onDragMove: _onDragMove,
    onDragEnd: _onDragEnd,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 13
    }
  }, (_cardData$elements = cardData.elements) === null || _cardData$elements === void 0 ? void 0 : _cardData$elements.map((elem, i) => {
    if (elem.type === "rectangle") return __jsx(_Rectangle__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: i,
      shapeProps: elem,
      onSelect: e => {
        if (e.current !== undefined) {
          let temp = nodesArray;
          if (!nodesArray.includes(e.current)) temp.push(e.current);
          setNodes(temp);
          $tr.current.nodes(nodesArray);
          $tr.current.nodes(nodesArray);
          $tr.current.getLayer().batchDraw();
        }

        if (elem.id !== "shapes_background") setSelectedId(elem.id);
      } // onSelect={() => {
      //     setSelectedId(rect.id)
      // }}
      ,
      onChange: newAttrs => {
        setCardData(prev => {
          const index = prev.elements.findIndex(item => item.id === elem.id);
          prev.elements[index] = newAttrs;
        });
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 25
      }
    });
    if (elem.type === "circle") return __jsx(_UCircle__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: i,
      shapeProps: elem,
      onSelect: () => {
        setSelectedId(elem.id);
      },
      onChange: newAttrs => {
        setCardData(prev => {
          const index = prev.elements.findIndex(item => item.id === elem.id);
          prev.elements[index] = newAttrs;
        });
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 25
      }
    });
    if (elem.type === "line") return __jsx(_ULine__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: i,
      shapeProps: elem,
      onSelect: () => {
        setSelectedId(elem.id);
      },
      onChange: newAttrs => {
        setCardData(prev => {
          const index = prev.elements.findIndex(item => item.id === elem.id);
          prev.elements[index] = newAttrs;
        });
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434,
        columnNumber: 25
      }
    });
    if (elem.type === "polygon") return __jsx(_UPolygon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: i,
      shapeProps: elem,
      onSelect: () => {
        setSelectedId(elem.id);
      },
      onChange: newAttrs => {
        setCardData(prev => {
          const index = prev.elements.findIndex(item => item.id === elem.id);
          prev.elements[index] = newAttrs;
        });
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 450,
        columnNumber: 25
      }
    });
    if (elem.type === "svg") return __jsx(_USvg__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: i,
      svgProps: elem,
      onSelect: () => {
        setSelectedId(elem.id);
      },
      onChange: event => setCardData(prev => {
        const svgIndex = prev.elements.findIndex(svgItem => svgItem.id === elem.id);
        prev.elements[svgIndex] = _objectSpread(_objectSpread({}, prev.elements[svgIndex]), JSON.parse(JSON.stringify(event.target.attrs)));
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 466,
        columnNumber: 25
      }
    });
    if (elem.type === "image") return __jsx(_UImage__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: i,
      imageProps: elem,
      onSelect: () => {
        setSelectedId(elem.id);
      },
      onChange: event => setCardData(prev => {
        const imageIndex = prev.elements.findIndex(img => img.id === elem.id);
        prev.elements[imageIndex] = _objectSpread(_objectSpread({}, prev.elements[imageIndex]), JSON.parse(JSON.stringify(event.target.attrs)));
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 483,
        columnNumber: 25
      }
    });
    if (elem.type === "text") return __jsx(_UText__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: i,
      textProps: elem,
      onSelect: () => {
        setSelectedId(elem.id);
      },
      onChange: event => setCardData(prev => {
        const txtIndex = prev.elements.findIndex(txt => txt.id === elem.id);
        prev.elements[txtIndex] = _objectSpread({}, event.target.attrs);
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 500,
        columnNumber: 25
      }
    });
  }), __jsx(_UTransformer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: `tr${selectedId}`,
    $tr: $tr,
    selectedShapeName: selectedId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 17
    }
  }), __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Rect"], {
    fill: "rgba(0,0,255,0.5)",
    ref: selectionRectRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MainStage);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/Rectangle.tsx":
/*!*****************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/Rectangle.tsx ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-image */ "use-image");
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_image__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["patternImageUrl"];
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\MainCanvas\\Rectangle.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Rectangle = ({
  shapeProps,
  onSelect,
  onChange
}) => {
  const shapeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const {
    patternImageUrl
  } = shapeProps,
        restProps = _objectWithoutProperties(shapeProps, _excluded);

  const [image] = use_image__WEBPACK_IMPORTED_MODULE_2___default()(patternImageUrl || null);
  const rectWidth = restProps.width;
  const rectHeight = restProps.height;
  const imageWidth = image ? image.width : 10;
  const imageHeight = image ? image.height : 10;
  const patternScale = restProps.patternScale || Math.max(rectWidth / imageWidth, rectHeight / imageHeight);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Rect"], _extends({
    ref: shapeRef,
    onClick: onSelect,
    onTap: onSelect,
    draggable: true,
    strokeScaleEnabled: false,
    onTransformEnd: e => {
      // transformer is changing scale of the node
      // and NOT its width or height
      // but in the store we have only width and height
      // to match the data better we will reset scale on transform end
      const node = shapeRef.current;
      const scaleX = node.scaleX();
      const scaleY = node.scaleY(); // we will reset it back

      node.scaleX(1);
      node.scaleY(1);
      onChange(_objectSpread(_objectSpread({}, shapeProps), {}, {
        x: node.x(),
        y: node.y(),
        width: Math.max(node.width() * scaleX),
        height: Math.max(node.height() * scaleY)
      }));
    },
    onDragEnd: e => {
      onChange(_objectSpread(_objectSpread({}, shapeProps), {}, {
        x: e.target.x(),
        y: e.target.y()
      }));
    }
  }, restProps, {
    fillPatternImage: image,
    fillPatternOffset: {
      x: 0,
      y: 0
    },
    fillPatternScaleX: patternScale,
    fillPatternScaleY: patternScale,
    fillPatternRepeat: "no-repeat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Rectangle);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UCircle.tsx":
/*!***************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UCircle.tsx ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-image */ "use-image");
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_image__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["patternImageUrl"];
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\MainCanvas\\UCircle.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const UCircle = ({
  shapeProps,
  onSelect,
  onChange
}) => {
  const shapeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const {
    patternImageUrl
  } = shapeProps,
        restProps = _objectWithoutProperties(shapeProps, _excluded);

  const [image] = use_image__WEBPACK_IMPORTED_MODULE_2___default()(patternImageUrl || null);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Circle"], _extends({
    ref: shapeRef,
    onClick: onSelect,
    onTap: onSelect,
    draggable: true,
    strokeScaleEnabled: false,
    onTransformEnd: e => {
      onChange(_objectSpread(_objectSpread({}, shapeProps), {}, {
        scaleX: e.target.attrs.scaleX,
        scaleY: e.target.attrs.scaleY
      }));
    },
    onDragEnd: e => {
      onChange(_objectSpread(_objectSpread({}, shapeProps), {}, {
        x: e.target.x(),
        y: e.target.y()
      }));
    }
  }, restProps, {
    fillPatternImage: image,
    fillPatternOffsetX: 0,
    fillPatternOffsetY: 0,
    fillPatternScaleX: 0.1,
    fillPatternScaleY: 0.1,
    fillPatternRepeat: "no-repeat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (UCircle);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UImage.tsx":
/*!**************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UImage.tsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-image */ "use-image");
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_image__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["src"];
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\MainCanvas\\UImage.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const UImage = ({
  imageProps,
  onChange,
  onSelect
}) => {
  const [image] = use_image__WEBPACK_IMPORTED_MODULE_2___default()(imageProps.src);

  const {
    src
  } = imageProps,
        rest = _objectWithoutProperties(imageProps, _excluded);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Image"], _extends({}, rest, {
    image: image,
    onClick: () => onSelect(imageProps.id),
    onTap: () => onSelect(imageProps.id),
    onDragEnd: onChange,
    onTransformEnd: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (UImage);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/ULine.tsx":
/*!*************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/ULine.tsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-image */ "use-image");
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_image__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["patternImageUrl"];
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\MainCanvas\\ULine.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ULine = ({
  shapeProps,
  onSelect,
  onChange
}) => {
  const shapeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const {
    patternImageUrl
  } = shapeProps,
        restProps = _objectWithoutProperties(shapeProps, _excluded);

  const [image] = use_image__WEBPACK_IMPORTED_MODULE_2___default()(patternImageUrl || null);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Line"], _extends({
    ref: shapeRef,
    onClick: onSelect,
    onTap: onSelect,
    draggable: true,
    strokeScaleEnabled: false,
    onTransformEnd: e => {
      onChange(_objectSpread(_objectSpread({}, shapeProps), {}, {
        scaleX: e.target.attrs.scaleX,
        scaleY: e.target.attrs.scaleY
      }));
    },
    onDragEnd: e => {
      onChange(_objectSpread(_objectSpread({}, shapeProps), {}, {
        x: e.target.x(),
        y: e.target.y()
      }));
    }
  }, restProps, {
    fillPatternImage: image,
    fillPatternOffsetX: 0,
    fillPatternOffsetY: 0,
    fillPatternScaleX: 0.1,
    fillPatternScaleY: 0.1,
    fillPatternRepeat: "no-repeat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ULine);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UPolygon.tsx":
/*!****************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UPolygon.tsx ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-image */ "use-image");
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_image__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["patternImageUrl"];
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\MainCanvas\\UPolygon.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const UPolygon = ({
  shapeProps,
  onSelect,
  onChange
}) => {
  const shapeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const {
    patternImageUrl
  } = shapeProps,
        restProps = _objectWithoutProperties(shapeProps, _excluded);

  const [image] = use_image__WEBPACK_IMPORTED_MODULE_2___default()(patternImageUrl || null);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["RegularPolygon"], _extends({
    ref: shapeRef,
    onClick: onSelect,
    onTap: onSelect,
    draggable: true,
    strokeScaleEnabled: false,
    onDragEnd: e => {
      onChange(_objectSpread(_objectSpread({}, shapeProps), {}, {
        x: e.target.x(),
        y: e.target.y()
      }));
    },
    onTransformEnd: e => {
      onChange(_objectSpread(_objectSpread({}, shapeProps), {}, {
        scaleX: e.target.attrs.scaleX,
        scaleY: e.target.attrs.scaleY
      }));
    }
  }, restProps, {
    fillPatternImage: image,
    fillPatternOffsetX: 0,
    fillPatternOffsetY: 0,
    fillPatternScaleX: 0.1,
    fillPatternScaleY: 0.1,
    fillPatternRepeat: "no-repeat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (UPolygon);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/USvg.tsx":
/*!************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/USvg.tsx ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-image */ "use-image");
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utils/svg */ "./src/utils/svg.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\MainCanvas\\USvg.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const USvg = ({
  svgProps,
  onChange,
  onSelect
}) => {
  const [image] = use_image__WEBPACK_IMPORTED_MODULE_2___default()(_utils_svg__WEBPACK_IMPORTED_MODULE_3__["svgToURL"](_utils_svg__WEBPACK_IMPORTED_MODULE_3__["replaceColors"](svgProps.svgString, svgProps.colorMap)));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Image"], _extends({}, svgProps, {
    image: image,
    onClick: onSelect,
    onTap: onSelect,
    onDragEnd: onChange,
    onTransformEnd: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (USvg);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UText.tsx":
/*!*************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UText.tsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\MainCanvas\\UText.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const UText = ({
  textProps,
  onChange,
  onSelect
}) => {
  const textNode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Text"], _extends({
    ref: textNode,
    draggable: true,
    onClick: onSelect,
    onTap: onSelect,
    onTransform: e => {
      let SX = textNode.current.scaleX();
      let W = textNode.current.width();
      textNode.current.setAttrs({
        // ...textNode.current.getAttrs(),
        // fontSize: isWordWrapping ? textNode.current.fontSize() : textNode.current.fontSize() * textNode.current.scaleX(),
        width: W * SX,
        scaleX: 1,
        scaleY: 1
      });
    } // onTransformEnd={onChange}
    ,
    onDragEnd: onChange
  }, textProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UText);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UTransformer.tsx":
/*!********************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UTransformer.tsx ***!
  \********************************************************************************************************/
/*! exports provided: MIN_WIDTH, MIN_HEIGHT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_WIDTH", function() { return MIN_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_HEIGHT", function() { return MIN_HEIGHT; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\MainCanvas\\UTransformer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const MIN_WIDTH = 50;
const MIN_HEIGHT = 30;

const TransformerComponent = ({
  id,
  selectedShapeName,
  $tr
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    checkNode();
  }, [selectedShapeName]);

  const checkNode = () => {
    const stage = $tr.current.getStage();
    const selectedNode = stage.findOne("#" + selectedShapeName);

    if (selectedNode) {
      $tr.current.nodes([selectedNode]);
    } else {
      $tr.current.detach();
    }

    $tr.current.getLayer().batchDraw();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Transformer"], {
    id: id,
    ref: $tr,
    ignoreStroke: true,
    boundBoxFunc: (oldBox, newBox) => {
      if (selectedShapeName === "shapes_background") return oldBox;

      if (newBox.width < MIN_WIDTH) {
        return _objectSpread(_objectSpread({}, oldBox), {}, {
          width: MIN_WIDTH
        });
      }

      return newBox;
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TransformerComponent);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/index.tsx":
/*!*************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/index.tsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webfontloader */ "webfontloader");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainStage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainStage */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/MainStage/index.tsx");
/* harmony import */ var _contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../contexts/DesignToolContext */ "./src/contexts/DesignToolContext.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\MainCanvas\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const DesignTool = () => {
  const {
    designToolnavigator,
    setDesignToolnavigator,
    designHeadernavigator,
    setDesignHeadernavigator,
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_3__["DesignToolContext"]);

  const handleEscape = e => {
    if (e.key === "Escape") {
      setSelectedId();
    }
  };

  const dude = cardData.elements.find((item, index) => selectedId === item.id);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!selectedId) return;
    const dude = cardData.elements.find((item, index) => selectedId === item.id);

    if ((dude === null || dude === void 0 ? void 0 : dude.type) === 'text') {
      setDesignHeadernavigator('text');
    }

    if ((dude === null || dude === void 0 ? void 0 : dude.type) === 'rectangle' || (dude === null || dude === void 0 ? void 0 : dude.type) === 'svg' || (dude === null || dude === void 0 ? void 0 : dude.type) === 'circle' || (dude === null || dude === void 0 ? void 0 : dude.type) === 'polygon') {
      setDesignHeadernavigator('rect');
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener("keydown", handleEscape, false);
    webfontloader__WEBPACK_IMPORTED_MODULE_1___default.a.load({
      google: {
        families: ['Comfortaa', 'Josefin Sans', 'Euphoria Script', 'Oswald', 'Alfa Slab One', 'Bangers', 'Caveat', 'DM Sans', 'East Sea Dokdo', 'Homemade Apple', 'Kristi', 'Lobster Two', 'Maven Pro', 'Monoton', 'Montserrat', 'Playfair Display', 'Press Start 2P', 'Raleway', 'Roboto Slab', 'Shadows Into Light', 'Swanky and Moo Moo']
      }
    });
    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, []);
  return __jsx("div", {
    className: "min-w-max  flex justify-center flex-col h-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex justify-center mt-5 h-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx(_MainStage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cardData: cardData,
    setCardData: setCardData,
    selectedId: selectedId,
    setSelectedId: setSelectedId,
    unSelectAll: () => setSelectedId(null),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DesignTool);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/CardHeader.tsx":
/*!*************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/CardHeader.tsx ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ElementHeader_ElementHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ElementHeader/ElementHeader */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/ElementHeader/ElementHeader.tsx");
/* harmony import */ var _components_TextHeader_TextHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TextHeader/TextHeader */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/TextHeader/TextHeader.tsx");
/* harmony import */ var _contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../contexts/DesignToolContext */ "./src/contexts/DesignToolContext.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\tailwindComponents\\CardHeader\\CardHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CardHeader = () => {
  const {
    designToolnavigator,
    setDesignToolnavigator,
    designHeadernavigator,
    setDesignHeadernavigator,
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_3__["DesignToolContext"]);
  return __jsx("div", {
    style: {
      height: "61px"
    },
    className: "z-50 flex-col py-2  \r ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, designHeadernavigator === "text" && __jsx(_components_TextHeader_TextHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 50
    }
  }), designHeadernavigator === "rect" && __jsx(_components_ElementHeader_ElementHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 50
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CardHeader);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/ElementHeader/ElementHeader.tsx":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/ElementHeader/ElementHeader.tsx ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../contexts/DesignToolContext */ "./src/contexts/DesignToolContext.tsx");
/* harmony import */ var _Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../Hooks/CardElementsFunctions */ "./src/Hooks/CardElementsFunctions/index.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\tailwindComponents\\CardHeader\\components\\ElementHeader\\ElementHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const image = __webpack_require__(/*! ./../../../../../../../../../../assets/images/opacity.png */ "./src/assets/images/opacity.png");

const ElementHeader = () => {
  // const [openstyle, setOpenstyle] = React.useState(false);
  // const [open, setOpen] = React.useState(false);
  const [openstyle, setOpenstyle] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const {
    0: openDropDown,
    1: setopenDropDown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // !!state?false:true;

  const {
    designToolnavigator,
    setDesignToolnavigator,
    designHeadernavigator,
    setDesignHeadernavigator,
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__["DesignToolContext"]);
  const {
    handleBorderWidthChange,
    handleStrokeColor
  } = Object(_Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_2__["default"])(); // !!state?false:true;

  return __jsx("div", {
    className: "flex justify-between w-11/12 ml-14",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "w-10 h-10 rounded-md bg-fuschia",
    onClick: () => setDesignToolnavigator("fonttool"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "ml-10 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "relative mt-1",
    onClick: () => setopenDropDown(!!openDropDown ? false : true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx("button", {
    type: "button",
    className: "relative w-32 py-2 pl-3 pr-10 text-left border-2 rounded-lg shadow-sm cursor-default h-9 border-bordercolor focus:outline-none focus:ring-border focus:ring-gray300 focus:border-gray300 sm:text-sm",
    "aria-haspopup": "listbox",
    "aria-expanded": "true",
    "aria-labelledby": "listbox-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "block truncate border-4 border-elementColor bg-elementColor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }, __jsx("svg", {
    width: "8",
    height: "6",
    viewBox: "0 0 8 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 33
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M0.234315 0.834291C0.546734 0.521871 1.05327 0.521871 1.36569 0.834291L4 3.46861L6.63431 0.834291C6.94673 0.521871 7.45327 0.521871 7.76568 0.834291C8.0781 1.14671 8.0781 1.65324 7.76568 1.96566L4.56569 5.16567C4.25327 5.47809 3.74673 5.47809 3.43431 5.16567L0.234315 1.96566C-0.0781049 1.65324 -0.0781049 1.14671 0.234315 0.834291Z",
    fill: "#9CA3AF",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 37
    }
  })))), __jsx("ul", {
    className: "absolute z-10 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg w-52 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
    role: "listbox",
    "aria-labelledby": "listbox-label",
    "aria-activedescendant": "listbox-option-3",
    style: {
      display: openDropDown ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, __jsx("li", {
    className: "relative w-full py-2 pl-8 pr-4 text-gray-900 cursor-default select-none ",
    id: "listbox-option-0",
    role: "option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex w-full",
    onClick: () => handleBorderWidthChange(15),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "block w-full h-4 truncate border-4 border-elementColor bg-elementColor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 41
    }
  }, "4"))), __jsx("div", {
    className: "flex mb-2 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex w-full",
    onClick: () => handleBorderWidthChange(10),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "block w-full h-2 mt-2 font-normal truncate border-2 border-elementColor bg-elementColor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "ml-2 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 41
    }
  }, "2"))), __jsx("div", {
    className: "flex ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex w-full",
    onClick: () => handleBorderWidthChange(5),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "block w-full h-1 mt-2 font-normal truncate border-2 border-elementColor bg-elementColor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 41
    }
  }, "1"))), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "grid grid-cols-1 gap-4 mt-4 sm:grid-cols-3 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "w-10 h-10 rounded-md bg-indigo600",
    onClick: () => handleStrokeColor("#4F46E5"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 37
    }
  }), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-fuschia",
    onClick: () => handleStrokeColor("#EF5DA8"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 37
    }
  }), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-greenish",
    onClick: () => handleStrokeColor("#5DEFC3"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 37
    }
  }), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-yellowish",
    onClick: () => handleStrokeColor("#EEA146"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 37
    }
  }), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-redish",
    onClick: () => handleStrokeColor("#EE4646"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 37
    }
  }), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-gray900",
    onClick: () => handleStrokeColor("#111827"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 37
    }
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ElementHeader);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/TextHeader/TextHeader.tsx":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/TextHeader/TextHeader.tsx ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-range */ "react-range");
/* harmony import */ var react_range__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_range__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../contexts/DesignToolContext */ "./src/contexts/DesignToolContext.tsx");
/* harmony import */ var _Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../../Hooks/CardElementsFunctions */ "./src/Hooks/CardElementsFunctions/index.tsx");
/* harmony import */ var _TransformModal_TransformModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TransformModal/TransformModal */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/TransformModal/TransformModal.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\tailwindComponents\\CardHeader\\components\\TextHeader\\TextHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const image = __webpack_require__(/*! ./../../../../../../../../../../assets/images/opacity.png */ "./src/assets/images/opacity.png");

const TextHeader = () => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [showeModal, seteShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [openstyle, setOpenstyle] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([0]);
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false); //   const [showTransformModal, setShowTransformModal] = React.useState(false);

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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_2__["DesignToolContext"]);
  const {
    handleFontStyle,
    handleTextAlign
  } = Object(_Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return __jsx("div", {
    className: "flex flex-row items-center justify-center gap-4 px-6 h-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative inline-block text-left  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("div", {
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "menu-button" // onClick={() => setOpen(!open)}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx("button", {
    //   onClick={() => setOpen(true)}
    type: "button",
    className: "inline-flex justify-center w-full px-4 py-2 text-sm font-medium bg-white border rounded-md shadow-sm border-bordercolor text-gray900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",
    id: "menu-button",
    "aria-expanded": "true",
    "aria-haspopup": "true",
    onClick: () => setDesignToolnavigator('texttool'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, "Poppins thin")))), __jsx("div", {
    className: "z-50 flex items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative inline-block text-left ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx("div", {
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "menu-button",
    onClick: () => setOpen(!open),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => setOpen(true),
    type: "button",
    className: "inline-flex justify-center w-full px-4 py-2 text-sm font-medium bg-white border rounded-md shadow-sm border-bordercolor text-gray900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",
    id: "menu-button",
    "aria-expanded": "true",
    "aria-haspopup": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, "Heading 1"))), __jsx("div", {
    style: {
      display: open ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx(_TransformModal_TransformModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    closeModal: () => {
      setOpen(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "ml-10 text-lg font-bold text-black",
    onClick: () => setDesignToolnavigator('fonttool'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, __jsx("svg", {
    className: "mt-2",
    width: "30",
    height: "30",
    viewBox: "0 0 36 38",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 29
    }
  }, __jsx("path", {
    d: "M12.392 27L13.9943 22.3807H20.8125L22.4062 27H25.2017L18.9205 9.54545H15.8778L9.59659 27H12.392ZM14.7614 20.1648L17.3352 12.7159H17.4716L20.0455 20.1648H14.7614Z",
    fill: "black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 33
    }
  }), __jsx("g", {
    filter: "url(#filter0_dd)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 33
    }
  }, __jsx("rect", {
    x: "3",
    y: "30",
    width: "30",
    height: "4",
    rx: "2",
    fill: "#F9FAFB",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 37
    }
  })), __jsx("rect", {
    x: "3",
    y: "30",
    width: "17",
    height: "4",
    rx: "2",
    fill: "#6366F1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 33
    }
  }), __jsx("defs", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 33
    }
  }, __jsx("filter", {
    id: "filter0_dd",
    x: "0",
    y: "28",
    width: "36",
    height: "10",
    filterUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 37
    }
  }, __jsx("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 41
    }
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 41
    }
  }), __jsx("feOffset", {
    dy: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 41
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 41
    }
  }), __jsx("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 41
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 41
    }
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 41
    }
  }), __jsx("feOffset", {
    dy: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 41
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "1.5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 41
    }
  }), __jsx("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 41
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in2: "effect1_dropShadow",
    result: "effect2_dropShadow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 41
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect2_dropShadow",
    result: "shape",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 41
    }
  }))))))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "ml-10 text-lg font-bold text-black",
    onClick: () => handleFontStyle("bold"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, "B")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "ml-10 text-lg italic font-bold text-black",
    onClick: () => handleFontStyle("italic"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, "I")), __jsx("div", {
    className: "py-4 ml-6 border-r-2 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }), __jsx("button", {
    className: "ml-6 relative",
    onClick: () => setShowModal(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, __jsx("svg", {
    width: "23",
    height: "18",
    viewBox: "0 0 23 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M1 1H22M1 9H11.5M1 17H22",
    stroke: "#4B5563",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 25
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }, showModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "fixed z-10 inset-0 overflow-y-auto",
    "aria-labelledby": "modal-title",
    role: "dialog",
    "aria-modal": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 33
    }
  }, __jsx("div", {
    onClick: () => setShowModal(false),
    className: "fixed inset-0  transition-opacity",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 37
    }
  }), __jsx("div", {
    className: " absolute inline-block align-bottom w-40 bg-white rounded-lg px-4 justify-center pt-5 pb-4 overflow-hidden shadow-xl transform transition-all top-28 mt-2 self-end right-56 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "w-full flex gap-4 justify-center ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 41
    }
  }, __jsx("button", {
    onClick: () => handleTextAlign("justify"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 45
    }
  }, __jsx("svg", {
    width: "18",
    height: "14",
    viewBox: "0 0 18 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 96
    }
  }, __jsx("path", {
    d: "M1 1H17M1 7H17M1 13H17",
    stroke: "#111827",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 49
    }
  }))), __jsx("button", {
    onClick: () => handleTextAlign("left"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 45
    }
  }, __jsx("svg", {
    width: "18",
    height: "14",
    viewBox: "0 0 18 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 93
    }
  }, __jsx("path", {
    d: "M1 1H17M1 7H17M1 13H8",
    stroke: "#111827",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 49
    }
  }))), __jsx("button", {
    onClick: () => handleTextAlign("center"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 45
    }
  }, __jsx("svg", {
    width: "18",
    height: "10",
    viewBox: "0 0 18 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 95
    }
  }, __jsx("path", {
    d: "M1 1H17M1 9H17",
    stroke: "#111827",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 49
    }
  }))), __jsx("button", {
    onClick: () => handleTextAlign("right"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 45
    }
  }, __jsx("svg", {
    width: "18",
    height: "14",
    viewBox: "0 0 18 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 49
    }
  }, __jsx("path", {
    d: "M1 1H17M1 7H17M10 13H17",
    stroke: "#111827",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 53
    }
  })))))))) : null), __jsx("div", {
    className: "py-4 ml-6 border-r-2 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "ml-6 text-lg italic font-bold text-black ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 17
    }
  }, __jsx("button", {
    onClick: () => setDesignToolnavigator('effecttool'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 21
    }
  }, "Effects")), __jsx("div", {
    className: "py-4 ml-6 border-r-2 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 17
    }
  }), __jsx("button", {
    className: "ml-6",
    onClick: () => seteShowModal(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 17
    }
  }, showeModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "fixed z-10 inset-0 overflow-y-auto",
    "aria-labelledby": "modal-title",
    role: "dialog",
    "aria-modal": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 33
    }
  }, __jsx("div", {
    onClick: () => seteShowModal(false),
    className: "fixed inset-0  transition-opacity",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 37
    }
  }), __jsx("div", {
    className: " absolute inline-block align-bottom w-40  items-center bg-white rounded-lg px-4 justify-center pt-5 pb-4 overflow-hidden shadow-xl transform transition-all top-28 mt-2 self-end right-14 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "w-full flex gap-4 justify-center ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 41
    }
  }, __jsx(react_range__WEBPACK_IMPORTED_MODULE_1__["Range"], {
    step: 1,
    min: 0,
    max: 75,
    values: values,
    onChange: values => {
      setValues(values);
    },
    renderTrack: ({
      props,
      children
    }) => __jsx("div", _extends({}, props, {
      className: "w-full h-3 pr-2 my-4 bg-gray-200 rounded-md",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 53
      }
    }), children),
    renderThumb: ({
      props
    }) => __jsx("div", _extends({}, props, {
      className: "w-5 h-5 transform translate-x-10 bg-indigo-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 53
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 45
    }
  })))))) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (TextHeader);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/TransformModal/TransformModal.tsx":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/TransformModal/TransformModal.tsx ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SubNavBar_components_ElementSelector_components_Stickers_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../SubNavBar/components/ElementSelector/components/Stickers/styles.css */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Stickers/styles.css");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\tailwindComponents\\CardHeader\\components\\TransformModal\\TransformModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TransformModal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(({
  closeModal
}) => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [ShowToolTip, setShowToolTip] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const {
    0: openDropDown,
    1: setopenDropDown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: openMergeDropdown,
    1: setopenMergeDropdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const myRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleClickOutside = e => {
    //   console.log({ LOL: reference.current.contains(e.target), ee: e.target });
    if (!myRef.current.contains(e.target)) {
      // setShowModal(false);
      closeModal();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    ref: myRef,
    className: "fixed z-50 flex items-center justify-center overflow-x-hidden outline-none top-56 focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative w-auto max-w-3xl mx-auto my-6 h-96",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "relative flex flex-col w-full bg-white border-2 rounded-lg shadow-lg outline-none border-gray300 focus:outline-none ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex items-start justify-between p-5 rounded-t border-blueGray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, __jsx("div", {
    onClick: () => setopenDropDown(!!openDropDown ? false : true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("label", {
    id: "listbox-label",
    className: "block text-sm font-medium text-grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 19
    }
  }, "FallBack"), __jsx("div", {
    className: "relative mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 19
    }
  }, __jsx("button", {
    type: "button",
    className: "relative py-1 pl-3 pr-10 text-center bg-white border rounded-md shadow-sm cursor-default border-gray300 h-7 w-28 focus:outline-none focus:ring-1 focus:ring-gray300 focus:border-gray300 sm:text-sm",
    "aria-haspopup": "listbox",
    "aria-expanded": "true",
    "aria-labelledby": "listbox-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "block truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 23
    }
  }, "avatar.jpg"), __jsx("span", {
    className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 23
    }
  }, __jsx("svg", {
    className: "w-5 h-5 text-gray-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    "clip-rule": "evenodd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 27
    }
  })))), __jsx("ul", {
    className: "absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
    role: "listbox",
    "aria-labelledby": "listbox-label",
    "aria-activedescendant": "listbox-option-3",
    style: {
      display: openDropDown ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "relative w-full py-2 pl-3 text-gray-900 cursor-default select-none pr-9",
    id: "listbox-option-0",
    role: "option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "block font-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  }, "avatar"))))), __jsx("div", {
    className: "ml-2",
    onClick: () => setopenMergeDropdown(!!openMergeDropdown ? false : true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx("label", {
    id: "listbox-label",
    className: "block text-sm font-medium text-grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }, "Merge Tag"), __jsx("div", {
    className: "relative mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }, __jsx("button", {
    type: "button",
    className: "relative py-1 pl-3 pr-10 text-left bg-white border rounded-md shadow-sm cursor-default border-gray300 h-7 w-36 focus:outline-none focus:ring-1 focus:ring-gray300 focus:border-gray300 sm:text-sm",
    "aria-haspopup": "listbox",
    "aria-expanded": "true",
    "aria-labelledby": "listbox-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "block truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 23
    }
  }, "Image_custom"), __jsx("span", {
    className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 23
    }
  }, __jsx("svg", {
    className: "w-5 h-5 text-gray300",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 25
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    "clip-rule": "evenodd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 27
    }
  })))), __jsx("ul", {
    className: "absolute z-10 w-full py-1 mt-1 overflow-auto overflow-y-hidden text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
    role: "listbox",
    "aria-labelledby": "listbox-label",
    "aria-activedescendant": "listbox-option-3",
    style: {
      display: openMergeDropdown ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "relative w-full py-2 pl-3 text-gray-900 cursor-default select-none pr-9",
    id: "listbox-option-0",
    role: "option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "block font-normal ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 25
    }
  }, "Image_custom.png"))))), __jsx("div", {
    className: "mt-6 ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, __jsx("button", {
    type: "button",
    className: "inline-flex items-center w-32 px-3 py-2 text-sm font-medium leading-4 text-white border border-transparent rounded-md shadow-sm h-7 bg-indigo600 hover:bg-indigo700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 19
    }
  }, __jsx("svg", {
    className: "-ml-0.5 mr-2 h-4 w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 23
    }
  }), __jsx("path", {
    d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 23
    }
  })), "Add Image")))))), __jsx("div", {
    className: "fixed inset-0 z-40 opacity-25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 9
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (TransformModal);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/NavBar/NavBar.tsx":
/*!*****************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/NavBar/NavBar.tsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../contexts/DesignToolContext */ "./src/contexts/DesignToolContext.tsx");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/NavBar/style.css");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\NavBar\\NavBar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SideBarNav = () => {
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__["DesignToolContext"]);
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  console.log({
    treeee: designToolnavigator
  });
  return __jsx("div", {
    className: "h-full fixed flex  flex-col w-2/12 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-col justify-start text-left items-start leading-10  px-2 text-lightGray w-full  h-full mt-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: designToolnavigator === 'element' ? "w-full   bg-rightbackgroundcolor  h-10" : "w-full h-10 ",
    onClick: () => setDesignToolnavigator('element'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex items-center  hover:bg-rightbackgroundcolor  w-full hover:rounded-lg border-0 rounded-sm  pl-5 h-10 mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx("svg", {
    className: "text-svgcolor",
    width: "20",
    height: "18",
    viewBox: "0 0 20 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M2.31802 2.31802C0.56066 4.07538 0.56066 6.92462 2.31802 8.68198L10.0001 16.364L17.682 8.68198C19.4393 6.92462 19.4393 4.07538 17.682 2.31802C15.9246 0.56066 13.0754 0.56066 11.318 2.31802L10.0001 3.63609L8.68198 2.31802C6.92462 0.56066 4.07538 0.56066 2.31802 2.31802Z",
    stroke: "#C4C4C4",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  })), __jsx("p", {
    className: "text-lightGray font-medium pl-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, "Elements"))), __jsx("button", {
    className: designToolnavigator === "text" ? "w-full bg-rightbackgroundcolor h-10" : "w-full  h-10",
    onClick: () => setDesignToolnavigator('text'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex items-center hover:bg-rightbackgroundcolor w-full hover:rounded-lg border-0 rounded-sm  pl-5 mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "15",
    height: "16",
    viewBox: "0 0 15 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M13.8867 0.109375L14.0625 3.83594H13.6172C13.5312 3.17969 13.4141 2.71094 13.2656 2.42969C13.0234 1.97656 12.6992 1.64453 12.293 1.43359C11.8945 1.21484 11.3672 1.10547 10.7109 1.10547H8.47266V13.2461C8.47266 14.2227 8.57812 14.832 8.78906 15.0742C9.08594 15.4023 9.54297 15.5664 10.1602 15.5664H10.7109V16H3.97266V15.5664H4.53516C5.20703 15.5664 5.68359 15.3633 5.96484 14.957C6.13672 14.707 6.22266 14.1367 6.22266 13.2461V1.10547H4.3125C3.57031 1.10547 3.04297 1.16016 2.73047 1.26953C2.32422 1.41797 1.97656 1.70312 1.6875 2.125C1.39844 2.54688 1.22656 3.11719 1.17188 3.83594H0.726562L0.914062 0.109375H13.8867Z",
    fill: "#D1D5DB",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }
  })), __jsx("p", {
    className: "text-lightGray font-medium pl-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, "Text"))), __jsx("button", {
    className: designToolnavigator === "images" ? "w-full bg-rightbackgroundcolor h-10" : "w-full  h-10",
    onClick: () => setDesignToolnavigator('images'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex items-center hover:bg-rightbackgroundcolor w-full hover:rounded-sm border-0 rounded-sm  pl-5 mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M1 13L5.58579 8.41421C6.36683 7.63317 7.63316 7.63316 8.41421 8.41421L13 13M11 11L12.5858 9.41421C13.3668 8.63317 14.6332 8.63316 15.4142 9.41421L17 11M11 5H11.01M3 17H15C16.1046 17 17 16.1046 17 15V3C17 1.89543 16.1046 1 15 1H3C1.89543 1 1 1.89543 1 3V15C1 16.1046 1.89543 17 3 17Z",
    stroke: "#C4C4C4",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  })), __jsx("p", {
    className: "text-lightGray font-medium pl-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, "Images"))), __jsx("button", {
    className: designToolnavigator === "background" ? "w-full bg-rightbackgroundcolor h-10" : "w-full  h-10",
    onClick: () => setDesignToolnavigator('background'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex items-center hover:bg-rightbackgroundcolor w-full hover:rounded-sm border-0 rounded-sm  pl-5 mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M17 10V3C17 1.89543 16.1046 1 15 1H3C1.89543 1 1 1.89543 1 3V10M17 10V15C17 16.1046 16.1046 17 15 17H3C1.89543 17 1 16.1046 1 15V10M17 10H14.4142C14.149 10 13.8946 10.1054 13.7071 10.2929L11.2929 12.7071C11.1054 12.8946 10.851 13 10.5858 13H7.41421C7.149 13 6.89464 12.8946 6.70711 12.7071L4.29289 10.2929C4.10536 10.1054 3.851 10 3.58579 10H1",
    stroke: "#C4C4C4",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  })), __jsx("p", {
    className: "text-lightGray font-medium pl-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, "Backgrounds"))), __jsx("button", {
    className: designToolnavigator === "logo" ? "w-full bg-rightbackgroundcolor h-10" : "w-full  h-10",
    onClick: () => setDesignToolnavigator('logo'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex items-center hover:bg-rightbackgroundcolor w-full hover:rounded-sm border-0 rounded-sm  pl-5 mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M10 3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3V4C14 4.55228 14.4477 5 15 5H18C18.5523 5 19 5.44772 19 6V9C19 9.55228 18.5523 10 18 10H17C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14H18C18.5523 14 19 14.4477 19 15V18C19 18.5523 18.5523 19 18 19H15C14.4477 19 14 18.5523 14 18V17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17V18C10 18.5523 9.55228 19 9 19H6C5.44772 19 5 18.5523 5 18V15C5 14.4477 4.55228 14 4 14H3C1.89543 14 1 13.1046 1 12C1 10.8954 1.89543 10 3 10H4C4.55228 10 5 9.55228 5 9V6C5 5.44772 5.44772 5 6 5H9C9.55228 5 10 4.55228 10 4V3Z",
    stroke: "#C4C4C4",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 29
    }
  })), __jsx("p", {
    className: "text-lightGray font-medium pl-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }, "Logo"))), __jsx("div", {
    className: " mt-6  mb-1 flex  w-full justify-end relative items-center  mx-auto ",
    onClick: () => setShowModal(!showModal),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx("button", {
    onClick: () => setShowModal(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, __jsx("svg", {
    className: "mr-8",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55229 6.44772 9 7 9V12C7 12.5523 7.44772 13 8 13H9C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11V8C9 7.44772 8.55228 7 8 7H7Z",
    fill: "#4338CA",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 29
    }
  }))), showModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "absolute bottom-0   flex-col  mb-6 flex ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "relative z-10 p-3 text-xs leading-none text-white whitespace-no-wrap rounded-md bg-indigo500 shadow-lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 33
    }
  }, "Brandify Everything."), __jsx("div", {
    className: "w-3 h-3 transform rotate-45 -mt-2  flex justify-end bg-indigo500 z-50",
    style: {
      marginLeft: '94px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 33
    }
  }))) : null), __jsx("button", {
    className: "w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex w-9/12 items-center justify-center h-12 border-0 rounded-md bg-indigo600 px-auto  mx-auto relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, __jsx("svg", {
    className: "",
    width: "17",
    height: "20",
    viewBox: "0 0 17 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M13.2995 17.5994H0.5V0.800049H14.0994V15.1995",
    stroke: "#F9FAFB",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 29
    }
  }), __jsx("path", {
    d: "M0.5 6.7998L5.2998 2L10.0996 6.7998",
    stroke: "#F9FAFB",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 29
    }
  }), __jsx("path", {
    d: "M8.09961 4.79988L10.2995 2.59998L14.0994 6.39982",
    stroke: "#F9FAFB",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  }), __jsx("path", {
    d: "M8.09985 9.19904L6.49902 10.7999L14.8991 19.1999L16.4999 17.5991L8.09985 9.19904Z",
    stroke: "#F9FAFB",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 29
    }
  }), __jsx("path", {
    d: "M8.89551 13.1955L10.4954 11.5956",
    stroke: "#F9FAFB",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 29
    }
  }), __jsx("path", {
    d: "M6.49935 9.19973L4.89941 7.59979",
    stroke: "#F9FAFB",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 29
    }
  }), __jsx("path", {
    d: "M5.30013 10.7996H3.7002",
    stroke: "#F9FAFB",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 29
    }
  }), __jsx("path", {
    d: "M8.09961 7.99978V6.39984",
    stroke: "#F9FAFB",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 29
    }
  }), __jsx("path", {
    d: "M6.49976 12.3996L5.2998 13.5995",
    stroke: "#F9FAFB",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 29
    }
  }), __jsx("path", {
    d: "M9.69922 9.19971L10.8992 7.99976",
    stroke: "#F9FAFB",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 29
    }
  }), __jsx("path", {
    d: "M0.5 15.5994H11.2996",
    stroke: "#F9FAFB",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 29
    }
  })), __jsx("p", {
    className: "text-white font-medium pl-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }, "Brandify")))));
};

/* harmony default export */ __webpack_exports__["default"] = (SideBarNav);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/NavBar/style.css":
/*!****************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/NavBar/style.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".tooltip{\r\n    visibility: hidden;\r\n    position: absolute;\r\n  }\r\n  .has-tooltip:hover .tooltip {\r\n    visibility: visible;\r\n    z-index: 100;\r\n  }", "",{"version":3,"sources":["webpack://./src/Screens/CreateCardLayout/components/DesignTool/Components/NavBar/style.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,kBAAkB;EACpB;EACA;IACE,mBAAmB;IACnB,YAAY;EACd","sourcesContent":[".tooltip{\r\n    visibility: hidden;\r\n    position: absolute;\r\n  }\r\n  .has-tooltip:hover .tooltip {\r\n    visibility: visible;\r\n    z-index: 100;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Preview/components/Drawer/Drawer.tsx":
/*!************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Preview/components/Drawer/Drawer.tsx ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SubNavBar_components_ElementSelector_components_Stickers_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../SubNavBar/components/ElementSelector/components/Stickers/styles.css */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Stickers/styles.css");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Preview\\components\\Drawer\\Drawer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const image = __webpack_require__(/*! ./../../../../../../../../assets/images/preview.png */ "./src/assets/images/preview.png");


function Drawer({
  isOpen,
  setIsOpen
}) {
  return __jsx("main", {
    style: {
      height: "91vh"
    },
    className: " fixed overflow-y-auto no-scrollbar z-50  flex-grow   inset-0 transform ease-in-out " + (isOpen ? " transition-opacity opacity-100 duration-500 translate-x-0 translate-y-16  " : " transition-all delay-500  translate-x-full "),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: " w-screen max-w-lg right-0 absolute bg-transparent h-full  delay-400 duration-500 ease-in-out transition-all transform  " + (isOpen ? " translate-x-0  " : " translate-x-full "),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("article", {
    className: "relative flex flex-col w-screen h-full max-w-full pb-20 mb-8 overflow-y-scroll no-scrollbar ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex h-full ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "flex items-center w-4 h-full ",
    style: {
      marginTop: "89px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "fixed z-50 flex items-center h-full pl-4 mr-2 bg-transparent b 3xl:mt-top",
    onClick: () => {
      setIsOpen(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "flex flex-row items-center w-10 h-20 pl-2 ml-2 bg-white rounded-full rounded-r",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("svg", {
    className: "w-2",
    width: "14",
    height: "22",
    viewBox: "0 0 14 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 19
    }
  }, __jsx("path", {
    d: "M2.24023 2L11.9842 11L2.24023 20",
    stroke: "#374151",
    "stroke-width": "4",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }))))), __jsx("div", {
    className: "flex flex-col justify-start w-full h-full pt-3 mt-2 ml-6 bg-white 3xl:mt-3 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex justify-center ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: image,
    className: "border-2 shadow-lg border-bordercolor ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "mt-6 mb-6 bg-white px-14 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "flex flex-col justify-center mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pb-1 text-sm text-gray94",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }, "First_name"), __jsx("input", {
    className: "px-4 text-sm border-2 rounded-md outline-none border-bordercolor text-gray9f h-9",
    type: "text",
    placeholder: "Add first name to test",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "flex flex-col justify-center mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pb-1 text-sm text-gray94",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  }, "First_name"), __jsx("input", {
    className: "px-4 text-sm border-2 rounded-md outline-none border-bordercolor text-gray9f h-9",
    type: "text",
    placeholder: "Add first name to test",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "flex flex-col justify-center mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pb-1 text-sm text-gray94",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 19
    }
  }, "First_name"), __jsx("input", {
    className: "px-4 text-sm border-2 rounded-md outline-none border-bordercolor text-gray9f h-9",
    type: "text",
    placeholder: "Add first name to test",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  })), __jsx("button", {
    className: "w-full mb-8 mt-14",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-row items-center justify-center w-full h-12 mt-4 rounded-md bg-indigo600 i",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 19
    }
  }, __jsx("svg", {
    width: "16",
    height: "12",
    viewBox: "0 0 16 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M0.00300002 1.884L8 5.882L15.997 1.884C15.9674 1.37444 15.7441 0.895488 15.3728 0.545227C15.0016 0.194965 14.5104 -9.35847e-05 14 3.36834e-08H2C1.48958 -9.35847e-05 0.998447 0.194965 0.627178 0.545227C0.255908 0.895488 0.0326041 1.37444 0.00300002 1.884Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 23
    }
  }), __jsx("path", {
    d: "M16 4.118L8 8.118L0 4.118V10C0 10.5304 0.210714 11.0391 0.585786 11.4142C0.960859 11.7893 1.46957 12 2 12H14C14.5304 12 15.0391 11.7893 15.4142 11.4142C15.7893 11.0391 16 10.5304 16 10V4.118Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "pl-4 text-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, "Get sharable code")))))))), __jsx("section", {
    className: "w-screen h-full cursor-pointer ",
    onClick: () => {
      setIsOpen(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/SubNavBar.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/SubNavBar.tsx ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../contexts/DesignToolContext */ "./src/contexts/DesignToolContext.tsx");
/* harmony import */ var _components_BackgroundSelector_BackgroundSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BackgroundSelector/BackgroundSelector */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/BackgroundSelector.tsx");
/* harmony import */ var _components_ElementSelector_ElementSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ElementSelector/ElementSelector */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/ElementSelector.tsx");
/* harmony import */ var _components_ImageSelector_ImageSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ImageSelector/ImageSelector */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ImageSelector/ImageSelector.tsx");
/* harmony import */ var _components_LogoSelector_LogoSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/LogoSelector/LogoSelector */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/LogoSelector/LogoSelector.tsx");
/* harmony import */ var _components_TextSelector_TextSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/TextSelector/TextSelector */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/TextSelector.tsx");
/* harmony import */ var _components_TextSelector_components_FontStyleTool_FontStyletool__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/TextSelector/components/FontStyleTool/FontStyletool */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/FontStyleTool/FontStyletool.tsx");
/* harmony import */ var _components_TextSelector_components_FontColortool_FontColortool__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/TextSelector/components/FontColortool/FontColortool */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/FontColortool/FontColortool.tsx");
/* harmony import */ var _components_TextSelector_components_EffectStyletool_EffectStyletool__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/TextSelector/components/EffectStyletool/EffectStyletool */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/EffectStyletool/EffectStyletool.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\SubNavBar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const SubNavBar = () => {
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__["DesignToolContext"]);
  return __jsx("div", {
    className: "h-full flex flex-col w-full border-bordercolor border ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, designToolnavigator === 'element' && __jsx(_components_ElementSelector_ElementSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 51
    }
  }), designToolnavigator === 'text' && __jsx(_components_TextSelector_TextSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 48
    }
  }), designToolnavigator === 'images' && __jsx(_components_ImageSelector_ImageSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 50
    }
  }), designToolnavigator === 'background' && __jsx(_components_BackgroundSelector_BackgroundSelector__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 54
    }
  }), designToolnavigator === 'logo' && __jsx(_components_LogoSelector_LogoSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 48
    }
  }), designToolnavigator === 'texttool' && __jsx(_components_TextSelector_components_FontStyleTool_FontStyletool__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 52
    }
  }), designToolnavigator === 'fonttool' && __jsx(_components_TextSelector_components_FontColortool_FontColortool__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 52
    }
  }), designToolnavigator === 'effecttool' && __jsx(_components_TextSelector_components_EffectStyletool_EffectStyletool__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 54
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SubNavBar);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/BackgroundSelector.tsx":
/*!**************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/BackgroundSelector.tsx ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ElementSelector_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ElementSelector/components/SearchBar/SearchBar */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar.tsx");
/* harmony import */ var _components_AddBackgroundImage_AddBackgroundImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AddBackgroundImage/AddBackgroundImage */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/components/AddBackgroundImage/AddBackgroundImage.tsx");
/* harmony import */ var _components_BackgroundColor_BackgroundColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/BackgroundColor/BackgroundColor */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/components/BackgroundColor/BackgroundColor.tsx");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/style.css");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\BackgroundSelector\\BackgroundSelector.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const BackgroundSelector = () => {
  return __jsx("div", {
    className: " flex   flex-col justify-center w-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mt-6 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx(_ElementSelector_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "flex flex-col p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(_components_BackgroundColor_BackgroundColor__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "p-6 text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "separator",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(_components_AddBackgroundImage_AddBackgroundImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BackgroundSelector);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/components/AddBackgroundImage/AddBackgroundImage.tsx":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/components/AddBackgroundImage/AddBackgroundImage.tsx ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\BackgroundSelector\\components\\AddBackgroundImage\\AddBackgroundImage.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const image1 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/image.png */ "./src/assets/images/image.png");

const image2 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/image1.png */ "./src/assets/images/image1.png");

const image3 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/image3.png */ "./src/assets/images/image3.png");

const image4 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/image4.png */ "./src/assets/images/image4.png");

const image5 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/image5.png */ "./src/assets/images/image5.png");

const AddBackgroundImage = () => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  return __jsx("div", {
    className: "relative flex flex-col justify-center w-full p-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "text-xl font-bold text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "Add background image")), __jsx("button", {
    onClick: () => setShowModal(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex flex-row items-center justify-center w-full h-12 mt-4 rounded-md bg-bluish",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("svg", {
    width: "16",
    height: "12",
    viewBox: "0 0 16 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx("path", {
    d: "M0.00300002 1.884L8 5.882L15.997 1.884C15.9674 1.37444 15.7441 0.895488 15.3728 0.545227C15.0016 0.194965 14.5104 -9.35847e-05 14 3.36834e-08H2C1.48958 -9.35847e-05 0.998447 0.194965 0.627178 0.545227C0.255908 0.895488 0.0326041 1.37444 0.00300002 1.884Z",
    fill: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M16 4.118L8 8.118L0 4.118V10C0 10.5304 0.210714 11.0391 0.585786 11.4142C0.960859 11.7893 1.46957 12 2 12H14C14.5304 12 15.0391 11.7893 15.4142 11.4142C15.7893 11.0391 16 10.5304 16 10V4.118Z",
    fill: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  })), __jsx("p", {
    className: "ml-2 text-white ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, "Select from gallery"))), __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex flex-row items-center justify-center w-full h-12 mt-4 border-2 rounded-md bg-jacksonsGray border-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("path", {
    d: "M0.503 1.884L8.5 5.882L16.497 1.884C16.4674 1.37444 16.2441 0.895488 15.8728 0.545227C15.5016 0.194965 15.0104 -9.35847e-05 14.5 3.36834e-08H2.5C1.98958 -9.35847e-05 1.49845 0.194965 1.12718 0.545227C0.755908 0.895488 0.532604 1.37444 0.503 1.884Z",
    fill: "#4B5563",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M16.5 4.118L8.5 8.118L0.5 4.118V10C0.5 10.5304 0.710714 11.0391 1.08579 11.4142C1.46086 11.7893 1.96957 12 2.5 12H14.5C15.0304 12 15.5391 11.7893 15.9142 11.4142C16.2893 11.0391 16.5 10.5304 16.5 10V4.118Z",
    fill: "#4B5563",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  })), __jsx("p", {
    className: "ml-2 text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "Design on Canva"))), showModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "absolute z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none top-1 focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "relative w-auto max-w-3xl mx-auto my-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "flex items-start justify-between p-5 rounded-t border-blueGray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "z-50 flex items-center justify-center w-11/12 border rounded-md h-14 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "flex items-center justify-end w-auto p-3 text-sm text-grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 23
    }
  }, __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6Z",
    fill: "#9CA3AF",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 27
    }
  })))), __jsx("input", {
    className: "z-0 w-full h-12 text-sm rounded outline-none text-gray95 ",
    type: "text",
    placeholder: "Search from element",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  })), __jsx("button", {
    className: "float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none",
    onClick: () => setShowModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "block w-6 h-6 text-2xl text-black bg-transparent outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, "X"))), __jsx("div", {
    className: "relative flex-auto p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "text-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 19
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  }, "See All")), __jsx("div", {
    className: "grid w-full grid-cols-2 gap-2 mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 23
    }
  }, __jsx("img", {
    src: image1,
    className: "rounded-lg w-18 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 23
    }
  }, __jsx("img", {
    src: image2,
    className: "rounded-lg w-18 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 25
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 23
    }
  }, __jsx("img", {
    src: image3,
    className: "rounded-lg w-18 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 25
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 23
    }
  }, __jsx("img", {
    src: image4,
    className: "rounded-lg w-18 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 25
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 21
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 23
    }
  }, __jsx("img", {
    src: image5,
    className: "rounded-lg w-18 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 25
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 23
    }
  }, __jsx("img", {
    src: image4,
    className: "rounded-lg w-18 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 25
    }
  })))), __jsx("div", {
    className: "mt-2 text-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 19
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 21
    }
  }, "See All")), __jsx("div", {
    className: "p-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 19
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 21
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 23
    }
  }, __jsx("img", {
    src: image1,
    className: "rounded-lg w-18 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 25
    }
  })))))))), __jsx("div", {
    className: "fixed inset-0 z-40 bg-black opacity-25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }
  })) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (AddBackgroundImage);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/components/BackgroundColor/BackgroundColor.tsx":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/components/BackgroundColor/BackgroundColor.tsx ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BackgroundColorModal_BackgroundColorModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BackgroundColorModal/BackgroundColorModal */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/components/BackgroundColorModal/BackgroundColorModal.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\BackgroundSelector\\components\\BackgroundColor\\BackgroundColor.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const BackgroundColor = () => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false); //   const [backgroundmodal, setBackgroundModal] = React.useState(false);

  console.log({
    showModal
  });
  return __jsx("div", {
    className: "flex flex-col justify-center w-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "mt-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "text-xl font-bold text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "Select background color")), __jsx("div", {
    className: "flex flex-row items-center gap-4 mt-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx("path", {
    d: "M11.7059 4.05883H4.05882C2.36948 4.05883 1 5.42831 1 7.11765V23.9412C1 25.6305 2.36948 27 4.05882 27H20.8824C22.5717 27 23.9412 25.6305 23.9412 23.9412V16.2941M21.7783 1.89591C22.9728 0.701364 24.9095 0.701364 26.1041 1.89591C27.2986 3.09045 27.2986 5.02719 26.1041 6.22174L12.9729 19.3529H8.64706L8.64706 15.0271L21.7783 1.89591Z",
    stroke: "#4B5563",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }))), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-indigo600",
    onClick: () => setShowModal(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-fuschia",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-greenish",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-yellowish",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-redish",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  })), __jsx("div", {
    style: {
      display: showModal ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(_BackgroundColorModal_BackgroundColorModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    closeModal: () => {
      setShowModal(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BackgroundColor);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/components/BackgroundColorModal/BackgroundColorModal.tsx":
/*!************************************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/components/BackgroundColorModal/BackgroundColorModal.tsx ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\BackgroundSelector\\components\\BackgroundColorModal\\BackgroundColorModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const BackgroundColorModal = ({
  closeModal
}) => {
  const {
    0: fillType,
    1: setfillType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: openModal,
    1: setopenModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const myRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleClickOutside = e => {
    //   console.log({ LOL: reference.current.contains(e.target), ee: e.target });
    if (!myRef.current.contains(e.target)) {
      // setShowModal(false);
      closeModal();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    ref: myRef,
    className: "fixed z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "relative w-auto max-w-3xl mx-auto my-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg border-bordercolor focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("label", {
    className: "mt-4 ml-6 text-base font-medium leading-5 text-left text-black font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "Fill type"), __jsx("div", {
    className: "flex items-start justify-between p-5 rounded-t border-blueGray-200 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex gap-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx("button", {
    onClick: () => setfillType(false),
    type: "button",
    className: " w-14 font-inter h-10 inline-flex items-center px-3 py-1.5 border-2 border-gray300 text-xs font-medium rounded-md shadow-sm   " + (fillType === false ? "bg-SolidColor text-white" : "text-gradientColor bg-jacksonsGray"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 19
    }
  }, "Solid")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("button", {
    onClick: () => setfillType(true),
    type: "button",
    className: "w-28 font-inter h-10 inline-flex text-center items-center px-5 py-1.5 border-2 border-gray300 text-xs font-medium  rounded-md shadow-sm text-gradientColor bg-jacksonsGray  focus:bg-SolidColor focus:text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }, "Fill gradient")), __jsx("div", {
    className: "mt-2 ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: fillType === false ? "hidden" : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex ml-1 text-left justify-evenly ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx("input", {
    id: "push-everything",
    name: "push-notifications",
    type: "radio",
    className: "w-4 h-4 mt-1 text-indigo600 border-gray300 focus:ring-indigo500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  }), __jsx("p", {
    className: "ml-1 text-base font-medium leading-5 text-lightGray font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  }, "Linear")), __jsx("div", {
    className: "flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx("input", {
    id: "push-everything",
    name: "push-notifications",
    type: "radio",
    className: "w-4 h-4 mt-1 text-left text-indigo600 border-gray300 focus:ring-indigo500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  }), __jsx("p", {
    className: "ml-1 text-base font-medium leading-5 text-lightGray font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 19
    }
  }, "Radial"))), __jsx("div", {
    className: "h-32 mt-3 mb-5 ml-7 w-44 bg-gradient-to-r from-yellow via-red to-indigo700 left-5 top-32 p-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: "fixed inset-0 z-40 bg-transparent opacity-25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BackgroundColorModal);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/style.css":
/*!*************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/style.css ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "p.separator {\r\n    line-height:1em;\r\n    border-bottom:2px solid #D1D5DB;\r\n}\r\np.separator:before {\r\n    content:\"OR\";\r\n    position:relative;\r\n    left:55%;\r\n    right:40%;\r\n    margin-left:-2.5em;\r\n    padding:0 0.3em;\r\n    top:0.5em;\r\n    background:white;\r\n}", "",{"version":3,"sources":["webpack://./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/style.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,+BAA+B;AACnC;AACA;IACI,YAAY;IACZ,iBAAiB;IACjB,QAAQ;IACR,SAAS;IACT,kBAAkB;IAClB,eAAe;IACf,SAAS;IACT,gBAAgB;AACpB","sourcesContent":["p.separator {\r\n    line-height:1em;\r\n    border-bottom:2px solid #D1D5DB;\r\n}\r\np.separator:before {\r\n    content:\"OR\";\r\n    position:relative;\r\n    left:55%;\r\n    right:40%;\r\n    margin-left:-2.5em;\r\n    padding:0 0.3em;\r\n    top:0.5em;\r\n    background:white;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/ElementSelector.tsx":
/*!********************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/ElementSelector.tsx ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Buttons_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Buttons/Buttons */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Buttons/Buttons.tsx");
/* harmony import */ var _components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SearchBar/SearchBar */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar.tsx");
/* harmony import */ var _components_Shapes_Shapes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Shapes/Shapes */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Shapes/Shapes.tsx");
/* harmony import */ var _components_Stickers_Stickers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Stickers/Stickers */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Stickers/Stickers.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\ElementSelector\\ElementSelector.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ElementSelector = () => {
  return __jsx("div", {
    className: " flex   flex-col justify-center w-full  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mt-6 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "mt-6 w-full px-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx(_components_Shapes_Shapes__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "mt-6 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx(_components_Stickers_Stickers__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "mt-6 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(_components_Buttons_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ElementSelector);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Buttons/Buttons.tsx":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Buttons/Buttons.tsx ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Stickers_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Stickers/styles.css */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Stickers/styles.css");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\ElementSelector\\components\\Buttons\\Buttons.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const sideScroll = (element, speed, distance, step) => {
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);

    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
  }, speed);
};

const Buttons = () => {
  const contentWrapper = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  return __jsx("div", {
    className: "h-full flex  flex-col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-row justify-between items-center w-full mb-4 px-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-lg text-gray94 font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, "Buttons"), __jsx("button", {
    className: "text-md text-gray95 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, "See all")), __jsx("div", {
    className: "flex flex-row items-center justify-between h-28 px-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: " mt-2",
    onClick: () => {
      sideScroll(contentWrapper.current, 25, 100, -10);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 20 20",
    fill: "#D1D5DB",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 24
    }
  }, __jsx("path", {
    d: "M9 13L6 10M6 10L9 7M6 10L14 10M1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10Z",
    stroke: "#ffffff",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  })))), __jsx("div", {
    className: " h-28 z-50 -mr-6 bg-gradient-to-r w-6 from-white  bg-opacity-50 to-transparent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "flex flex-row flex-grow  gap-4 w-72  overflow-x-scroll flex-shrink-0  mx-2 no-scrollbar ",
    ref: contentWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "bg-fuschia text-white flex flex-row w-40 justify-center  h-12 rounded-md flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "flex flex-row justify-center items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, __jsx("svg", {
    className: "mr-2",
    width: "16",
    height: "12",
    viewBox: "0 0 16 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, __jsx("path", {
    d: "M0.00300002 1.884L8 5.882L15.997 1.884C15.9674 1.37444 15.7441 0.895488 15.3728 0.545227C15.0016 0.194965 14.5104 -9.35847e-05 14 3.36834e-08H2C1.48958 -9.35847e-05 0.998447 0.194965 0.627178 0.545227C0.255908 0.895488 0.0326041 1.37444 0.00300002 1.884Z",
    fill: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 33
    }
  }), __jsx("path", {
    d: "M16 4.118L8 8.118L0 4.118V10C0 10.5304 0.210714 11.0391 0.585786 11.4142C0.960859 11.7893 1.46957 12 2 12H14C14.5304 12 15.0391 11.7893 15.4142 11.4142C15.7893 11.0391 16 10.5304 16 10V4.118Z",
    fill: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 33
    }
  })), "Button text")), __jsx("div", {
    className: "bg-bluish text-white flex flex-row w-40 justify-center h-12 rounded-md  flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "flex flex-row justify-center items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, __jsx("svg", {
    className: "mr-2",
    width: "16",
    height: "12",
    viewBox: "0 0 16 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }, __jsx("path", {
    d: "M0.00300002 1.884L8 5.882L15.997 1.884C15.9674 1.37444 15.7441 0.895488 15.3728 0.545227C15.0016 0.194965 14.5104 -9.35847e-05 14 3.36834e-08H2C1.48958 -9.35847e-05 0.998447 0.194965 0.627178 0.545227C0.255908 0.895488 0.0326041 1.37444 0.00300002 1.884Z",
    fill: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 33
    }
  }), __jsx("path", {
    d: "M16 4.118L8 8.118L0 4.118V10C0 10.5304 0.210714 11.0391 0.585786 11.4142C0.960859 11.7893 1.46957 12 2 12H14C14.5304 12 15.0391 11.7893 15.4142 11.4142C15.7893 11.0391 16 10.5304 16 10V4.118Z",
    fill: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 33
    }
  })), "Button text")), __jsx("div", {
    className: "bg-yellowish text-white flex flex-row w-40 justify-center h-12 rounded-md flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "flex flex-row justify-center items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, __jsx("svg", {
    className: "mr-2",
    width: "16",
    height: "12",
    viewBox: "0 0 16 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 29
    }
  }, __jsx("path", {
    d: "M0.00300002 1.884L8 5.882L15.997 1.884C15.9674 1.37444 15.7441 0.895488 15.3728 0.545227C15.0016 0.194965 14.5104 -9.35847e-05 14 3.36834e-08H2C1.48958 -9.35847e-05 0.998447 0.194965 0.627178 0.545227C0.255908 0.895488 0.0326041 1.37444 0.00300002 1.884Z",
    fill: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 33
    }
  }), __jsx("path", {
    d: "M16 4.118L8 8.118L0 4.118V10C0 10.5304 0.210714 11.0391 0.585786 11.4142C0.960859 11.7893 1.46957 12 2 12H14C14.5304 12 15.0391 11.7893 15.4142 11.4142C15.7893 11.0391 16 10.5304 16 10V4.118Z",
    fill: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 33
    }
  })), "Button text")), __jsx("div", {
    className: "bg-greenish text-white flex flex-row w-40 justify-center h-12 rounded-md flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "flex flex-row justify-center items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, __jsx("svg", {
    className: "mr-2",
    width: "16",
    height: "12",
    viewBox: "0 0 16 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }, __jsx("path", {
    d: "M0.00300002 1.884L8 5.882L15.997 1.884C15.9674 1.37444 15.7441 0.895488 15.3728 0.545227C15.0016 0.194965 14.5104 -9.35847e-05 14 3.36834e-08H2C1.48958 -9.35847e-05 0.998447 0.194965 0.627178 0.545227C0.255908 0.895488 0.0326041 1.37444 0.00300002 1.884Z",
    fill: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 33
    }
  }), __jsx("path", {
    d: "M16 4.118L8 8.118L0 4.118V10C0 10.5304 0.210714 11.0391 0.585786 11.4142C0.960859 11.7893 1.46957 12 2 12H14C14.5304 12 15.0391 11.7893 15.4142 11.4142C15.7893 11.0391 16 10.5304 16 10V4.118Z",
    fill: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 33
    }
  })), "Button text"))), __jsx("div", {
    className: " h-28 z-50 -ml-6 bg-gradient-to-l w-6 from-white  bg-opacity-100 to-transparent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "mt-2",
    onClick: () => {
      sideScroll(contentWrapper.current, 25, 100, 10);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 20 20",
    fill: "#D1D5DB",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 24
    }
  }, __jsx("path", {
    d: "M11 7L14 10M14 10L11 13M14 10L6 10M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z",
    stroke: "#ffffff",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Buttons);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Shapes/Shapes.tsx":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Shapes/Shapes.tsx ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../Hooks/CardElementsFunctions */ "./src/Hooks/CardElementsFunctions/index.tsx");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../utils/defaults */ "./src/utils/defaults.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\ElementSelector\\components\\Shapes\\Shapes.tsx";
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

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Stickers/Stickers.tsx":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Stickers/Stickers.tsx ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../Hooks/CardElementsFunctions */ "./src/Hooks/CardElementsFunctions/index.tsx");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../../utils/generatesvgUrl */ "./src/utils/generatesvgUrl.ts");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Stickers/styles.css");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\ElementSelector\\components\\Stickers\\Stickers.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const sideScroll = (element, speed, distance, step) => {
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);

    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
  }, speed);
};

const Stickers = () => {
  const {
    handleAddSvg
  } = Object(_Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const svg = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_3__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_mailicon"]);
  const contentWrapper = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  return __jsx("div", {
    className: "h-full flex  flex-col ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-row justify-between items-center w-full px-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-lg text-gray94 font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "Stickers"), __jsx("button", {
    className: "text-md text-gray95 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, "See all")), __jsx("div", {
    className: "flex flex-row mt-4    overflow-x-scroll  items-center overflow-hidden  no-scrollbar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: " pl-2 mt-3",
    onClick: () => {
      sideScroll(contentWrapper.current, 25, 100, -10);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 20 20",
    fill: "#D1D5DB",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 24
    }
  }, __jsx("path", {
    d: "M9 13L6 10M6 10L9 7M6 10L14 10M1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10Z",
    stroke: "#ffffff",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 29
    }
  })))), __jsx("div", {
    className: " h-28 z-50 -mr-8 bg-gradient-to-r w-8 from-white  bg-opacity-80 to-transparent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "flex flex-row flex-grow  gap-4 h-28  w-56 overflow-x-scroll z-10 no-scrollbar flex-shrink-0    relative",
    ref: contentWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "flex-shrink-0",
    onClick: () => handleAddSvg(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_mailicon"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0 flex-grow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 108
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    onClick: () => handleAddSvg(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_mailicon"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 108
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    onClick: () => handleAddSvg(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_mailicon"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 108
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    onClick: () => handleAddSvg(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_mailicon"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 108
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    onClick: () => handleAddSvg(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_mailicon"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 108
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    onClick: () => handleAddSvg(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_mailicon"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 108
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    onClick: () => handleAddSvg(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_mailicon"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 108
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    onClick: () => handleAddSvg(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_mailicon"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 108
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    onClick: () => handleAddSvg(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_mailicon"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 108
    }
  }))), __jsx("div", {
    className: " h-28 z-50 -ml-8 bg-gradient-to-l w-8 from-white  bg-opacity-50 to-transparent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "pr-2  mt-3",
    onClick: () => {
      sideScroll(contentWrapper.current, 25, 100, 10);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 20 20",
    fill: "#D1D5DB",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 24
    }
  }, __jsx("path", {
    d: "M11 7L14 10M14 10L11 13M14 10L6 10M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z",
    stroke: "#ffffff",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Stickers);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Stickers/styles.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Stickers/styles.css ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".no-scrollbar::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n  \r\n  .no-scrollbar {\r\n    -ms-overflow-style: none;  /* IE and Edge */\r\n    scrollbar-width: none;  /* Firefox */\r\n  }", "",{"version":3,"sources":["webpack://./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Stickers/styles.css"],"names":[],"mappings":"AAAA;IACI,aAAa;EACf;;EAEA;IACE,wBAAwB,GAAG,gBAAgB;IAC3C,qBAAqB,GAAG,YAAY;EACtC","sourcesContent":[".no-scrollbar::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n  \r\n  .no-scrollbar {\r\n    -ms-overflow-style: none;  /* IE and Edge */\r\n    scrollbar-width: none;  /* Firefox */\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ImageSelector/ImageSelector.tsx":
/*!****************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ImageSelector/ImageSelector.tsx ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Frames_Frames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Frames/Frames */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ImageSelector/components/Frames/Frames.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\ImageSelector\\ImageSelector.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ImageSelector = () => {
  return __jsx("div", {
    className: " flex   flex-col  w-full p-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mt-6 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx(_components_Frames_Frames__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageSelector);

/***/ }),

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
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\ImageSelector\\components\\Frames\\Frames.tsx";
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
    className: " flex   flex-col  w-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex w-full flex-col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "font-bold text-xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "Frames"), __jsx("div", {
    className: " w-full gap-4 grid grid-cols-4     mt-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
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
      lineNumber: 21,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image2,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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
      lineNumber: 26,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image3,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
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
      lineNumber: 31,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image1,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
      lineNumber: 36,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image4,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
      lineNumber: 41,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image2,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
      lineNumber: 46,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image3,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
      lineNumber: 51,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image1,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 56,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image4,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
      lineNumber: 61,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image2,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
      lineNumber: 66,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image3,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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
      lineNumber: 71,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image1,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
      lineNumber: 76,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image4,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Frames);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/LogoSelector/LogoSelector.tsx":
/*!**************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/LogoSelector/LogoSelector.tsx ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ReceipentsLogo_ReceipentsLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ReceipentsLogo/ReceipentsLogo */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/LogoSelector/components/ReceipentsLogo/ReceipentsLogo.tsx");
/* harmony import */ var _components_BrandLogo_Brandlogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BrandLogo/Brandlogo */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/LogoSelector/components/BrandLogo/Brandlogo.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\LogoSelector\\LogoSelector.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ElementSelector = () => {
  return __jsx("div", {
    className: " flex flex-col justify-center w-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(_components_ReceipentsLogo_ReceipentsLogo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "border-b-2 border-bordercolor mt-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx(_components_BrandLogo_Brandlogo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ElementSelector);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/LogoSelector/components/AddLogoImageModal/AddLogoImageModal.tsx":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/LogoSelector/components/AddLogoImageModal/AddLogoImageModal.tsx ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\LogoSelector\\components\\AddLogoImageModal\\AddLogoImageModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const AddLogoImageModal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(({
  closeModal
}) => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [ShowToolTip, setShowToolTip] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const {
    0: openDropDown,
    1: setopenDropDown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: openMergeDropdown,
    1: setopenMergeDropdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const myRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleClickOutside = e => {
    //   console.log({ LOL: reference.current.contains(e.target), ee: e.target });
    if (!myRef.current.contains(e.target)) {
      closeModal();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center m-auto overflow-x-hidden overflow-y-hidden outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("div", {
    ref: myRef,
    className: "relative items-center flex-1 max-w-sm mx-auto h-96",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "relative flex flex-col w-full bg-white border-2 rounded-lg shadow-lg border-bordercolor focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex items-start justify-between p-4 rounded-t border-gray300",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "flex gap-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx("div", {
    onClick: () => setopenDropDown(!!openDropDown ? false : true),
    className: "ml-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 19
    }
  }, __jsx("label", {
    id: "listbox-label",
    className: "block text-xs not-italic font-medium leading-5 font-inter text-grey ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, "Fallback"), __jsx("div", {
    className: "relative mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx("button", {
    type: "button",
    className: "relative w-32 px-2 py-1 pl-5 pr-5 text-left bg-white border rounded-md shadow-sm cursor-default border-gray300 h-7 focus:outline-none focus:ring-1 focus:ring-gray300 focus:border-gray300 sm:text-sm",
    "aria-haspopup": "listbox",
    "aria-expanded": "true",
    "aria-labelledby": "listbox-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "block text-sm font-normal leading-5 truncate font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, "Image.png"), __jsx("span", {
    className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, __jsx("svg", {
    className: "w-5 h-5 text-darkgray",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 27
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    "clip-rule": "evenodd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  })))), __jsx("ul", {
    className: "absolute z-auto py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
    role: "listbox",
    "aria-labelledby": "listbox-label",
    "aria-activedescendant": "listbox-option-3",
    style: {
      display: openDropDown ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 23
    }
  }, __jsx("li", {
    className: "relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9",
    id: "listbox-option-0",
    role: "option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 27
    }
  }, "image.png"))))), __jsx("div", {
    onClick: () => setopenMergeDropdown(!!openMergeDropdown ? false : true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 19
    }
  }, __jsx("label", {
    id: "listbox-label",
    className: "block text-xs not-italic font-medium leading-5 font-inter text-grey ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, "Merge Tag"), __jsx("div", {
    className: "mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  }, __jsx("button", {
    type: "button",
    className: "relative px-2 py-1 pl-1 pr-8 text-left bg-white border rounded-md shadow-sm cursor-default border-gray300 w-36 h-7 focus:outline-none focus:ring-1 focus:ring-gray300 focus:border-gray300 sm:text-sm",
    "aria-haspopup": "listbox",
    "aria-expanded": "true",
    "aria-labelledby": "listbox-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "block text-sm font-normal leading-5 text-center truncate font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 25
    }
  }, "Logo_Recp"), __jsx("span", {
    className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 25
    }
  }, __jsx("svg", {
    className: "w-5 h-5 text-darkgray",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 27
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    "clip-rule": "evenodd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 29
    }
  })))), __jsx("ul", {
    className: "absolute py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg z-999 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
    role: "listbox",
    "aria-labelledby": "listbox-label",
    "aria-activedescendant": "listbox-option-3",
    style: {
      display: openMergeDropdown ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 23
    }
  }, __jsx("li", {
    className: "py-2 pl-3 text-gray-900 cursor-default select-none pr-9",
    id: "listbox-option-0",
    role: "option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 27
    }
  }, "Logo.png"))))), __jsx("div", {
    className: "mt-2 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "relative flex items-center justify-end ",
    onClick: () => setShowToolTip(!ShowToolTip),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => setShowToolTip(true),
    className: "mt-5 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 23
    }
  }, __jsx("svg", {
    className: "",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 25
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55229 6.44772 9 7 9V12C7 12.5523 7.44772 13 8 13H9C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11V8C9 7.44772 8.55228 7 8 7H7Z",
    fill: "#4338CA",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 27
    }
  }))), ShowToolTip ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "absolute bottom-0 flex flex-col mb-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 27
    }
  }, __jsx("span", {
    className: "relative z-auto h-24 p-3 text-xs leading-none text-white whitespace-no-wrap rounded-md shadow-lg ml-60 w-52 bg-indigo500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 29
    }
  }, "Cardclan will fetch logo of your receipent from his ", __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 35
    }
  }, "website URL"), __jsx("div", {
    className: "mt-5 mb-2 text-sm font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 31
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 33
    }
  }, "Got it"))), __jsx("div", {
    className: "z-50 flex justify-end w-3 h-3 -mt-2 transform rotate-45 bg-indigo500",
    style: {
      marginLeft: "400px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 29
    }
  }))) : null))))))), __jsx("div", {
    className: "fixed inset-0 z-40 bg-transparent opacity-25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (AddLogoImageModal);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/LogoSelector/components/BrandLogo/Brandlogo.tsx":
/*!********************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/LogoSelector/components/BrandLogo/Brandlogo.tsx ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../utils/generatesvgUrl */ "./src/utils/generatesvgUrl.ts");

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/LogoSelector/components/ReceipentsLogo/ReceipentsLogo.tsx":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/LogoSelector/components/ReceipentsLogo/ReceipentsLogo.tsx ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddLogoImageModal_AddLogoImageModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AddLogoImageModal/AddLogoImageModal */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/LogoSelector/components/AddLogoImageModal/AddLogoImageModal.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\LogoSelector\\components\\ReceipentsLogo\\ReceipentsLogo.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ReceipentsLogo = () => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false); // const [ShowToolTip, setShowToolTip] = React.useState(false);
  // const [openDropDown, setopenDropDown] = useState(false);
  // const [openMergeDropdown, setopenMergeDropdown] = useState(false);

  const myRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); // const handleClickOutside = (e) => {
  //   console.log(myRef.current, "==============", e.target);
  //   // if (!myRef.current.contains(e.target)) {
  //   if (myRef.current == e.target) {
  //     // console.log("Working", showModal);
  //     setShowModal(true);
  //   } else if (myRef.current !== e.target) {
  //     setShowModal(false);
  //   }
  // };
  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // });

  return __jsx("div", {
    className: "flex flex-col w-full h-full px-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "text-xl font-bold mt-14 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Receipents logo")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "mt-4 text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Add a dynamic logo to your personalized image")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "h-10 mt-4 bg-white border-dashed rounded-md border-bordercolor w-60",
    onClick: () => {
      setShowModal(true);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("svg", {
    width: "242",
    height: "38",
    viewBox: "0 0 242 38",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx("g", {
    filter: "url(#filter0_d)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("g", {
    "clip-path": "url(#clip0)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx("path", {
    d: "M19 19C19 12.9249 23.9249 8 30 8C36.0751 8 41 12.9249 41 19C41 25.0751 36.0751 30 30 30C23.9249 30 19 25.0751 19 19Z",
    fill: "#C7D2FE",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), __jsx("path", {
    d: "M30 13V19M30 19V25M30 19H36M30 19L24 19",
    stroke: "white",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }))), __jsx("path", {
    d: "M58.9787 24L59.9134 21.3054H63.8906L64.8203 24H66.451L62.7869 13.8182H61.0121L57.348 24H58.9787ZM60.3608 20.0128L61.8622 15.6676H61.9418L63.4432 20.0128H60.3608ZM70.5376 24.1491C71.9297 24.1491 72.4766 23.299 72.745 22.8118H72.8693V24H74.321V13.8182H72.8345V17.6016H72.745C72.4766 17.1293 71.9695 16.2642 70.5476 16.2642C68.7031 16.2642 67.3459 17.7209 67.3459 20.1967C67.3459 22.6676 68.6832 24.1491 70.5376 24.1491ZM70.8658 22.8814C69.5384 22.8814 68.8473 21.7131 68.8473 20.1818C68.8473 18.6655 69.5234 17.527 70.8658 17.527C72.1634 17.527 72.8594 18.5859 72.8594 20.1818C72.8594 21.7876 72.1484 22.8814 70.8658 22.8814ZM79.3013 24.1491C80.6934 24.1491 81.2402 23.299 81.5087 22.8118H81.633V24H83.0847V13.8182H81.5982V17.6016H81.5087C81.2402 17.1293 80.7331 16.2642 79.3113 16.2642C77.4668 16.2642 76.1096 17.7209 76.1096 20.1967C76.1096 22.6676 77.4469 24.1491 79.3013 24.1491ZM79.6294 22.8814C78.302 22.8814 77.611 21.7131 77.611 20.1818C77.611 18.6655 78.2871 17.527 79.6294 17.527C80.927 17.527 81.623 18.5859 81.623 20.1818C81.623 21.7876 80.9121 22.8814 79.6294 22.8814ZM90.3979 13.8182H88.9114V24H90.3979V13.8182ZM95.6143 24.1541C97.767 24.1541 99.174 22.5781 99.174 20.2166C99.174 17.8402 97.767 16.2642 95.6143 16.2642C93.4616 16.2642 92.0547 17.8402 92.0547 20.2166C92.0547 22.5781 93.4616 24.1541 95.6143 24.1541ZM95.6193 22.9062C94.2124 22.9062 93.5561 21.6783 93.5561 20.2116C93.5561 18.75 94.2124 17.5071 95.6193 17.5071C97.0163 17.5071 97.6726 18.75 97.6726 20.2116C97.6726 21.6783 97.0163 22.9062 95.6193 22.9062ZM104.035 27.0227C105.979 27.0227 107.48 26.1328 107.48 24.169V16.3636H106.024V17.6016H105.914C105.651 17.1293 105.124 16.2642 103.702 16.2642C101.857 16.2642 100.5 17.7209 100.5 20.152C100.5 22.5881 101.887 23.8857 103.692 23.8857C105.094 23.8857 105.636 23.0952 105.904 22.608H105.999V24.1094C105.999 25.3075 105.178 25.8246 104.05 25.8246C102.812 25.8246 102.33 25.2031 102.066 24.7656L100.789 25.2926C101.191 26.2273 102.21 27.0227 104.035 27.0227ZM104.02 22.6527C102.693 22.6527 102.002 21.6335 102.002 20.1321C102.002 18.6655 102.678 17.527 104.02 17.527C105.318 17.527 106.014 18.5859 106.014 20.1321C106.014 21.7081 105.303 22.6527 104.02 22.6527ZM112.691 24.1541C114.843 24.1541 116.25 22.5781 116.25 20.2166C116.25 17.8402 114.843 16.2642 112.691 16.2642C110.538 16.2642 109.131 17.8402 109.131 20.2166C109.131 22.5781 110.538 24.1541 112.691 24.1541ZM112.695 22.9062C111.289 22.9062 110.632 21.6783 110.632 20.2116C110.632 18.75 111.289 17.5071 112.695 17.5071C114.093 17.5071 114.749 18.75 114.749 20.2116C114.749 21.6783 114.093 22.9062 112.695 22.9062ZM124.831 24.1541C126.984 24.1541 128.391 22.5781 128.391 20.2166C128.391 17.8402 126.984 16.2642 124.831 16.2642C122.678 16.2642 121.271 17.8402 121.271 20.2166C121.271 22.5781 122.678 24.1541 124.831 24.1541ZM124.836 22.9062C123.429 22.9062 122.773 21.6783 122.773 20.2116C122.773 18.75 123.429 17.5071 124.836 17.5071C126.233 17.5071 126.889 18.75 126.889 20.2116C126.889 21.6783 126.233 22.9062 124.836 22.9062ZM131.537 19.4659C131.537 18.2479 132.282 17.5518 133.316 17.5518C134.326 17.5518 134.937 18.2131 134.937 19.3217V24H136.424V19.1428C136.424 17.2536 135.385 16.2642 133.824 16.2642C132.675 16.2642 131.924 16.7962 131.571 17.6065H131.477V16.3636H130.05V24H131.537V19.4659ZM143.778 13.8182H142.242V24H143.778V13.8182ZM145.896 24H147.382V19.2919C147.382 18.2628 148.103 17.5469 148.948 17.5469C149.774 17.5469 150.345 18.0938 150.345 18.924V24H151.827V19.1328C151.827 18.2131 152.389 17.5469 153.358 17.5469C154.144 17.5469 154.79 17.9844 154.79 19.0185V24H156.276V18.8793C156.276 17.1342 155.302 16.2642 153.92 16.2642C152.821 16.2642 151.996 16.7912 151.628 17.6065H151.548C151.215 16.7713 150.514 16.2642 149.495 16.2642C148.486 16.2642 147.735 16.7663 147.417 17.6065H147.323V16.3636H145.896V24ZM160.491 24.169C161.754 24.169 162.465 23.5277 162.748 22.956H162.808V24H164.26V18.929C164.26 16.7067 162.51 16.2642 161.297 16.2642C159.914 16.2642 158.642 16.821 158.145 18.2131L159.542 18.5312C159.76 17.9893 160.317 17.4673 161.316 17.4673C162.276 17.4673 162.768 17.9695 162.768 18.8345V18.8693C162.768 19.4112 162.211 19.4013 160.839 19.5604C159.392 19.7294 157.911 20.1072 157.911 21.8423C157.911 23.3438 159.039 24.169 160.491 24.169ZM160.814 22.9759C159.974 22.9759 159.368 22.598 159.368 21.8622C159.368 21.0668 160.074 20.7834 160.934 20.669C161.416 20.6044 162.559 20.4751 162.773 20.2614V21.2457C162.773 22.1506 162.052 22.9759 160.814 22.9759ZM169.441 27.0227C171.385 27.0227 172.887 26.1328 172.887 24.169V16.3636H171.43V17.6016H171.32C171.057 17.1293 170.53 16.2642 169.108 16.2642C167.264 16.2642 165.906 17.7209 165.906 20.152C165.906 22.5881 167.294 23.8857 169.098 23.8857C170.5 23.8857 171.042 23.0952 171.311 22.608H171.405V24.1094C171.405 25.3075 170.585 25.8246 169.456 25.8246C168.218 25.8246 167.736 25.2031 167.472 24.7656L166.195 25.2926C166.597 26.2273 167.617 27.0227 169.441 27.0227ZM169.426 22.6527C168.099 22.6527 167.408 21.6335 167.408 20.1321C167.408 18.6655 168.084 17.527 169.426 17.527C170.724 17.527 171.42 18.5859 171.42 20.1321C171.42 21.7081 170.709 22.6527 169.426 22.6527ZM178.171 24.1541C179.837 24.1541 181.015 23.3338 181.353 22.0909L179.946 21.8374C179.678 22.5582 179.031 22.9261 178.186 22.9261C176.914 22.9261 176.058 22.1009 176.019 20.6293H181.448V20.1023C181.448 17.343 179.797 16.2642 178.067 16.2642C175.939 16.2642 174.537 17.8849 174.537 20.2315C174.537 22.603 175.919 24.1541 178.171 24.1541ZM176.024 19.5156C176.083 18.4318 176.869 17.4922 178.077 17.4922C179.23 17.4922 179.986 18.3473 179.991 19.5156H176.024Z",
    fill: "#111827",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }), __jsx("rect", {
    x: "0.5",
    y: "0.5",
    width: "241",
    height: "37",
    rx: "5.5",
    stroke: "#D1D5DB",
    "stroke-dasharray": "5 5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }), __jsx("defs", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("filter", {
    id: "filter0_d",
    x: "17",
    y: "7",
    width: "26",
    height: "26",
    filterUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }), __jsx("feOffset", {
    dy: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }), __jsx("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow",
    result: "shape",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  })), __jsx("clipPath", {
    id: "clip0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, __jsx("path", {
    d: "M19 19C19 12.9249 23.9249 8 30 8C36.0751 8 41 12.9249 41 19C41 25.0751 36.0751 30 30 30C23.9249 30 19 25.0751 19 19Z",
    fill: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  })))))), __jsx("div", {
    style: {
      display: showModal ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, __jsx(_AddLogoImageModal_AddLogoImageModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    closeModal: () => {
      setShowModal(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ReceipentsLogo);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/TextSelector.tsx":
/*!**************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/TextSelector.tsx ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../Hooks/CardElementsFunctions */ "./src/Hooks/CardElementsFunctions/index.tsx");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../utils/defaults */ "./src/utils/defaults.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\TextSelector\\TextSelector.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const TextSelector = () => {
  const {
    handleAddNewText
  } = Object(_Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_1__["default"])();

  const handleTextAdd = type => {
    const textTypeFont = _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["fontSizeArray"].find(item => item.name === type).size;
    handleAddNewText(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["defaultTextBox"]), {}, {
      fontSize: textTypeFont
    }));
  };

  return __jsx("div", {
    className: " flex   flex-col justify-center w-full p-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: " w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "mt-3 font-bold text-xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "Click text to add to page")), __jsx("div", {
    className: "mt-6 w-full flex flex-col justify-start items-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: () => handleTextAdd("Header"),
    className: "text-5xl leading-none font-normal text-gray94 mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 84
    }
  }, "Heading 1")), __jsx("button", {
    onClick: () => handleTextAdd("Sub header"),
    className: "text-5xl leading-none font-normal text-gray94 mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 84
    }
  }, "Sub header")), __jsx("button", {
    onClick: () => handleTextAdd("body text"),
    className: "text-5xl leading-none font-normal text-gray94 mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 84
    }
  }, "body text"))), __jsx("div", {
    className: "mt-6 w-full border-b-2 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: " w-full flex flex-row items-center justify-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "mt-3 font-bold text-xl mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, "Available merge tags"), __jsx("svg", {
    className: "mt-3",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 12C9 12.5523 8.55229 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55229 11 9 11.4477 9 12ZM8 3C7.44772 3 7 3.44772 7 4V8C7 8.55228 7.44772 9 8 9C8.55229 9 9 8.55228 9 8V4C9 3.44772 8.55229 3 8 3Z",
    fill: "#4338CA",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "flex flex-row flex-wrap  gap-4  mt-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "hover:bg-indigo100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "hover:font-bold px-2 text-sm   font-normal py-1 border-2 border-bordercolor w-32 h-9 rounded-md ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, "Company_name")), __jsx("button", {
    className: "hover:bg-indigo100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "hover:font-bold px-2 text-sm   font-normal py-1 border-2 border-bordercolor  h-9 rounded-md ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, "Company_name")), __jsx("button", {
    className: "hover:bg-indigo100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "hover:font-bold px-2 text-sm   font-normal py-1 border-2 border-bordercolor  h-9 rounded-md ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, "Company_name")), __jsx("button", {
    className: "hover:bg-indigo100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "hover:font-bold px-2 text-sm   font-normal py-1 border-2 border-bordercolor  h-9 rounded-md ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, "Business_name Amazon")), __jsx("button", {
    className: "hover:bg-indigo100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "hover:font-bold px-2 text-sm   font-normal py-1 border-2 border-bordercolor  h-9 rounded-md ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, "Website_URL")), __jsx("button", {
    className: "hover:bg-indigo100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "hover:font-bold px-2 text-sm   font-normal py-1 border-2 border-bordercolor h-9 rounded-md ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, "Pakistan Super League"))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "text-indigo600 text-sm font-medium mt-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, "Didn\u2019t find the right merge tag?")), __jsx("div", {
    className: "border-dashed  px-2 py-1 border-2 border-bordercolor w-60 h-9 mt-4 rounded-md flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, __jsx("g", {
    filter: "url(#filter0_d)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, __jsx("g", {
    "clip-path": "url(#clip0)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M2 12C2 5.92487 6.92487 1 13 1C19.0751 1 24 5.92487 24 12C24 18.0751 19.0751 23 13 23C6.92487 23 2 18.0751 2 12Z",
    fill: "#C7D2FE",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 29
    }
  }), __jsx("path", {
    d: "M13 6V12M13 12V18M13 12H19M13 12L7 12",
    stroke: "white",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 29
    }
  }))), __jsx("defs", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, __jsx("filter", {
    id: "filter0_d",
    x: "0",
    y: "0",
    width: "26",
    height: "26",
    filterUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }, __jsx("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 29
    }
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 29
    }
  }), __jsx("feOffset", {
    dy: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 29
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 29
    }
  }), __jsx("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 29
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 29
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow",
    result: "shape",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  })), __jsx("clipPath", {
    id: "clip0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M2 12C2 5.92487 6.92487 1 13 1C19.0751 1 24 5.92487 24 12C24 18.0751 19.0751 23 13 23C6.92487 23 2 18.0751 2 12Z",
    fill: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 29
    }
  })))), __jsx("button", {
    className: "text-sm  font-normal ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, "Create custom merge tag")));
};

/* harmony default export */ __webpack_exports__["default"] = (TextSelector);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/EffectStyletool/EffectStyletool.tsx":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/EffectStyletool/EffectStyletool.tsx ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../contexts/DesignToolContext */ "./src/contexts/DesignToolContext.tsx");
/* harmony import */ var _Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../Hooks/CardElementsFunctions */ "./src/Hooks/CardElementsFunctions/index.tsx");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../../utils/defaults */ "./src/utils/defaults.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\TextSelector\\components\\EffectStyletool\\EffectStyletool.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const image1 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/hollow.png */ "./src/assets/images/hollow.png");

const image2 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/splice.png */ "./src/assets/images/splice.png");

const image4 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/neon.png */ "./src/assets/images/neon.png");

const image5 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/glitch.png */ "./src/assets/images/glitch.png");

const image6 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/lift.png */ "./src/assets/images/lift.png");

const image7 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/shadow.png */ "./src/assets/images/shadow.png");

const FontStyletool = () => {
  const {
    selectedId,
    cardData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__["DesignToolContext"]);
  const {
    handleTextEffect
  } = Object(_Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_2__["default"])();

  const handleTextHollow = type => {
    let selectedEffect;

    switch (type) {
      case "none":
        selectedEffect = _utils_defaults__WEBPACK_IMPORTED_MODULE_3__["defaultTextNoEffect"];
        break;

      case "hollow":
        selectedEffect = _utils_defaults__WEBPACK_IMPORTED_MODULE_3__["defaultTextHollow"];
        break;

      case "lift":
        selectedEffect = _utils_defaults__WEBPACK_IMPORTED_MODULE_3__["defaultTextLift"];
        break;

      case "shadow":
        selectedEffect = _utils_defaults__WEBPACK_IMPORTED_MODULE_3__["defaultTextShadow"];
        break;

      case "neon":
        selectedEffect = _utils_defaults__WEBPACK_IMPORTED_MODULE_3__["defaultTextNeon"];
        break;

      case "glitch":
        selectedEffect = _utils_defaults__WEBPACK_IMPORTED_MODULE_3__["defaultTextGlitch"];
        break;

      case "splice":
        selectedEffect = _utils_defaults__WEBPACK_IMPORTED_MODULE_3__["defaultTextSplice"];
        break;

      default:
        break;
    }

    const updatedText = _objectSpread(_objectSpread({}, cardData.elements.find(item => item.id === selectedId)), selectedEffect);

    handleTextEffect(updatedText);
  };

  return __jsx("div", {
    className: "h-full flex  flex-col w-full px-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, " ", __jsx("h1", {
    className: "font-bold text-xl mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, "Effects")), __jsx("div", {
    className: "border-b-2 border-bordercolor mt-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, " ", __jsx("h1", {
    className: "font-medium text-lg mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  }, "Style")), __jsx("div", {
    className: "w-full gap-4  flex-wrap flex flex-row mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: () => handleTextHollow("none"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image6,
    className: "w-24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 67
    }
  }), " ", __jsx("p", {
    className: "text-gray94 mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 105
    }
  }, "None")), __jsx("button", {
    onClick: () => handleTextHollow("hollow"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image1,
    className: "w-24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 69
    }
  }), " ", __jsx("p", {
    className: "text-gray94 mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 107
    }
  }, "Hollow")), __jsx("button", {
    onClick: () => handleTextHollow("lift"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image6,
    className: "w-24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 67
    }
  }), " ", __jsx("p", {
    className: "text-gray94 mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 105
    }
  }, "Lift")), __jsx("button", {
    onClick: () => handleTextHollow("shadow"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image7,
    className: "w-24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 69
    }
  }), " ", __jsx("p", {
    className: "text-gray94 mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 107
    }
  }, "Shadow")), __jsx("button", {
    onClick: () => handleTextHollow("neon"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image4,
    className: "w-24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 67
    }
  }), " ", __jsx("p", {
    className: "text-gray94 mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 105
    }
  }, "Neon")), __jsx("button", {
    onClick: () => handleTextHollow("glitch"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image5,
    className: "w-24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 69
    }
  }), " ", __jsx("p", {
    className: "text-gray94 mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 107
    }
  }, "glitch")), __jsx("button", {
    onClick: () => handleTextHollow("splice"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image2,
    className: "w-24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 69
    }
  }), " ", __jsx("p", {
    className: "text-gray94 mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 107
    }
  }, "splice"))));
};

/* harmony default export */ __webpack_exports__["default"] = (FontStyletool);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/FontColortool/FontColortool.tsx":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/FontColortool/FontColortool.tsx ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../Hooks/CardElementsFunctions */ "./src/Hooks/CardElementsFunctions/index.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\TextSelector\\components\\FontColortool\\FontColortool.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const image = __webpack_require__(/*! ./../../../../../../../../../../assets/images/custom.png */ "./src/assets/images/custom.png");

const FontStyletool = () => {
  const {
    0: colorQuery,
    1: setColorQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: colorsArray,
    1: setColorsArray
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const handleColorQueryChange = e => {
    setColorQuery(e.target.value);
  };

  const {
    handleTextColor,
    handleShapeFill
  } = Object(_Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!colorQuery) return;
    const fetchURl = colorQuery.charAt(0) !== "#" ? `https://api.color.pizza/v1/names/?name=${colorQuery}&goodnamesonly=true` : `https://api.color.pizza/v1/?values=${colorQuery.substring(1)}&goodnamesonly=true`;
    fetch(fetchURl).then(response => response.json()).then(data => {
      const newColors = data.colors.map(item => item.hex);
      newColors.splice(5);
      setColorsArray(newColors);
    }).catch(error => console.log("No colors found!"));
  }, [colorQuery]);
  return __jsx("div", {
    className: "h-full flex flex-col w-full px-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: " flex justify-center items-center  w-full mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex h-14 rounded-md border-bordercolor border justify-center items-center w-full z-50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "w-auto flex justify-end items-center text-grey text-sm p-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 29
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6Z",
    fill: "#9CA3AF",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 33
    }
  })))), __jsx("input", {
    onChange: handleColorQueryChange,
    className: "w-full rounded text-sm text-gray95 outline-none h-10 z-0 ",
    type: "text",
    placeholder: "Try \u201Cblue\u201D or \u201C#43345\u201D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: !!colorsArray.length ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-md text-gray40 mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, "Search results"), __jsx("div", {
    className: " mt-4 flex flex-row items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, console.log(colorsArray), colorsArray.map(item => __jsx("button", {
    style: {
      backgroundColor: item
    },
    className: "h-10 w-10 rounded-md",
    onClick: () => handleTextColor(item),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  })))), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-md text-gray40 mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, "Document Colors"), __jsx("div", {
    className: " mt-4 flex flex-row items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: image,
    className: "w-10 h-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  })), __jsx("button", {
    className: " bg-greenish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: " bg-greenish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: " bg-greenish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: " bg-greenish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "border-b-2 border-bordercolor mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "text-md text-black mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "text-2xl mr-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 62
    }
  }, "+"), "Add your brand colors in Brand Kit")), __jsx("div", {
    className: "border-b-2 border-bordercolor mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-md text-gray40 mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, "Photo Colors"), __jsx("div", {
    className: " mt-4 flex flex-row items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72",
    className: "w-10 h-10 rounded-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  })), __jsx("button", {
    className: "bg-indigo600 h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "bg-fuschia h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "bg-greenish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "bg-redish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "bg-yellowish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "border-b-2 border-bordercolor mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-md text-gray40 mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, "Default Colors"), __jsx("div", {
    className: " mt-4 flex flex-col items-center ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: " mt-4 flex flex-row items-center justify-between w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "bg-gray95 h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-indigo600 h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-fuschia h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-greenish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-redish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-yellowish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: " mt-4 flex flex-row items-center justify-between  w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "bg-canvasbgcolor h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-gray95 h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-lightindigo h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-fuschia h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-greenish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-yellowish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (FontStyletool);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/FontStyleTool/FontStyletool.tsx":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/FontStyleTool/FontStyletool.tsx ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webfontloader */ "webfontloader");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../Hooks/CardElementsFunctions */ "./src/Hooks/CardElementsFunctions/index.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\TextSelector\\components\\FontStyleTool\\FontStyletool.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const FontStyletool = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    webfontloader__WEBPACK_IMPORTED_MODULE_1___default.a.load({
      google: {
        families: ['Comfortaa', 'Josefin Sans', 'Euphoria Script', 'Oswald', 'Alfa Slab One', 'Bangers', 'Caveat', 'DM Sans', 'East Sea Dokdo', 'Homemade Apple', 'Kristi', 'Lobster Two', 'Maven Pro', 'Monoton', 'Montserrat', 'Playfair Display', 'Press Start 2P', 'Raleway', 'Roboto Slab', 'Shadows Into Light', 'Swanky and Moo Moo']
      }
    });
  }, []);
  const {
    handleFontFamily
  } = Object(_Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return __jsx("div", {
    className: "h-full flex  flex-col w-full px-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: " flex justify-center items-center  w-full mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex h-14 rounded-md border-bordercolor border justify-center items-center w-full z-50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "w-auto flex justify-end items-center text-grey text-sm p-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 29
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6Z",
    fill: "#9CA3AF",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 33
    }
  })))), __jsx("input", {
    className: "w-full rounded text-sm text-gray95 outline-none h-10 z-0 ",
    type: "text",
    placeholder: "Search Fonts",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "flex-row flex justify-between items-center mt-6  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-md text-gray40 mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, "My Fonts"), __jsx("button", {
    className: "text-md text-indigo600 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, " ", __jsx("span", {
    className: "text-2xl ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 73
    }
  }, "+"), "Add new Font")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "text-lg text-black mt-4 pl-2",
    style: {
      fontFamily: "Montserrat"
    },
    onClick: () => handleFontFamily("Montserrat"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, "Montserrrat")), __jsx("div", {
    className: "border-b-2 border-bordercolor mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-md text-gray40 mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, "Template Fonts"), __jsx("div", {
    className: "flex flex-col justify-end w-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "text-lg text-black mt-1 pl-2 flex justify-start",
    style: {
      fontFamily: "Maven Pro"
    },
    onClick: () => handleFontFamily("Maven Pro"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, "Maven Pro"), __jsx("button", {
    className: "text-lg text-black mt-1 pl-2 flex justify-start",
    style: {
      fontFamily: "Shadows Into Light"
    },
    onClick: () => handleFontFamily("Shadows Into Light"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, "Shadows Into Light"), __jsx("button", {
    className: "text-lg text-black mt-1 pl-2 flex justify-start",
    style: {
      fontFamily: "Euphoria Script"
    },
    onClick: () => handleFontFamily("Euphoria Script"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, "Euphoria Script"))), __jsx("div", {
    className: "border-b-2 border-bordercolor mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-md text-gray40 mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, "Popular Fonts"), __jsx("div", {
    className: "flex flex-col justify-end w-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "text-lg text-black mt-1 pl-2 flex justify-start",
    style: {
      fontFamily: "Playfair Display"
    },
    onClick: () => handleFontFamily("Playfair Display"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, "Playfair Display"), __jsx("button", {
    className: "text-lg text-black mt-1 pl-2 flex justify-start",
    style: {
      fontFamily: "East Sea Dokdo"
    },
    onClick: () => handleFontFamily("East Sea Dokdo"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, "East Sea Dokdo"), __jsx("button", {
    className: "text-lg text-black mt-1 pl-2 flex justify-start",
    style: {
      fontFamily: "Kristi"
    },
    onClick: () => handleFontFamily("Kristi"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, "Kristi"), __jsx("button", {
    className: "text-lg text-black mt-1 pl-2 flex justify-start",
    style: {
      fontFamily: "Lobster Two"
    },
    onClick: () => handleFontFamily("Lobster Two"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, "Lobster Two"), __jsx("button", {
    className: "text-lg text-black mt-1 pl-2 flex justify-start",
    style: {
      fontFamily: "Caveat"
    },
    onClick: () => handleFontFamily("Caveat"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, "Caveat"), __jsx("button", {
    className: "text-lg text-black mt-1 pl-2 flex justify-start",
    style: {
      fontFamily: "Swanky and Moo Moo"
    },
    onClick: () => handleFontFamily("Swanky and Moo Moo"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, "Swanky and Moo Moo"))));
};

/* harmony default export */ __webpack_exports__["default"] = (FontStyletool);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/DesigntTool.tsx":
/*!****************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/DesigntTool.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Card/Card */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/Card.tsx");
/* harmony import */ var _Components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/NavBar/NavBar */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/NavBar/NavBar.tsx");
/* harmony import */ var _Components_SubNavBar_SubNavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/SubNavBar/SubNavBar */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/SubNavBar.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\DesigntTool.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const DesignTool = () => {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx("div", {
    className: "w-full grid grid-cols-12 font-inter  h-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-span-2 w-full  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx(_Components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-span-3 h-full w-full  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx(_Components_SubNavBar_SubNavBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-span-7 h-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx(_Components_Card_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DesignTool);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/Header/Header.tsx":
/*!*******************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/Header/Header.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../contexts/HeaderContext */ "./src/contexts/HeaderContext.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\Header\\Header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Header = ({
  document_title,
  createNewCard
}) => {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_2__["HeaderContext"]);
  return __jsx("div", {
    className: "bg-indigo600  flex h-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "flex flex-row items-center justify-between w-full px-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex flex-row items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: "flex flex-row items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("svg", {
    width: "9",
    height: "16",
    viewBox: "0 0 9 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, __jsx("path", {
    d: "M8 15L1 8L8 1",
    stroke: "white",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  })), __jsx("h1", {
    className: "text-white pl-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, "Back to Dashboard")))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, document_title)), __jsx("div", {
    className: "gap-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: () => createNewCard({
      width: 500,
      height: 500
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "bg-white p-2 border-0 rounded-md mr-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "text-base text-gray94 leading-6 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, "Create New"))), __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "bg-white p-2 border-0 rounded-md mr-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "text-base text-gray94 leading-6 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, "Save & Share"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/assets/images/circle.png":
/*!**************************************!*\
  !*** ./src/assets/images/circle.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/custom.png":
/*!**************************************!*\
  !*** ./src/assets/images/custom.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/glitch.png":
/*!**************************************!*\
  !*** ./src/assets/images/glitch.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/glitch.c3fda1d1.png";

/***/ }),

/***/ "./src/assets/images/hollow.png":
/*!**************************************!*\
  !*** ./src/assets/images/hollow.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/image.png":
/*!*************************************!*\
  !*** ./src/assets/images/image.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/image.f528bd77.png";

/***/ }),

/***/ "./src/assets/images/image1.png":
/*!**************************************!*\
  !*** ./src/assets/images/image1.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/image1.3ff551f0.png";

/***/ }),

/***/ "./src/assets/images/image3.png":
/*!**************************************!*\
  !*** ./src/assets/images/image3.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/image3.6df75f11.png";

/***/ }),

/***/ "./src/assets/images/image4.png":
/*!**************************************!*\
  !*** ./src/assets/images/image4.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/image4.9cb172b4.png";

/***/ }),

/***/ "./src/assets/images/image5.png":
/*!**************************************!*\
  !*** ./src/assets/images/image5.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/image5.f1b1f809.png";

/***/ }),

/***/ "./src/assets/images/lift.png":
/*!************************************!*\
  !*** ./src/assets/images/lift.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/lift.b13cf734.png";

/***/ }),

/***/ "./src/assets/images/neon.png":
/*!************************************!*\
  !*** ./src/assets/images/neon.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/neon.7fca1e10.png";

/***/ }),

/***/ "./src/assets/images/opacity.png":
/*!***************************************!*\
  !*** ./src/assets/images/opacity.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/SURBVHgBtZZNLwNRFIaPjwo2NFZsDBY2FmwlgvADhFjZzB/A1kq68wOspYS1lUQspKwFrUUTEVobQoT6SnwkeI97Jk6r7dxpOm/ydKZn7rn35p0zZ4aovJrBFFgBp+AJLKrr/WCYKlQELIB78F1ATI1zJXYBJkpNVlsk1gMOwBKIkp26wLzlWOoDN/R/95oHkBHiwBFciaXAYKkFeOCVzwKFxFX+iIqf6Yk9u2rALmin6qi+2J9Z0E12WgOrcu6AhJxnwagax/FNsMx/IjLA1qKYmshV8YSKOxK74/nZrknQSeGoDQzxvdgAMwESkwLrkowLLIfyN7svx2P+OaJgFWVTXRm9K7arl0IW2/UlR1vt0Z8V1nqmYBbFVK5L5auLeWG7rilcpevItOuBAEk50CR5DpnqSko8quI5iW9xEr8vQq+ubTKdNTSxXZ9kqmvcMidLxgY+piTmCK3q+iMZy968xAZJqGZ1sWW/Xd5r9R9ketgtVUfvZDoyP4N5ff8cjIEd0FFmghbZqaesOuc4W+T7WDiyYCXVlSbzjWAlLoQ58n/P6EX42WmkCsQvtGmwDg7BKxmf+fvrhMyN99UPZBrKRIZN6VUAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/polygon.png":
/*!***************************************!*\
  !*** ./src/assets/images/polygon.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/preview.png":
/*!***************************************!*\
  !*** ./src/assets/images/preview.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/preview.06b7f3b0.png";

/***/ }),

/***/ "./src/assets/images/shadow.png":
/*!**************************************!*\
  !*** ./src/assets/images/shadow.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/shadow.161b9d54.png";

/***/ }),

/***/ "./src/assets/images/splice.png":
/*!**************************************!*\
  !*** ./src/assets/images/splice.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/splice.6bc44619.png";

/***/ }),

/***/ "./src/assets/images/square.png":
/*!**************************************!*\
  !*** ./src/assets/images/square.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/triangle.png":
/*!****************************************!*\
  !*** ./src/assets/images/triangle.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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
//# sourceMappingURL=0.a020f7b0314ed4630d97.hot-update.js.map