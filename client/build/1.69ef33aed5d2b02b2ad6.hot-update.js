exports.id = 1;
exports.modules = {

/***/ "./src/components/RightSidebar/components/CreateEmail/TemplatePreview/index.tsx":
/*!**************************************************************************************!*\
  !*** ./src/components/RightSidebar/components/CreateEmail/TemplatePreview/index.tsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _Elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Elements */ "./src/components/RightSidebar/components/CreateEmail/Elements/index.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\CreateEmail\\TemplatePreview\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const TemplatePreview = ({
  templateObj
}) => {
  var _templateObj$variatio, _templateObj$variatio2;

  const handleSelectTemplate = () => {
    console.log({
      templateObj
    }); // setTemplateData(templateObj, false)
    // navigate(`/createcard`)
  };

  return __jsx("button", {
    onClick: handleSelectTemplate,
    className: "rounded-md justify-center items-center flex flex-col ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Stage"], {
    width: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["stageDimensions"].width * 0.2,
    height: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["stageDimensions"].height * 0.2,
    scaleX: 0.2,
    scaleY: 0.2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Layer"], {
    listening: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, templateObj === null || templateObj === void 0 ? void 0 : (_templateObj$variatio = templateObj.variations[0]) === null || _templateObj$variatio === void 0 ? void 0 : (_templateObj$variatio2 = _templateObj$variatio.elements) === null || _templateObj$variatio2 === void 0 ? void 0 : _templateObj$variatio2.map((item, index) => __jsx(_Elements__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: index,
    konvaItem: item,
    index: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TemplatePreview);

/***/ })

};
//# sourceMappingURL=1.69ef33aed5d2b02b2ad6.hot-update.js.map