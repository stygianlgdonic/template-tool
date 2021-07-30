exports.id = 0;
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
/* harmony import */ var _Preview_components_CardDesign_CardDesign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Preview/components/CardDesign/CardDesign */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Preview/components/CardDesign/CardDesign.tsx");
/* harmony import */ var _Preview_components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Preview/components/Drawer/Drawer */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Preview/components/Drawer/Drawer.tsx");
/* harmony import */ var _Preview_Preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Preview/Preview */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Preview/Preview.tsx");
/* harmony import */ var _MainCanvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MainCanvas */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/index.tsx");
/* harmony import */ var _tailwindComponents_CardHeader_CardHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tailwindComponents/CardHeader/CardHeader */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/CardHeader.tsx");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\Card.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Card = () => {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx("div", {
    className: "h-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx(_tailwindComponents_CardHeader_CardHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx(_MainCanvas__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "z-50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(_Preview_Preview__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setIsOpen: setOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }), __jsx(_Preview_components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isOpen: open,
    setIsOpen: setOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx(_Preview_components_CardDesign_CardDesign__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 59
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Preview/Preview.tsx":
/*!*******************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Preview/Preview.tsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Preview\\Preview.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Header({
  setIsOpen
}) {
  return __jsx("header", {
    className: "flex justify-between p-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "bg-greenish text-white rounded px-4 py-1",
    onClick: () => setIsOpen(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, "open"));
}

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Preview/components/CardDesign/CardDesign.tsx":
/*!********************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Preview/components/CardDesign/CardDesign.tsx ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Preview\\components\\CardDesign\\CardDesign.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Card() {
  return __jsx("div", {
    className: "border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "animate-pulse flex space-x-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "rounded-full bg-gray-400 h-12 w-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "flex-1 space-y-4 py-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "h-4 bg-gray-400 rounded w-3/4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "space-y-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "h-4 bg-gray-400 rounded",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "h-4 bg-gray-400 rounded w-5/6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 25
    }
  })))));
}

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
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Preview\\components\\Drawer\\Drawer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Drawer({
  children,
  isOpen,
  setIsOpen
}) {
  return __jsx("main", {
    className: " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " + (isOpen ? " transition-opacity opacity-100 duration-500 translate-x-0  " : " transition-all delay-500 opacity-0 translate-x-full  "),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " + (isOpen ? " translate-x-0 " : " translate-x-full "),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("article", {
    className: "relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx("header", {
    className: "p-4 font-bold text-lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, "Header"), children)), __jsx("section", {
    className: " w-screen h-full cursor-pointer ",
    onClick: () => {
      setIsOpen(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }));
}

/***/ })

};
//# sourceMappingURL=0.d6fbeb1f51380540cd73.hot-update.js.map