exports.id = 1;
exports.modules = {

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/Card.tsx":
/*!*************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/Card.tsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainCanvas */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/index.tsx");
/* harmony import */ var _tailwindComponents_CardHeader_CardHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tailwindComponents/CardHeader/CardHeader */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/CardHeader.tsx");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\Card.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Card = () => {
  return __jsx("div", {
    className: "h-screen",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx(_tailwindComponents_CardHeader_CardHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx(_MainCanvas__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/CardHeader.tsx":
/*!*************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/CardHeader.tsx ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TextHeader_TextHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/TextHeader/TextHeader */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/TextHeader/TextHeader.tsx");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\tailwindComponents\\CardHeader\\CardHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CardHeader = () => {
  return __jsx("div", {
    className: " h-18  flex flex-col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: " py-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx(_components_TextHeader_TextHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "border-b-2 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CardHeader);

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
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\tailwindComponents\\CardHeader\\components\\TextHeader\\TextHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TextHeader = () => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [openstyle, setOpenstyle] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  return __jsx("div", {
    className: "px-6 flex flex-row items-center gap-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative inline-block text-left ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
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
      lineNumber: 13,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => setOpen(true),
    type: "button",
    className: "inline-flex justify-center w-full rounded-md border border-bordercolor shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",
    id: "menu-button",
    "aria-expanded": "true",
    "aria-haspopup": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, "Poppins thin", __jsx("svg", {
    className: "-mr-1 ml-2 h-5 w-5",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 29
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
    "clip-rule": "evenodd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 33
    }
  })))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: open ? " origin-top-left absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" : "hidden",
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "menu-button",
    onClick: () => setOpen(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "",
    role: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#",
    className: "text-gray-700 block px-4 py-2 text-sm",
    role: "menuitem",
    id: "menu-item-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 33
    }
  }, "Poppins thin"), __jsx("a", {
    href: "#",
    className: "text-gray-700 block px-4 py-2 text-sm",
    role: "menuitem",
    id: "menu-item-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 33
    }
  }, "Poppins thin")), __jsx("div", {
    className: "",
    role: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#",
    className: "text-gray-700 block px-4 py-2 text-sm",
    role: "menuitem",
    id: "menu-item-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 33
    }
  }, "Poppins thin"), __jsx("a", {
    href: "#",
    className: "text-gray-700 block px-4 py-2 text-sm",
    role: "menuitem",
    id: "menu-item-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 33
    }
  }, "Poppins thin")), __jsx("div", {
    className: "",
    role: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#",
    className: "text-gray-700 block px-4 py-2 text-sm",
    role: "menuitem",
    id: "menu-item-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 33
    }
  }, "Poppins thin"), __jsx("a", {
    href: "#",
    className: "text-gray-700 block px-4 py-2 text-sm",
    role: "menuitem",
    id: "menu-item-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 33
    }
  }, "Poppins thin")), __jsx("div", {
    className: "",
    role: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#",
    className: "text-gray-700 block px-4 py-2 text-sm",
    role: "menuitem",
    id: "menu-item-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  }, "Poppins thin")))))), __jsx("div", {
    className: "flex items-center  z-50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative inline-block text-left ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("div", {
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "menu-button",
    onClick: () => setOpenstyle(!openstyle),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => setOpenstyle(true),
    type: "button",
    className: "inline-flex justify-center w-full rounded-md border border-bordercolor shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",
    id: "menu-button",
    "aria-expanded": "true",
    "aria-haspopup": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, "Heading 1", __jsx("svg", {
    className: "-mr-1 ml-2 h-5 w-5",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
    "clip-rule": "evenodd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 33
    }
  })))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: openstyle ? " origin-top-left absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" : "hidden",
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "menu-button",
    onClick: () => setOpenstyle(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "",
    role: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#",
    className: "text-gray-700 block px-4 py-2 text-sm",
    role: "menuitem",
    id: "menu-item-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }, "Heading 1"), __jsx("a", {
    href: "#",
    className: "text-gray-700 block px-4 py-2 text-sm",
    role: "menuitem",
    id: "menu-item-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
    }
  }, "Heading 2")), __jsx("div", {
    className: "",
    role: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#",
    className: "text-gray-700 block px-4 py-2 text-sm",
    role: "menuitem",
    id: "menu-item-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 33
    }
  }, "Heading 3"), __jsx("a", {
    href: "#",
    className: "text-gray-700 block px-4 py-2 text-sm",
    role: "menuitem",
    id: "menu-item-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 33
    }
  }, "Heading 4")), __jsx("div", {
    className: "",
    role: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#",
    className: "text-gray-700 block px-4 py-2 text-sm",
    role: "menuitem",
    id: "menu-item-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 33
    }
  }, "Heading 5"), __jsx("a", {
    href: "#",
    className: "text-gray-700 block px-4 py-2 text-sm",
    role: "menuitem",
    id: "menu-item-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 33
    }
  }, "Heading 6")), __jsx("div", {
    className: "",
    role: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#",
    className: "text-gray-700 block px-4 py-2 text-sm",
    role: "menuitem",
    id: "menu-item-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  }, "Heading 6")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (TextHeader);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/NavBar/NavBar.tsx":
/*!*****************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/NavBar/NavBar.tsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\NavBar\\NavBar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SideBarNav = () => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  return __jsx("div", {
    className: "h-full fixed flex  flex-col w-2/12 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-col justify-start text-left items-start leading-10  px-2 text-lightGray w-full  h-full mt-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex items-center  hover:bg-rightbackgroundcolor w-full hover:rounded-lg border-0 rounded-sm  pl-5 mb-1 h-10 mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx("svg", {
    className: "text-svgcolor",
    width: "20",
    height: "18",
    viewBox: "0 0 20 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M2.31802 2.31802C0.56066 4.07538 0.56066 6.92462 2.31802 8.68198L10.0001 16.364L17.682 8.68198C19.4393 6.92462 19.4393 4.07538 17.682 2.31802C15.9246 0.56066 13.0754 0.56066 11.318 2.31802L10.0001 3.63609L8.68198 2.31802C6.92462 0.56066 4.07538 0.56066 2.31802 2.31802Z",
    stroke: "#C4C4C4",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }
  })), __jsx("button", {
    className: "text-lightGray font-medium pl-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, "Elements")), __jsx("div", {
    className: "flex items-center hover:bg-rightbackgroundcolor w-full hover:rounded-lg border-0 rounded-sm  pl-5 mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx("svg", {
    width: "15",
    height: "16",
    viewBox: "0 0 15 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M13.8867 0.109375L14.0625 3.83594H13.6172C13.5312 3.17969 13.4141 2.71094 13.2656 2.42969C13.0234 1.97656 12.6992 1.64453 12.293 1.43359C11.8945 1.21484 11.3672 1.10547 10.7109 1.10547H8.47266V13.2461C8.47266 14.2227 8.57812 14.832 8.78906 15.0742C9.08594 15.4023 9.54297 15.5664 10.1602 15.5664H10.7109V16H3.97266V15.5664H4.53516C5.20703 15.5664 5.68359 15.3633 5.96484 14.957C6.13672 14.707 6.22266 14.1367 6.22266 13.2461V1.10547H4.3125C3.57031 1.10547 3.04297 1.16016 2.73047 1.26953C2.32422 1.41797 1.97656 1.70312 1.6875 2.125C1.39844 2.54688 1.22656 3.11719 1.17188 3.83594H0.726562L0.914062 0.109375H13.8867Z",
    fill: "#D1D5DB",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  })), __jsx("button", {
    className: "text-lightGray font-medium pl-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, "Text")), __jsx("div", {
    className: "flex items-center hover:bg-rightbackgroundcolor w-full hover:rounded-sm border-0 rounded-sm  pl-5 mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M1 13L5.58579 8.41421C6.36683 7.63317 7.63316 7.63316 8.41421 8.41421L13 13M11 11L12.5858 9.41421C13.3668 8.63317 14.6332 8.63316 15.4142 9.41421L17 11M11 5H11.01M3 17H15C16.1046 17 17 16.1046 17 15V3C17 1.89543 16.1046 1 15 1H3C1.89543 1 1 1.89543 1 3V15C1 16.1046 1.89543 17 3 17Z",
    stroke: "#C4C4C4",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  })), __jsx("button", {
    className: "text-lightGray font-medium pl-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, "Images")), __jsx("div", {
    className: "flex items-center hover:bg-rightbackgroundcolor w-full hover:rounded-sm border-0 rounded-sm  pl-5 mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M17 10V3C17 1.89543 16.1046 1 15 1H3C1.89543 1 1 1.89543 1 3V10M17 10V15C17 16.1046 16.1046 17 15 17H3C1.89543 17 1 16.1046 1 15V10M17 10H14.4142C14.149 10 13.8946 10.1054 13.7071 10.2929L11.2929 12.7071C11.1054 12.8946 10.851 13 10.5858 13H7.41421C7.149 13 6.89464 12.8946 6.70711 12.7071L4.29289 10.2929C4.10536 10.1054 3.851 10 3.58579 10H1",
    stroke: "#C4C4C4",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  })), __jsx("button", {
    className: "text-lightGray font-medium pl-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, "Backgrounds")), __jsx("div", {
    className: "flex items-center hover:bg-rightbackgroundcolor w-full hover:rounded-sm border-0 rounded-sm  pl-5 mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M10 3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3V4C14 4.55228 14.4477 5 15 5H18C18.5523 5 19 5.44772 19 6V9C19 9.55228 18.5523 10 18 10H17C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14H18C18.5523 14 19 14.4477 19 15V18C19 18.5523 18.5523 19 18 19H15C14.4477 19 14 18.5523 14 18V17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17V18C10 18.5523 9.55228 19 9 19H6C5.44772 19 5 18.5523 5 18V15C5 14.4477 4.55228 14 4 14H3C1.89543 14 1 13.1046 1 12C1 10.8954 1.89543 10 3 10H4C4.55228 10 5 9.55228 5 9V6C5 5.44772 5.44772 5 6 5H9C9.55228 5 10 4.55228 10 4V3Z",
    stroke: "#C4C4C4",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  })), __jsx("button", {
    className: "text-lightGray font-medium pl-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, "Logo")), __jsx("div", {
    className: "mt-6 flex justify-end w-9/12  mx-auto mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
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
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55229 6.44772 9 7 9V12C7 12.5523 7.44772 13 8 13H9C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11V8C9 7.44772 8.55228 7 8 7H7Z",
    fill: "#4338CA",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "flex w-9/12 items-center justify-center h-12 border-0 rounded-md bg-indigo600 px-auto  mx-auto relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx("svg", {
    className: "",
    width: "17",
    height: "20",
    viewBox: "0 0 17 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M13.2995 17.5994H0.5V0.800049H14.0994V15.1995",
    stroke: "#F9FAFB",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }), __jsx("path", {
    d: "M0.5 6.7998L5.2998 2L10.0996 6.7998",
    stroke: "#F9FAFB",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }), __jsx("path", {
    d: "M8.09961 4.79988L10.2995 2.59998L14.0994 6.39982",
    stroke: "#F9FAFB",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 25
    }
  }), __jsx("path", {
    d: "M8.09985 9.19904L6.49902 10.7999L14.8991 19.1999L16.4999 17.5991L8.09985 9.19904Z",
    stroke: "#F9FAFB",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }), __jsx("path", {
    d: "M8.89551 13.1955L10.4954 11.5956",
    stroke: "#F9FAFB",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }), __jsx("path", {
    d: "M6.49935 9.19973L4.89941 7.59979",
    stroke: "#F9FAFB",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }), __jsx("path", {
    d: "M5.30013 10.7996H3.7002",
    stroke: "#F9FAFB",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }), __jsx("path", {
    d: "M8.09961 7.99978V6.39984",
    stroke: "#F9FAFB",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }), __jsx("path", {
    d: "M6.49976 12.3996L5.2998 13.5995",
    stroke: "#F9FAFB",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  }), __jsx("path", {
    d: "M9.69922 9.19971L10.8992 7.99976",
    stroke: "#F9FAFB",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 25
    }
  }), __jsx("path", {
    d: "M0.5 15.5994H11.2996",
    stroke: "#F9FAFB",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  })), __jsx("button", {
    className: "text-white font-medium pl-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, "Brandify"))));
};

/* harmony default export */ __webpack_exports__["default"] = (SideBarNav);

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
/* harmony import */ var _components_BackgroundSelector_BackgroundSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/BackgroundSelector/BackgroundSelector */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/BackgroundSelector.tsx");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\SubNavBar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SubNavBar = () => {
  return __jsx("div", {
    className: "h-full flex flex-col border-bordercolor border-r-2 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full h-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(_components_BackgroundSelector_BackgroundSelector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SubNavBar);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/BackgroundSelector.tsx":
/*!**************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/BackgroundSelector.tsx ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ElementSelector_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ElementSelector/components/SearchBar/SearchBar */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar.tsx");
/* harmony import */ var _components_AddBackgroundImage_AddBackgroundImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AddBackgroundImage/AddBackgroundImage */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/components/AddBackgroundImage/AddBackgroundImage.tsx");
/* harmony import */ var _components_BackgroundColor_BackgroundColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/BackgroundColor/BackgroundColor */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/components/BackgroundColor/BackgroundColor.tsx");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/style.css");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\BackgroundSelector\\BackgroundSelector.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const BackgroundSelector = () => {
  return __jsx("div", {
    className: " flex   flex-col justify-center w-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mt-6 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx(_ElementSelector_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "flex flex-col p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(_components_BackgroundColor_BackgroundColor__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "p-6 text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "separator",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(_components_AddBackgroundImage_AddBackgroundImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BackgroundSelector);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/components/AddBackgroundImage/AddBackgroundImage.tsx":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/components/AddBackgroundImage/AddBackgroundImage.tsx ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\BackgroundSelector\\components\\AddBackgroundImage\\AddBackgroundImage.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AddBackgroundImage = () => {
  return __jsx("div", {
    className: " flex   flex-col justify-center w-full p-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mt-2 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "font-bold text-xl text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, "Add background image")), __jsx("div", {
    className: "flex flex-row bg-bluish w-full rounded-md h-12 items-center justify-center mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("svg", {
    width: "16",
    height: "12",
    viewBox: "0 0 16 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("path", {
    d: "M0.00300002 1.884L8 5.882L15.997 1.884C15.9674 1.37444 15.7441 0.895488 15.3728 0.545227C15.0016 0.194965 14.5104 -9.35847e-05 14 3.36834e-08H2C1.48958 -9.35847e-05 0.998447 0.194965 0.627178 0.545227C0.255908 0.895488 0.0326041 1.37444 0.00300002 1.884Z",
    fill: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M16 4.118L8 8.118L0 4.118V10C0 10.5304 0.210714 11.0391 0.585786 11.4142C0.960859 11.7893 1.46957 12 2 12H14C14.5304 12 15.0391 11.7893 15.4142 11.4142C15.7893 11.0391 16 10.5304 16 10V4.118Z",
    fill: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  })), __jsx("button", {
    className: " text-white ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "Select from gallery")), __jsx("div", {
    className: "flex flex-row bg-jacksonsGray w-full border-2 border-lightGray rounded-md h-12 items-center justify-center mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx("path", {
    d: "M0.503 1.884L8.5 5.882L16.497 1.884C16.4674 1.37444 16.2441 0.895488 15.8728 0.545227C15.5016 0.194965 15.0104 -9.35847e-05 14.5 3.36834e-08H2.5C1.98958 -9.35847e-05 1.49845 0.194965 1.12718 0.545227C0.755908 0.895488 0.532604 1.37444 0.503 1.884Z",
    fill: "#4B5563",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M16.5 4.118L8.5 8.118L0.5 4.118V10C0.5 10.5304 0.710714 11.0391 1.08579 11.4142C1.46086 11.7893 1.96957 12 2.5 12H14.5C15.0304 12 15.5391 11.7893 15.9142 11.4142C16.2893 11.0391 16.5 10.5304 16.5 10V4.118Z",
    fill: "#4B5563",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  })), __jsx("button", {
    className: " text-lightGray ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, "Design on Canva")));
};

/* harmony default export */ __webpack_exports__["default"] = (AddBackgroundImage);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/components/BackgroundColor/BackgroundColor.tsx":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/components/BackgroundColor/BackgroundColor.tsx ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\BackgroundSelector\\components\\BackgroundColor\\BackgroundColor.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const BackgroundColor = () => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  return __jsx("div", {
    className: " flex   flex-col justify-center w-full  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: " mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "font-bold text-xl text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "Select background color")), __jsx("div", {
    className: " mt-4 flex flex-row items-center gap-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M11.7059 4.05883H4.05882C2.36948 4.05883 1 5.42831 1 7.11765V23.9412C1 25.6305 2.36948 27 4.05882 27H20.8824C22.5717 27 23.9412 25.6305 23.9412 23.9412V16.2941M21.7783 1.89591C22.9728 0.701364 24.9095 0.701364 26.1041 1.89591C27.2986 3.09045 27.2986 5.02719 26.1041 6.22174L12.9729 19.3529H8.64706L8.64706 15.0271L21.7783 1.89591Z",
    stroke: "#4B5563",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }))), __jsx("button", {
    type: "button",
    onClick: () => setShowModal(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
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
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx("rect", {
    x: "0.5",
    y: "0.5",
    width: "39",
    height: "39",
    rx: "5.5",
    fill: "#4F46E5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }), __jsx("rect", {
    x: "0.5",
    y: "0.5",
    width: "39",
    height: "39",
    rx: "5.5",
    stroke: "#EEF2FF",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }))), __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
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
      lineNumber: 33,
      columnNumber: 21
    }
  }, __jsx("rect", {
    width: "40",
    height: "40",
    rx: "6",
    fill: "#5DEFC3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }))), __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
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
      lineNumber: 41,
      columnNumber: 21
    }
  }, __jsx("rect", {
    width: "40",
    height: "40",
    rx: "6",
    fill: "#EEA146",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }))), __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
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
      lineNumber: 50,
      columnNumber: 21
    }
  }, __jsx("rect", {
    width: "40",
    height: "40",
    rx: "6",
    fill: "#EE4646",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (BackgroundColor);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/style.css":
/*!*************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/style.css ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "p.separator {\r\n    line-height:1em;\r\n    border-bottom:2px solid #D1D5DB;\r\n}\r\np.separator:before {\r\n    content:\"OR\";\r\n    position:relative;\r\n    left:55%;\r\n    right:40%;\r\n    margin-left:-2.5em;\r\n    padding:0 0.3em;\r\n    top:0.5em;\r\n    background:white;\r\n}", "",{"version":3,"sources":["webpack://./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/style.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,+BAA+B;AACnC;AACA;IACI,YAAY;IACZ,iBAAiB;IACjB,QAAQ;IACR,SAAS;IACT,kBAAkB;IAClB,eAAe;IACf,SAAS;IACT,gBAAgB;AACpB","sourcesContent":["p.separator {\r\n    line-height:1em;\r\n    border-bottom:2px solid #D1D5DB;\r\n}\r\np.separator:before {\r\n    content:\"OR\";\r\n    position:relative;\r\n    left:55%;\r\n    right:40%;\r\n    margin-left:-2.5em;\r\n    padding:0 0.3em;\r\n    top:0.5em;\r\n    background:white;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar.tsx":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar.tsx ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\ElementSelector\\components\\SearchBar\\SearchBar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SearchBar = () => {
  return __jsx("div", {
    className: " flex justify-center items-center  w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex h-14 rounded-md border-bordercolor border justify-center items-center w-11/12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "w-auto flex justify-end items-center text-grey text-sm p-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
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
      lineNumber: 10,
      columnNumber: 25
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6Z",
    fill: "#9CA3AF",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 29
    }
  })))), __jsx("input", {
    className: "w-full rounded text-sm text-gray95 outline-none",
    type: "text",
    placeholder: "Search anything from elements",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/TextSelector.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/Header/Header.tsx":
/*!*******************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/Header/Header.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\Header\\Header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Header = ({
  document_title
}) => {
  return __jsx("div", {
    className: "bg-indigo600 h-16 flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-row items-center justify-between w-full px-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-row items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "flex flex-row items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "9",
    height: "16",
    viewBox: "0 0 9 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M8 15L1 8L8 1",
    stroke: "white",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  })), __jsx("h1", {
    className: "text-white pl-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, "Back to Dashboard"))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, document_title)), __jsx("div", {
    className: "bg-white p-2 border-0 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "text-base text-gray94 leading-6 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, "Save & Share"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

};
//# sourceMappingURL=1.609e7bf12f961b47219b.hot-update.js.map