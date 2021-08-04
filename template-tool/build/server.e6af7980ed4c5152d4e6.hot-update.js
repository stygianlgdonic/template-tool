exports.id = "server";
exports.modules = {

/***/ "./src/components/Home/components/TemplateList/TemplatePreview/index.tsx":
/*!*******************************************************************************!*\
  !*** ./src/components/Home/components/TemplateList/TemplatePreview/index.tsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _Elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Elements */ "./src/components/Home/components/TemplateList/Elements/index.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\components\\TemplateList\\TemplatePreview\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const TemplatePreview = ({
  templateData,
  index
}) => {
  var _templateData$variati;

  const {
    0: selectedVariation,
    1: setSelectedVariation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  return __jsx("button", {
    className: "border-2  border-dashed rounded-md border-bordercolor justify-center items-center flex flex-col py-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Stage"], {
    width: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["stageDimensions"].width * 0.3,
    height: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["stageDimensions"].height * 0.3,
    scaleX: 0.3,
    scaleY: 0.3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Layer"], {
    listening: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx(_Elements__WEBPACK_IMPORTED_MODULE_3__["default"], {
    konvaItem: templateData === null || templateData === void 0 ? void 0 : (_templateData$variati = templateData.variations[selectedVariation]) === null || _templateData$variati === void 0 ? void 0 : _templateData$variati.elements,
    index: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (TemplatePreview);

/***/ })

};
//# sourceMappingURL=server.e6af7980ed4c5152d4e6.hot-update.js.map