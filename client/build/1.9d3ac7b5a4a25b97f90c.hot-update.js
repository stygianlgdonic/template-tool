exports.id = 1;
exports.modules = {

/***/ "./src/components/RightSidebar/components/SocialStats/SocialStats.tsx":
/*!****************************************************************************!*\
  !*** ./src/components/RightSidebar/components/SocialStats/SocialStats.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../utils/generatesvgUrl */ "./src/utils/generatesvgUrl.ts");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\SocialStats\\SocialStats.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const image1 = __webpack_require__(/*! ./../../../../assets/images/fb.png */ "./src/assets/images/fb.png");

const image2 = __webpack_require__(/*! ./../../../../assets/images/insta.png */ "./src/assets/images/insta.png");

const StatGraph = ({
  fb_impressions,
  fb_clicks,
  socialmedia1,
  insta_impressions,
  insta_clicks,
  socialmedia2
}) => {
  const svg1 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_updownicon"]);
  const svg2 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_bluedoticon"]);
  const svg3 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_greendoticon"]);
  return __jsx("div", {
    className: " border shadow-md rounded-md bg-white  w-full   py-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-xl leading-7 font-medium px-6 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, "Sources")), __jsx("div", {
    className: "bg-jacksonsGray text-gray95 text-xs w-full flex flex-row leading-4 font-medium h-10 justify-start px-6 items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "w-32 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, "Name"), __jsx("h1", {
    className: "w-20 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, "Clicks"), __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, "Impressions")), __jsx("div", {
    className: " text-gray95 text-xs w-full flex flex-row leading-4 font-medium h-10 justify-start px-6 items-center mb-2 mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-row w-32 items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image1,
    className: "w-7 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }), __jsx("h1", {
    className: "pl-2 text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, " ", socialmedia1)), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "w-20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, fb_clicks)), __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, fb_impressions)), __jsx("div", {
    className: " text-gray95 text-xs w-full flex flex-row leading-4 font-medium h-10 justify-start px-6 items-center mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-row w-32 items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image1,
    className: "w-7 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }), __jsx("h1", {
    className: "pl-2 text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, " ", socialmedia2)), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "w-20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, insta_clicks)), __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, insta_impressions)));
};

/* harmony default export */ __webpack_exports__["default"] = (StatGraph);

/***/ })

};
//# sourceMappingURL=1.9d3ac7b5a4a25b97f90c.hot-update.js.map