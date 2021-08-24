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
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_svgService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/svgService */ "./src/services/svgService.ts");
/* harmony import */ var _utils_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utils/svg */ "./src/utils/svg.ts");
/* harmony import */ var _tailwindComponents_ButtonLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../tailwindComponents/ButtonLoader */ "./src/components/tailwindComponents/ButtonLoader.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\components\\SvgLibrary\\SvgListContainer\\RenderSvg.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const RenderSvg = ({
  svgData,
  refetchSvgList
}) => {
  const svgUrl = _utils_svg__WEBPACK_IMPORTED_MODULE_4__["svgToURL"](svgData.svgString);
  const {
    mutate: deleteSvg,
    isLoading: deleteSvgLoading,
    error: errorDeleteSvg
  } = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(SVG_ID => _services_svgService__WEBPACK_IMPORTED_MODULE_3__["svg_service"].deleteSvgByID(SVG_ID), {
    onSuccess: (data, variables, context) => {
      refetchSvgList();
    }
  });

  const handleDeleteSvg = () => {
    sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Are you sure?", "You want to delete this svg", "warning").then(willDelete => {
      if (!!willDelete) {
        deleteSvg(svgData._id);
      }
    });
  };

  return __jsx("div", {
    className: "flex justify-between pr-2 pl-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("img", {
    alt: "svg",
    src: svgUrl,
    height: 100,
    style: {
      height: 100,
      objectFit: "contain"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "flex flex-col justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: handleDeleteSvg,
    disabled: !!deleteSvgLoading,
    className: "bg-redish hover:bg-red600 text-white font-bold py-2 px-4 rounded w-20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, !!deleteSvgLoading ? __jsx(_tailwindComponents_ButtonLoader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 43
    }
  }) : __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 62
    }
  }, "Delete"))));
};

/* harmony default export */ __webpack_exports__["default"] = (RenderSvg);

/***/ }),

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
  refetchSvgList
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "text-2xl mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, "Svgs")), __jsx("div", {
    className: " h-96 overflow-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: !!svgListLoading ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, "Loading svgs ..."), __jsx("p", {
    className: !!svgListError ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, svgListError), __jsx("p", {
    className: !!(svgList !== null && svgList !== void 0 && svgList.error) ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, svgList === null || svgList === void 0 ? void 0 : (_svgList$error = svgList.error) === null || _svgList$error === void 0 ? void 0 : _svgList$error.message), __jsx("p", {
    className: !(svgList !== null && svgList !== void 0 && (_svgList$data = svgList.data) !== null && _svgList$data !== void 0 && _svgList$data.length) ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, "No svgs to load, add new from below."), svgList === null || svgList === void 0 ? void 0 : (_svgList$data2 = svgList.data) === null || _svgList$data2 === void 0 ? void 0 : _svgList$data2.map(item => __jsx("div", {
    key: item._id,
    className: "mb-2 border border-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, __jsx(_RenderSvg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    svgData: item,
    refetchSvgList: refetchSvgList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgListContainer);

/***/ }),

/***/ "./src/components/tailwindComponents/ButtonLoader.tsx":
/*!************************************************************!*\
  !*** ./src/components/tailwindComponents/ButtonLoader.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\tailwindComponents\\ButtonLoader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ButtonLoader = () => {
  return __jsx("div", {
    className: " flex justify-center items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-purple-500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonLoader);

/***/ })

};
//# sourceMappingURL=4.c607cee7ca30abd0e9f5.hot-update.js.map