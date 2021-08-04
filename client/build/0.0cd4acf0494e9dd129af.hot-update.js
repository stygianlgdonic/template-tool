exports.id = 0;
exports.modules = {

/***/ "./src/Screens/CreateCardLayout/CreateCardLayout.tsx":
/*!***********************************************************!*\
  !*** ./src/Screens/CreateCardLayout/CreateCardLayout.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/HeaderContext */ "./src/contexts/HeaderContext.tsx");
/* harmony import */ var _components_DesignTool_DesigntTool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/DesignTool/DesigntTool */ "./src/Screens/CreateCardLayout/components/DesignTool/DesigntTool.tsx");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header/Header */ "./src/Screens/CreateCardLayout/components/Header/Header.tsx");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\CreateCardLayout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




let document_title = "Untitled design - Employees";

const CreateCardLayout = () => {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_1__["HeaderContext"]);
  return __jsx("div", {
    className: " overflow-hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      height: '8vh'
    },
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    document_title: document_title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "relative",
    style: {
      height: '92vh'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx(_components_DesignTool_DesigntTool__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "w-14 absolute h-full right-0 top-0 bg-white",
    style: {
      paddingTop: '54px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "w-6  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }), __jsx("button", {
    onClick: () => setOpen(!open),
    className: "flex  bg-canvasbgcolor items-center h-full pt-10  mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "w-10 h-20 -right-6 relative  bg-white rounded-r rounded-full   flex items-center pl-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, __jsx("svg", {
    className: "w-3 h-3",
    width: "13",
    height: "22",
    viewBox: "0 0 13 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 29
    }
  }, __jsx("path", {
    d: "M11 20L2 11L11 2",
    stroke: "#374151",
    "stroke-width": "4",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 33
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateCardLayout);

/***/ }),

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
/* harmony import */ var _contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../contexts/DesignToolContext */ "./src/contexts/DesignToolContext.tsx");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\tailwindComponents\\CardHeader\\components\\TextHeader\\TextHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const image = __webpack_require__(/*! ./../../../../../../../../../../assets/images/opacity.png */ "./src/assets/images/opacity.png");

const TextHeader = () => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [openstyle, setOpenstyle] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false); //   const [showTransformModal, setShowTransformModal] = React.useState(false);

  const {
    0: designToolnavigator,
    1: setDesignToolnavigator
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__["DesignToolContext"]);
  return __jsx("div", {
    className: "flex flex-row items-center justify-center gap-4 px-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative inline-block text-left ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("div", {
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "menu-button" // onClick={() => setOpen(!open)}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx("button", {
    //   onClick={() => setOpen(true)}
    type: "button",
    className: "inline-flex justify-center w-full px-4 py-2 text-sm font-medium bg-white border rounded-md shadow-sm border-bordercolor text-gray900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",
    id: "menu-button",
    "aria-expanded": "true",
    "aria-haspopup": "true",
    onClick: () => setDesignToolnavigator('texttool'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, "Poppins thin")))), __jsx("div", {
    className: "z-50 flex items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative inline-block text-left ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("div", {
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "menu-button",
    onClick: () => setOpen(!open),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
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
      lineNumber: 42,
      columnNumber: 25
    }
  }, "Heading 1"))), open ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "fixed z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none top-56 focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "relative w-auto max-w-3xl mx-auto my-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "flex items-start justify-between p-5 rounded-t border-blueGray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 37
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 41
    }
  }, __jsx("label", {
    id: "listbox-label",
    className: "block text-sm font-medium text-gray-700",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 45
    }
  }, "FallBack"), __jsx("div", {
    className: "relative mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 45
    }
  }, __jsx("button", {
    type: "button",
    className: "relative py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default h-7 w-28 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
    "aria-haspopup": "listbox",
    "aria-expanded": "true",
    "aria-labelledby": "listbox-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 49
    }
  }, __jsx("span", {
    className: "block truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 53
    }
  }, "Tom Cook"), __jsx("span", {
    className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 53
    }
  }, __jsx("svg", {
    className: "w-5 h-5 text-gray-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 57
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    "clip-rule": "evenodd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 61
    }
  })))), __jsx("ul", {
    className: "absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
    role: "listbox",
    "aria-labelledby": "listbox-label",
    "aria-activedescendant": "listbox-option-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 49
    }
  }, __jsx("li", {
    className: "relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9",
    id: "listbox-option-0",
    role: "option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 53
    }
  }, __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 57
    }
  }, "Wade Cooper"), __jsx("span", {
    className: "absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 57
    }
  }, __jsx("svg", {
    className: "w-5 h-5",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 61
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
    "clip-rule": "evenodd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 65
    }
  }))))))), __jsx("div", {
    className: "ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 41
    }
  }, __jsx("label", {
    id: "listbox-label",
    className: "block text-sm font-medium text-gray-700",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 45
    }
  }, "Merge Tag"), __jsx("div", {
    className: "relative mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 45
    }
  }, __jsx("button", {
    type: "button",
    className: "relative py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default h-7 w-28 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
    "aria-haspopup": "listbox",
    "aria-expanded": "true",
    "aria-labelledby": "listbox-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 49
    }
  }, __jsx("span", {
    className: "block truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 53
    }
  }, "Tom Cook"), __jsx("span", {
    className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 53
    }
  }, __jsx("svg", {
    className: "w-5 h-5 text-gray-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 57
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    "clip-rule": "evenodd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 61
    }
  })))), __jsx("ul", {
    className: "absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
    role: "listbox",
    "aria-labelledby": "listbox-label",
    "aria-activedescendant": "listbox-option-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 49
    }
  }, __jsx("li", {
    className: "relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9",
    id: "listbox-option-0",
    role: "option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 53
    }
  }, __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 57
    }
  }, "Wade Cooper"), __jsx("span", {
    className: "absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 57
    }
  }, __jsx("svg", {
    className: "w-5 h-5",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 61
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
    "clip-rule": "evenodd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 65
    }
  }))))))), __jsx("div", {
    className: "mt-6 ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 41
    }
  }, __jsx("button", {
    type: "button",
    className: "inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white border border-transparent rounded-md shadow-sm h-7 w-36 bg-indigo600 hover:bg-indigo700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 45
    }
  }, __jsx("svg", {
    className: "-ml-0.5 mr-2 h-4 w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 49
    }
  }, __jsx("path", {
    d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 53
    }
  }), __jsx("path", {
    d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 53
    }
  })), "Add Image"))), __jsx("div", {
    className: "flex items-center justify-end p-6 rounded-b ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 37
    }
  }, __jsx("button", {
    className: "px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-indigo active:bg-indigo700 hover:shadow-lg focus:outline-none",
    type: "button",
    onClick: () => setOpen(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 41
    }
  }, "Close"))))), __jsx("div", {
    className: "fixed inset-0 z-40 opacity-25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 25
    }
  })) : null, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "ml-10 text-lg font-bold text-black",
    onClick: () => setDesignToolnavigator('fonttool'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 25
    }
  }, __jsx("svg", {
    className: "mt-2",
    width: "30",
    height: "30",
    viewBox: "0 0 36 38",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 29
    }
  }, __jsx("path", {
    d: "M12.392 27L13.9943 22.3807H20.8125L22.4062 27H25.2017L18.9205 9.54545H15.8778L9.59659 27H12.392ZM14.7614 20.1648L17.3352 12.7159H17.4716L20.0455 20.1648H14.7614Z",
    fill: "black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 33
    }
  }), __jsx("g", {
    filter: "url(#filter0_dd)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 33
    }
  }, __jsx("rect", {
    x: "3",
    y: "30",
    width: "30",
    height: "4",
    rx: "2",
    fill: "#F9FAFB",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 37
    }
  })), __jsx("rect", {
    x: "3",
    y: "30",
    width: "17",
    height: "4",
    rx: "2",
    fill: "#6366F1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 33
    }
  }), __jsx("defs", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 33
    }
  }, __jsx("filter", {
    id: "filter0_dd",
    x: "0",
    y: "28",
    width: "36",
    height: "10",
    filterUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 37
    }
  }, __jsx("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 41
    }
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 41
    }
  }), __jsx("feOffset", {
    dy: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 41
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 41
    }
  }), __jsx("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 41
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 41
    }
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 41
    }
  }), __jsx("feOffset", {
    dy: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 41
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "1.5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 41
    }
  }), __jsx("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 41
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in2: "effect1_dropShadow",
    result: "effect2_dropShadow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 41
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect2_dropShadow",
    result: "shape",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 41
    }
  }))))))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "ml-10 text-lg font-bold text-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 21
    }
  }, "B")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "ml-10 text-lg italic font-bold text-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 21
    }
  }, "I")), __jsx("div", {
    className: "py-4 ml-6 border-r-2 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "ml-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 17
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
      lineNumber: 299,
      columnNumber: 21
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
      lineNumber: 306,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "py-4 ml-6 border-r-2 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "ml-6 text-lg italic font-bold text-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 17
    }
  }, __jsx("button", {
    onClick: () => setDesignToolnavigator('effecttool'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 21
    }
  }, "Effects")), __jsx("div", {
    className: "py-4 ml-6 border-r-2 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "ml-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (TextHeader);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Preview/components/Drawer/Drawer.tsx":
/*!************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Preview/components/Drawer/Drawer.tsx ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SubNavBar_components_ElementSelector_components_Stickers_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../SubNavBar/components/ElementSelector/components/Stickers/styles.css */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Stickers/styles.css");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Preview\\components\\Drawer\\Drawer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const image = __webpack_require__(/*! ./../../../../../../../../assets/images/preview.png */ "./src/assets/images/preview.png");


function Drawer({
  isOpen,
  setIsOpen
}) {
  return __jsx("main", {
    style: {
      height: '91vh'
    },
    className: " fixed overflow-y-auto no-scrollbar z-50  flex-grow   inset-0 transform ease-in-out " + (isOpen ? " transition-opacity opacity-100 duration-500 translate-x-0 translate-y-16  " : " transition-all delay-500  translate-x-full "),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: " w-screen max-w-lg right-0 absolute bg-transparent h-full  delay-400 duration-500 ease-in-out transition-all transform  " + (isOpen ? " translate-x-0  " : " translate-x-full "),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("article", {
    className: "relative w-screen max-w-full pb-20 flex flex-col h-full overflow-y-scroll no-scrollbar mb-8 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "h-full flex  ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex items-center  w-4 h-full ",
    style: {
      marginTop: '89px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, __jsx("button", {
    className: " pl-4 mr-2 h-full flex items-center fixed b z-50 bg-transparent 3xl:mt-top  ",
    onClick: () => {
      setIsOpen(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "bg-white rounded-r rounded-full h-20   items-center w-10 flex flex-row pl-2 ml-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 33
    }
  }, __jsx("svg", {
    className: "w-2",
    width: "14",
    height: "22",
    viewBox: "0 0 14 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 37
    }
  }, __jsx("path", {
    d: "M2.24023 2L11.9842 11L2.24023 20",
    stroke: "#374151",
    "stroke-width": "4",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 41
    }
  }))))), __jsx("div", {
    className: "flex flex-col justify-start w-full ml-6 bg-white h-full pt-3 mt-2 3xl:mt-3 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "justify-center flex ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: image,
    className: "border-bordercolor  border-2 shadow-lg ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "px-14 mt-6 mb-6 bg-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex flex-col justify-center mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "text-sm text-gray94 pb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 37
    }
  }, "First_name"), __jsx("input", {
    className: "border-2 border-bordercolor rounded-md text-sm text-gray9f h-9 outline-none px-4",
    type: "text",
    placeholder: "Add first name to test",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: "flex flex-col justify-center mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "text-sm text-gray94 pb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 37
    }
  }, "First_name"), __jsx("input", {
    className: "border-2 border-bordercolor rounded-md text-sm text-gray9f h-9 outline-none px-4",
    type: "text",
    placeholder: "Add first name to test",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: "flex flex-col justify-center mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "text-sm text-gray94 pb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 37
    }
  }, "First_name"), __jsx("input", {
    className: "border-2 border-bordercolor rounded-md text-sm text-gray9f h-9 outline-none px-4",
    type: "text",
    placeholder: "Add first name to test",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 37
    }
  })), __jsx("button", {
    className: "w-full mt-14 mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "w-full flex flex-row bg-indigo600  justify-center items-center rounded-md h-12 i mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 37
    }
  }, __jsx("svg", {
    width: "16",
    height: "12",
    viewBox: "0 0 16 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 41
    }
  }, __jsx("path", {
    d: "M0.00300002 1.884L8 5.882L15.997 1.884C15.9674 1.37444 15.7441 0.895488 15.3728 0.545227C15.0016 0.194965 14.5104 -9.35847e-05 14 3.36834e-08H2C1.48958 -9.35847e-05 0.998447 0.194965 0.627178 0.545227C0.255908 0.895488 0.0326041 1.37444 0.00300002 1.884Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 45
    }
  }), __jsx("path", {
    d: "M16 4.118L8 8.118L0 4.118V10C0 10.5304 0.210714 11.0391 0.585786 11.4142C0.960859 11.7893 1.46957 12 2 12H14C14.5304 12 15.0391 11.7893 15.4142 11.4142C15.7893 11.0391 16 10.5304 16 10V4.118Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 45
    }
  })), __jsx("p", {
    className: " text-white pl-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 41
    }
  }, "Get sharable code")))))))), __jsx("section", {
    className: " w-screen h-full cursor-pointer ",
    onClick: () => {
      setIsOpen(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/SubNavBar.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/SubNavBar.tsx ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../contexts/DesignToolContext */ "./src/contexts/DesignToolContext.tsx");
/* harmony import */ var _components_BackgroundSelector_BackgroundSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BackgroundSelector/BackgroundSelector */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/BackgroundSelector.tsx");
/* harmony import */ var _components_ElementSelector_ElementSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ElementSelector/ElementSelector */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/ElementSelector.tsx");
/* harmony import */ var _components_ImageSelector_ImageSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ImageSelector/ImageSelector */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ImageSelector/ImageSelector.tsx");
/* harmony import */ var _components_LogoSelector_LogoSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/LogoSelector/LogoSelector */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/LogoSelector/LogoSelector.tsx");
/* harmony import */ var _components_TextSelector_TextSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/TextSelector/TextSelector */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/TextSelector.tsx");
/* harmony import */ var _components_TextSelector_components_FontStyleTool_FontStyletool__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/TextSelector/components/FontStyleTool/FontStyletool */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/FontStyleTool/FontStyletool.tsx");
/* harmony import */ var _components_TextSelector_components_FontColortool_FontColortool__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/TextSelector/components/FontColortool/FontColortool */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/FontColortool/FontColortool.tsx");
/* harmony import */ var _components_TextSelector_components_EffectStyletool_EffectStyletool__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/TextSelector/components/EffectStyletool/EffectStyletool */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/EffectStyletool/EffectStyletool.tsx");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\SubNavBar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const SubNavBar = () => {
  const {
    0: designToolnavigator,
    1: setDesignToolnavigator
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__["DesignToolContext"]);
  return __jsx("div", {
    className: "h-full flex flex-col w-full border-bordercolor border ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, designToolnavigator === 'element' && __jsx(_components_ElementSelector_ElementSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 51
    }
  }), designToolnavigator === 'text' && __jsx(_components_TextSelector_TextSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 48
    }
  }), designToolnavigator === 'images' && __jsx(_components_ImageSelector_ImageSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 50
    }
  }), designToolnavigator === 'background' && __jsx(_components_BackgroundSelector_BackgroundSelector__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 54
    }
  }), designToolnavigator === 'logo' && __jsx(_components_LogoSelector_LogoSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 48
    }
  }), designToolnavigator === 'texttool' && __jsx(_components_TextSelector_components_FontStyleTool_FontStyletool__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 52
    }
  }), designToolnavigator === 'fonttool' && __jsx(_components_TextSelector_components_FontColortool_FontColortool__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 52
    }
  }), designToolnavigator === 'effecttool' && __jsx(_components_TextSelector_components_EffectStyletool_EffectStyletool__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 54
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SubNavBar);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/EffectStyletool/EffectStyletool.tsx":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/EffectStyletool/EffectStyletool.tsx ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../contexts/DesignToolContext */ "./src/contexts/DesignToolContext.tsx");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\TextSelector\\components\\EffectStyletool\\EffectStyletool.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const image1 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/hollow.png */ "./src/assets/images/hollow.png");

const image2 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/splice.png */ "./src/assets/images/splice.png");

const image3 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/echo.png */ "./src/assets/images/echo.png");

const image4 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/neon.png */ "./src/assets/images/neon.png");

const image5 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/glitch.png */ "./src/assets/images/glitch.png");

const image6 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/lift.png */ "./src/assets/images/lift.png");

const image7 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/shadow.png */ "./src/assets/images/shadow.png");

const FontStyletool = () => {
  const {
    0: designToolnavigator,
    1: setDesignToolnavigator
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__["DesignToolContext"]);
  return __jsx("div", {
    className: "h-full flex  flex-col w-full px-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, " ", __jsx("h1", {
    className: "font-bold text-xl mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 19
    }
  }, "Effects")), __jsx("div", {
    className: "border-b-2 border-bordercolor mt-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, " ", __jsx("h1", {
    className: "font-medium text-lg mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 19
    }
  }, "Style")), __jsx("div", {
    className: "w-full gap-4  flex-wrap flex flex-row mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image6,
    className: "w-24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }), " ", __jsx("p", {
    className: "text-gray94 mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 63
    }
  }, "None")), __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image1,
    className: "w-24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }), " ", __jsx("p", {
    className: "text-gray94 mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 63
    }
  }, "Hollow")), __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image6,
    className: "w-24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }), " ", __jsx("p", {
    className: "text-gray94 mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 63
    }
  }, "Lift")), __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image7,
    className: "w-24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }), " ", __jsx("p", {
    className: "text-gray94 mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 63
    }
  }, "Shadow")), __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image4,
    className: "w-24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }), " ", __jsx("p", {
    className: "text-gray94 mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 63
    }
  }, "Neon")), __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image5,
    className: "w-24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }), " ", __jsx("p", {
    className: "text-gray94 mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 63
    }
  }, "glitch")), __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image3,
    className: "w-24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }), " ", __jsx("p", {
    className: "text-gray94 mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 63
    }
  }, "echo")), __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image2,
    className: "w-24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }), " ", __jsx("p", {
    className: "text-gray94 mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 63
    }
  }, "splice"))));
};

/* harmony default export */ __webpack_exports__["default"] = (FontStyletool);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/FontColortool/FontColortool.tsx":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/FontColortool/FontColortool.tsx ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../contexts/DesignToolContext */ "./src/contexts/DesignToolContext.tsx");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\TextSelector\\components\\FontColortool\\FontColortool.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const image = __webpack_require__(/*! ./../../../../../../../../../../assets/images/custom.png */ "./src/assets/images/custom.png");

const FontStyletool = () => {
  const {
    0: designToolnavigator,
    1: setDesignToolnavigator
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__["DesignToolContext"]);
  return __jsx("div", {
    className: "h-full flex flex-col w-full px-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: " flex justify-center items-center  w-full mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex h-14 rounded-md border-bordercolor border justify-center items-center w-full z-50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "w-auto flex justify-end items-center text-grey text-sm p-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }, __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 29
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6Z",
    fill: "#9CA3AF",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 33
    }
  })))), __jsx("input", {
    className: "w-full rounded text-sm text-gray95 outline-none h-10 z-0 ",
    type: "text",
    placeholder: "Try \u201Cblue\u201D or \u201C#43345\u201D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-md text-gray40 mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, "Document Colors"), __jsx("div", {
    className: " mt-4 flex flex-row items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: image,
    className: "w-10 h-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  })), __jsx("button", {
    className: "bg-yellowish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "bg-redish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "bg-indigo600 h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "bg-fuschia h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "bg-greenish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "border-b-2 border-bordercolor mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "text-md text-black mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "text-2xl mr-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 62
    }
  }, "+"), "Add your brand colors in Brand Kit")), __jsx("div", {
    className: "border-b-2 border-bordercolor mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-md text-gray40 mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "Photo Colors"), __jsx("div", {
    className: " mt-4 flex flex-row items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72",
    className: "w-10 h-10 rounded-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  })), __jsx("button", {
    className: "bg-indigo600 h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "bg-fuschia h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "bg-greenish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "bg-redish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "bg-yellowish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "border-b-2 border-bordercolor mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-md text-gray40 mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, "Default Colors"), __jsx("div", {
    className: " mt-4 flex flex-col items-center ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: " mt-4 flex flex-row items-center justify-between w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "bg-gray95 h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-indigo600 h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-fuschia h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-greenish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-redish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-yellowish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: " mt-4 flex flex-row items-center justify-between  w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "bg-canvasbgcolor h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-gray95 h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-lightindigo h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-fuschia h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-greenish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-yellowish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (FontStyletool);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/FontStyleTool/FontStyletool.tsx":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/FontStyleTool/FontStyletool.tsx ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../contexts/DesignToolContext */ "./src/contexts/DesignToolContext.tsx");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webfontloader */ "webfontloader");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\TextSelector\\components\\FontStyleTool\\FontStyletool.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const FontStyletool = () => {
  const {
    0: designToolnavigator,
    1: setDesignToolnavigator
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__["DesignToolContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    webfontloader__WEBPACK_IMPORTED_MODULE_2___default.a.load({
      google: {
        families: ['Comfortaa', 'Josefin Sans', 'Euphoria Script', 'Oswald', 'Alfa Slab One', 'Bangers', 'Caveat', 'DM Sans', 'East Sea Dokdo', 'Homemade Apple', 'Kristi', 'Lobster Two', 'Maven Pro', 'Monoton', 'Montserrat', 'Playfair Display', 'Press Start 2P', 'Raleway', 'Roboto Slab', 'Shadows Into Light', 'Swanky and Moo Moo']
      }
    });
  }, []);
  return __jsx("div", {
    className: "h-full flex  flex-col w-full px-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: " flex justify-center items-center  w-full mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex h-14 rounded-md border-bordercolor border justify-center items-center w-full z-50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "w-auto flex justify-end items-center text-grey text-sm p-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 29
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6Z",
    fill: "#9CA3AF",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 33
    }
  })))), __jsx("input", {
    className: "w-full rounded text-sm text-gray95 outline-none h-10 z-0 ",
    type: "text",
    placeholder: "Search Fonts",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "flex-row flex justify-between items-center mt-6  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-md text-gray40 mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, "My Fonts"), __jsx("button", {
    className: "text-md text-indigo600 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, " ", __jsx("span", {
    className: "text-2xl ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 73
    }
  }, "+"), "Add new Font")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-lg text-black mt-4 pl-2",
    style: {
      fontFamily: "Montserrat"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, "Montserrrat")), __jsx("div", {
    className: "border-b-2 border-bordercolor mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-md text-gray40 mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, "Template Fonts"), __jsx("div", {
    className: "flex flex-col justify-end w-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "text-lg text-black mt-1 pl-2 flex justify-start",
    style: {
      fontFamily: "Maven Pro"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, "Maven Pro"), __jsx("button", {
    className: "text-lg text-black mt-1 pl-2 flex justify-start",
    style: {
      fontFamily: "Shadows Into Light"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, "Shadows Into Light"), __jsx("button", {
    className: "text-lg text-black mt-1 pl-2 flex justify-start",
    style: {
      fontFamily: "Euphoria Script"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, "Euphoria Script"))), __jsx("div", {
    className: "border-b-2 border-bordercolor mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-md text-gray40 mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, "Popular Fonts"), __jsx("div", {
    className: "flex flex-col justify-end w-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "text-lg text-black mt-1 pl-2 flex justify-start",
    style: {
      fontFamily: "Playfair Display"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, "Playfair Display"), __jsx("button", {
    className: "text-lg text-black mt-1 pl-2 flex justify-start",
    style: {
      fontFamily: "East Sea Dokdo"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, "East Sea Dokdo"), __jsx("button", {
    className: "text-lg text-black mt-1 pl-2 flex justify-start",
    style: {
      fontFamily: "Kristi"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, "Kristi"), __jsx("button", {
    className: "text-lg text-black mt-1 pl-2 flex justify-start",
    style: {
      fontFamily: "Lobster Two"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, "Lobster Two"), __jsx("button", {
    className: "text-lg text-black mt-1 pl-2 flex justify-start",
    style: {
      fontFamily: "Caveat"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, "Caveat"), __jsx("button", {
    className: "text-lg text-black mt-1 pl-2 flex justify-start",
    style: {
      fontFamily: "Swanky and Moo Moo"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, "Swanky and Moo Moo"))));
};

/* harmony default export */ __webpack_exports__["default"] = (FontStyletool);

/***/ }),

/***/ "./src/assets/images/custom.png":
/*!**************************************!*\
  !*** ./src/assets/images/custom.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/echo.png":
/*!************************************!*\
  !*** ./src/assets/images/echo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/echo.2b90d1ba.png";

/***/ }),

/***/ "./src/assets/images/glitch.png":
/*!**************************************!*\
  !*** ./src/assets/images/glitch.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/glitch.c3fda1d1.png";

/***/ }),

/***/ "./src/assets/images/hollow.png":
/*!**************************************!*\
  !*** ./src/assets/images/hollow.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/lift.png":
/*!************************************!*\
  !*** ./src/assets/images/lift.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/lift.b13cf734.png";

/***/ }),

/***/ "./src/assets/images/neon.png":
/*!************************************!*\
  !*** ./src/assets/images/neon.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/neon.7fca1e10.png";

/***/ }),

/***/ "./src/assets/images/shadow.png":
/*!**************************************!*\
  !*** ./src/assets/images/shadow.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/shadow.161b9d54.png";

/***/ }),

/***/ "./src/assets/images/splice.png":
/*!**************************************!*\
  !*** ./src/assets/images/splice.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/splice.6bc44619.png";

/***/ })

};
//# sourceMappingURL=0.0cd4acf0494e9dd129af.hot-update.js.map