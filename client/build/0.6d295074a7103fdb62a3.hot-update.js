exports.id = 0;
exports.modules = {

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/BackgroundSelector.tsx":
/*!**************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/BackgroundSelector.tsx ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../Hooks/CardElementsFunctions */ "./src/Hooks/CardElementsFunctions/index.tsx");
/* harmony import */ var _ElementSelector_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ElementSelector/components/SearchBar/SearchBar */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar.tsx");
/* harmony import */ var _components_AddBackgroundImage_AddBackgroundImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AddBackgroundImage/AddBackgroundImage */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/components/AddBackgroundImage/AddBackgroundImage.tsx");
/* harmony import */ var _components_BackgroundColor_BackgroundColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/BackgroundColor/BackgroundColor */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/components/BackgroundColor/BackgroundColor.tsx");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/style.css");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\BackgroundSelector\\BackgroundSelector.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const BackgroundSelector = () => {
  const {
    0: colorQuery,
    1: setColorQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: colorsArray,
    1: setColorsArray
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const handleColorQueryChange = e => {
    setColorQuery(e.target.value);
  };

  const {
    handleTextColor,
    handleShapeFill
  } = Object(_Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!colorQuery) return;
    const fetchURl = colorQuery.charAt(0) !== "#" ? `https://api.color.pizza/v1/names/?name=${colorQuery}&goodnamesonly=true` : `https://api.color.pizza/v1/?values=${colorQuery.substring(1)}&goodnamesonly=true`;
    fetch(fetchURl).then(response => response.json()).then(data => {
      const newColors = data.colors.map(item => item.hex);
      newColors.splice(5);
      setColorsArray(newColors);
    }).catch(error => console.log("No colors found!"));
  }, [colorQuery]);
  return __jsx("div", {
    className: " flex   flex-col justify-center w-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mt-6 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(_ElementSelector_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "flex flex-col p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(_components_BackgroundColor_BackgroundColor__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "p-6 text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "separator",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(_components_AddBackgroundImage_AddBackgroundImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BackgroundSelector);

/***/ })

};
//# sourceMappingURL=0.6d295074a7103fdb62a3.hot-update.js.map