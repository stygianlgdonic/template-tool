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


const TextHeader = () => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [openstyle, setOpenstyle] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  return __jsx("div", {
    className: "flex flex-row items-center gap-4 px-6",
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
    className: "inline-flex justify-center w-full px-4 py-2 text-sm font-medium bg-white border rounded-md shadow-sm border-bordercolor text-gray900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",
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
    className: "w-5 h-5 ml-2 -mr-1",
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
    className: "block px-4 py-2 text-sm text-gray-700",
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
    className: "block px-4 py-2 text-sm text-gray-700",
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
    className: "block px-4 py-2 text-sm text-gray-700",
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
    className: "block px-4 py-2 text-sm text-gray-700",
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
    className: "block px-4 py-2 text-sm text-gray-700",
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
    className: "block px-4 py-2 text-sm text-gray-700",
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
    className: "block px-4 py-2 text-sm text-gray-700",
    role: "menuitem",
    id: "menu-item-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  }, "Poppins thin")))))), __jsx("div", {
    className: "z-50 flex items-center",
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
    className: "inline-flex justify-center w-full px-4 py-2 text-sm font-medium bg-white border rounded-md shadow-sm border-bordercolor text-gray900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",
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
    className: "w-5 h-5 ml-2 -mr-1",
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
    className: "block px-4 py-2 text-sm text-gray-700",
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
    className: "block px-4 py-2 text-sm text-gray-700",
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
    className: "block px-4 py-2 text-sm text-gray-700",
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
    className: "block px-4 py-2 text-sm text-gray-700",
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
    className: "block px-4 py-2 text-sm text-gray-700",
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
    className: "block px-4 py-2 text-sm text-gray-700",
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
    className: "block px-4 py-2 text-sm text-gray-700",
    role: "menuitem",
    id: "menu-item-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  }, "Heading 6"))))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  }, __jsx("button", {
    className: "ml-10 text-lg font-bold text-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 29
    }
  }, "A"))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "ml-10 text-lg font-bold text-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }, "B")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 25
    }
  }, __jsx("button", {
    className: "ml-10 text-lg italic font-bold text-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 29
    }
  }, "I"))));
};

/* harmony default export */ __webpack_exports__["default"] = (TextHeader);

/***/ })

};
//# sourceMappingURL=0.41176c6da34570e2b090.hot-update.js.map