exports.id = 0;
exports.modules = {

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
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\SubNavBar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const SubNavBar = () => {
  const {
    0: designToolnavigator,
    1: setDesignToolnavigator
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__["DesignToolContext"]);
  return __jsx("div", {
    className: "h-full flex flex-col w-full border-bordercolor border-r-2 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, designToolnavigator === 'element' && __jsx(_components_ElementSelector_ElementSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 51
    }
  }), designToolnavigator === 'text' && __jsx(_components_TextSelector_TextSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 48
    }
  }), designToolnavigator === 'images' && __jsx(_components_ImageSelector_ImageSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 50
    }
  }), designToolnavigator === 'background' && __jsx(_components_BackgroundSelector_BackgroundSelector__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 54
    }
  }), designToolnavigator === 'logo' && __jsx(_components_LogoSelector_LogoSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 48
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SubNavBar);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/LogoSelector/LogoSelector.tsx":
/*!**************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/LogoSelector/LogoSelector.tsx ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\LogoSelector\\LogoSelector.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ElementSelector = () => {
  return __jsx("div", {
    className: " flex   flex-col justify-center w-full  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ElementSelector);

/***/ })

};
//# sourceMappingURL=0.80aed4d2107d35299ab9.hot-update.js.map