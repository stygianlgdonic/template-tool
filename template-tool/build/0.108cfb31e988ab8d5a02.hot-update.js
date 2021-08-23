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
    console.log("saving");
    handleSaveTemplate(tagsList, selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.id);
  };

  return __jsx("div", {
    className: "fixed z-10 inset-0 overflow-y-auto",
    "aria-labelledby": "modal-title",
    role: "dialog",
    "aria-modal": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "hidden sm:inline-block sm:align-middle sm:h-screen",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, "\u200B"), __jsx("div", {
    className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "h-96",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
      lineNumber: 98,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "flex flex-grow flex-wrap flex-col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 33
    }
  }, tagsList.map((item, index) => __jsx("div", {
    key: index,
    className: "flex justify-between rounded-3xl px-5 py-1 border-radicalRed border-2 mt-1 text-radicalRed ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 41
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
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
      lineNumber: 114,
      columnNumber: 45
    }
  })))), __jsx("div", {
    className: "z-20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
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
      lineNumber: 125,
      columnNumber: 37
    }
  }))))), __jsx("div", {
    className: "bg-gray-50 px-4 py-3 sm:px-6 flex justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
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
      lineNumber: 139,
      columnNumber: 29
    }
  }, "Close")), __jsx("div", {
    className: "mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
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
      lineNumber: 156,
      columnNumber: 29
    }
  }, "Save Template"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SaveTemplate);

/***/ })

};
//# sourceMappingURL=0.108cfb31e988ab8d5a02.hot-update.js.map