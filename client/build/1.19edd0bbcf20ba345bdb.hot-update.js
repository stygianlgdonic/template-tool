exports.id = 1;
exports.modules = {

/***/ "./src/components/RightSidebar/components/StatGraph/StatGraph.tsx":
/*!************************************************************************!*\
  !*** ./src/components/RightSidebar/components/StatGraph/StatGraph.tsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../utils/generatesvgUrl */ "./src/utils/generatesvgUrl.ts");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\StatGraph\\StatGraph.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const image = __webpack_require__(/*! ./../../../../assets/images/Chart.png */ "./src/assets/images/Chart.png");

const StatGraph = ({
  impressions,
  link_clicks,
  conversionrate
}) => {
  const svg1 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_updownicon"]);
  const svg2 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_bluedoticon"]);
  const svg3 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_greendoticon"]);
  return __jsx("div", {
    className: " border-0 rounded-md bg-white  w-full px-4  py-6 shadow-md border",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-row justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "text-xl text-black leading-7 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, "Stats")), __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-row px-2 border-2 border-bordercolor rounded-md  mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "pr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, "Last week "), __jsx("img", {
    className: "w-2 ",
    src: svg1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "flex flex-row px-2 border-2 border-bordercolor rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "pr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, "Sources "), __jsx("img", {
    className: "w-2 ",
    src: svg1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  })))), __jsx("div", {
    className: "flex flex-row mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-col border-r-2 border-bordercolor pr-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx("img", {
    className: "",
    src: svg2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }), __jsx("h1", {
    className: "ml-2 text-xs text-gray95 leading-4 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, "Impressions")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "text-sm text-lightGray leading-5 font-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }, impressions))), __jsx("div", {
    className: "flex flex-col  px-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx("img", {
    className: "",
    src: svg3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }), __jsx("h1", {
    className: "ml-2 text-xs text-gray95 leading-4 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, "Link Clicks")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "text-sm text-lightGray leading-5 font-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, link_clicks)))), __jsx("div", {
    className: "mt-4 flex justify-end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "bg-indigo100 text-sm leading-5 font-normal border-0 rounded-xl text-lightGray px-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, conversionrate, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 132
    }
  }, "%"))), __jsx("div", {
    className: "flex justify-end mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "text-base text-gray95 leading-4 font-medium mt-1 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, "Conversion rate")), __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: image,
    className: "w-10/12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (StatGraph);

/***/ })

};
//# sourceMappingURL=1.19edd0bbcf20ba345bdb.hot-update.js.map