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
  svgData,
  deleteSvg
}) => {
  const svgUrl = _utils_svg__WEBPACK_IMPORTED_MODULE_1__["svgToURL"](svgData.svgString);
  return __jsx("div", {
    className: "flex justify-between pr-2 pl-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
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
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("img", {
    alt: "svg",
    src: svgUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: () => deleteSvg(svgData._id),
    className: "bg-redish hover:bg-red600 text-white font-bold py-2 px-4 rounded",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, "Delete")));
};

/* harmony default export */ __webpack_exports__["default"] = (RenderSvg);

/***/ })

};
//# sourceMappingURL=4.9c69e2238331637f8e4b.hot-update.js.map