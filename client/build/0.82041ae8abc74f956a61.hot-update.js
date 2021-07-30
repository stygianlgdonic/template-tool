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
  }, "I")), __jsx("div", {
    className: "py-4 ml-6 border-r-2 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "ml-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
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
      lineNumber: 96,
      columnNumber: 25
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
      lineNumber: 97,
      columnNumber: 1
    }
  }))), __jsx("div", {
    className: "py-4 ml-6 border-r-2 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "ml-6 text-lg italic font-bold text-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 25
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 29
    }
  }, "Effects")), __jsx("div", {
    className: "py-4 ml-6 border-r-2 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 25
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 25
    }
  }, __jsx("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 25
    }
  }, __jsx("rect", {
    width: "25",
    height: "25",
    fill: "url(#pattern0)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 1
    }
  }), __jsx("defs", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 1
    }
  }, __jsx("pattern", {
    id: "pattern0",
    patternContentUnits: "objectBoundingBox",
    width: "1",
    height: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 1
    }
  }, __jsx("use", {
    xlinkHref: "#image0",
    transform: "scale(0.005)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 1
    }
  })), __jsx("image", {
    id: "image0",
    width: "200",
    height: "200",
    xlinkHref: "data:image/png;base64,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",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 1
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (TextHeader);

/***/ })

};
//# sourceMappingURL=0.82041ae8abc74f956a61.hot-update.js.map