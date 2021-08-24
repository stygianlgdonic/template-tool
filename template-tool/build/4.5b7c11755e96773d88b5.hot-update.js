exports.id = 4;
exports.modules = {

/***/ "./src/components/Home/components/SvgLibrary/SvgListContainer/index.tsx":
/*!******************************************************************************!*\
  !*** ./src/components/Home/components/SvgLibrary/SvgListContainer/index.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RenderSvg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RenderSvg */ "./src/components/Home/components/SvgLibrary/SvgListContainer/RenderSvg.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\components\\SvgLibrary\\SvgListContainer\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SvgListContainer = ({
  svgList,
  svgListLoading,
  svgListError
}) => {
  var _svgList$error, _svgList$data;

  const {
    0: searchTags,
    1: setSearchTags
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: searchTerm,
    1: setSearchTerm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // const { data: searchedSvgs, error: searchedSvgsError, isLoading: searchedSvgsLoading } = useQuery<any, Error>(
  //     "svgSearch", () => svg_service.searchSvgsByTags([...searchTags])
  // )

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "text-2xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, "Svgs")), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: !!svgListLoading ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, "Loading svgs ..."), __jsx("p", {
    className: !!svgListError ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, svgListError), __jsx("p", {
    className: !!(svgList !== null && svgList !== void 0 && svgList.error) ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, svgList === null || svgList === void 0 ? void 0 : (_svgList$error = svgList.error) === null || _svgList$error === void 0 ? void 0 : _svgList$error.message), svgList === null || svgList === void 0 ? void 0 : (_svgList$data = svgList.data) === null || _svgList$data === void 0 ? void 0 : _svgList$data.map(item => __jsx("div", {
    key: item._id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, __jsx(_RenderSvg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    svgData: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgListContainer);

/***/ })

};
//# sourceMappingURL=4.5b7c11755e96773d88b5.hot-update.js.map