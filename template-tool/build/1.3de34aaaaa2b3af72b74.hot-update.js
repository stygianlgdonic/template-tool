exports.id = 1;
exports.modules = {

/***/ "./src/ErrorFallacks/SearchBarFallback.tsx":
/*!*************************************************!*\
  !*** ./src/ErrorFallacks/SearchBarFallback.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\ErrorFallacks\\SearchBarFallback.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SearchBarFallback = ({
  error,
  resetErrorBoundary
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    sweetalert__WEBPACK_IMPORTED_MODULE_1___default()("Oops!", "Something is wrong with Search, try reloading the page.", "error").then(resetErrorBoundary);
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, error.message);
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBarFallback);

/***/ }),

/***/ "./src/ErrorFallacks/TemplatePreviewFallback.tsx":
/*!*******************************************************!*\
  !*** ./src/ErrorFallacks/TemplatePreviewFallback.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\ErrorFallacks\\TemplatePreviewFallback.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const TemplatePreviewFallback = ({
  error,
  resetErrorBoundary
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    sweetalert__WEBPACK_IMPORTED_MODULE_1___default()("Oops!", "This Template might be corrupted", "error").then(resetErrorBoundary);
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, error.message);
};

/* harmony default export */ __webpack_exports__["default"] = (TemplatePreviewFallback);

/***/ }),

/***/ "./src/components/Home/components/TemplateList/Elements/index.tsx":
/*!************************************************************************!*\
  !*** ./src/components/Home/components/TemplateList/Elements/index.tsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\components\\TemplateList\\Elements\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const Elements = ({
  konvaItem,
  index
}) => {
  if (!konvaItem) return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, (konvaItem === null || konvaItem === void 0 ? void 0 : konvaItem.type) === "rectangle" && __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Rect"], _extends({
    key: index
  }, konvaItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  })), (konvaItem === null || konvaItem === void 0 ? void 0 : konvaItem.type) === "circle" && __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Circle"], _extends({
    key: index
  }, konvaItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  })), (konvaItem === null || konvaItem === void 0 ? void 0 : konvaItem.type) === "line" && __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Line"], _extends({
    key: index
  }, konvaItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  })), (konvaItem === null || konvaItem === void 0 ? void 0 : konvaItem.type) === "polygon" && __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["RegularPolygon"], _extends({
    key: index
  }, konvaItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  })), (konvaItem === null || konvaItem === void 0 ? void 0 : konvaItem.type) === "svg" && __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Image"], _extends({
    key: index
  }, konvaItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  })), (konvaItem === null || konvaItem === void 0 ? void 0 : konvaItem.type) === "image" && __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Image"], _extends({
    key: index
  }, konvaItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  })), (konvaItem === null || konvaItem === void 0 ? void 0 : konvaItem.type) === "text" && __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Text"], _extends({
    key: index
  }, konvaItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Elements);

/***/ }),

/***/ "./src/components/Home/components/TemplateList/SearchBar/index.tsx":
/*!*************************************************************************!*\
  !*** ./src/components/Home/components/TemplateList/SearchBar/index.tsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\components\\TemplateList\\SearchBar\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SearchBar = () => {
  return __jsx("div", {
    className: " flex justify-center items-center  w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex h-14 rounded-md border-bordercolor border justify-center items-center w-11/12 z-50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "w-auto flex justify-end items-center text-grey text-sm p-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 25
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6Z",
    fill: "#9CA3AF",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 29
    }
  })))), __jsx("input", {
    className: "w-full rounded text-sm text-gray95 outline-none h-12 z-0 ",
    type: "text",
    placeholder: "Search anything from elements",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./src/components/Home/components/TemplateList/TemplatePreview/index.tsx":
/*!*******************************************************************************!*\
  !*** ./src/components/Home/components/TemplateList/TemplatePreview/index.tsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../contexts/TemplateContext */ "./src/contexts/TemplateContext.tsx");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _Elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Elements */ "./src/components/Home/components/TemplateList/Elements/index.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\components\\TemplateList\\TemplatePreview\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const TemplatePreview = ({
  templateObj
}) => {
  var _templateObj$variatio, _templateObj$variatio2;

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();
  const {
    0: templateData,
    1: setTemplateData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_2__["TemplateContext"]);

  const handleEditTemplate = () => {
    setTemplateData(templateObj, false);
    history.push(`/tool/${templateObj.id}`);
  };

  return __jsx("button", {
    onClick: handleEditTemplate,
    className: "border-2  border-dashed rounded-md border-bordercolor justify-center items-center flex flex-col py-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Stage"], {
    width: _utils_defaults__WEBPACK_IMPORTED_MODULE_3__["stageDimensions"].width * 0.3,
    height: _utils_defaults__WEBPACK_IMPORTED_MODULE_3__["stageDimensions"].height * 0.3,
    scaleX: 0.3,
    scaleY: 0.3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Layer"], {
    listening: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, templateObj === null || templateObj === void 0 ? void 0 : (_templateObj$variatio = templateObj.variations[0]) === null || _templateObj$variatio === void 0 ? void 0 : (_templateObj$variatio2 = _templateObj$variatio.elements) === null || _templateObj$variatio2 === void 0 ? void 0 : _templateObj$variatio2.map((item, index) => __jsx(_Elements__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: index,
    konvaItem: item,
    index: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TemplatePreview);

/***/ }),

/***/ "./src/components/Home/components/TemplateList/index.tsx":
/*!***************************************************************!*\
  !*** ./src/components/Home/components/TemplateList/index.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar */ "./src/components/Home/components/TemplateList/SearchBar/index.tsx");
/* harmony import */ var _TemplatePreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TemplatePreview */ "./src/components/Home/components/TemplateList/TemplatePreview/index.tsx");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-error-boundary */ "react-error-boundary");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_error_boundary__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ErrorFallacks_SearchBarFallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ErrorFallacks/SearchBarFallback */ "./src/ErrorFallacks/SearchBarFallback.tsx");
/* harmony import */ var _ErrorFallacks_TemplatePreviewFallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ErrorFallacks/TemplatePreviewFallback */ "./src/ErrorFallacks/TemplatePreviewFallback.tsx");
/* harmony import */ var _hooks_useTemplateList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/useTemplateList */ "./src/hooks/useTemplateList.ts");
/* harmony import */ var _hooks_useCategoryList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/useCategoryList */ "./src/hooks/useCategoryList.ts");
/* harmony import */ var _utils_titleCase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utils/titleCase */ "./src/utils/titleCase.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\components\\TemplateList\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const TemplateList = () => {
  const {
    templateList,
    error: templateError,
    isLoading: templateLoading
  } = Object(_hooks_useTemplateList__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const {
    categoriesList,
    error: categoryError,
    isLoading: categoryLoading
  } = Object(_hooks_useCategoryList__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const {
    0: categoryFilter,
    1: setCategoryFilter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  if (templateLoading) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, "Getting all templates ..."));
  }

  if (!!templateError) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, templateError.message));
  }

  return __jsx("div", {
    className: "space-y-4 p-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "relative flex  h-full flex-col w-full  outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex items-start justify-between w-full p-5 border-b border-solid border-bordercolor rounded-t",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  }, __jsx("h3", {
    className: "text-2xl text-gray94 font-semibold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 33
    }
  }, "Select Template")), __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex flex-row px-2 text-gray900 border-2 h-8 w border-bordercolor rounded-md  mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "pr-2 text-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 37
    }
  }, "Most Popular "))))), __jsx("div", {
    className: "w-full flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "mt-3 w-3/6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_3__["ErrorBoundary"], {
    FallbackComponent: _ErrorFallacks_SearchBarFallback__WEBPACK_IMPORTED_MODULE_4__["default"],
    onReset: () => {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 29
    }
  }, __jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 33
    }
  })))), __jsx("div", {
    className: " flex gap-4 mt-3 px-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, categoriesList === null || categoriesList === void 0 ? void 0 : categoriesList.map((cat, index) => __jsx("button", {
    key: index,
    onClick: () => {
      setCategoryFilter(cat);
    },
    className: "bg-lightindigo text-indigo700 rounded-md px-4 py-1 h-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 29
    }
  }, Object(_utils_titleCase__WEBPACK_IMPORTED_MODULE_8__["titleCase"])(cat.name)))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "text-xl font-bold mt-6 px-6 text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }, "Your Templates")), __jsx("div", {
    className: "pl-6 mt-4 flex flex-row flex-wrap gap-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, templateList === null || templateList === void 0 ? void 0 : templateList.map((item, index) => {
    if (item.categoryId) {}

    return __jsx("div", {
      key: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 33
      }
    }, __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_3__["ErrorBoundary"], {
      FallbackComponent: _ErrorFallacks_TemplatePreviewFallback__WEBPACK_IMPORTED_MODULE_5__["default"],
      onReset: () => {},
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 37
      }
    }, __jsx(_TemplatePreview__WEBPACK_IMPORTED_MODULE_2__["default"], {
      templateObj: item,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 41
      }
    })));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TemplateList);

/***/ }),

/***/ "./src/hooks/useTemplateList.ts":
/*!**************************************!*\
  !*** ./src/hooks/useTemplateList.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_templateService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/templateService */ "./src/services/templateService.ts");



const useTemplateList = () => {
  const {
    data: templateList,
    error,
    isLoading
  } = Object(react_query__WEBPACK_IMPORTED_MODULE_0__["useQuery"])("templates", _services_templateService__WEBPACK_IMPORTED_MODULE_1__["template_service"].getAllTemplates);
  return {
    templateList,
    error,
    isLoading
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useTemplateList);

/***/ })

};
//# sourceMappingURL=1.3de34aaaaa2b3af72b74.hot-update.js.map