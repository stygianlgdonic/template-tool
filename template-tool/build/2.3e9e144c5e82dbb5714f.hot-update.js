exports.id = 2;
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
    className: "bg-white shadow-md rounded px-6 py-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex justify-between pr-2 pl-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
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
      lineNumber: 43,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "flex flex-col justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("button", {
    onClick: handleDeleteSvg,
    disabled: !!deleteSvgLoading,
    className: "bg-redish hover:bg-red600 text-white font-bold py-2 px-4 rounded w-20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, !!deleteSvgLoading ? __jsx(_tailwindComponents_ButtonLoader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 47
    }
  }) : __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 66
    }
  }, "Delete")))));
};

/* harmony default export */ __webpack_exports__["default"] = (RenderSvg);

/***/ }),

/***/ "./src/components/Home/components/SvgLibrary/SvgListContainer/SearchBar.tsx":
/*!**********************************************************************************!*\
  !*** ./src/components/Home/components/SvgLibrary/SvgListContainer/SearchBar.tsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\components\\SvgLibrary\\SvgListContainer\\SearchBar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SearchBar = ({
  value,
  onChange
}) => {
  return __jsx("div", {
    className: " flex justify-center items-center  w-full mb-2 mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex h-14 rounded-md border-bordercolor border justify-center items-center w-11/12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "w-auto flex justify-end items-center text-grey text-sm p-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6Z",
    fill: "#9CA3AF",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 29
    }
  })))), __jsx("input", {
    className: "w-full rounded text-sm text-gray95 outline-none h-12 ",
    type: "text",
    placeholder: "Search by tags. For Example: helloworld,custom,apple",
    value: value,
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

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
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBar */ "./src/components/Home/components/SvgLibrary/SvgListContainer/SearchBar.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\components\\SvgLibrary\\SvgListContainer\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SvgListContainer = ({
  svgList,
  svgListLoading,
  svgListError,
  refetchSvgList,
  setSearchTags
}) => {
  var _svgList$error, _svgList$data, _svgList$data2;

  const {
    0: searchTerm,
    1: setSearchTerm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const handleSearchChange = e => {
    const text = e.target.value;
    setSearchTerm(text);
    const tagsArray = text.match(/([a-zA-Z])\w+/g) || [];
    setSearchTags([...tagsArray]);
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "text-2xl mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, "Svgs")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: searchTerm,
    onChange: handleSearchChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: " h-96 overflow-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: !!svgListLoading ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, "Loading svgs ..."), __jsx("p", {
    className: !!svgListError ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, svgListError), __jsx("p", {
    className: !!(svgList !== null && svgList !== void 0 && svgList.error) ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, svgList === null || svgList === void 0 ? void 0 : (_svgList$error = svgList.error) === null || _svgList$error === void 0 ? void 0 : _svgList$error.message), __jsx("p", {
    className: !(svgList !== null && svgList !== void 0 && (_svgList$data = svgList.data) !== null && _svgList$data !== void 0 && _svgList$data.length) ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, "No svgs to load, add new from below."), svgList === null || svgList === void 0 ? void 0 : (_svgList$data2 = svgList.data) === null || _svgList$data2 === void 0 ? void 0 : _svgList$data2.map(item => __jsx("div", {
    key: item._id,
    className: "mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, __jsx(_RenderSvg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    svgData: item,
    refetchSvgList: refetchSvgList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgListContainer);

/***/ })

};
//# sourceMappingURL=2.3e9e144c5e82dbb5714f.hot-update.js.map