exports.id = 4;
exports.modules = {

/***/ "./src/components/Home/components/SvgLibrary/index.tsx":
/*!*************************************************************!*\
  !*** ./src/components/Home/components/SvgLibrary/index.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/svg */ "./src/utils/svg.ts");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tailwindComponents_CustomTextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../tailwindComponents/CustomTextField */ "./src/components/tailwindComponents/CustomTextField.tsx");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_useSvg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/useSvg */ "./src/utils/useSvg.tsx");
/* harmony import */ var _assets_svgs_plus_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../assets/svgs/plus.svg */ "./src/assets/svgs/plus.svg");
/* harmony import */ var _assets_svgs_plus_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_svgs_plus_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_svgService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/svgService */ "./src/services/svgService.ts");
/* harmony import */ var _SvgListContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SvgListContainer */ "./src/components/Home/components/SvgLibrary/SvgListContainer/index.tsx");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tailwindComponents_ButtonLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../tailwindComponents/ButtonLoader */ "./src/components/tailwindComponents/ButtonLoader.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\components\\SvgLibrary\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













const SvgLibrary = () => {
  const svgPath = `  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />`;
  const closeIcon = Object(_utils_useSvg__WEBPACK_IMPORTED_MODULE_5__["default"])("http://www.w3.org/2000/svg", "0 0 24 24", "white", "#FF3C69", svgPath);
  const {
    register,
    handleSubmit
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])();
  const {
    0: tag,
    1: setTag
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
    data: svgList,
    error: svgListError,
    isLoading: svgListLoading,
    refetch: refetchSvgList
  } = Object(react_query__WEBPACK_IMPORTED_MODULE_9__["useQuery"])("svgSearch", () => _services_svgService__WEBPACK_IMPORTED_MODULE_7__["svg_service"].searchSvgsByTags([...searchTags]));
  const {
    mutate: mutateNewSvg,
    isLoading: addingNewSvg,
    error: errorAddingSvg
  } = Object(react_query__WEBPACK_IMPORTED_MODULE_9__["useMutation"])(SVG_STRING => _services_svgService__WEBPACK_IMPORTED_MODULE_7__["svg_service"].addNewSvg({
    svgURL: "",
    svgString: SVG_STRING,
    tags: tagsList
  }), {
    onSuccess: (data, variables, context) => {
      refetchSvgList();
    }
  });

  const pushTagToTagsList = tagName => {
    if (!tagName) {
      return;
    }

    let checkExisting = tagsList.filter(currentTag => currentTag == tagName);

    if (checkExisting.length && !isFirstTag) {
      sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
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
      e.preventDefault();
      pushTagToTagsList(tag);
      setTag("");
    }
  };

  const onSubmit = data => {
    if (!(tagsList !== null && tagsList !== void 0 && tagsList.length)) {
      sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
        title: "please enter appsumo code",
        text: `Hit '+' icon or press enter after typing your code`,
        icon: "error"
      });
      return;
    }

    if (!!(data !== null && data !== void 0 && data.svgupload)) {
      const inputFiles = data === null || data === void 0 ? void 0 : data.svgupload;
      _utils_svg__WEBPACK_IMPORTED_MODULE_1__["getSvgStringFromUpload"](inputFiles).then(SVG_STRING => {
        mutateNewSvg(SVG_STRING); // TODO - upload this svg to amazon s3 then get url and pass that to svgURL
        // svg_service.addNewSvg({
        //     svgURL: "",
        //     svgString: SVG_STRING,
        //     tags: tagsList
        // }).then(res => {
        //     console.log({ res })
        // })
      });
    }
  };

  return __jsx("div", {
    className: "p-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx(_SvgListContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    svgList: svgList,
    svgListError: svgListError,
    svgListLoading: svgListLoading,
    refetchSvgList: refetchSvgList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "text-2xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }, "Upload new Svg")), __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 21
    }
  }, __jsx(_tailwindComponents_CustomTextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Enter Tag",
    id: "tagName",
    name: "tagName",
    value: tag,
    onChange: handleChangeTag,
    placeholder: "Type and hit Enter/Return key",
    onKeyDown: handleKeyDown,
    onClick: handlePushTag,
    endIcon: _assets_svgs_plus_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: "relative  border border-grey appearance-none rounded w-full p-2 mt-0 focus:outline-none cursor-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "flex flex-grow flex-wrap flex-col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 25
    }
  }, tagsList.map((item, index) => __jsx("div", {
    key: item,
    className: "flex justify-between rounded-3xl px-5 py-1 border-radicalRed border-2 mt-1 text-radicalRed ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 33
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 37
    }
  }, item), __jsx("img", {
    onClick: () => removeFromTagsList(index),
    src: closeIcon,
    alt: "error",
    className: "w-4  cursor-pointer ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 37
    }
  })))), __jsx("input", _extends({}, register('svgupload'), {
    className: "mt-3 mb-3",
    name: "svgupload",
    type: "file",
    accept: ".svg" // onChange={handleSvgUpload}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 25
    }
  })), __jsx("button", {
    disabled: !!addingNewSvg,
    className: "bg-indigo500 hover:bg-indigo700 text-white font-bold py-2 px-4 w-24 rounded outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 25
    }
  }, !!addingNewSvg ? __jsx(_tailwindComponents_ButtonLoader__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 47
    }
  }) : __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 66
    }
  }, "Submit"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgLibrary);

/***/ })

};
//# sourceMappingURL=4.a21707eb48cf32e81199.hot-update.js.map