exports.id = 4;
exports.modules = {

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
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_categoryService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/categoryService */ "./src/services/categoryService.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\components\\CategoryList\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CategoryList = () => {
  var _categoriesList$data;

  const {
    0: newCategoryName,
    1: setNewCategoryName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    data: categoriesList,
    error: categoryError,
    isLoading: categoryLoading
  } = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQuery"])("categories", _services_categoryService__WEBPACK_IMPORTED_MODULE_3__["category_service"].getAllCategories);

  if (categoryLoading) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, "Getting all categories ..."));
  }

  if (!!categoryError) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, categoryError.message));
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
    sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
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
  }, categoriesList === null || categoriesList === void 0 ? void 0 : (_categoriesList$data = categoriesList.data) === null || _categoriesList$data === void 0 ? void 0 : _categoriesList$data.map(cat => __jsx("div", {
    key: cat.id,
    className: "flex justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx("span", {
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

/***/ })

};
//# sourceMappingURL=4.b5b3e0304b5dd27e64ee.hot-update.js.map