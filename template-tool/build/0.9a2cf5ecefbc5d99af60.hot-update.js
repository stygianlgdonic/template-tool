exports.id = 0;
exports.modules = {

/***/ "./src/assets/svgs/chevron-down.svg":
/*!******************************************!*\
  !*** ./src/assets/svgs/chevron-down.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/chevron-down.c16040f3.svg";

/***/ }),

/***/ "./src/assets/svgs/plus.svg":
/*!**********************************!*\
  !*** ./src/assets/svgs/plus.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/plus.cc6d96c4.svg";

/***/ }),

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
    value: val,
    onClick: () => {
      onChange(val);
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
  }, Object(_utils_titleCase__WEBPACK_IMPORTED_MODULE_3__["titleCase"])(val)))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(CustomSelect));

/***/ }),

/***/ "./src/components/tailwindComponents/CustomTextField.tsx":
/*!***************************************************************!*\
  !*** ./src/components/tailwindComponents/CustomTextField.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const _excluded = ["onClick", "startIcon", "endIcon", "error", "helperText", "className", "label"];
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\tailwindComponents\\CustomTextField.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const CustomTextField = _ref => {
  let {
    onClick,
    startIcon,
    endIcon,
    error,
    helperText,
    className,
    label
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "mb-4 relative  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: "text-jacksonsPurple",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, label), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), __jsx("input", _extends({}, rest, {
    className: className,
    style: {
      textIndent: startIcon ? '15px' : ''
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  })), __jsx("img", {
    src: startIcon,
    alt: "error",
    width: "18",
    className: startIcon ? ' absolute left-0 top-0 mt-9 ml-2' : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }), __jsx("img", {
    onClick: onClick,
    src: endIcon,
    alt: "error",
    width: "18",
    className: endIcon ? 'absolute right-0 top-0 mt-9 mr-4  cursor-pointer ' : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: helperText ? 'text-red text-sm pl-2 transition duration-500' : 'hidden',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, helperText)));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(CustomTextField));

/***/ }),

/***/ "./src/components/tailwindComponents/LoadingButton.tsx":
/*!*************************************************************!*\
  !*** ./src/components/tailwindComponents/LoadingButton.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const _excluded = ["isLoading", "loadingProps", "startIcon", "endIcon", "className", "style", "children"];
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\tailwindComponents\\LoadingButton.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const LoadingButton = _ref => {
  let {
    isLoading,
    loadingProps,
    startIcon,
    endIcon,
    className,
    style,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("button", _extends({
    className: className ? className : 'w-full  justify-center place-items-center flex focus:outline-none relative ',
    style: {
      paddingLeft: startIcon ? '30px' : ''
    }
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }), isLoading ? __jsx("svg", _extends({
    className: "animate-spin w-6 ",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "white"
  }, loadingProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }), __jsx("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 29
    }
  })) : children), __jsx("img", {
    src: startIcon,
    alt: "error",
    width: "20",
    className: startIcon ? 'absolute    ml-2 ' : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), __jsx("img", {
    src: endIcon,
    alt: "error",
    width: "20",
    className: endIcon ? 'absolute right-0 top-0 mt-3.5 mr-4  cursor-pointer ' : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(LoadingButton));

/***/ }),

/***/ "./src/components/tailwindComponents/SaveTemplate.tsx":
/*!************************************************************!*\
  !*** ./src/components/tailwindComponents/SaveTemplate.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_svgs_plus_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/svgs/plus.svg */ "./src/assets/svgs/plus.svg");
/* harmony import */ var _assets_svgs_plus_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_svgs_plus_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CustomTextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomTextField */ "./src/components/tailwindComponents/CustomTextField.tsx");
/* harmony import */ var _LoadingButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoadingButton */ "./src/components/tailwindComponents/LoadingButton.tsx");
/* harmony import */ var _utils_useSvg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/useSvg */ "./src/utils/useSvg.tsx");
/* harmony import */ var _CustomSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CustomSelect */ "./src/components/tailwindComponents/CustomSelect.tsx");
/* harmony import */ var _hooks_useCategoryList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useCategoryList */ "./src/hooks/useCategoryList.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\tailwindComponents\\SaveTemplate.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const svgPath = `  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />`;

const SaveTemplate = ({
  templateData,
  handleSaveTemplate
}) => {
  const {
    0: tagsList,
    1: setTagsList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: isFirstTag,
    1: setIsFirstTag
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: tag,
    1: setTag
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    categoriesList,
    error,
    isLoading
  } = Object(_hooks_useCategoryList__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const {
    0: selectedCategory,
    1: setSelectedCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!!categoriesList[0] ? categoriesList[0] : null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var _templateData$tags;

    if (!!((_templateData$tags = templateData.tags) !== null && _templateData$tags !== void 0 && _templateData$tags.length)) {
      setTagsList(templateData.tags);
    }
  }, []);
  const closeIcon = Object(_utils_useSvg__WEBPACK_IMPORTED_MODULE_5__["default"])("http://www.w3.org/2000/svg", "0 0 24 24", "white", "#FF3C69", svgPath);

  const pushTagToTagsList = tagName => {
    if (!tagName) {
      return;
    }

    let checkExisting = tagsList.filter(currentTag => currentTag == tagName);

    if (checkExisting.length && !isFirstTag) {
      sweetalert__WEBPACK_IMPORTED_MODULE_1___default()({
        title: "Tag already added",
        icon: "error"
      });
    } else {
      setTagsList([...tagsList, tagName]);
      setIsFirstTag(false);
    }
  };

  const removeFromTagsList = index => {
    let newTagsList = [...tagsList];
    newTagsList.splice(index, 1);
    setTagsList(newTagsList);
  };

  const handleChangeTag = e => {
    setTag(e.target.value);
  };

  const handlePushTag = () => {
    pushTagToTagsList(tag);
    setTag("");
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      pushTagToTagsList(tag);
      setTag("");
    }
  };

  const onCategoryChange = val => {
    setSelectedCategory(val);
  };

  const onSubmit = () => {
    handleSaveTemplate(tagsList, selectedCategory.id);
  };

  return __jsx("div", {
    className: "fixed z-10 inset-0 overflow-y-auto",
    "aria-labelledby": "modal-title",
    role: "dialog",
    "aria-modal": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "hidden sm:inline-block sm:align-middle sm:h-screen",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, "\u200B"), __jsx("div", {
    className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "h-96",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 29
    }
  }, __jsx(_CustomTextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Enter Tag",
    id: "tagName",
    name: "tagName",
    value: tag,
    onChange: handleChangeTag,
    placeholder: "Enter tag",
    onKeyDown: handleKeyDown,
    onClick: handlePushTag,
    endIcon: _assets_svgs_plus_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    className: "relative  border border-grey appearance-none rounded w-full p-2 mt-0 focus:outline-none cursor-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "flex flex-grow flex-wrap flex-col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 33
    }
  }, tagsList.map((item, index) => __jsx("div", {
    key: index,
    className: "flex justify-between rounded-3xl px-5 py-1 border-radicalRed border-2 mt-1 text-radicalRed ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 41
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 45
    }
  }, item), __jsx("img", {
    onClick: () => removeFromTagsList(index),
    src: closeIcon,
    alt: "error",
    className: "w-4  cursor-pointer ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 45
    }
  })))), __jsx("div", {
    className: "z-20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 33
    }
  }, __jsx(_CustomSelect__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Select Category",
    value: selectedCategory,
    onChange: onCategoryChange,
    dataArray: categoriesList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 37
    }
  }))))), __jsx("div", {
    className: "bg-gray-50 px-4 py-3 sm:px-6 flex justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 25
    }
  }, __jsx(_LoadingButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    loadingProps: {
      size: 24,
      style: {
        color: "white"
      }
    },
    disableElevation: true,
    onClick: onSubmit,
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "secondary",
    className: "red-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 29
    }
  }, "Close")), __jsx("div", {
    className: "mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 25
    }
  }, __jsx(_LoadingButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    loadingProps: {
      size: 24,
      style: {
        color: "white"
      }
    },
    disableElevation: true,
    onClick: onSubmit,
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "secondary",
    className: "red-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 29
    }
  }, "Save Template"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SaveTemplate);

/***/ }),

/***/ "./src/hooks/useComponentVisible.tsx":
/*!*******************************************!*\
  !*** ./src/hooks/useComponentVisible.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useComponentVisible; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useComponentVisible(initialIsVisible) {
  const {
    0: isComponentVisible,
    1: setIsComponentVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialIsVisible);
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });
  return {
    ref,
    isComponentVisible,
    setIsComponentVisible
  };
}

/***/ }),

/***/ "./src/utils/titleCase.ts":
/*!********************************!*\
  !*** ./src/utils/titleCase.ts ***!
  \********************************/
/*! exports provided: titleCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titleCase", function() { return titleCase; });
const titleCase = uservalue => {
  if (uservalue) {
    let value = uservalue === null || uservalue === void 0 ? void 0 : uservalue.toLowerCase().split("_");

    for (let i = 0; i < (value === null || value === void 0 ? void 0 : value.length); i++) {
      value[i] = value[i][0].toUpperCase() + value[i].slice(1);
    }

    return value === null || value === void 0 ? void 0 : value.join(" ");
  }

  console.log("no value to convert to titleCase");
  return uservalue || "";
};

/***/ }),

/***/ "./src/utils/useSvg.tsx":
/*!******************************!*\
  !*** ./src/utils/useSvg.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const useSvg = (xmlns, viewBox, fill, stroke, path) => {
  let svg = `<svg xmlns="${xmlns}" fill="${fill}" viewBox="${viewBox}" stroke="${stroke}">${path}</svg>`;
  let blob = new Blob([svg], {
    type: 'image/svg+xml'
  });
  let url = URL.createObjectURL(blob);
  return url;
};

/* harmony default export */ __webpack_exports__["default"] = (useSvg);

/***/ })

};
//# sourceMappingURL=0.9a2cf5ecefbc5d99af60.hot-update.js.map