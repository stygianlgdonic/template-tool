exports.id = 0;
exports.modules = {

/***/ "./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/EffectStyletool/EffectStyletool.tsx":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/EffectStyletool/EffectStyletool.tsx ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../../contexts/DesignTool/DesignToolContext */ "./src/contexts/DesignTool/DesignToolContext.tsx");
/* harmony import */ var _Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../../Hooks/CardElementsFunctions */ "./src/Hooks/CardElementsFunctions/index.tsx");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/EffectStyletool/style.css");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\layouts\\LoggedInLayout\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\TextSelector\\components\\EffectStyletool\\EffectStyletool.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const image1 = __webpack_require__(/*! ./../../../../../../../../../../../assets/images/hollow.png */ "./src/assets/images/hollow.png");

const image2 = __webpack_require__(/*! ./../../../../../../../../../../../assets/images/splice.png */ "./src/assets/images/splice.png");

const image4 = __webpack_require__(/*! ./../../../../../../../../../../../assets/images/neon.png */ "./src/assets/images/neon.png");

const image5 = __webpack_require__(/*! ./../../../../../../../../../../../assets/images/glitch.png */ "./src/assets/images/glitch.png");

const image6 = __webpack_require__(/*! ./../../../../../../../../../../../assets/images/lift.png */ "./src/assets/images/lift.png");

const image7 = __webpack_require__(/*! ./../../../../../../../../../../../assets/images/shadow.png */ "./src/assets/images/shadow.png");



const FontStyletool = () => {
  const {
    selectedId,
    cardData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__["DesignToolContext"]);
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
    className: "h-full flex  flex-col w-full pl-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, " ", __jsx("h1", {
    className: "font-bold text-xl mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 19
    }
  }, "Effects")), __jsx("div", {
    className: "border-b border-bordercolor mt-6 mr-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, " ", __jsx("h1", {
    className: "font-medium text-lg mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  }, "Style")), __jsx("div", {
    className: "w-full gap-4  flex-wrap flex flex-row mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: () => handleTextHollow("none"),
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
  }, "None")), __jsx("button", {
    onClick: () => handleTextHollow("hollow"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx("p", {
    id: "example4",
    className: "w-24 border-2 border-bordercolor flex items-center h-24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 69
    }
  }, "Ag"), __jsx("p", {
    className: "text-gray94 mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 160
    }
  }, "Hollow")), __jsx("button", {
    onClick: () => handleTextHollow("lift"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image6,
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
  }, "Lift")), __jsx("button", {
    onClick: () => handleTextHollow("shadow"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image7,
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
  }, "Shadow")), __jsx("button", {
    onClick: () => handleTextHollow("neon"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image4,
    className: "w-24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 67
    }
  }), " ", __jsx("p", {
    className: "text-gray94 mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 105
    }
  }, "Neon")), __jsx("button", {
    onClick: () => handleTextHollow("glitch"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image5,
    className: "w-24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 69
    }
  }), " ", __jsx("p", {
    className: "text-gray94 mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 107
    }
  }, "glitch")), __jsx("button", {
    onClick: () => handleTextHollow("splice"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image2,
    className: "w-24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 69
    }
  }), " ", __jsx("p", {
    className: "text-gray94 mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 107
    }
  }, "splice"))));
};

/* harmony default export */ __webpack_exports__["default"] = (FontStyletool);

/***/ })

};
//# sourceMappingURL=0.b74c61d84999dabfff57.hot-update.js.map