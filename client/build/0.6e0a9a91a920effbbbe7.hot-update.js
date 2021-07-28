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
    className: "h-full flex  flex-col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-row justify-between items-center w-full",
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
    className: "flex flex-row mt-4 gap-4 h-28 overflow-x-scroll flex-shrink-0 overflow-hidden no-scrollbar",
    ref: contentWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 52
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 52
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 52
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 52
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 52
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 52
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 52
    }
  }))), __jsx("button", {
    onClick: () => {
      sideScroll(contentWrapper.current, 25, 100, -10);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 16
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM17.5607 10.9393L13.0607 6.43934C12.4749 5.85355 11.5251 5.85355 10.9393 6.43934C10.3536 7.02513 10.3536 7.97487 10.9393 8.56066L12.8787 10.5L7.5 10.5C6.67157 10.5 6 11.1716 6 12C6 12.8284 6.67157 13.5 7.5 13.5H12.8787L10.9393 15.4393C10.3536 16.0251 10.3536 16.9749 10.9393 17.5607C11.5251 18.1464 12.4749 18.1464 13.0607 17.5607L17.5607 13.0607C18.1464 12.4749 18.1464 11.5251 17.5607 10.9393Z",
    fill: "#D1D5DB",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }))), __jsx("button", {
    onClick: () => {
      sideScroll(contentWrapper.current, 25, 100, 10);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "right"));
};

/* harmony default export */ __webpack_exports__["default"] = (Stickers);

/***/ })

};
//# sourceMappingURL=0.6e0a9a91a920effbbbe7.hot-update.js.map