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
/* harmony import */ var _contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/DesignTool/DesignToolContext */ "./src/contexts/DesignTool/DesignToolContext.tsx");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _contexts_DesignTool_CardHeaderActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/DesignTool/CardHeaderActions */ "./src/contexts/DesignTool/CardHeaderActions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const CardElementsFunctions = () => {
  const {
    $tr,
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_3__["DesignToolContext"]);
  const {
    emptyCardHeader
  } = Object(_contexts_DesignTool_CardHeaderActions__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const [file, selectFile] = Object(use_file_upload__WEBPACK_IMPORTED_MODULE_1__["useFileUpload"])();

  const getDocumentColors = () => {
    const stringifyData = JSON.stringify(cardData);
    const docColors = new Set(stringifyData.match(_utils_defaults__WEBPACK_IMPORTED_MODULE_4__["hex_regex"]));
    return [...docColors];
  };

  const getSelectedElementData = () => {
    if (selectedId) {
      const selectedShape = cardData.elements.find(item => item.id === selectedId);
      return selectedShape;
    } else {
      return null;
    }
  };

  const handleAddNewRect = rectData => {
    setCardData(prev => {
      let shapeID = new Date().getTime();
      prev.elements.push(_objectSpread(_objectSpread({}, rectData), {}, {
        id: `shapes_${shapeID.toString()}`
      }));
      setSelectedId(`shapes_${shapeID.toString()}`);
    });
  };

  const handleAddNewCircle = circleData => {
    setCardData(prev => {
      let shapeID = new Date().getTime();
      prev.elements.push(_objectSpread(_objectSpread({}, circleData), {}, {
        id: `shapes_${shapeID.toString()}`
      }));
      setSelectedId(`shapes_${shapeID.toString()}`);
    });
  };

  const handleAddNewTrianlge = triangleData => {
    setCardData(prev => {
      let shapeID = new Date().getTime();
      prev.elements.push(_objectSpread(_objectSpread({}, triangleData), {}, {
        id: `shapes_${shapeID.toString()}`
      }));
      setSelectedId(`shapes_${shapeID.toString()}`);
    });
  };

  const handleAddNewPolygon = polygonData => {
    setCardData(prev => {
      let shapeID = new Date().getTime();
      prev.elements.push(_objectSpread(_objectSpread({}, polygonData), {}, {
        id: `shapes_${shapeID.toString()}`
      }));
      setSelectedId(`shapes_${shapeID.toString()}`);
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
        setSelectedId(`svgs_${svgId.toString()}`);
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
      setSelectedId(`svgs_${svgId.toString()}`);
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
          setSelectedId(`images_${imageID.toString()}`);
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
      setSelectedId(`textBoxes_${textID.toString()}`);
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
      emptyCardHeader();
    });
  };

  const onUndo = () => {
    emptyCardHeader();
    !!setSelectedId && setSelectedId(null);
    stepNum > 1 && goBack();
  };

  const onRedo = () => {
    emptyCardHeader();
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

  const handleFill = (color, backgroundID) => {
    setCardData(prev => {
      if (!!backgroundID) {
        prev.elements[0].fill = color;
        prev.elements[0].patternImageUrl = undefined;
      } else {
        const selectedShape = prev.elements.find(item => item.id === selectedId);
        selectedShape.fill = color;
        selectedShape.patternImageUrl = undefined;
      }
    });
  };

  const handleGradientColor = (color1, color2, backgroundID) => {
    setCardData(prev => {
      if (!!backgroundID) {
        prev.elements[0].fill = "";
        prev.elements[0].patternImageUrl = undefined;
        prev.elements[0].fillLinearGradientColorStops = [0, color1, 1, color2];
        prev.elements[0].fillLinearGradientStartPoint = {
          x: 0,
          y: 0
        };
        prev.elements[0].fillLinearGradientEndPoint = {
          x: _utils_defaults__WEBPACK_IMPORTED_MODULE_4__["stageDimensions"].width,
          y: _utils_defaults__WEBPACK_IMPORTED_MODULE_4__["stageDimensions"].height
        };
      } else {
        var _$tr$current;

        const stage = $tr === null || $tr === void 0 ? void 0 : (_$tr$current = $tr.current) === null || _$tr$current === void 0 ? void 0 : _$tr$current.getStage();
        const selectedNode = stage === null || stage === void 0 ? void 0 : stage.findOne("#" + selectedId);
        const clientRect = selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.getClientRect();
        const selectedShape = prev.elements.find(item => item.id === selectedId);
        selectedShape.fill = "";
        selectedShape.patternImageUrl = undefined;
        selectedShape.fillLinearGradientColorStops = [0, color1, 1, color2];
        selectedShape.fillLinearGradientStartPoint = {
          x: 0,
          y: 0
        };
        selectedShape.fillLinearGradientEndPoint = {
          x: clientRect.width,
          y: clientRect.height
        };
      }
    });
  };

  const handleRadialGradientColor = (color1, color2, backgroundID) => {
    setCardData(prev => {
      if (!!backgroundID) {
        prev.elements[0].fill = "";
        prev.elements[0].fillLinearGradientColorStops = undefined;
        prev.elements[0].fillLinearGradientStartPoint = undefined;
        prev.elements[0].fillLinearGradientEndPoint = undefined;
        prev.elements[0].patternImageUrl = undefined;
        prev.elements[0].fillRadialGradientStartPoint = {
          x: _utils_defaults__WEBPACK_IMPORTED_MODULE_4__["stageDimensions"].width / 2,
          y: _utils_defaults__WEBPACK_IMPORTED_MODULE_4__["stageDimensions"].height / 2
        };
        prev.elements[0].fillRadialGradientStartRadius = 0;
        prev.elements[0].fillRadialGradientEndPoint = {
          x: _utils_defaults__WEBPACK_IMPORTED_MODULE_4__["stageDimensions"].width / 2,
          y: _utils_defaults__WEBPACK_IMPORTED_MODULE_4__["stageDimensions"].height / 2
        };
        prev.elements[0].fillRadialGradientEndRadius = 360;
        prev.elements[0].fillRadialGradientColorStops = [0, color1, 1, color2];
      } else {
        var _$tr$current2;

        const stage = $tr === null || $tr === void 0 ? void 0 : (_$tr$current2 = $tr.current) === null || _$tr$current2 === void 0 ? void 0 : _$tr$current2.getStage();
        const selectedNode = stage === null || stage === void 0 ? void 0 : stage.findOne("#" + selectedId);
        const clientRect = selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.getClientRect();
        const selectedShape = prev.elements.find(item => item.id === selectedId);
        selectedShape.fill = "";
        selectedShape.fillLinearGradientColorStops = undefined;
        selectedShape.fillLinearGradientStartPoint = undefined;
        selectedShape.fillLinearGradientEndPoint = undefined;
        selectedShape.patternImageUrl = undefined;
        selectedShape.fillRadialGradientStartPoint = {
          x: clientRect.width / 2,
          y: clientRect.height / 2
        };
        selectedShape.fillRadialGradientStartRadius = 0;
        selectedShape.fillRadialGradientEndPoint = {
          x: clientRect.width / 2,
          y: clientRect.height / 2
        };
        selectedShape.fillRadialGradientEndRadius = 360;
        selectedShape.fillRadialGradientColorStops = [0, color1, 1, color2];
      }
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

  const handleTextEdit = text => {
    setCardData(prev => {
      const selectedText = prev.elements.find(item => item.id === selectedId);
      selectedText.text = text;
    });
  };

  return {
    getDocumentColors,
    getSelectedElementData,
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
    handleFontFamily,
    handleBorderWidthChange,
    handleFillImagePattern,
    handleStrokeWidthChange,
    handleCornerRadius,
    handleOpacity,
    handleStrokeColor,
    handleFill,
    handleGradientColor,
    handleRadialGradientColor,
    handleFillPatternScaleX,
    handleFillPatternScaleY,
    handleFillPatternOffsetX,
    handleFillPatternOffsetY,
    handleTextEdit
  };
};

/* harmony default export */ __webpack_exports__["default"] = (CardElementsFunctions);

/***/ })

};
//# sourceMappingURL=0.455390111ba6231efcee.hot-update.js.map