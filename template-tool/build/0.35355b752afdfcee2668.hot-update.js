exports.id = 0;
exports.modules = {

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
  handleSaveTemplate,
  closeModal
}) => {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!!categoriesList ? categoriesList[0] : null);
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
    console.log({
      val
    });
    setSelectedCategory(val);
  };

  const onSubmit = () => {
    handleSaveTemplate(name, tagsList, selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.id);
  };

  return __jsx("div", {
    className: "fixed z-10 inset-0 overflow-y-auto",
    "aria-labelledby": "modal-title",
    role: "dialog",
    "aria-modal": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "hidden sm:inline-block sm:align-middle sm:h-screen",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, "\u200B"), __jsx("div", {
    className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "h-96",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 29
    }
  }, __jsx("input", {
    value: name,
    onChange: e => setName(e.target.value),
    className: "relative  border border-grey appearance-none rounded w-full p-2 mt-0 focus:outline-none cursor-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }), __jsx(_CustomTextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
      lineNumber: 102,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "flex flex-grow flex-wrap flex-col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 33
    }
  }, tagsList.map((item, index) => __jsx("div", {
    key: index,
    className: "flex justify-between rounded-3xl px-5 py-1 border-radicalRed border-2 mt-1 text-radicalRed ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 41
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
      lineNumber: 118,
      columnNumber: 45
    }
  })))), __jsx("div", {
    className: "z-20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 33
    }
  }, __jsx(_CustomSelect__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Select Category",
    value: (selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.name) || "none",
    onChange: onCategoryChange,
    dataArray: categoriesList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 37
    }
  }))))), __jsx("div", {
    className: "bg-gray-50 px-4 py-3 sm:px-6 flex justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
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
    onClick: closeModal,
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "secondary",
    className: "red-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 29
    }
  }, "Close")), __jsx("div", {
    className: "mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
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
      lineNumber: 160,
      columnNumber: 29
    }
  }, "Save Template"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SaveTemplate);

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
//# sourceMappingURL=0.35355b752afdfcee2668.hot-update.js.map