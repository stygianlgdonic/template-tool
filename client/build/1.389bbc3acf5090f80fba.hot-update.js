exports.id = 1;
exports.modules = {

/***/ "./src/components/RightSidebar/components/ImagePreview/ImagePreview.tsx":
/*!******************************************************************************!*\
  !*** ./src/components/RightSidebar/components/ImagePreview/ImagePreview.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../contexts/DesignTool/DesignToolContext */ "./src/contexts/DesignTool/DesignToolContext.tsx");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/generatesvgUrl */ "./src/utils/generatesvgUrl.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\ImagePreview\\ImagePreview.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const ImagePreview = ({
  date,
  creator,
  last_edited_by,
  image
}) => {
  const svg1 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_3__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_editicon"]);
  const svg2 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_3__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_attachementicon"]);
  const svg3 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_3__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_deleteicon"]);
  const {
    preview
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__["DesignToolContext"]);
  return __jsx("div", {
    className: "mt-4 overflow-y-auto overscroll-y-auto w-full  flex self-center  justify-center border  rounded-lg pb-10 shadow-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: " pt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex justify-center flex-col items-center px-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "w-24 h-24 border-0 rounded-md ml-24",
    src: preview,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  })), __jsx("button", {
    className: "top-0 pb-16 ml-8 text-indigo600",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, "Preview")), __jsx("p", {
    className: "text-base leading-6 font-medium text-gray900 pt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, "My brand sales campaign")), __jsx("div", {
    className: "flex flex-row justify-center mt-4 px-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "flex flex-row border px-2 py-1 rounded-md items-center text-sm text-gray94 border-bordercolor shadow-sm ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "pr-2 w-6",
    src: svg1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 150
    }
  }), "Edit")), __jsx("div", {
    className: "flex flex-row px-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "flex flex-row border px-2 py-1 rounded-md items-center text-gray94 text-sm border-bordercolor shadow-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "pr-2 w-6",
    src: svg2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 149
    }
  }), "Use as")), __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "flex flex-row border px-2 py-1 rounded-md items-center text-sm text-gray94 border-bordercolor shadow-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "pr-2 w-6",
    src: svg3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 149
    }
  }), "Archive"))), __jsx("div", {
    className: " flex justify-center border-t border-gallery mt-4 mb-4 w-full px-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "flex flex-col justify-evenly",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-row justify-evenly mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: " text-gray95 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, "Date Created"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 83
    }
  }, date)), __jsx("div", {
    className: "flex flex-row justify-between px-16 mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "text-gray95 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, "Created by"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 80
    }
  }, creator)), __jsx("div", {
    className: "flex flex-row justify-evenly mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "text-gray95 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, "Last Edited by"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 84
    }
  }, last_edited_by)))));
};

/* harmony default export */ __webpack_exports__["default"] = (ImagePreview);

/***/ })

};
//# sourceMappingURL=1.389bbc3acf5090f80fba.hot-update.js.map