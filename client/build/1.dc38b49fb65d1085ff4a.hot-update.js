exports.id = 1;
exports.modules = {

/***/ "./src/services/categoryService.ts":
/*!*****************************************!*\
  !*** ./src/services/categoryService.ts ***!
  \*****************************************/
/*! exports provided: category_service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category_service", function() { return category_service; });
const secret_token = window.localStorage.getItem("Token");
const URL_ENDPOINTS = {
  getAllCategoriesURL: "https://hyper-engage-staging.herokuapp.com/templatecategory",
  getCategoryByIdURL: "https://hyper-engage-staging.herokuapp.com/templatecategory",
  createCategoryURL: "https://hyper-engage-staging.herokuapp.com/templatecategory",
  updateCategoryByIdURL: "https://hyper-engage-staging.herokuapp.com/templatecategory",
  deleteCategoryByIdURL: "https://hyper-engage-staging.herokuapp.com/templatecategory"
};
const category_service = {
  getAllCategories,
  addNewCategory,
  getCategoryByID,
  updateCategoryByID,
  deleteCategoryByID
};

async function getAllCategories() {
  const response = await fetch(`${URL_ENDPOINTS.getAllCategoriesURL}?secret_token=${secret_token}`);

  if (!response.ok) {
    throw new Error("Error while fetching Categories");
  }

  return response.json();
}

async function addNewCategory(categoryData) {
  const response = await fetch(`${URL_ENDPOINTS.createCategoryURL}?secret_token=${secret_token}`, {
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

/***/ })

};
//# sourceMappingURL=1.dc38b49fb65d1085ff4a.hot-update.js.map