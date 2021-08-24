exports.id = 1;
exports.modules = {

/***/ "./src/ErrorFallacks/SvgUploadFallback.tsx":
false,

/***/ "./src/components/Home/components/CategoryList/index.tsx":
/*!***************************************************************!*\
  !*** ./src/components/Home/components/CategoryList/index.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useCategoryList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hooks/useCategoryList */ "./src/hooks/useCategoryList.ts");
/* harmony import */ var _services_categoryService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/categoryService */ "./src/services/categoryService.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\components\\CategoryList\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CategoryList = () => {
  const {
    0: newCategoryName,
    1: setNewCategoryName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    categoriesList,
    error,
    isLoading
  } = Object(_hooks_useCategoryList__WEBPACK_IMPORTED_MODULE_2__["default"])();

  if (isLoading) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, "Getting all categories ..."));
  }

  if (!!error) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, error.message));
  }

  const handleAddCategory = async e => {
    e.preventDefault();
    const res = await _services_categoryService__WEBPACK_IMPORTED_MODULE_3__["category_service"].addNewCategory({
      name: newCategoryName,
      templateList: []
    });
    console.log({
      res
    });
  };

  const handleDeleteCategory = async cat => {
    sweetalert__WEBPACK_IMPORTED_MODULE_1___default()({
      title: "Are you sure?",
      text: `Do you want to delete ${cat.name}?`,
      icon: "warning",
      buttons: ["Cancel", "Confirm"],
      dangerMode: true
    }).then(async willDelete => {
      if (willDelete) {
        const res = await _services_categoryService__WEBPACK_IMPORTED_MODULE_3__["category_service"].deleteCategoryByID(cat.id);
        console.log({
          res
        });
      }
    });
  };

  return __jsx("div", {
    className: "space-y-4 p-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, categoriesList === null || categoriesList === void 0 ? void 0 : categoriesList.map((cat, index) => __jsx("div", {
    className: "flex justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx("span", {
    key: index,
    className: "block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }, cat.name), __jsx("button", {
    onClick: () => handleDeleteCategory(cat),
    className: "bg-red text-white rounded p-2 mt-2 mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, "Delete")))), __jsx("div", {
    className: "w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, "Category name"), __jsx("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "username",
    type: "text",
    placeholder: "Enter category name",
    value: newCategoryName,
    onChange: e => setNewCategoryName(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "flex items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: handleAddCategory,
    className: "bg-lightGray hover:bg-gray900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, "Add new Category")))));
};

/* harmony default export */ __webpack_exports__["default"] = (CategoryList);

/***/ }),

/***/ "./src/components/Home/components/SvgLibrary/index.tsx":
false,

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
  var _templateList$data;

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

  if (!!templateList.error) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, templateList.error.message));
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
    onClick: () => setCategoryFilter(!!categoryFilter ? null : cat),
    className: "rounded-md px-4 py-1 h-10 " + ((categoryFilter === null || categoryFilter === void 0 ? void 0 : categoryFilter.id) === cat.id ? "text-white bg-indigo700" : "bg-lightindigo text-indigo700 "),
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
      lineNumber: 82,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "text-xl font-bold mt-6 px-6 text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, "Your Templates")), __jsx("div", {
    className: "pl-6 mt-4 flex flex-row flex-wrap gap-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
            lineNumber: 90,
            columnNumber: 41
          }
        }, __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_3__["ErrorBoundary"], {
          FallbackComponent: _ErrorFallacks_TemplatePreviewFallback__WEBPACK_IMPORTED_MODULE_5__["default"],
          onReset: () => {},
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 45
          }
        }, __jsx(_TemplatePreview__WEBPACK_IMPORTED_MODULE_2__["default"], {
          templateObj: item,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95,
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
          lineNumber: 102,
          columnNumber: 37
        }
      }, __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_3__["ErrorBoundary"], {
        FallbackComponent: _ErrorFallacks_TemplatePreviewFallback__WEBPACK_IMPORTED_MODULE_5__["default"],
        onReset: () => {},
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 41
        }
      }, __jsx(_TemplatePreview__WEBPACK_IMPORTED_MODULE_2__["default"], {
        templateObj: item,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 45
        }
      })));
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TemplateList);

/***/ }),

/***/ "./src/components/Home/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Home/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-error-boundary */ "react-error-boundary");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_error_boundary__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ErrorFallacks_CategoryListFallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ErrorFallacks/CategoryListFallback */ "./src/ErrorFallacks/CategoryListFallback.tsx");
/* harmony import */ var _ErrorFallacks_TemplateListFallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ErrorFallacks/TemplateListFallback */ "./src/ErrorFallacks/TemplateListFallback.tsx");
/* harmony import */ var _components_CategoryList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/CategoryList */ "./src/components/Home/components/CategoryList/index.tsx");
/* harmony import */ var _components_SelectTemplateDimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/SelectTemplateDimensions */ "./src/components/Home/components/SelectTemplateDimensions/index.tsx");
/* harmony import */ var _components_TemplateList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/TemplateList */ "./src/components/Home/components/TemplateList/index.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const navLinksList = ["categories", "templates"];

const Home = () => {
  const {
    0: selectedNavLink,
    1: setSelectedNavLink
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(navLinksList[0]);
  const {
    0: openTempalteDimsModal,
    1: setOpenTempalteDimsModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx("div", {
    className: "min-w-max",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "h-20 mb-5 flex flex-wrap justify-evenly content-center bg-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "text-xl text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, "Home"), __jsx("button", {
    // to={ROUTE_NAMES.select_palette}
    onClick: () => setOpenTempalteDimsModal(true),
    className: "text-white font-semibold py-2 px-4 border border-white-500 rounded",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "Create New Template")), __jsx("div", {
    className: !!openTempalteDimsModal ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx(_components_SelectTemplateDimensions__WEBPACK_IMPORTED_MODULE_5__["default"], {
    closeModal: () => setOpenTempalteDimsModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-no-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      minHeight: "80vh"
    },
    className: "w-64 absolute sm:relative shadow flex-col justify-between flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "p-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, __jsx("ul", {
    className: "mt-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  }, __jsx("li", {
    onClick: () => setSelectedNavLink(navLinksList[0]),
    className: "flex w-full bg-gray300 justify-between hover:text-gray-900 cursor-pointer items-center mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "flex items-center  hover:bg-rightbackgroundcolor  w-full hover:rounded-lg border-0 rounded-sm  h-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: "text-gray900 font-medium pl-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 41
    }
  }, "Categories"))), __jsx("li", {
    onClick: () => setSelectedNavLink(navLinksList[1]),
    className: "flex w-full bg-gray300 justify-between text-gray900 hover:text-gray-900 cursor-pointer items-center mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "flex items-center  hover:bg-rightbackgroundcolor  w-full hover:rounded-lg border-0 rounded-sm h-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: "text-gray900 font-medium pl-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 41
    }
  }, "Templates")))))), __jsx("div", {
    className: "container mx-auto py-10 md:w-4/5 w-11/12 px-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "w-full h-full rounded border-dashed border-2 border-gray-300",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: selectedNavLink === navLinksList[0] ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 29
    }
  }, __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_1__["ErrorBoundary"], {
    FallbackComponent: _ErrorFallacks_CategoryListFallback__WEBPACK_IMPORTED_MODULE_2__["default"],
    onReset: () => {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 33
    }
  }, __jsx(_components_CategoryList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 37
    }
  }))), __jsx("div", {
    className: selectedNavLink === navLinksList[1] ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 29
    }
  }, __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_1__["ErrorBoundary"], {
    FallbackComponent: _ErrorFallacks_TemplateListFallback__WEBPACK_IMPORTED_MODULE_3__["default"],
    onReset: () => {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  }, __jsx(_components_TemplateList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 37
    }
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/hooks/useCategoryList.ts":
/*!**************************************!*\
  !*** ./src/hooks/useCategoryList.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_categoryService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/categoryService */ "./src/services/categoryService.ts");



const useCategoryList = () => {
  const {
    data: categoriesList,
    error,
    isLoading
  } = Object(react_query__WEBPACK_IMPORTED_MODULE_0__["useQuery"])("categories", _services_categoryService__WEBPACK_IMPORTED_MODULE_1__["category_service"].getAllCategories);
  return {
    categoriesList,
    error,
    isLoading
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useCategoryList);

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

/***/ }),

/***/ "./src/services/categoryService.ts":
/*!*****************************************!*\
  !*** ./src/services/categoryService.ts ***!
  \*****************************************/
/*! exports provided: category_service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category_service", function() { return category_service; });
const URL_ENDPOINTS = {
  getAllCategoriesURL: "https://polar-tor-04971.herokuapp.com/templatecategory",
  getCategoryByIdURL: "https://polar-tor-04971.herokuapp.com/templatecategory",
  createCategoryURL: "https://polar-tor-04971.herokuapp.com/templatecategory",
  updateCategoryByIdURL: "https://polar-tor-04971.herokuapp.com/templatecategory",
  deleteCategoryByIdURL: "https://polar-tor-04971.herokuapp.com/templatecategory"
};
const category_service = {
  getAllCategories,
  addNewCategory,
  getCategoryByID,
  updateCategoryByID,
  deleteCategoryByID
};

async function getAllCategories() {
  const response = await fetch(URL_ENDPOINTS.getAllCategoriesURL);

  if (!response.ok) {
    throw new Error("Error while fetching Categories");
  }

  return response.json();
}

async function addNewCategory(categoryData) {
  const response = await fetch(URL_ENDPOINTS.createCategoryURL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(categoryData)
  });

  if (!response.ok) {
    throw new Error("Error while adding new category");
  }

  return response.json();
}

async function getCategoryByID(categoryID) {
  if (!categoryID) return;
  const response = await fetch(`${URL_ENDPOINTS.getAllCategoriesURL}/${categoryID}`);

  if (!response.ok) {
    throw new Error("Error while fetching Category");
  }

  return response.json();
}

async function updateCategoryByID(categoryID, categoryData) {
  console.log({
    JSON: JSON.stringify(categoryData),
    categoryData
  });
  const response = await fetch(`${URL_ENDPOINTS.updateCategoryByIdURL}/${categoryID}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(categoryData)
  });
  console.log({
    response
  });

  if (!response.ok) {
    throw new Error("Error while updating category");
  }

  return response.json();
}

async function deleteCategoryByID(categoryID) {
  const response = await fetch(`${URL_ENDPOINTS.deleteCategoryByIdURL}/${categoryID}`, {
    method: "DELETE"
  });
  console.log({
    response
  });

  if (!response.ok) {
    throw new Error("Error while delete category");
  }

  return response.json();
}

/***/ }),

/***/ "./src/services/templateService.ts":
/*!*****************************************!*\
  !*** ./src/services/templateService.ts ***!
  \*****************************************/
/*! exports provided: template_service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template_service", function() { return template_service; });
const secret_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMWI5Y2MwZjEwNTJjMzU2YzM1Njk2ZiIsImVtYWlsIjoic3R5Z2lhbmxnZG9uaWNAZ21haWwuY29tIn0sImlhdCI6MTYyOTI4MjA5Nn0.PYOgPEwiLIyHI_22bjWEaPrykb-RzXKup9MRFzKZt_4";
const URL_ENDPOINTS = {
  getAllTemplatesURL: "https://polar-tor-04971.herokuapp.com/template",
  getTemplateByIdURL: "https://polar-tor-04971.herokuapp.com/template",
  createTemplateURL: "https://polar-tor-04971.herokuapp.com/template",
  updateTemplateByIdURL: "https://polar-tor-04971.herokuapp.com/template",
  deleteTemplateByIdURL: "https://polar-tor-04971.herokuapp.com/template"
};
const template_service = {
  getAllTemplates,
  addNewTemplate,
  getTemplateByID,
  updateTemplateByID,
  deleteTemplateByID
};

async function getAllTemplates() {
  const response = await fetch(`${URL_ENDPOINTS.getAllTemplatesURL}?secret_token=${secret_token}`);

  if (!response.ok) {
    throw new Error("Error while fetching Templates");
  }

  return response.json();
}

async function addNewTemplate(templateData) {
  const response = await fetch(`${URL_ENDPOINTS.createTemplateURL}?secret_token=${secret_token}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(templateData)
  });
  console.log({
    response
  });

  if (!response.ok) {
    throw new Error("Error while adding new template");
  }

  return response.json();
}

async function getTemplateByID(templateID) {
  if (!templateID) return;
  const response = await fetch(`${URL_ENDPOINTS.getAllTemplatesURL}/${templateID}?secret_token=${secret_token}`);

  if (!response.ok) {
    throw new Error("Error while fetching Template");
  }

  return response.json();
}

async function updateTemplateByID(templateID, templateData) {
  console.log({
    JSON: JSON.stringify(templateData),
    templateData
  });
  const response = await fetch(`${URL_ENDPOINTS.updateTemplateByIdURL}/${templateID}?secret_token=${secret_token}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(templateData)
  });
  console.log({
    response
  });

  if (!response.ok) {
    throw new Error("Error while updating template");
  }

  return response.json();
}

async function deleteTemplateByID(templateID) {
  const response = await fetch(`${URL_ENDPOINTS.deleteTemplateByIdURL}/${templateID}?secret_token=${secret_token}`, {
    method: "DELETE"
  });
  console.log({
    response
  });

  if (!response.ok) {
    throw new Error("Error while delete template");
  }

  return response.json();
}

/***/ })

};
//# sourceMappingURL=1.35355b752afdfcee2668.hot-update.js.map