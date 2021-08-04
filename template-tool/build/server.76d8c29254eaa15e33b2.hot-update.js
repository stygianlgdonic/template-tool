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
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "Category 1"), __jsx("span", {
    className: "block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "Category 2"), __jsx("span", {
    className: "block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "Category 3"), __jsx("div", {
    className: "w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("form", {
    className: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
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
      lineNumber: 21,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "flex items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: handleAddCategory,
    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, "Add new Category"))), __jsx("p", {
    className: "text-center text-gray-500 text-xs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, "\xA92020 Acme Corp. All rights reserved.")));
};

/* harmony default export */ __webpack_exports__["default"] = (CategoryList);

/***/ })

};
//# sourceMappingURL=server.76d8c29254eaa15e33b2.hot-update.js.map