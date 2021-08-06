exports.id = 0;
exports.modules = {

/***/ "./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/SubNavBar/SubNavBar.tsx":
/*!**************************************************************************************************************!*\
  !*** ./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/SubNavBar/SubNavBar.tsx ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../contexts/DesignToolContext */ "./src/contexts/DesignToolContext.tsx");
/* harmony import */ var _components_BackgroundSelector_BackgroundSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BackgroundSelector/BackgroundSelector */ "./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/BackgroundSelector.tsx");
/* harmony import */ var _components_ElementSelector_ElementSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ElementSelector/ElementSelector */ "./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/ElementSelector.tsx");
/* harmony import */ var _components_ImageSelector_ImageSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ImageSelector/ImageSelector */ "./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ImageSelector/ImageSelector.tsx");
/* harmony import */ var _components_LogoSelector_LogoSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/LogoSelector/LogoSelector */ "./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/LogoSelector/LogoSelector.tsx");
/* harmony import */ var _components_TextSelector_TextSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/TextSelector/TextSelector */ "./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/TextSelector.tsx");
/* harmony import */ var _components_TextSelector_components_FontStyleTool_FontStyletool__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/TextSelector/components/FontStyleTool/FontStyletool */ "./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/FontStyleTool/FontStyletool.tsx");
/* harmony import */ var _components_TextSelector_components_FontColortool_FontColortool__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/TextSelector/components/FontColortool/FontColortool */ "./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/FontColortool/FontColortool.tsx");
/* harmony import */ var _components_TextSelector_components_EffectStyletool_EffectStyletool__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/TextSelector/components/EffectStyletool/EffectStyletool */ "./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/EffectStyletool/EffectStyletool.tsx");
var _jsxFileName = "D:\\Hyper Engage Backend\\cardclan-backend\\client\\src\\layouts\\LoggedInLayout\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\SubNavBar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const SubNavBar = () => {
  const {
    designToolnavigator,
    setDesignToolnavigator,
    selectedId,
    setSelectedId,
    cardData,
    setCardData,
    cardHistory: {
      goForward,
      goBack,
      stepNum,
      history
    }
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__["DesignToolContext"]);
  return __jsx("div", {
    className: "h-full flex flex-col w-full border-bordercolor border ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, designToolnavigator === 'element' && __jsx(_components_ElementSelector_ElementSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 51
    }
  }), designToolnavigator === 'text' && __jsx(_components_TextSelector_TextSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 48
    }
  }), designToolnavigator === 'images' && __jsx(_components_ImageSelector_ImageSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 50
    }
  }), designToolnavigator === 'background' && __jsx(_components_BackgroundSelector_BackgroundSelector__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 54
    }
  }), designToolnavigator === 'logo' && __jsx(_components_LogoSelector_LogoSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 48
    }
  }), designToolnavigator === 'texttool' && __jsx(_components_TextSelector_components_FontStyleTool_FontStyletool__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 52
    }
  }), designToolnavigator === 'fonttool' && __jsx(_components_TextSelector_components_FontColortool_FontColortool__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 52
    }
  }), designToolnavigator === 'effecttool' && __jsx(_components_TextSelector_components_EffectStyletool_EffectStyletool__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 54
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SubNavBar);

/***/ })

};
//# sourceMappingURL=0.408c9f4d409db446ec01.hot-update.js.map