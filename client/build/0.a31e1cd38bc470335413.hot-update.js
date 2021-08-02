exports.id = 0;
exports.modules = {

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Stickers/Stickers.tsx":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Stickers/Stickers.tsx ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../utils/generatesvgUrl */ "./src/utils/generatesvgUrl.ts");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Stickers/styles.css");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\ElementSelector\\components\\Stickers\\Stickers.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const sideScroll = (element, speed, distance, step) => {
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);

    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
  }, speed);
};

const Stickers = () => {
  const svg = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_mailicon"]);
  const contentWrapper = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  return __jsx("div", {
    className: "h-full flex  flex-col ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-row justify-between items-center w-full px-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-lg text-gray94 font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, "Stickers"), __jsx("button", {
    className: "text-md text-gray95 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "See all")), __jsx("div", {
    className: "flex flex-row mt-4    overflow-x-scroll  items-center overflow-hidden  no-scrollbar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: " pl-2 mt-3",
    onClick: () => {
      sideScroll(contentWrapper.current, 25, 100, -10);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 20 20",
    fill: "#D1D5DB",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 24
    }
  }, __jsx("path", {
    d: "M9 13L6 10M6 10L9 7M6 10L14 10M1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10Z",
    stroke: "#ffffff",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  })))), __jsx("div", {
    className: " w-10 -mr-2 z-40 opacity-30 h-28 bg-gradient-to-r from-red to-transparent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, "sax"), __jsx("div", {
    className: "flex flex-row flex-grow  gap-4 h-28 w-72 overflow-x-scroll no-scrollbar flex-shrink-0  mx-1   relative",
    ref: contentWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "fixed bg-red h-28 z-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, "asdasd"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0 flex-grow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 60
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 60
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 60
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 60
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 60
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 60
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 60
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 60
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 60
    }
  })))), __jsx("div", {
    className: "border-r-4 border-red",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "pr-2  mt-3 ",
    onClick: () => {
      sideScroll(contentWrapper.current, 25, 100, 10);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 20 20",
    fill: "#D1D5DB",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 24
    }
  }, __jsx("path", {
    d: "M11 7L14 10M14 10L11 13M14 10L6 10M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z",
    stroke: "#ffffff",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Stickers);

/***/ })

};
//# sourceMappingURL=0.a31e1cd38bc470335413.hot-update.js.map