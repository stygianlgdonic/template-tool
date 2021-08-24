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
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utils/svg */ "./src/utils/svg.ts");
/* harmony import */ var _tailwindComponents_ButtonLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../tailwindComponents/ButtonLoader */ "./src/components/tailwindComponents/ButtonLoader.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\components\\SvgLibrary\\SvgListContainer\\RenderSvg.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const RenderSvg = ({
  svgData,
  deleteSvg,
  deleteSvgLoading
}) => {
  const svgUrl = _utils_svg__WEBPACK_IMPORTED_MODULE_2__["svgToURL"](svgData.svgString);

  const handleDeleteSvg = () => {
    sweetalert__WEBPACK_IMPORTED_MODULE_1___default()("Are you sure?", "You want to delete this svg", "warning").then(willDelete => {
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
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "outline-none",
    style: {
      width: 100,
      height: 100
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "border border-gray95",
    alt: "svg",
    src: svgUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "flex flex-col align-middle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: handleDeleteSvg,
    className: "bg-redish hover:bg-red600 text-white font-bold py-2 px-4 rounded w-20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, !!deleteSvgLoading ? __jsx(_tailwindComponents_ButtonLoader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 43
    }
  }) : __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 62
    }
  }, "Delete"))));
};

/* harmony default export */ __webpack_exports__["default"] = (RenderSvg);

/***/ })

};
//# sourceMappingURL=4.fb1cec9e6632fa2c66be.hot-update.js.map