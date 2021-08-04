exports.id = "server";
exports.modules = {

/***/ "./src/components/Home/components/SideBar/index.tsx":
/*!**********************************************************!*\
  !*** ./src/components/Home/components/SideBar/index.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\components\\SideBar\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const navLinksList = ["categories", "templates"];

const HomeSideBar = () => {
  const {
    0: selectedNavLink,
    1: setSelectedNavLink
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(navLinksList[0]);
  return __jsx("div", {
    className: "flex flex-no-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-64 absolute sm:relative shadow flex-col justify-between flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "p-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("ul", {
    className: "mt-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "flex w-full justify-between text-gray-700 hover:text-gray-900 cursor-pointer items-center mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "flex items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }, __jsx("button", {
    className: "w-full focus:bg-rightbackgroundcolor h-10",
    onClick: () => setSelectedNavLink(navLinksList[0]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "flex items-center  hover:bg-rightbackgroundcolor  w-full hover:rounded-lg border-0 rounded-sm  pl-5 h-10 mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: "text-lightGray font-medium pl-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 41
    }
  }, "Categories"))))), __jsx("li", {
    className: "flex w-full justify-between text-gray-700 hover:text-gray-900 cursor-pointer items-center mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "flex items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }, __jsx("button", {
    className: "w-full focus:bg-rightbackgroundcolor h-10",
    onClick: () => setSelectedNavLink(navLinksList[1]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "flex items-center  hover:bg-rightbackgroundcolor  w-full hover:rounded-lg border-0 rounded-sm  pl-5 h-10 mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: "text-lightGray font-medium pl-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 41
    }
  }, "Templates")))))))), __jsx("div", {
    className: "container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "w-full h-full rounded border-dashed border-2 border-gray-300",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: selectedNavLink === navLinksList[0] ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "space-y-4 p-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 29
    }
  }, "1"), __jsx("span", {
    className: "block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }, "2"), __jsx("span", {
    className: "block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }, "3"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }, __jsx("div", {
    class: "w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }, __jsx("form", {
    class: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 37
    }
  }, __jsx("div", {
    class: "mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 41
    }
  }, __jsx("label", {
    class: "block text-gray-700 text-sm font-bold mb-2",
    for: "username",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 45
    }
  }, "Username"), __jsx("input", {
    class: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "username",
    type: "text",
    placeholder: "Username",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 45
    }
  })), __jsx("div", {
    class: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 41
    }
  }, __jsx("label", {
    class: "block text-gray-700 text-sm font-bold mb-2",
    for: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 45
    }
  }, "Password"), __jsx("input", {
    class: "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
    id: "password",
    type: "password",
    placeholder: "******************",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 45
    }
  }), __jsx("p", {
    class: "text-red-500 text-xs italic",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 45
    }
  }, "Please choose a password.")), __jsx("div", {
    class: "flex items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 41
    }
  }, __jsx("button", {
    class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 45
    }
  }, "Sign In"), __jsx("a", {
    class: "inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800",
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 45
    }
  }, "Forgot Password?"))), __jsx("p", {
    class: "text-center text-gray-500 text-xs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 37
    }
  }, "\xA92020 Acme Corp. All rights reserved."))))), __jsx("div", {
    className: selectedNavLink === navLinksList[1] ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, "Templates"))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomeSideBar);

/***/ })

};
//# sourceMappingURL=server.1ec2394357fd72ecd96c.hot-update.js.map