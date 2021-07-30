exports.id = 0;
exports.modules = {

/***/ "./src/components/DesignTool/TopToolBar/index.tsx":
/*!********************************************************!*\
  !*** ./src/components/DesignTool/TopToolBar/index.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\DesignTool\\TopToolBar\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TopToolBar = ({
  onUndo,
  onRedo,
  setTemplateData,
  variationIndex,
  selectedId
}) => {
  const onBringtoFront = () => {
    if (!selectedId) return;
    setTemplateData(prev => {
      const shapeIndex = prev.variations[variationIndex].elements.findIndex(item => item.id === selectedId);

      if (shapeIndex < prev.variations[variationIndex].elements.length - 1) {
        const temp = prev.variations[variationIndex].elements[shapeIndex + 1];
        prev.variations[variationIndex].elements[shapeIndex + 1] = prev.variations[variationIndex].elements[shapeIndex];
        prev.variations[variationIndex].elements[shapeIndex] = temp;
      }
    });
  };

  const onBringtoBack = () => {
    if (!selectedId) return;
    setTemplateData(prev => {
      const shapeIndex = prev.variations[variationIndex].elements.findIndex(item => item.id === selectedId); // NOTE - shapeIndex > 1 because index 0 is for background

      if (shapeIndex > 1) {
        const temp = prev.variations[variationIndex].elements[shapeIndex - 1];
        prev.variations[variationIndex].elements[shapeIndex - 1] = prev.variations[variationIndex].elements[shapeIndex];
        prev.variations[variationIndex].elements[shapeIndex - 1] = temp;
      }
    });
  };

  return __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: onBringtoFront,
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, "Bring to front")), __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: onBringtoBack,
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, "Bring to Back")), __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: onUndo,
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, "Undo")), __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: onRedo,
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, "Redo")));
};

/* harmony default export */ __webpack_exports__["default"] = (TopToolBar);

/***/ })

};
//# sourceMappingURL=0.e6c1288e219ff526345f.hot-update.js.map