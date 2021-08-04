exports.id = 0;
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
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\MainCanvas\\UTransformer.tsx";
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "w-5 h-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "red")), __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Transformer"], {
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
      lineNumber: 37,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TransformerComponent);

/***/ })

};
//# sourceMappingURL=0.265287c86f343256da92.hot-update.js.map