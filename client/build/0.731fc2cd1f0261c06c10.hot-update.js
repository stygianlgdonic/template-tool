exports.id = 0;
exports.modules = {

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/index.tsx":
/*!*************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/index.tsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webfontloader */ "webfontloader");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainStage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainStage */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/MainStage/index.tsx");
/* harmony import */ var _contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../contexts/DesignTool/DesignToolContext */ "./src/contexts/DesignTool/DesignToolContext.tsx");
/* harmony import */ var _contexts_DesignTool_CardHeaderActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../contexts/DesignTool/CardHeaderActions */ "./src/contexts/DesignTool/CardHeaderActions.ts");
/* harmony import */ var _Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../Hooks/CardElementsFunctions */ "./src/Hooks/CardElementsFunctions/index.tsx");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\MainCanvas\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const DesignTool = ({
  $stage,
  $layer,
  $tr
}) => {
  const {
    selectShapeCardHeader,
    selectTextCardHeader,
    emptyCardHeader
  } = Object(_contexts_DesignTool_CardHeaderActions__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    handleDeleteSelectedItem
  } = Object(_Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const {
    selectedId,
    setSelectedId,
    cardData,
    setCardData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_3__["DesignToolContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!!selectedId) {
      const shape = cardData.elements.find((item, index) => selectedId === item.id);

      if ((shape === null || shape === void 0 ? void 0 : shape.type) === 'text') {
        selectTextCardHeader();
      }

      if ((shape === null || shape === void 0 ? void 0 : shape.type) === 'rectangle' || (shape === null || shape === void 0 ? void 0 : shape.type) === 'svg' || (shape === null || shape === void 0 ? void 0 : shape.type) === 'circle' || (shape === null || shape === void 0 ? void 0 : shape.type) === 'polygon' || (shape === null || shape === void 0 ? void 0 : shape.type) === 'line') {
        selectShapeCardHeader();
      }
    }
  }, [selectedId]);

  const handleEscape = e => {
    if (e.key === "Escape") {
      setSelectedId(null);
      emptyCardHeader(); // handleDeleteSelectedItem()
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener("keydown", handleEscape, false);
    webfontloader__WEBPACK_IMPORTED_MODULE_1___default.a.load({
      google: {
        families: ['Comfortaa', 'Josefin Sans', 'Euphoria Script', 'Oswald', 'Alfa Slab One', 'Bangers', 'Caveat', 'DM Sans', 'East Sea Dokdo', 'Homemade Apple', 'Kristi', 'Lobster Two', 'Maven Pro', 'Monoton', 'Montserrat', 'Playfair Display', 'Press Start 2P', 'Raleway', 'Roboto Slab', 'Shadows Into Light', 'Swanky and Moo Moo']
      }
    });
    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, []);
  return __jsx("div", {
    className: "min-w-max  flex justify-center flex-col h-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex justify-center mt-5 h-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx(_MainStage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    $stage: $stage,
    $layer: $layer,
    $tr: $tr,
    cardData: cardData,
    setCardData: setCardData,
    selectedId: selectedId,
    setSelectedId: setSelectedId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DesignTool);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/ElementHeader/ElementHeader.tsx":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/ElementHeader/ElementHeader.tsx ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/razzle/config/babel-loader/razzle-babel-loader.js):\nSyntaxError: C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\tailwindComponents\\CardHeader\\components\\ElementHeader\\ElementHeader.tsx: Unexpected token (20:1)\n\n\u001b[0m \u001b[90m 18 |\u001b[39m     \u001b[90m// !!state?false:true;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 19 |\u001b[39m     \u001b[36mconst\u001b[39m [showeModal\u001b[33m,\u001b[39m seteShowModal] \u001b[33m=\u001b[39m \u001b[33mReact\u001b[39m\u001b[33m.\u001b[39museState(\u001b[36mfalse\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 20 |\u001b[39m \u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 21 |\u001b[39m     \u001b[36mconst\u001b[39m { handleBorderWidthChange\u001b[33m,\u001b[39m handleStrokeColor\u001b[33m,\u001b[39m handleTextOpacity } \u001b[33m=\u001b[39m \u001b[33mCardElementsFunctions\u001b[39m()\u001b[0m\n\u001b[0m \u001b[90m 22 |\u001b[39m \u001b[33m===\u001b[39m\u001b[33m===\u001b[39m\u001b[33m=\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 23 |\u001b[39m     \u001b[36mconst\u001b[39m { handleBorderWidthChange\u001b[33m,\u001b[39m handleStrokeColor\u001b[33m,\u001b[39m handleDeleteSelectedItem\u001b[33m,\u001b[39m handleTextOpacity } \u001b[33m=\u001b[39m \u001b[33mCardElementsFunctions\u001b[39m()\u001b[0m\n    at Object._raise (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:788:17)\n    at Object.raiseWithData (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:781:17)\n    at Object.raise (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:742:17)\n    at Object.unexpected (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:9929:16)\n    at Object.jsxParseIdentifier (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:4995:12)\n    at Object.jsxParseNamespacedName (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:5005:23)\n    at Object.jsxParseElementName (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:5016:21)\n    at Object.jsxParseOpeningElementAt (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:5103:22)\n    at Object.jsxParseElementAt (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:5136:33)\n    at Object.jsxParseElement (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:5210:17)\n    at Object.parseExprAtom (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:5217:19)\n    at Object.parseExprSubscripts (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:10914:23)\n    at Object.parseUpdate (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:10894:21)\n    at Object.parseMaybeUnary (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:10872:23)\n    at Object.parseMaybeUnary (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:7624:20)\n    at Object.parseExprOps (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:10733:23)");

/***/ })

};
//# sourceMappingURL=0.731fc2cd1f0261c06c10.hot-update.js.map