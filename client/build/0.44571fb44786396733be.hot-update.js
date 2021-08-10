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
/* harmony import */ var _Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../Hooks/CardElementsFunctions */ "./src/Hooks/CardElementsFunctions/index.tsx");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../../utils/generatesvgUrl */ "./src/utils/generatesvgUrl.ts");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Stickers/styles.css");
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\ElementSelector\\components\\Stickers\\Stickers.tsx";
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
  const {
    handleAddSvg
  } = Object(_Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const svg = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_3__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_mailicon"]);
  const contentWrapper = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  return __jsx("div", {
    className: "flex flex-col h-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "flex flex-row items-center justify-between w-full px-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "text-lg font-bold text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Stickers"), __jsx("button", {
    className: "font-medium text-md text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "See all")), __jsx("div", {
    className: "z-0 flex flex-row items-center mt-4 overflow-hidden overflow-x-scroll  no-scrollbar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "pl-2 mt-3 ",
    onClick: () => {
      sideScroll(contentWrapper.current, 25, 100, -10);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
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
      lineNumber: 46,
      columnNumber: 13
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
      lineNumber: 53,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "z-20 w-8 -mr-8 h-28 bg-gradient-to-r from-white bg-opacity-80 to-transparent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "relative z-10 flex flex-row flex-grow flex-shrink-0 w-56 gap-4 overflow-x-scroll h-28 no-scrollbar",
    ref: contentWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "flex-shrink-0",
    onClick: () => handleAddSvg(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_mailicon"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "flex-grow flex-shrink-0 w-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    onClick: () => handleAddSvg(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_mailicon"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "flex-shrink-0 w-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    onClick: () => handleAddSvg(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_mailicon"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "flex-shrink-0 w-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    onClick: () => handleAddSvg(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_mailicon"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "flex-shrink-0 w-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    onClick: () => handleAddSvg(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_mailicon"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "flex-shrink-0 w-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    onClick: () => handleAddSvg(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_mailicon"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "flex-shrink-0 w-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    onClick: () => handleAddSvg(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_mailicon"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "flex-shrink-0 w-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    onClick: () => handleAddSvg(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_mailicon"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "flex-shrink-0 w-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    onClick: () => handleAddSvg(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_mailicon"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "flex-shrink-0 w-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "z-20 w-8 -ml-8 bg-opacity-50 h-28 bg-gradient-to-l from-white to-transparent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "pr-2 mt-3",
    onClick: () => {
      sideScroll(contentWrapper.current, 25, 100, 10);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
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
      lineNumber: 140,
      columnNumber: 13
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
      lineNumber: 147,
      columnNumber: 15
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Stickers);

/***/ })

};
//# sourceMappingURL=0.44571fb44786396733be.hot-update.js.map