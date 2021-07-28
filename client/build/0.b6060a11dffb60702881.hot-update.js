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
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\ElementSelector\\components\\Stickers\\Stickers.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Stickers = () => {
  const svg = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_mailicon"]);

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

  const contentWrapper = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  return __jsx("div", {
    className: "h-full flex  flex-col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-row justify-between items-center w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-lg text-gray94 font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, "Stickers"), __jsx("button", {
    className: "text-md text-gray95 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, "See all")), __jsx("div", {
    className: "flex flex-row mt-4 gap-4 h-28 overflow-x-scroll flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 52
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 52
    }
  })), __jsx("button", {
    className: "flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, " ", __jsx("img", {
    src: svg,
    className: "w-12 flex-shrink-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 52
    }
  })), __jsx("button", {
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
  }))), __jsx("button", {
    onClick: () => {
      sideScroll(contentWrapper.current, 25, 100, -10);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "left"));
};

/* harmony default export */ __webpack_exports__["default"] = (Stickers);

/***/ })

};
//# sourceMappingURL=0.b6060a11dffb60702881.hot-update.js.map