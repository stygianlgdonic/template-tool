exports.id = 0;
exports.modules = {

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/TextHeader/TextHeader.tsx":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/TextHeader/TextHeader.tsx ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\tailwindComponents\\CardHeader\\components\\TextHeader\\TextHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const image = __webpack_require__(/*! ./../../../../../../../../../../assets/images/opacity.png */ "./src/assets/images/opacity.png");

const TextHeader = () => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [openstyle, setOpenstyle] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false); //   const [showTransformModal, setShowTransformModal] = React.useState(false);

  return __jsx("div", {
    className: "flex flex-row items-center justify-center gap-4 px-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "flex items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "relative inline-block text-left ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "menu-button" // onClick={() => setOpen(!open)}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx("button", {
    //   onClick={() => setOpen(true)}
    type: "button",
    className: "inline-flex justify-center w-full px-4 py-2 text-sm font-medium bg-white border rounded-md shadow-sm border-bordercolor text-gray900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",
    id: "menu-button",
    "aria-expanded": "true",
    "aria-haspopup": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "Poppins thin")))), __jsx("div", {
    className: "z-50 flex items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "relative inline-block text-left ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("div", {
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "menu-button",
    onClick: () => setOpen(open),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("button", {
    onClick: () => setOpen(true),
    type: "button",
    className: "inline-flex justify-center w-full px-4 py-2 text-sm font-medium bg-white border rounded-md shadow-sm border-bordercolor text-gray900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",
    id: "menu-button",
    "aria-expanded": "true",
    "aria-haspopup": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "Heading 1"))), showModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative w-auto max-w-3xl mx-auto my-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }, __jsx("h3", {
    className: "text-3xl font-semibold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, "Modal Title"), __jsx("button", {
    className: "float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none",
    onClick: () => setOpen(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 23
    }
  }, "\xD7"))), __jsx("div", {
    className: "relative flex-auto p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "my-4 text-lg leading-relaxed text-blueGray-500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, "I always felt like I could do anything. That\u2019s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can\u2019t do anything, you won\u2019t do anything. I was taught I could do everything.")), __jsx("div", {
    className: "flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none",
    type: "button",
    onClick: () => setOpen(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, "Close"), __jsx("button", {
    className: "px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
    type: "button",
    onClick: () => setOpen(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }, "Save Changes"))))), __jsx("div", {
    className: "fixed inset-0 z-40 bg-black opacity-25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  })) : null, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: "ml-10 text-lg font-bold text-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, "A"))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "ml-10 text-lg font-bold text-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, "B")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "ml-10 text-lg italic font-bold text-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, "I")), __jsx("div", {
    className: "py-4 ml-6 border-r-2 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "ml-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx("svg", {
    width: "23",
    height: "18",
    viewBox: "0 0 23 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, __jsx("path", {
    d: "M1 1H22M1 9H11.5M1 17H22",
    stroke: "#4B5563",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "py-4 ml-6 border-r-2 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "ml-6 text-lg italic font-bold text-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }, "Effects")), __jsx("div", {
    className: "py-4 ml-6 border-r-2 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "ml-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (TextHeader);

/***/ })

};
//# sourceMappingURL=0.28f321c64aebb6ee1943.hot-update.js.map