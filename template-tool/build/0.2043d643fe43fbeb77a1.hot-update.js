exports.id = 0;
exports.modules = {

/***/ "./src/ErrorFallacks/SaveTemplateFallback.tsx":
/*!****************************************************!*\
  !*** ./src/ErrorFallacks/SaveTemplateFallback.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\ErrorFallacks\\SaveTemplateFallback.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SaveTemplateFallback = ({
  error,
  resetErrorBoundary
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    sweetalert__WEBPACK_IMPORTED_MODULE_1___default()("Oops!", "Something is wrong with save template modal, try refreshing the page.", "error");
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, error.message);
};

/* harmony default export */ __webpack_exports__["default"] = (SaveTemplateFallback);

/***/ }),

/***/ "./src/components/DesignTool/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/DesignTool/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/TemplateContext */ "./src/contexts/TemplateContext.tsx");
/* harmony import */ var _tailwindComponents_SelectVariation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tailwindComponents/SelectVariation */ "./src/components/tailwindComponents/SelectVariation.tsx");
/* harmony import */ var _tailwindComponents_SaveVariation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tailwindComponents/SaveVariation */ "./src/components/tailwindComponents/SaveVariation.tsx");
/* harmony import */ var _tailwindComponents_SaveTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tailwindComponents/SaveTemplate */ "./src/components/tailwindComponents/SaveTemplate.tsx");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SideBar */ "./src/components/DesignTool/SideBar/index.tsx");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! webfontloader */ "webfontloader");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _TopToolBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TopToolBar */ "./src/components/DesignTool/TopToolBar/index.tsx");
/* harmony import */ var _MainStage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MainStage */ "./src/components/DesignTool/MainStage/index.tsx");
/* harmony import */ var _EditingTools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EditingTools */ "./src/components/DesignTool/EditingTools/index.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _routes_route_names__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../routes/route_names */ "./src/routes/route_names.tsx");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _services_templateService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/templateService */ "./src/services/templateService.ts");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-error-boundary */ "react-error-boundary");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_error_boundary__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ErrorFallacks_MainStageFallBack__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ErrorFallacks/MainStageFallBack */ "./src/ErrorFallacks/MainStageFallBack.tsx");
/* harmony import */ var _ErrorFallacks_TopToolBarFallback__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ErrorFallacks/TopToolBarFallback */ "./src/ErrorFallacks/TopToolBarFallback.tsx");
/* harmony import */ var _ErrorFallacks_SideBarFallback__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ErrorFallacks/SideBarFallback */ "./src/ErrorFallacks/SideBarFallback.tsx");
/* harmony import */ var _ErrorFallacks_SaveVariationFallback__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../ErrorFallacks/SaveVariationFallback */ "./src/ErrorFallacks/SaveVariationFallback.tsx");
/* harmony import */ var _ErrorFallacks_SaveTemplateFallback__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../ErrorFallacks/SaveTemplateFallback */ "./src/ErrorFallacks/SaveTemplateFallback.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\DesignTool\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























const DesignTool = () => {
  const browserHistory = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["useHistory"])();
  const {
    0: templateData,
    1: setTemplateData,
    2: {
      goForward,
      goBack,
      stepNum,
      history
    }
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_1__["TemplateContext"]);
  const {
    0: justUpdated,
    1: setJustUpdated
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let {
    templateID
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["useParams"])();
  const {
    data,
    error,
    isLoading
  } = Object(react_query__WEBPACK_IMPORTED_MODULE_13__["useQuery"])(["currentTemplate", templateID], () => _services_templateService__WEBPACK_IMPORTED_MODULE_14__["template_service"].getTemplateByID(templateID));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!!justUpdated) return;

    if (!!data && !error) {
      setTemplateData(data);
      setJustUpdated(true);
    }
  }, [data]);
  const {
    0: variationIndex,
    1: setVariationIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: showSaveVariationModal,
    1: setShowSaveVariationModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: selectedId,
    1: setSelectedId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: isOpenColorPicker,
    1: setIsOpenColorPicker
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isEditTextBox,
    1: setIsEditTextBox
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isOpenSaveTemplateModal,
    1: setIsOpenSaveTemplateModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setIsOpenColorPicker(false);
    setIsEditTextBox(false);
  }, [selectedId]);

  const unSelectAll = () => {
    setIsOpenColorPicker(false);
    setIsEditTextBox(false);
    setSelectedId(null);
  };

  const handleEscape = e => {
    if (e.key === "Escape") {
      unSelectAll();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener("keydown", handleEscape, false);
    webfontloader__WEBPACK_IMPORTED_MODULE_7___default.a.load({
      google: {
        families: ['Comfortaa', 'Josefin Sans', 'Euphoria Script', 'Oswald', 'Alfa Slab One', 'Bangers', 'Caveat', 'DM Sans', 'East Sea Dokdo', 'Homemade Apple', 'Kristi', 'Lobster Two', 'Maven Pro', 'Monoton', 'Montserrat', 'Playfair Display', 'Press Start 2P', 'Raleway', 'Roboto Slab', 'Shadows Into Light', 'Swanky and Moo Moo']
      }
    });
    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, []);

  const onUndo = () => {
    !!setSelectedId && unSelectAll();

    if (stepNum > 0) {
      if (variationIndex > 0 && history[stepNum].variations.length > history[stepNum - 1].variations.length) {
        setVariationIndex(variationIndex - 1);
      }

      goBack();
    }
  };

  const onRedo = () => {
    !!setSelectedId && unSelectAll();

    if (stepNum > 0) {
      if (variationIndex > 0 && history[stepNum].variations.length > history[stepNum + 1].variations.length) {
        setVariationIndex(variationIndex - 1);
      }
    }

    stepNum < history.length - 1 && goForward();
  };

  const handleSaveVariation = variationData => {
    setTemplateData(prev => {
      prev.variations[variationIndex].name = variationData.name;
      prev.variations[variationIndex].face = variationData.face;
    });
    setShowSaveVariationModal(false);
  };

  const handleAddVariation = () => {
    if (templateData.variations.length < 3) {
      setTemplateData(prev => {
        prev.variations.push(templateData.variations[variationIndex]);
      });
      setVariationIndex(prev => prev + 1);
    } else {
      sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Cannot create more than 3 variations!");
    }
  };

  const handleDeleteVariation = () => {
    const variationsLength = templateData.variations.length;
    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
      title: "Are you sure?",
      text: "Do you want to delete this variation?",
      icon: "warning",
      buttons: ["Cancel", "Confirm"],
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        if (variationsLength > 1) {
          setTemplateData(prev => {
            prev.variations.splice(variationIndex, 1);
            if (variationIndex === variationsLength - 1) setVariationIndex(variationIndex - 1);
          });
        } else {
          setTemplateData(_contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_1__["INITIAL_STATE"]);
        }
      }
    });
  };

  const handleEditSelectedItem = () => {
    if (selectedId.split("_")[0] === "textBoxes") {
      setIsEditTextBox(true);
      return;
    }

    setIsOpenColorPicker(true);
  };

  const handleDeleteSelectedItem = () => {
    setTemplateData(prev => {
      prev.variations[variationIndex].elements = prev.variations[variationIndex].elements.filter(item => item.id !== selectedId);
      unSelectAll();
    });
  };

  const handleCloseEditTextModal = () => {
    setIsEditTextBox(false);
  };

  const openSaveTemplateModal = () => {
    setIsOpenSaveTemplateModal(true);
  };

  const handleSaveTemplate = async (tags, selectedCategory) => {
    if (!!templateID) {
      await _services_templateService__WEBPACK_IMPORTED_MODULE_14__["template_service"].updateTemplateByID(templateID, _objectSpread(_objectSpread({}, templateData), {}, {
        tags
      }));
    } else {
      await _services_templateService__WEBPACK_IMPORTED_MODULE_14__["template_service"].addNewTemplate(_objectSpread(_objectSpread({}, templateData), {}, {
        tags
      }));
      browserHistory.push(_routes_route_names__WEBPACK_IMPORTED_MODULE_12__["ROUTE_NAMES"].home);
    }

    setIsOpenSaveTemplateModal(false);
  };

  const handleDeleteTemplate = () => {
    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
      title: "Are you sure?",
      text: "Do you want to delete this Template?",
      icon: "warning",
      buttons: ["Cancel", "Confirm"],
      dangerMode: true
    }).then(async willDelete => {
      if (willDelete) {
        if (!!templateID) {
          await _services_templateService__WEBPACK_IMPORTED_MODULE_14__["template_service"].deleteTemplateByID(templateID);
        } else {
          setTemplateData(_contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_1__["INITIAL_STATE"]);
        }

        browserHistory.push(_routes_route_names__WEBPACK_IMPORTED_MODULE_12__["ROUTE_NAMES"].home);
      }
    });
  };

  return __jsx("div", {
    className: "min-w-max bg-gray300 h-screen",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "h-20 mb-5 flex flex-wrap justify-evenly content-center bg-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex gap-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 17
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
    to: _routes_route_names__WEBPACK_IMPORTED_MODULE_12__["ROUTE_NAMES"].home,
    className: "text-white font-semibold py-2 px-4 border border-white-500 rounded",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 21
    }
  }, "Back to Home"), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
    to: _routes_route_names__WEBPACK_IMPORTED_MODULE_12__["ROUTE_NAMES"].select_palette,
    className: "text-white font-semibold py-2 px-4 border border-white-500 rounded",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 21
    }
  }, "Select Palette")), __jsx("p", {
    className: "text-xl text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 17
    }
  }, "Tempalte Design"), __jsx("div", {
    className: "flex gap-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 17
    }
  }, __jsx("button", {
    onClick: openSaveTemplateModal,
    className: "text-white font-semibold py-2 px-4 border border-white-500 rounded",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 21
    }
  }, "Save Template"), __jsx("button", {
    onClick: handleDeleteTemplate,
    className: "text-white font-semibold py-2 px-4 border border-red rounded",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 21
    }
  }, "Delete Template"))), showSaveVariationModal && __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_15__["ErrorBoundary"], {
    FallbackComponent: _ErrorFallacks_SaveVariationFallback__WEBPACK_IMPORTED_MODULE_19__["default"],
    onReset: () => {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 17
    }
  }, __jsx(_tailwindComponents_SaveVariation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    templateData: templateData,
    handleSaveVariation: handleSaveVariation,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 21
    }
  })), isOpenSaveTemplateModal && __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_15__["ErrorBoundary"], {
    FallbackComponent: _ErrorFallacks_SaveTemplateFallback__WEBPACK_IMPORTED_MODULE_20__["default"],
    onReset: () => {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 17
    }
  }, __jsx(_tailwindComponents_SaveTemplate__WEBPACK_IMPORTED_MODULE_4__["default"], {
    templateData: templateData,
    handleSaveTemplate: handleSaveTemplate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "grid grid-cols-3 gap-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 13
    }
  }, __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_15__["ErrorBoundary"], {
    FallbackComponent: _ErrorFallacks_SideBarFallback__WEBPACK_IMPORTED_MODULE_18__["default"],
    onReset: () => {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 17
    }
  }, __jsx(_SideBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variationIndex: variationIndex,
    setTemplateData: setTemplateData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 17
    }
  }, __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_15__["ErrorBoundary"], {
    FallbackComponent: _ErrorFallacks_TopToolBarFallback__WEBPACK_IMPORTED_MODULE_17__["default"],
    onReset: () => {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 21
    }
  }, __jsx(_TopToolBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onUndo: onUndo,
    onRedo: onRedo,
    setTemplateData: setTemplateData,
    variationIndex: variationIndex,
    selectedId: selectedId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "flex justify-center mt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 21
    }
  }, __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_15__["ErrorBoundary"], {
    FallbackComponent: _ErrorFallacks_MainStageFallBack__WEBPACK_IMPORTED_MODULE_16__["default"],
    onReset: () => browserHistory.push(_routes_route_names__WEBPACK_IMPORTED_MODULE_12__["ROUTE_NAMES"].home),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 25
    }
  }, __jsx(_MainStage__WEBPACK_IMPORTED_MODULE_9__["default"], {
    templateData: templateData,
    setTemplateData: setTemplateData,
    variationIndex: variationIndex,
    selectedId: selectedId,
    setSelectedId: setSelectedId,
    unSelectAll: unSelectAll,
    handleEditSelectedItem: handleEditSelectedItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "flex justify-center mt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 21
    }
  }, __jsx(_tailwindComponents_SelectVariation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variations: templateData.variations,
    variationIndex: variationIndex,
    setVariationIndex: setVariationIndex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    onClick: () => setShowSaveVariationModal(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 25
    }
  }, "Save Variation"), __jsx("button", {
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    onClick: handleAddVariation,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 25
    }
  }, "Add New Variation"), __jsx("button", {
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    onClick: handleDeleteVariation,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 25
    }
  }, "Delete variation"))), __jsx("div", {
    className: selectedId ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 17
    }
  }, __jsx(_EditingTools__WEBPACK_IMPORTED_MODULE_10__["default"], {
    selectedId: selectedId,
    unSelectAll: unSelectAll,
    isOpenColorPicker: isOpenColorPicker,
    isEditTextBox: isEditTextBox,
    templateData: templateData,
    setTemplateData: setTemplateData,
    variationIndex: variationIndex,
    handleEditSelectedItem: handleEditSelectedItem,
    handleDeleteSelectedItem: handleDeleteSelectedItem,
    handleCloseEditTextModal: handleCloseEditTextModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (DesignTool);

/***/ })

};
//# sourceMappingURL=0.2043d643fe43fbeb77a1.hot-update.js.map