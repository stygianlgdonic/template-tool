exports.id = 1;
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
/* harmony import */ var _hooks_useTemplateList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/useTemplateList */ "./src/hooks/useTemplateList.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\components\\TemplateList\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const TemplateList = () => {
  const {
    templateList,
    error,
    isLoading
  } = Object(_hooks_useTemplateList__WEBPACK_IMPORTED_MODULE_6__["default"])();

  if (isLoading) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, "Getting all templates ..."));
  }

  if (!!error) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, error.message));
  }

  return __jsx("div", {
    className: "space-y-4 p-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "relative flex  h-full flex-col w-full  outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex items-start justify-between w-full p-5 border-b border-solid border-bordercolor rounded-t",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }, __jsx("h3", {
    className: "text-2xl text-gray94 font-semibold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 33
    }
  }, "Select Template")), __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex flex-row px-2 text-gray900 border-2 h-8 w border-bordercolor rounded-md  mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "pr-2 text-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 37
    }
  }, "Most Popular "))))), __jsx("div", {
    className: "w-full flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "mt-3 w-3/6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_3__["ErrorBoundary"], {
    FallbackComponent: _ErrorFallacks_SearchBarFallback__WEBPACK_IMPORTED_MODULE_4__["default"],
    onReset: () => {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }, __jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 33
    }
  })))), __jsx("div", {
    className: " flex gap-4 mt-3 px-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "bg-lightindigo text-indigo700 rounded-md px-4 py-1 h-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, "Employes"), __jsx("button", {
    className: "bg-lightindigo text-indigo700 rounded-md px-3 py-1 h-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, "Events"), __jsx("button", {
    className: "bg-lightindigo text-indigo700 rounded-md px-4 py-1 h-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 25
    }
  }, "Promotion"), __jsx("button", {
    className: "bg-lightindigo text-indigo700 rounded-md px-3 py-1 h-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, "Property")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "text-xl font-bold mt-6 px-6 text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, "Your Templates")), __jsx("div", {
    className: "pl-6 mt-4 flex flex-row flex-wrap gap-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, templateList.map((item, index) => {
    return __jsx("div", {
      key: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 33
      }
    }, __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_3__["ErrorBoundary"], {
      FallbackComponent: _ErrorFallacks_TemplatePreviewFallback__WEBPACK_IMPORTED_MODULE_5__["default"],
      onReset: () => {},
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 37
      }
    }, __jsx(_TemplatePreview__WEBPACK_IMPORTED_MODULE_2__["default"], {
      templateObj: item,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 41
      }
    })));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TemplateList);

/***/ })

};
//# sourceMappingURL=1.210a231a9bee58eded65.hot-update.js.map