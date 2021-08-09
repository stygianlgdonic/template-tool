exports.id = 4;
exports.modules = {

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
/* harmony import */ var react_konva_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-konva-utils */ "../node_modules/react-konva-utils/es/index.js");
/* harmony import */ var _tailwindComponents_CardHeader_components_ImageFallbackModal_ImageFallbackModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tailwindComponents/CardHeader/components/ImageFallbackModal/ImageFallbackModal */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/ImageFallbackModal/ImageFallbackModal.tsx");
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
  const {
    0: isOpenFallbackModal,
    1: setIsOpenFallbackModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
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
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(react_konva_utils__WEBPACK_IMPORTED_MODULE_2__["Html"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx("button", {
    onClick: () => setIsOpenFallbackModal(!isOpenFallbackModal),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  }), __jsx("path", {
    fillRule: "evenodd",
    d: "M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",
    clipRule: "evenodd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: !!isOpenFallbackModal ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx(_tailwindComponents_CardHeader_components_ImageFallbackModal_ImageFallbackModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    closeModal: () => {// setIsOpenFallbackModal(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TransformerComponent);

/***/ })

};
//# sourceMappingURL=4.f884fd997249ae8528bc.hot-update.js.map