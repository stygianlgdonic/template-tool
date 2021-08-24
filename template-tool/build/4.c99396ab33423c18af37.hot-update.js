exports.id = 4;
exports.modules = {

/***/ "./src/components/Home/components/SvgLibrary/SvgListContainer/RenderSvg.tsx":
/*!**********************************************************************************!*\
  !*** ./src/components/Home/components/SvgLibrary/SvgListContainer/RenderSvg.tsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utils/svg */ "./src/utils/svg.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\components\\SvgLibrary\\SvgListContainer\\RenderSvg.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const RenderSvg = ({
  svgData
}) => {
  const svgUrl = _utils_svg__WEBPACK_IMPORTED_MODULE_1__["svgToURL"](svgData.svgString);
  return __jsx("div", {
    className: "flex justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "border border-gray95",
    style: {
      width: 100,
      height: 100
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("img", {
    alt: "svg",
    src: svgUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  })), __jsx("button", {
    className: "bg-redish hover:bg-red600 text-white font-bold py-2 px-4 rounded mt-1 mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Delete"));
};

/* harmony default export */ __webpack_exports__["default"] = (RenderSvg);

/***/ })

};
//# sourceMappingURL=4.c99396ab33423c18af37.hot-update.js.map