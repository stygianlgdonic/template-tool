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
      prev.elements.find(item => item.id === selectedId);
    });
  };

  const handleFillPatternScaleY = () => {};

  const handleFillPatternOffsetX = () => {};

  const handleFillPatternOffsetY = () => {};

  return {
    handleAddNewRect,
    handleAddNewCircle,
    handleAddNewTrianlge,
    handleAddNewPolygon,
    handleSvgUpload,
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
    handleFontFamily
  };
};

/* harmony default export */ __webpack_exports__["default"] = (CardElementsFunctions);

/***/ })

};
//# sourceMappingURL=0.19b93b50c334549b8255.hot-update.js.map