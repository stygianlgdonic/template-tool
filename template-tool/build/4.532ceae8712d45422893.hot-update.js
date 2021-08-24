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
    style: {
      maxHeight: 100
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("img", {
    alt: "svg",
    src: svgUrl,
    style: {
      width: "100%"
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

/***/ })

};
//# sourceMappingURL=4.532ceae8712d45422893.hot-update.js.map