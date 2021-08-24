exports.ids = [0];
exports.modules = {

/***/ "./src/assets/svgs/plus.svg":
/*!**********************************!*\
  !*** ./src/assets/svgs/plus.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/plus.cc6d96c4.svg";

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

/***/ "./src/services/categoryService.ts":
/*!*****************************************!*\
  !*** ./src/services/categoryService.ts ***!
  \*****************************************/
/*! exports provided: category_service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category_service", function() { return category_service; });
const secret_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMWI5Y2MwZjEwNTJjMzU2YzM1Njk2ZiIsImVtYWlsIjoic3R5Z2lhbmxnZG9uaWNAZ21haWwuY29tIn0sImlhdCI6MTYyOTI4MjA5Nn0.PYOgPEwiLIyHI_22bjWEaPrykb-RzXKup9MRFzKZt_4";
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
  const response = await fetch(`${URL_ENDPOINTS.getAllCategoriesURL}/${categoryID}?secret_token=${secret_token}`);

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
  const response = await fetch(`${URL_ENDPOINTS.updateCategoryByIdURL}/${categoryID}?secret_token=${secret_token}`, {
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
  const response = await fetch(`${URL_ENDPOINTS.deleteCategoryByIdURL}/${categoryID}?secret_token=${secret_token}`, {
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
  getAllTemplatesURL: "https://hyper-engage-staging.herokuapp.com/template",
  getTemplateByIdURL: "https://hyper-engage-staging.herokuapp.com/template",
  createTemplateURL: "https://hyper-engage-staging.herokuapp.com/template",
  updateTemplateByIdURL: "https://hyper-engage-staging.herokuapp.com/template",
  deleteTemplateByIdURL: "https://hyper-engage-staging.herokuapp.com/template"
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

/***/ }),

/***/ "./src/utils/svg.ts":
/*!**************************!*\
  !*** ./src/utils/svg.ts ***!
  \**************************/
/*! exports provided: parseSVG, getElementColor, getColors, svgToURL, replaceColors, getSvgStringFromUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSVG", function() { return parseSVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementColor", function() { return getElementColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColors", function() { return getColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgToURL", function() { return svgToURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceColors", function() { return replaceColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSvgStringFromUpload", function() { return getSvgStringFromUpload; });
// parse svg string into DOM
function parseSVG(svgString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, "image/svg+xml");
  return doc;
} // get color of element
// we can also check styles of element and other properties like "stroke"

function getElementColor(el) {
  return el.getAttribute("fill");
} // find all colors used in svg

function getColors(svgString) {
  const doc = parseSVG(svgString);
  var elements = doc.getElementsByTagName("*");
  const usedColors = [];

  for (const element of elements) {
    const color = getElementColor(element); // if color is defined and uniq we will add it

    if (color && usedColors.indexOf(color) === -1) {
      usedColors.push(color);
    }
  }

  return usedColors;
} // convert svg string into base64 data URL

function svgToURL(s) {
  const uri = window.btoa(unescape(encodeURIComponent(s)));
  return "data:image/svg+xml;base64," + uri;
} // replace colors in svg string

function replaceColors(svgString, map) {
  // we can do some RegExp magic here
  // but I will just manually check every element
  const doc = parseSVG(svgString);
  var elements = doc.getElementsByTagName("*");

  for (const element of elements) {
    const color = getElementColor(element);

    if (map[color]) {
      element.setAttribute("fill", map[color]);
    }
  }

  var xmlSerializer = new XMLSerializer();
  const str = xmlSerializer.serializeToString(doc);
  return str;
}
function getSvgStringFromUpload(files) {
  return new Promise((resolve, reject) => {
    try {
      var reader = new FileReader();

      reader.onload = function (e) {
        var svgData = e.target.result;
        var parser = new DOMParser();
        var doc = parser.parseFromString(svgData, "image/svg+xml");
        resolve(doc.documentElement.outerHTML);
      };

      reader.readAsText(files[0]);
    } catch (error) {
      reject(error);
    }
  });
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

};;
//# sourceMappingURL=0.chunk.js.map