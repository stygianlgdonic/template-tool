exports.id = 0;
exports.modules = {

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
/* harmony import */ var _components_ElementHeader_ElementHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ElementHeader/ElementHeader */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/ElementHeader/ElementHeader.tsx");
/* harmony import */ var _components_TextHeader_TextHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TextHeader/TextHeader */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/TextHeader/TextHeader.tsx");
/* harmony import */ var _contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../contexts/DesignTool/DesignToolContext */ "./src/contexts/DesignTool/DesignToolContext.tsx");
/* harmony import */ var _Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../Hooks/CardElementsFunctions */ "./src/Hooks/CardElementsFunctions/index.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\tailwindComponents\\CardHeader\\CardHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const CardHeader = ({
  $tr
}) => {
  const {
    designToolState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_3__["DesignToolContext"]);
  const {
    handleDeleteSelectedItem
  } = Object(_Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_4__["default"])();

  const handleDeleteClick = () => {
    var _$tr$current;

    $tr === null || $tr === void 0 ? void 0 : (_$tr$current = $tr.current) === null || _$tr$current === void 0 ? void 0 : _$tr$current.detach();
    handleDeleteSelectedItem();
  };

  return __jsx("div", {
    style: {
      height: "61px"
    },
    className: "z-50 flex-col py-2  \r ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: designToolState.card_header_state === "text" ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(_components_TextHeader_TextHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleDeleteClick: handleDeleteClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: designToolState.card_header_state === "shape" ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(_components_ElementHeader_ElementHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    handleDeleteClick: handleDeleteClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CardHeader);

/***/ })

};
//# sourceMappingURL=0.cc4e630e0d7a87549eb0.hot-update.js.map