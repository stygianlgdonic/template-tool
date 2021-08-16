exports.id = 0;
exports.modules = {

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/CustomColorPicker/index.tsx":
/*!***************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/CustomColorPicker/index.tsx ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../contexts/DesignTool/DesignToolContext */ "./src/contexts/DesignTool/DesignToolContext.tsx");
/* harmony import */ var _Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Hooks/CardElementsFunctions */ "./src/Hooks/CardElementsFunctions/index.tsx");
/* harmony import */ var _Picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Picker */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/CustomColorPicker/Picker.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\CustomColorPicker\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CustomColorPicker = ({
  closeModal,
  isBackground
}) => {
  const {
    0: fillType,
    1: setfillType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: gradientType,
    1: setGradientType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("linear");
  const myRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    cardData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_1__["DesignToolContext"]);
  const {
    getSelectedElementData,
    handleFill,
    handleGradientColor,
    handleRadialGradientColor
  } = Object(_Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    0: gradientColorNumber,
    1: setGradientColorNumber
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const selectedElementData = isBackground ? cardData.elements[0] : getSelectedElementData();
  const linearGradColor1 = !!(selectedElementData !== null && selectedElementData !== void 0 && selectedElementData.fillLinearGradientColorStops) ? selectedElementData === null || selectedElementData === void 0 ? void 0 : selectedElementData.fillLinearGradientColorStops[1] : "#171717";
  const linearGradColor2 = !!(selectedElementData !== null && selectedElementData !== void 0 && selectedElementData.fillLinearGradientColorStops) ? selectedElementData === null || selectedElementData === void 0 ? void 0 : selectedElementData.fillLinearGradientColorStops[3] : "#171717";
  const radialGradColor1 = !!(selectedElementData !== null && selectedElementData !== void 0 && selectedElementData.fillRadialGradientColorStops) ? selectedElementData === null || selectedElementData === void 0 ? void 0 : selectedElementData.fillRadialGradientColorStops[1] : "#171717";
  const radialGradColor2 = !!(selectedElementData !== null && selectedElementData !== void 0 && selectedElementData.fillRadialGradientColorStops) ? selectedElementData === null || selectedElementData === void 0 ? void 0 : selectedElementData.fillRadialGradientColorStops[3] : "#171717";

  const handleClickOutside = e => {
    //   console.log({ LOL: reference.current.contains(e.target), ee: e.target });
    if (!myRef.current.contains(e.target)) {
      // setShowModal(false);
      closeModal();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const handleGradientTypeChange = e => {
    setGradientType(e.target.value);
  };

  const handleSolidColorChange = color => {
    handleFill(color.hex, isBackground ? "shapes_background" : null);
  };

  const handleGradientColorChange = color => {
    if (gradientType === "linear") {
      const color1 = gradientColorNumber === 1 ? color.hex : linearGradColor1;
      const color2 = gradientColorNumber === 3 ? color.hex : linearGradColor2;
      handleGradientColor(color1, color2, isBackground ? "shapes_background" : null);
    }

    if (gradientType === "radial") {
      const color1 = gradientColorNumber === 1 ? color.hex : radialGradColor1;
      const color2 = gradientColorNumber === 3 ? color.hex : radialGradColor2;
      handleRadialGradientColor(color1, color2);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    ref: myRef,
    className: " shadow rounded fixed z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative w-auto max-w-3xl mx-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "relative flex flex-col w-full p-2 bg-white border-0 rounded-lg  border-bordercolor focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx("label", {
    className: "mt-4 ml-6 text-base font-medium leading-5 text-left text-black font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, "Fill type"), __jsx("div", {
    className: "flex items-start justify-between p-5 rounded-t border-blueGray-200 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "flex gap-2 ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 29
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 33
    }
  }, __jsx("button", {
    onClick: () => {
      setfillType("solid");
    },
    type: "button",
    className: " w-14 font-inter h-10 inline-flex items-center px-3 py-1.5 border-2 border-gray300 text-xs font-medium rounded-md shadow-sm   " + (fillType === "solid" ? "bg-SolidColor text-white" : "text-gradientColor bg-jacksonsGray"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 37
    }
  }, "Solid")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 33
    }
  }, __jsx("button", {
    onClick: () => setfillType("gradient"),
    type: "button",
    className: "w-28 font-inter h-10 inline-flex text-center items-center px-5 py-1.5 border-2 border-gray300 text-xs font-medium  rounded-md shadow-sm " + (fillType === "gradient" ? "bg-SolidColor text-white" : "text-gradientColor bg-jacksonsGray"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 37
    }
  }, "Fill gradient")), __jsx("div", {
    className: "mt-2 ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: fillType === "solid" ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "w-60",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 29
    }
  }, __jsx(_Picker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: selectedElementData !== null && selectedElementData !== void 0 && selectedElementData.fill ? selectedElementData === null || selectedElementData === void 0 ? void 0 : selectedElementData.fill : "#171717",
    onChange: handleSolidColorChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: fillType === "gradient" ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: " flex justify-evenly ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 29
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 33
    }
  }, __jsx("input", {
    onChange: handleGradientTypeChange,
    checked: gradientType === "linear",
    value: "linear",
    id: "linear",
    name: "linear",
    type: "radio",
    className: "w-4 h-4 mt-1 mb-1 mr-3 text-indigo600 border-gray300 focus:ring-indigo500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 40
    }
  }), "Linear"), __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 33
    }
  }, __jsx("input", {
    onChange: handleGradientTypeChange,
    checked: gradientType === "radial",
    value: "radial",
    id: "radial",
    name: "radial",
    type: "radio",
    className: "w-4 h-4 mt-1 mb-1 mr-3 text-left text-indigo600 border-gray300 focus:ring-indigo500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 40
    }
  }), "Radial")), __jsx("div", {
    className: gradientType === "linear" ? "w-60" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 29
    }
  }, __jsx(_Picker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: !!(selectedElementData !== null && selectedElementData !== void 0 && selectedElementData.fillLinearGradientColorStops) ? selectedElementData.fillLinearGradientColorStops[gradientColorNumber] : "#171717",
    onChange: handleGradientColorChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: gradientType === "radial" ? "w-60" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 29
    }
  }, __jsx(_Picker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: !!(selectedElementData !== null && selectedElementData !== void 0 && selectedElementData.fillRadialGradientColorStops) ? selectedElementData.fillRadialGradientColorStops[gradientColorNumber] : "#171717",
    onChange: handleGradientColorChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: "flex justify-between mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: fillType === "gradient" ? "flex gap-2" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 29
    }
  }, __jsx("button", {
    className: "h-10 w-10 rounded-md border " + (gradientColorNumber === 1 ? "border-gray94" : "border-bluish"),
    style: {
      backgroundColor: gradientType === "linear" ? linearGradColor1 : radialGradColor1
    },
    onClick: () => setGradientColorNumber(1),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 33
    }
  }), __jsx("button", {
    className: "h-10 w-10 rounded-md border " + (gradientColorNumber === 3 ? "border-gray94" : "border-bluish"),
    style: {
      backgroundColor: gradientType === "radial" ? radialGradColor2 : linearGradColor2
    },
    onClick: () => setGradientColorNumber(3),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 33
    }
  })))))), __jsx("div", {
    className: "fixed inset-0 z-40 bg-transparent opacity-25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomColorPicker);

/***/ })

};
//# sourceMappingURL=0.47efedfee75cc32006f2.hot-update.js.map