exports.id = 0;
exports.modules = {

/***/ "./src/components/tailwindComponents/CustomSelect.tsx":
/*!************************************************************!*\
  !*** ./src/components/tailwindComponents/CustomSelect.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_svgs_chevron_down_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/svgs/chevron-down.svg */ "./src/assets/svgs/chevron-down.svg");
/* harmony import */ var _assets_svgs_chevron_down_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_svgs_chevron_down_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useComponentVisible */ "./src/hooks/useComponentVisible.tsx");
/* harmony import */ var _utils_titleCase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/titleCase */ "./src/utils/titleCase.ts");
const _excluded = ["label", "value", "onChange", "dataArray", "width"];
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\tailwindComponents\\CustomSelect.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const CustomSelect = _ref => {
  let {
    label,
    value,
    onChange,
    dataArray,
    width
  } = _ref,
      res = _objectWithoutProperties(_ref, _excluded);

  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = Object(_hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_2__["default"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: `flex flex-col bg-gray94  w-60 `,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: "text-base text-left text-grey top-16  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, label), __jsx("div", {
    className: " w-full relative",
    ref: ref,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("button", {
    onClick: () => setIsComponentVisible(!isComponentVisible),
    className: "relative bg-white text-left pl-5 w-full border py-2 border-gray95 rounded-md shadow-sm cursor-pointer focus:outline-none text-jacksonsPurple focus:ring-1 focus:ring-radicalRed focus:border-radicalRed text-base",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: "truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, Object(_utils_titleCase__WEBPACK_IMPORTED_MODULE_3__["titleCase"])(value)), __jsx("div", {
    className: "absolute inset-y-0 right-0 pr-2 flex items-center  pointer-events-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _assets_svgs_chevron_down_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    className: "w-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 29
    }
  }))), __jsx("ul", {
    className: isComponentVisible ? "w-full absolute z-20 mt-1  bg-white shadow-lg  rounded-md py-1 text-base ring-1 ring-black ring-opacity-5  focus:outline-none sm:text-sm" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, (dataArray === null || dataArray === void 0 ? void 0 : dataArray.length) && dataArray.map((val, ind) => __jsx("li", {
    key: ind,
    className: "text-mineShaft select-none cursor-pointer relative py-2 pl-3 pr-9 hover:bg-gray94  ",
    value: val.name,
    onClick: () => {
      onChange(val.name);
      setIsComponentVisible(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 33
    }
  }, __jsx("h2", {
    className: "text-jacksonsPurple font-normal ml-3 block truncate ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 37
    }
  }, Object(_utils_titleCase__WEBPACK_IMPORTED_MODULE_3__["titleCase"])(val.name)))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(CustomSelect));

/***/ })

};
//# sourceMappingURL=0.bc17ea59a3fbf3afcd42.hot-update.js.map