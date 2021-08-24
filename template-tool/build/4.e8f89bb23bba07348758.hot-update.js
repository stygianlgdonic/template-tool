exports.id = 4;
exports.modules = {

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
/* harmony import */ var _utils_titleCase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utils/titleCase */ "./src/utils/titleCase.ts");
/* harmony import */ var _services_templateService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/templateService */ "./src/services/templateService.ts");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_categoryService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/categoryService */ "./src/services/categoryService.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\components\\TemplateList\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const TemplateList = () => {
  var _categoriesList$data, _templateList$data;

  const {
    data: templateList,
    error: templateError,
    isLoading: templateLoading
  } = Object(react_query__WEBPACK_IMPORTED_MODULE_8__["useQuery"])("templates", _services_templateService__WEBPACK_IMPORTED_MODULE_7__["template_service"].getAllTemplates);
  const {
    data: categoriesList,
    error: categoryError,
    isLoading: categoryLoading
  } = Object(react_query__WEBPACK_IMPORTED_MODULE_8__["useQuery"])("categories", _services_categoryService__WEBPACK_IMPORTED_MODULE_9__["category_service"].getAllCategories);
  const {
    0: categoryFilter,
    1: setCategoryFilter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  if (templateLoading) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    }, "Getting all templates ..."));
  }

  if (!!templateList.error) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, templateList.error.message));
  }

  return __jsx("div", {
    className: "space-y-4 p-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "relative flex  h-full flex-col w-full  outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex items-start justify-between w-full p-5 border-b border-solid border-bordercolor rounded-t",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  }, __jsx("h3", {
    className: "text-2xl text-gray94 font-semibold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 33
    }
  }, "Select Template")), __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex flex-row px-2 text-gray900 border-2 h-8 w border-bordercolor rounded-md  mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "pr-2 text-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 37
    }
  }, "Most Popular "))))), __jsx("div", {
    className: "w-full flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "mt-3 w-3/6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_3__["ErrorBoundary"], {
    FallbackComponent: _ErrorFallacks_SearchBarFallback__WEBPACK_IMPORTED_MODULE_4__["default"],
    onReset: () => {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 29
    }
  }, __jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 33
    }
  })))), __jsx("div", {
    className: " flex gap-4 mt-3 px-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, categoriesList === null || categoriesList === void 0 ? void 0 : (_categoriesList$data = categoriesList.data) === null || _categoriesList$data === void 0 ? void 0 : _categoriesList$data.map((cat, index) => __jsx("button", {
    key: index,
    onClick: () => setCategoryFilter(!!categoryFilter ? null : cat),
    className: "rounded-md px-4 py-1 h-10 " + ((categoryFilter === null || categoryFilter === void 0 ? void 0 : categoryFilter.id) === cat.id ? "text-white bg-indigo700" : "bg-lightindigo text-indigo700 "),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  }, Object(_utils_titleCase__WEBPACK_IMPORTED_MODULE_6__["titleCase"])(cat.name)))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "text-xl font-bold mt-6 px-6 text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  }, "Your Templates")), __jsx("div", {
    className: "pl-6 mt-4 flex flex-row flex-wrap gap-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, (_templateList$data = templateList.data) === null || _templateList$data === void 0 ? void 0 : _templateList$data.map((item, index) => {
    if (!!categoryFilter) {
      if (item.categoryId === categoryFilter.id) {
        return __jsx("div", {
          key: index,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 41
          }
        }, __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_3__["ErrorBoundary"], {
          FallbackComponent: _ErrorFallacks_TemplatePreviewFallback__WEBPACK_IMPORTED_MODULE_5__["default"],
          onReset: () => {},
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 45
          }
        }, __jsx(_TemplatePreview__WEBPACK_IMPORTED_MODULE_2__["default"], {
          templateObj: item,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 49
          }
        })));
      }
    } else {
      return __jsx("div", {
        key: index,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 37
        }
      }, __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_3__["ErrorBoundary"], {
        FallbackComponent: _ErrorFallacks_TemplatePreviewFallback__WEBPACK_IMPORTED_MODULE_5__["default"],
        onReset: () => {},
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 41
        }
      }, __jsx(_TemplatePreview__WEBPACK_IMPORTED_MODULE_2__["default"], {
        templateObj: item,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 45
        }
      })));
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TemplateList);

/***/ })

};
//# sourceMappingURL=4.e8f89bb23bba07348758.hot-update.js.map