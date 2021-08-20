exports.id = 0;
exports.modules = {

/***/ "./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UText.tsx":
/*!****************************************************************************************************************!*\
  !*** ./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UText.tsx ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_konva_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-konva-utils */ "./node_modules/react-konva-utils/es/index.js");
/* harmony import */ var _shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shrugsy/use-immer-state */ "@shrugsy/use-immer-state");
/* harmony import */ var _shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Hyper Engage Backend\\cardclan-backend\\client\\src\\layouts\\LoggedInLayout\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\MainCanvas\\UText.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const initial_textArea = {
  textEditVisible: false,
  textX: 0,
  textY: 0
};

const UText = ({
  textProps,
  onChange,
  onSelect,
  handleTextEdit,
  isSelected,
  $tr
}) => {
  var _textNode$current, _textNode$current$get, _textNode$current2, _textNode$current2$ge;

  const textNode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const [newTextObj, setNewTextObj] = Object(_shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_3__["useImmerState"])(initial_textArea);
  const textAreaRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleSelectText = () => {
    setNewTextObj(initial_textArea);
    onSelect();
  };

  const handleTextDblClick = e => {
    // textNode.current.hide()
    // $tr.current.hide()
    const absPos = e.target.getAbsolutePosition();
    setNewTextObj(prev => {
      prev.textEditVisible = true;
      prev.textX = absPos.x;
      prev.textY = absPos.y;
    });
  };

  const handleTextChange = e => {
    handleTextEdit(e.target.value);
  };

  const handleTextareaKeyDown = e => {
    if (e.keyCode === "Escape") {
      setNewTextObj(prev => {
        prev.textEditVisible = false;
      }); // textNode.current.show()
      // $tr.current.show()
      // $tr.current.forceUpdate()
    }
  };

  const {
    fill: color,
    fontFamily,
    fontSize
  } = textProps;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Text"], _extends({
    ref: textNode,
    draggable: true,
    onClick: handleSelectText,
    onTap: handleSelectText,
    onDblClick: e => handleTextDblClick(e),
    onDblTap: e => handleTextDblClick(e),
    onTransform: e => {
      var _e$target$attrs;

      let SX = textNode.current.scaleX();
      let W = textNode.current.width();
      textAreaRef.current.style.transform = `rotateZ(${(_e$target$attrs = e.target.attrs) === null || _e$target$attrs === void 0 ? void 0 : _e$target$attrs.rotation}deg)`;
      textAreaRef.current.style.transformOrigin = "50% 50%";
      textNode.current.setAttrs({
        // ...textNode.current.getAttrs(),
        // fontSize: isWordWrapping ? textNode.current.fontSize() : textNode.current.fontSize() * textNode.current.scaleX(),
        width: W * SX,
        scaleX: 1,
        scaleY: 1
      });
    },
    opacity: !(isSelected && newTextObj.textEditVisible) ? textProps === null || textProps === void 0 ? void 0 : textProps.opacity : 0 // style={{
    //     display:  ? "none" : "block",
    // }}
    // onTransformEnd={onChange}
    ,
    onDragEnd: onChange
  }, textProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  })), __jsx(react_konva_utils__WEBPACK_IMPORTED_MODULE_2__["Html"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("textarea", {
    onInput: e => {
      e.target.style.height = "5px";
      e.target.style.height = e.target.scrollHeight + "px";
    },
    ref: textAreaRef,
    value: textProps.text,
    style: {
      display: isSelected && newTextObj.textEditVisible ? "block" : "none",
      position: "absolute",
      top: newTextObj.textY + "px",
      left: newTextObj.textX + "px",
      outline: "none",
      // border: "2px solid blue",
      // opacity: 0,
      resize: 'none',
      overflow: 'hidden',
      minHeight: '50px',
      color,
      fontFamily,
      fontSize,
      width: (_textNode$current = textNode.current) === null || _textNode$current === void 0 ? void 0 : (_textNode$current$get = _textNode$current.getClientRect()) === null || _textNode$current$get === void 0 ? void 0 : _textNode$current$get.width,
      height: (_textNode$current2 = textNode.current) === null || _textNode$current2 === void 0 ? void 0 : (_textNode$current2$ge = _textNode$current2.getClientRect()) === null || _textNode$current2$ge === void 0 ? void 0 : _textNode$current2$ge.height,
      lineHeight: 1,
      background: 'transparent' // transform: `rotateZ(${textNode.current?.attrs?.rotation}deg)`,
      // transformOrigin: 'top left'

    },
    onChange: handleTextChange,
    onKeyDown: handleTextareaKeyDown,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (UText);

/***/ }),

/***/ "./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UTransformer.tsx":
/*!***********************************************************************************************************************!*\
  !*** ./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UTransformer.tsx ***!
  \***********************************************************************************************************************/
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
/* harmony import */ var _tailwindComponents_CardHeader_components_ImageFallbackModal_ImageFallbackModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tailwindComponents/CardHeader/components/ImageFallbackModal/ImageFallbackModal */ "./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/ImageFallbackModal/ImageFallbackModal.tsx");
/* harmony import */ var react_konva_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-konva-utils */ "./node_modules/react-konva-utils/es/index.js");
var _jsxFileName = "D:\\Hyper Engage Backend\\cardclan-backend\\client\\src\\layouts\\LoggedInLayout\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\MainCanvas\\UTransformer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const MIN_WIDTH = 50;
const MIN_HEIGHT = 30;

const TransformerComponent = ({
  id,
  $tr,
  selectedShapeName,
  setSelectedId,
  cardData
}) => {
  var _$tr$current, _$tr$current$findOne, _editIconRef$current, _editIconRef$current$, _$tr$current2, _$tr$current2$findOne, _editIconRef$current2, _editIconRef$current3;

  const {
    0: isOpenFallbackModal,
    1: setIsOpenFallbackModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const editIconRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const selectedshape = cardData.elements.find(item => item.id === selectedShapeName);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    checkNode();
  }, [selectedShapeName]);

  const checkNode = () => {
    const trNodes = $tr.current.nodes();
    const stage = $tr.current.getStage();
    const selectedNode = stage.findOne("#" + selectedShapeName);

    if (selectedNode) {
      $tr.current.nodes([selectedNode]);
    } else {
      !trNodes.length && $tr.current.detach();
      setSelectedId(null);
    }

    $tr.current.getLayer().batchDraw();
  };

  const handleOpenFallbackModal = () => {
    var _nodes$, _nodes$$attrs;

    const nodes = $tr.current.nodes();

    if (!!nodes.length && ((_nodes$ = nodes[0]) === null || _nodes$ === void 0 ? void 0 : (_nodes$$attrs = _nodes$.attrs) === null || _nodes$$attrs === void 0 ? void 0 : _nodes$$attrs.id.split("_")[0]) === "shapes") {
      setIsOpenFallbackModal(true);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Transformer"] // shouldOverdrawWholeArea
  , {
    id: id,
    ref: $tr,
    padding: 5,
    rotationSnaps: [0, 90, 180, 270],
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
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx(react_konva_utils__WEBPACK_IMPORTED_MODULE_3__["Html"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: !!(selectedshape !== null && selectedshape !== void 0 && selectedshape.isFrame) ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, __jsx("button", {
    ref: editIconRef,
    style: {
      position: "absolute",
      left: ((_$tr$current = $tr.current) === null || _$tr$current === void 0 ? void 0 : (_$tr$current$findOne = _$tr$current.findOne('.top-right')) === null || _$tr$current$findOne === void 0 ? void 0 : _$tr$current$findOne.position().x) - ((_editIconRef$current = editIconRef.current) === null || _editIconRef$current === void 0 ? void 0 : (_editIconRef$current$ = _editIconRef$current.getBoundingClientRect()) === null || _editIconRef$current$ === void 0 ? void 0 : _editIconRef$current$.width),
      bottom: 5
    },
    className: "rounded-full bg-white p-1",
    onClick: handleOpenFallbackModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 29
    }
  }, __jsx("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: !!isOpenFallbackModal ? "" : "hidden",
    style: {
      position: "absolute",
      left: ((_$tr$current2 = $tr.current) === null || _$tr$current2 === void 0 ? void 0 : (_$tr$current2$findOne = _$tr$current2.findOne('.top-right')) === null || _$tr$current2$findOne === void 0 ? void 0 : _$tr$current2$findOne.position().x) - ((_editIconRef$current2 = editIconRef.current) === null || _editIconRef$current2 === void 0 ? void 0 : (_editIconRef$current3 = _editIconRef$current2.getBoundingClientRect()) === null || _editIconRef$current3 === void 0 ? void 0 : _editIconRef$current3.width)
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }, __jsx(_tailwindComponents_CardHeader_components_ImageFallbackModal_ImageFallbackModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    closeModal: () => {
      setIsOpenFallbackModal(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (TransformerComponent);

/***/ }),

/***/ "./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/CustomColorPicker/CustomReactColor.js":
false,

/***/ "./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/CustomColorPicker/Picker.tsx":
/*!*******************************************************************************************************************!*\
  !*** ./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/CustomColorPicker/Picker.tsx ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-color */ "react-color");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Hyper Engage Backend\\cardclan-backend\\client\\src\\layouts\\LoggedInLayout\\CreateCardLayout\\components\\DesignTool\\Components\\CustomColorPicker\\Picker.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Picker = ({
  color,
  onChange
}) => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(react_color__WEBPACK_IMPORTED_MODULE_1__["ChromePicker"], {
    color: color,
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Picker);

/***/ })

};
//# sourceMappingURL=0.9de425dc1ac7db0849b3.hot-update.js.map