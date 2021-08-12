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
/* harmony import */ var _shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shrugsy/use-immer-state */ "@shrugsy/use-immer-state");
/* harmony import */ var _shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Picker */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/CustomColorPicker/Picker.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\CustomColorPicker\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const CustomColorPicker = ({
  closeModal,
  setDocumentColors
}) => {
  const {
    0: fillType,
    1: setfillType
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: gradientType,
    1: setGradientType
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("linear");
  const myRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const {
    0: solidColor,
    1: setSolidColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("#171717");
  const [currentGradientColors, setCurrentGradientColors] = Object(_shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_0__["useImmerState"])([0, "#171717", 1, "#171717"]);
  const {
    0: gradientColorNumber,
    1: setGradientColorNumber
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);

  const handleClickOutside = e => {
    //   console.log({ LOL: reference.current.contains(e.target), ee: e.target });
    if (!myRef.current.contains(e.target)) {
      // setShowModal(false);
      closeModal();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const handleGradientTypeChange = type => {
    console.log({
      type
    }); // setGradientType(type)
  };

  const handleSolidColorChange = color => {
    setSolidColor(color.hex);
  };

  const handleGradientColorChange = color => {
    setCurrentGradientColors(prev => {
      prev[gradientColorNumber] = color.hex;
    });
  };

  const handleSaveColor = () => {
    if (fillType === "solid") {
      setDocumentColors(prev => {
        prev.push(solidColor);
      });
    }

    if (fillType === "gradient") {}

    closeModal();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    ref: myRef,
    className: " shadow rounded fixed z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative w-auto max-w-3xl mx-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "relative flex flex-col w-full p-2 bg-white border-0 rounded-lg  border-bordercolor focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, __jsx("label", {
    className: "mt-4 ml-6 text-base font-medium leading-5 text-left text-black font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, "Fill type"), __jsx("div", {
    className: "flex items-start justify-between p-5 rounded-t border-blueGray-200 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "flex gap-2 ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
      lineNumber: 73,
      columnNumber: 37
    }
  }, "Solid")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 33
    }
  }, __jsx("button", {
    onClick: () => setfillType("gradient"),
    type: "button",
    className: "w-28 font-inter h-10 inline-flex text-center items-center px-5 py-1.5 border-2 border-gray300 text-xs font-medium  rounded-md shadow-sm " + (fillType === "gradient" ? "bg-SolidColor text-white" : "text-gradientColor bg-jacksonsGray"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 37
    }
  }, "Fill gradient")), __jsx("div", {
    className: "mt-2 ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: fillType === "solid" ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "w-60",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 29
    }
  }, __jsx(_Picker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: solidColor,
    onChange: handleSolidColorChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: fillType === "gradient" ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: " flex justify-evenly ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 29
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
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
      lineNumber: 114,
      columnNumber: 40
    }
  }), "Linear"), __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
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
      lineNumber: 126,
      columnNumber: 40
    }
  }), "Radial")), __jsx("div", {
    className: "w-60",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 29
    }
  }, __jsx(_Picker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: currentGradientColors[gradientColorNumber],
    onChange: handleGradientColorChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: "flex justify-between mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: fillType === "solid" ? "flex gap-2" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 29
    }
  }, __jsx("button", {
    className: "h-10 w-10 rounded-md border border-black",
    style: {
      backgroundColor: solidColor
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: fillType === "gradient" ? "flex gap-2" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 29
    }
  }, __jsx("button", {
    className: "h-10 w-10 rounded-md border " + (gradientColorNumber === 1 ? "border-gray94" : "border-bluish"),
    style: {
      backgroundColor: currentGradientColors[1]
    },
    onClick: () => setGradientColorNumber(1),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 33
    }
  }), __jsx("button", {
    className: "h-10 w-10 rounded-md border " + (gradientColorNumber === 3 ? "border-gray94" : "border-bluish"),
    style: {
      backgroundColor: currentGradientColors[3]
    },
    onClick: () => setGradientColorNumber(3),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 33
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 29
    }
  }, __jsx("button", {
    onClick: handleSaveColor,
    className: "h-10 w-16 rounded-md border border-black bg-bluish",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 33
    }
  }, "Add")))))), __jsx("div", {
    className: "fixed inset-0 z-40 bg-transparent opacity-25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomColorPicker);

/***/ })

};
//# sourceMappingURL=0.82b161dff91493cd6a0f.hot-update.js.map