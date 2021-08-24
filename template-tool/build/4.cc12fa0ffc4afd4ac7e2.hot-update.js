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
  svgListError,
  deleteSvg,
  deleteSvgLoading
}) => {
  var _svgList$error, _svgList$data, _svgList$data2;

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
    className: "w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "text-2xl mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, "Svgs")), __jsx("div", {
    className: " h-96 overflow-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: !!svgListLoading ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, "Loading svgs ..."), __jsx("p", {
    className: !!svgListError ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, svgListError), __jsx("p", {
    className: !!(svgList !== null && svgList !== void 0 && svgList.error) ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, svgList === null || svgList === void 0 ? void 0 : (_svgList$error = svgList.error) === null || _svgList$error === void 0 ? void 0 : _svgList$error.message), __jsx("p", {
    className: !(svgList !== null && svgList !== void 0 && (_svgList$data = svgList.data) !== null && _svgList$data !== void 0 && _svgList$data.length) ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }, "No svgs to load, add new from below."), svgList === null || svgList === void 0 ? void 0 : (_svgList$data2 = svgList.data) === null || _svgList$data2 === void 0 ? void 0 : _svgList$data2.map(item => __jsx("div", {
    key: item._id,
    className: "mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }, __jsx(_RenderSvg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    svgData: item,
    refetchSvgList: refetchSvgList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 33
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgListContainer);

/***/ })

};
//# sourceMappingURL=4.cc12fa0ffc4afd4ac7e2.hot-update.js.map