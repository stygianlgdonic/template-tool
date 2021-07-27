exports.id = 0;
exports.modules = {

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
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SideBar */ "./src/components/DesignTool/SideBar/index.tsx");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! webfontloader */ "webfontloader");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TopToolBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TopToolBar */ "./src/components/DesignTool/TopToolBar/index.tsx");
/* harmony import */ var _MainStage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MainStage */ "./src/components/DesignTool/MainStage/index.tsx");
/* harmony import */ var _EditingTools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EditingTools */ "./src/components/DesignTool/EditingTools/index.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\DesignTool\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const DesignTool = () => {
  const {
    0: variationIndex,
    1: setVariationIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: showSaveVariationModal,
    1: setShowSaveVariationModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: templateData,
    1: setTemplateData,
    2: {
      goForward,
      goBack,
      stepNum
    }
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_1__["TemplateContext"]);
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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log({
      selectedId,
      isEditTextBox,
      isOpenColorPicker
    });
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
    webfontloader__WEBPACK_IMPORTED_MODULE_6___default.a.load({
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
    stepNum > 1 && goBack();
  };

  const onRedo = () => {
    !!setSelectedId && unSelectAll();
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
      }, false);
      setVariationIndex(prev => prev + 1);
    } else {
      sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Cannot create more than 3 variations!");
    }
  };

  const handleEditSelectedItem = () => {
    if (selectedId.split("_")[0] === "textBoxes") {
      setIsEditTextBox(true);
      return;
    }

    setIsOpenColorPicker(true);
  };

  const handleDeleteSelectedItem = () => {
    const type = selectedId.split("_")[0];
    setTemplateData(prev => {
      prev.variations[variationIndex][type] = prev.variations[variationIndex][type].filter(item => item.id !== selectedId);
      unSelectAll();
    });
  };

  const handleCloseEditTextModal = () => {
    setIsEditTextBox(false);
  };

  return __jsx("div", {
    className: "min-w-max",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "h-20 mb-5 flex flex-wrap justify-center content-center bg-green-800",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "text-xl text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, "Tempalte Design")), showSaveVariationModal && __jsx(_tailwindComponents_SaveVariation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    templateData: templateData,
    handleSaveVariation: handleSaveVariation,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "grid grid-cols-3 gap-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx(_SideBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variationIndex: variationIndex,
    setTemplateData: setTemplateData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }, __jsx(_TopToolBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onUndo: onUndo,
    onRedo: onRedo,
    setTemplateData: setTemplateData,
    variationIndex: variationIndex,
    selectedId: selectedId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "flex justify-center mt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 21
    }
  }, __jsx(_MainStage__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
      lineNumber: 132,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "flex justify-center mt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  }, __jsx(_tailwindComponents_SelectVariation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variations: templateData.variations,
    variationIndex: variationIndex,
    setVariationIndex: setVariationIndex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    onClick: () => setShowSaveVariationModal(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 25
    }
  }, "Save Variation"), __jsx("button", {
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    onClick: handleAddVariation,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 25
    }
  }, "Add New Variation"))), __jsx("div", {
    className: selectedId ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 17
    }
  }, __jsx(_EditingTools__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
      lineNumber: 165,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (DesignTool);

/***/ })

};
//# sourceMappingURL=0.5b7bf982fb61fb71ddfc.hot-update.js.map