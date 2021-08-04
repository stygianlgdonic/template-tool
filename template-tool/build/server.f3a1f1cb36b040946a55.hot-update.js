exports.id = "server";
exports.modules = {

/***/ "./src/components/Home/components/SideBar/CategoryList/index.tsx":
/*!***********************************************************************!*\
  !*** ./src/components/Home/components/SideBar/CategoryList/index.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\components\\SideBar\\CategoryList\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CategoryList = () => {
  const {
    0: newCategoryName,
    1: setNewCategoryName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const handleAddCategory = () => {
    console.log({
      newCategoryName
    });
  };

  return __jsx("div", {
    className: "space-y-4 p-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Category 1"), __jsx("span", {
    className: "block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "Category 2"), __jsx("span", {
    className: "block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "Category 3"), __jsx("div", {
    className: "w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("form", {
    className: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, "Category name"), __jsx("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "username",
    type: "text",
    placeholder: "Enter category name",
    value: newCategoryName,
    onChange: e => setNewCategoryName(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "flex items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: handleAddCategory,
    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, "Add new Category"))), __jsx("p", {
    className: "text-center text-gray-500 text-xs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, "\xA92020 Acme Corp. All rights reserved.")));
};

/* harmony default export */ __webpack_exports__["default"] = (CategoryList);

/***/ }),

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
/* harmony import */ var _CategoryList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryList */ "./src/components/Home/components/SideBar/CategoryList/index.tsx");
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
    className: "container mx-auto py-10 md:w-4/5 w-11/12 px-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "w-full h-full rounded border-dashed border-2 border-gray-300",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: selectedNavLink === navLinksList[0] ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx(_CategoryList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: selectedNavLink === navLinksList[1] ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, "Templates"))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomeSideBar);

/***/ })

};
//# sourceMappingURL=server.f3a1f1cb36b040946a55.hot-update.js.map