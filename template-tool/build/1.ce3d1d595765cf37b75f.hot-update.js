exports.id = 1;
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
/* harmony import */ var _services_categoryService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/categoryService */ "./src/services/categoryService.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\components\\CategoryList\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CategoryList = () => {
  const {
    0: newCategoryName,
    1: setNewCategoryName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    data,
    error,
    isLoading
  } = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQuery"])("templates", _services_categoryService__WEBPACK_IMPORTED_MODULE_2__["category_service"].getAllCategories);
  console.log({
    data
  });

  if (isLoading) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, "Getting all templates ..."));
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

  const handleAddCategory = () => {
    console.log({
      newCategoryName
    });
  };

  return __jsx("div", {
    className: "space-y-4 p-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "Category 1"), __jsx("span", {
    className: "block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Category 2"), __jsx("span", {
    className: "block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "Category 3"), __jsx("div", {
    className: "w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("form", {
    className: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
      lineNumber: 41,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "flex items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: handleAddCategory,
    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, "Add new Category"))), __jsx("p", {
    className: "text-center text-gray-500 text-xs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, "\xA92020 Acme Corp. All rights reserved.")));
};

/* harmony default export */ __webpack_exports__["default"] = (CategoryList);

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

async function addNewCategory(templateData) {
  const response = await fetch(URL_ENDPOINTS.createCategoryURL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(templateData)
  });

  if (!response.ok) {
    throw new Error("Error while adding new template");
  }

  return response.json();
}

async function getCategoryByID(templateID) {
  if (!templateID) return;
  const response = await fetch(`${URL_ENDPOINTS.getAllCategoriesURL}/${templateID}`);

  if (!response.ok) {
    throw new Error("Error while fetching Category");
  }

  return response.json();
}

async function updateCategoryByID(templateID, templateData) {
  console.log({
    JSON: JSON.stringify(templateData),
    templateData
  });
  const response = await fetch(`${URL_ENDPOINTS.updateCategoryByIdURL}/${templateID}`, {
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

async function deleteCategoryByID(templateID) {
  const response = await fetch(`${URL_ENDPOINTS.deleteCategoryByIdURL}/${templateID}`, {
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
//# sourceMappingURL=1.ce3d1d595765cf37b75f.hot-update.js.map