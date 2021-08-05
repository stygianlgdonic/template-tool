exports.id = 0;
exports.modules = {

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/ElementHeader/ElementHeader.tsx":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/ElementHeader/ElementHeader.tsx ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\tailwindComponents\\CardHeader\\components\\ElementHeader\\ElementHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const image = __webpack_require__(/*! ./../../../../../../../../../../assets/images/opacity.png */ "./src/assets/images/opacity.png");

const ElementHeader = () => {
  const [openstyle, setOpenstyle] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const {
    0: openDropDown,
    1: setopenDropDown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // !!state?false:true;

  return __jsx("div", {
    className: "flex justify-between w-full bg-indigo ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "flex bg-red",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("rect", {
    width: "40",
    height: "40",
    rx: "6",
    fill: "#FC7B7B",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "ml-10 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative mt-1",
    onClick: () => setopenDropDown(!!openDropDown ? false : true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("button", {
    type: "button",
    className: "relative w-32 py-2 pl-3 pr-10 text-left rounded-lg shadow-sm cursor-default h-9 bg-radicalRed border- focus:outline-none focus:ring-border focus:ring-indigo500 focus:border-indigo500 sm:text-sm",
    "aria-haspopup": "listbox",
    "aria-expanded": "true",
    "aria-labelledby": "listbox-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "block truncate border-4 border-elementColor bg-elementColor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, __jsx("svg", {
    className: "w-5 h-5 text-gray400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    "clip-rule": "evenodd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 19
    }
  })))), __jsx("ul", {
    className: "absolute z-10 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg w-52 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
    role: "listbox",
    "aria-labelledby": "listbox-label",
    "aria-activedescendant": "listbox-option-3",
    style: {
      display: openDropDown ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "relative py-2 pl-8 pr-4 text-gray-900 cursor-default select-none",
    id: "listbox-option-0",
    role: "option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "flex mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "block w-full h-4 truncate border-4 border-elementColor bg-elementColor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }, "4")), __jsx("div", {
    className: "flex mb-2 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "block w-full h-2 font-normal truncate border-2 border-elementColor bg-elementColor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  }, "2")), __jsx("div", {
    className: "flex ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "block w-full h-1 font-normal truncate border-2 border-elementColor bg-elementColor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  }, "1")), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "grid grid-cols-1 gap-4 mt-4 sm:grid-cols-3 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "w-10 h-10 rounded-md bg-indigo600",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-fuschia",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  }), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-greenish",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-yellowish",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 19
    }
  }), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-redish",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 19
    }
  }), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  }))))))), __jsx("div", {
    className: "w-6 h-full mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ElementHeader);

/***/ })

};
//# sourceMappingURL=0.78eb2ee75e6c42696a98.hot-update.js.map