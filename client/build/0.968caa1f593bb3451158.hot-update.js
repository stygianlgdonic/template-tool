exports.id = 0;
exports.modules = {

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
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\MainCanvas\\Rectangle.tsx";
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Rect"], _extends({
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
    }
  }, restProps, {
    fillPatternImage: image,
    fillPatternOffset: {
      x: 0,
      y: 0
    },
    fillPatternScaleX: 1.4,
    fillPatternScaleY: 1.4,
    fillPatternRepeat: "no-repeat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
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
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\MainCanvas\\UCircle.tsx";
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
  const imageWidth = image ? image.width : 10;
  const imageHeight = image ? image.height : 10;
  const Xpoint = imageWidth / 2;
  const Ypoint = imageHeight / 2;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Circle"], _extends({
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
    }
  }, restProps, {
    fillPatternImage: image,
    fillPatternOffset: {
      x: Xpoint,
      y: Ypoint
    },
    fillPatternScaleX: 1.4,
    fillPatternScaleY: 1.4,
    fillPatternRepeat: "no-repeat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (UCircle);

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
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\MainCanvas\\ULine.tsx";
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
  const Xpoint = 0;
  const Ypoint = 0;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Line"], _extends({
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
    }
  }, restProps, {
    fillPatternImage: image,
    fillPatternOffset: {
      x: Xpoint,
      y: Ypoint
    },
    fillPatternScaleX: 1.4,
    fillPatternScaleY: 1.4,
    fillPatternRepeat: "no-repeat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
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
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\MainCanvas\\UPolygon.tsx";
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
  const imageWidth = image ? image.width : 10;
  const imageHeight = image ? image.height : 10;
  const Xpoint = imageWidth / 2;
  const Ypoint = imageHeight / 2;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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
    }
  }, restProps, {
    fillPatternImage: image,
    fillPatternOffset: {
      x: Xpoint,
      y: Ypoint
    },
    fillPatternScaleX: 2.0,
    fillPatternScaleY: 2.0,
    fillPatternRepeat: "no-repeat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (UPolygon);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/TextHeader/TextHeader.tsx":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/TextHeader/TextHeader.tsx ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shrugsy/use-immer-state */ "@shrugsy/use-immer-state");
/* harmony import */ var _shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-range */ "react-range");
/* harmony import */ var react_range__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_range__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_DesignTool_SubnavbarActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../../contexts/DesignTool/SubnavbarActions */ "./src/contexts/DesignTool/SubnavbarActions.ts");
/* harmony import */ var _Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../../Hooks/CardElementsFunctions */ "./src/Hooks/CardElementsFunctions/index.tsx");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../../../utils/defaults */ "./src/utils/defaults.ts");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\tailwindComponents\\CardHeader\\components\\TextHeader\\TextHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const image = __webpack_require__(/*! ./../../../../../../../../../../assets/images/opacity.png */ "./src/assets/images/opacity.png");

const TextHeader = ({
  handleDeleteClick
}) => {
  var _fontSizeArray$find, _selectedText$fontSty, _selectedText$fontSty2;

  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [showeModal, seteShowModal] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([100]);
  const {
    getSelectedElementData,
    handleFontStyle,
    handleTextAlign,
    handleTextOpacity,
    handleDeleteSelectedItem,
    handleChangeFontSize
  } = Object(_Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    selectTextToolSubNav,
    selectEffectToolSubNav,
    selectFontColorToolSubNav
  } = Object(_contexts_DesignTool_SubnavbarActions__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const {
    0: openDropDown,
    1: setopenDropDown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [fontStyle, setFontStyle] = Object(_shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_0__["useImmerState"])({
    bold: false,
    italic: false
  });
  const selectedText = getSelectedElementData();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!!selectedText) {
      handleChangeFontStyle();
    }
  }, [fontStyle, selectedText]);

  const handleSetBold = () => {
    setFontStyle(prev => {
      prev.bold = !prev.bold;
    });
  };

  const hanldeSetItalic = () => {
    setFontStyle(prev => {
      prev.italic = !prev.italic;
    });
  };

  const handleChangeFontStyle = () => {
    const result = `${!fontStyle.bold && !fontStyle.italic ? "normal" : `${fontStyle.italic ? "italic" : ""} ${fontStyle.bold ? "bold" : ""}`}`;
    handleFontStyle(result);
  };

  return __jsx("div", {
    className: "flex flex-row items-center justify-center gap-4 px-6 h-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative inline-block text-left  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("div", {
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "menu-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx("button", {
    type: "button",
    className: "inline-flex  w-full px-4 py-2 text-sm font-medium bg-white border rounded-md shadow-sm border-bordercolor text-gray900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",
    id: "menu-button",
    "aria-expanded": "true",
    "aria-haspopup": "true",
    onClick: selectTextToolSubNav,
    style: {
      fontFamily: selectedText === null || selectedText === void 0 ? void 0 : selectedText.fontFamily
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, selectedText === null || selectedText === void 0 ? void 0 : selectedText.fontFamily)))), __jsx("div", {
    className: "z-10 flex items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative mt-1",
    onClick: () => setopenDropDown(!!openDropDown ? false : true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx("button", {
    type: "button",
    className: "relative flex flex-row  items-center  py-2 px-4 text-left border-2 rounded-lg shadow-sm  h-10 border-bordercolor hover:bg-lightindigo focus:outline-none focus:ring-border  sm:text-sm",
    "aria-haspopup": "listbox",
    "aria-expanded": "true",
    "aria-labelledby": "listbox-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, !!selectedText ? (_fontSizeArray$find = _utils_defaults__WEBPACK_IMPORTED_MODULE_5__["fontSizeArray"].find(item => item.size === selectedText.fontSize)) === null || _fontSizeArray$find === void 0 ? void 0 : _fontSizeArray$find.name : "Heading"), __jsx("ul", {
    className: "absolute  py-1 mt-1 overflow-auto w-32 text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
    role: "listbox",
    "aria-labelledby": "listbox-label",
    "aria-activedescendant": "listbox-option-3",
    style: {
      display: openDropDown ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "relative  py-2  mr-8 text-gray-900  w-32 cursor-default select-none ",
    id: "listbox-option-0",
    role: "option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, _utils_defaults__WEBPACK_IMPORTED_MODULE_5__["fontSizeArray"].map((item, index) => __jsx("div", {
    key: index,
    className: "flex mb-2 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex w-full mx-1 px-4 py-1 rounded-md hover:bg-lightindigo",
    onClick: () => handleChangeFontSize(item.name),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 37
    }
  }, item.name)))))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "ml-10 text-lg font-bold text-black",
    onClick: selectFontColorToolSubNav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
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
      lineNumber: 116,
      columnNumber: 29
    }
  }, __jsx("path", {
    d: "M12.392 27L13.9943 22.3807H20.8125L22.4062 27H25.2017L18.9205 9.54545H15.8778L9.59659 27H12.392ZM14.7614 20.1648L17.3352 12.7159H17.4716L20.0455 20.1648H14.7614Z",
    fill: "black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 33
    }
  }), __jsx("g", {
    filter: "url(#filter0_dd)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
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
      lineNumber: 119,
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
      lineNumber: 121,
      columnNumber: 33
    }
  }), __jsx("defs", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
      lineNumber: 123,
      columnNumber: 37
    }
  }, __jsx("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
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
      lineNumber: 125,
      columnNumber: 41
    }
  }), __jsx("feOffset", {
    dy: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 41
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 41
    }
  }), __jsx("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 41
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
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
      lineNumber: 130,
      columnNumber: 41
    }
  }), __jsx("feOffset", {
    dy: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 41
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "1.5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 41
    }
  }), __jsx("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 41
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in2: "effect1_dropShadow",
    result: "effect2_dropShadow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
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
      lineNumber: 135,
      columnNumber: 41
    }
  }))))))), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "ml-4 text-lg font-bold text-black w-10 h-10 rounded-md" + (selectedText !== null && selectedText !== void 0 && (_selectedText$fontSty = selectedText.fontStyle) !== null && _selectedText$fontSty !== void 0 && _selectedText$fontSty.includes("bold") ? " bg-lightindigo" : ""),
    onClick: handleSetBold,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  }, "B")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "ml-4 text-lg italic font-bold text-black w-10 h-10 rounded-md" + (selectedText !== null && selectedText !== void 0 && (_selectedText$fontSty2 = selectedText.fontStyle) !== null && _selectedText$fontSty2 !== void 0 && _selectedText$fontSty2.includes("italic") ? " bg-lightindigo" : ""),
    onClick: hanldeSetItalic,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  }, "I")), __jsx("div", {
    className: "py-4 ml-6 border-r-2 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "ml-6  rounded-md hover:bg-lightindigo h-10 w-10 pl-2  active:border-2 border-indigo600",
    onClick: () => setShowModal(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
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
      lineNumber: 161,
      columnNumber: 25
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
      lineNumber: 168,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: " absolute",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 21
    }
  }, showModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "z-10 inset-0 overflow-y-auto",
    "aria-labelledby": "modal-title",
    role: "dialog",
    "aria-modal": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "flex items-end justify-center min-h-screen px-4 pb-20  text-center sm:block sm:p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 37
    }
  }, __jsx("div", {
    onClick: () => setShowModal(false),
    className: "fixed inset-0  transition-opacity",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: " border-2 border-bordercolor inline-block align-bottom w-40 bg-white rounded-lg px-4 justify-center overflow-hidden shadow-md transform transition-all top-0 mt-2 self-end right-0 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "w-full flex gap-4 justify-center ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 45
    }
  }, __jsx("button", {
    className: "hover:bg-lightindigo px-2 my-2 h-10 rounded-md w-10 flex  items-center justify-center",
    onClick: () => handleTextAlign("left"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 49
    }
  }, __jsx("svg", {
    className: " ",
    width: "18",
    height: "14",
    viewBox: "0 0 18 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 195
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
      lineNumber: 196,
      columnNumber: 53
    }
  }))), __jsx("button", {
    className: "hover:bg-lightindigo px-2 my-2 h-10 rounded-md w-10 flex items-center justify-center",
    onClick: () => handleTextAlign("center"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 49
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
      lineNumber: 199,
      columnNumber: 196
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
      lineNumber: 200,
      columnNumber: 53
    }
  }))), __jsx("button", {
    className: "hover:bg-lightindigo px-2 my-2 h-10 rounded-md w-10 flex items-center justify-center",
    onClick: () => handleTextAlign("right"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 49
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
      lineNumber: 205,
      columnNumber: 53
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
      lineNumber: 206,
      columnNumber: 57
    }
  })))))))) : null)), __jsx("div", {
    className: "py-4 ml-6 border-r-2 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "ml-6 text-lg italic font-bold text-black hover:bg-lightindigo px-3 py-1 rounded hover:ring-2 ring-indigo600 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 17
    }
  }, __jsx("button", {
    onClick: selectEffectToolSubNav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 21
    }
  }, "Effects")), __jsx("div", {
    className: "py-4 ml-6 border-r-2 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: " relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: showeModal ? "ml-6  hover:bg-lightindigo h-10 w-10 px-1 rounded-md border-2 border-indigo600 " : "ml-6  hover:bg-lightindigo h-10 w-10 pl-2 rounded-md  ",
    onClick: () => {
      seteShowModal(true);
      setopenDropDown(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 21
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 25
    }
  }, __jsx("g", {
    fill: "currentColor",
    "fill-rule": "evenodd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 108
    }
  }, __jsx("path", {
    d: "M3 2h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 151
    }
  }), __jsx("path", {
    d: "M11 2h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z",
    opacity: ".45",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 378
    }
  }), __jsx("path", {
    d: "M19 2h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z",
    opacity: ".15",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 623
    }
  }), __jsx("path", {
    d: "M7 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z",
    opacity: ".7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 868
    }
  }), __jsx("path", {
    d: "M15 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z",
    opacity: ".3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 1038
    }
  })))), __jsx("div", {
    className: " absolute",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 21
    }
  }, showeModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: " z-10 inset-0 overflow-y-auto",
    "aria-labelledby": "modal-title",
    role: "dialog",
    "aria-modal": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: " flex items-end justify-center  min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 37
    }
  }, __jsx("div", {
    onClick: () => seteShowModal(false),
    className: "fixed inset-0  transition-opacity",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: "border border-bordercolor  inline-block align-bottom w-40  items-center bg-white rounded-lg px-4 justify-center overflow-hidden shadow-md transform transition-all top-0 right-0 mt-2 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "w-full flex gap-4 justify-center ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 45
    }
  }, __jsx(react_range__WEBPACK_IMPORTED_MODULE_2__["Range"], {
    step: 1,
    min: 1,
    max: 100,
    values: values,
    onChange: values => {
      setValues(values);
      handleTextOpacity(values / 100);
    },
    renderTrack: ({
      props,
      children
    }) => __jsx("div", _extends({}, props, {
      className: "w-full h-3 pr-2 my-4 bg-gray-200 rounded-md",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 57
      }
    }), children),
    renderThumb: ({
      props
    }) => __jsx("div", _extends({}, props, {
      className: "w-4 h-4 transform translate-x-10 bg-indigo600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 57
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 49
    }
  }), __jsx("input", {
    className: "ml-3 w-9 focus:outline-none",
    min: "0",
    max: "100",
    value: values,
    onChange: e => {
      if (!(parseFloat(e.target.value) > 100)) {
        setValues([e.target.value]);
        handleTextOpacity(parseFloat(e.target.value) / 100);
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 49
    }
  })))))) : null)), __jsx("div", {
    className: "py-4 ml-4 border-r-2 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: " flex bg-transparent hover:bg-deletecolor rounded-md w-10 h-9 items-center justify-center ml-3",
    onClick: handleDeleteClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "20",
    height: "23",
    viewBox: "0 0 15 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M13.1875 4.56858L12.4828 12.9017C12.4221 13.6199 11.7145 14.1764 10.8619 14.1764H4.13807C3.28553 14.1764 2.57794 13.6199 2.5172 12.9017L1.8125 4.56858M5.875 7.31368V11.4313M9.125 7.31368V11.4313M9.9375 4.56858V2.50976C9.9375 2.13074 9.57373 1.82349 9.125 1.82349H5.875C5.42627 1.82349 5.0625 2.13074 5.0625 2.50976V4.56858M1 4.56858H14",
    stroke: "#B91C1C",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (TextHeader);

/***/ })

};
//# sourceMappingURL=0.968caa1f593bb3451158.hot-update.js.map