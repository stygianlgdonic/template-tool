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
    className: " ",
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
    className: "w-8 bg-radicalRed absolute h-full right-0 top-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "w-6 bg-green h-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }), __jsx("button", {
    onClick: () => setOpen(!open),
    className: "flex items-center h-full mr-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateCardLayout);

/***/ })

};
//# sourceMappingURL=0.2e4db6613ccb67234618.hot-update.js.map