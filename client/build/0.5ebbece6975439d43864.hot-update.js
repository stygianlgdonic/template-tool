exports.id = 0;
exports.modules = {

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/ElementHeader/ElementHeader.tsx":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/ElementHeader/ElementHeader.tsx ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-range */ "react-range");
/* harmony import */ var react_range__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_range__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_DesignTool_SubnavbarActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../contexts/DesignTool/SubnavbarActions */ "./src/contexts/DesignTool/SubnavbarActions.ts");
/* harmony import */ var _Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../../Hooks/CardElementsFunctions */ "./src/Hooks/CardElementsFunctions/index.tsx");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\tailwindComponents\\CardHeader\\components\\ElementHeader\\ElementHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const image = __webpack_require__(/*! ./../../../../../../../../../../assets/images/opacity.png */ "./src/assets/images/opacity.png");

const ElementHeader = () => {
  // const [openstyle, setOpenstyle] = React.useState(false);
  // const [open, setOpen] = React.useState(false);
  const [openstyle, setOpenstyle] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const {
    0: openDropDown,
    1: setopenDropDown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([0.01]); // !!state?false:true;

  const [showeModal, seteShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const {
    handleBorderWidthChange,
    handleStrokeColor,
    handleDeleteSelectedItem,
    handleTextOpacity
  } = Object(_Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_3__["default"])(); // !!state?false:true;

  const {
    selectShapeColorSubNav
  } = Object(_contexts_DesignTool_SubnavbarActions__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return __jsx("div", {
    className: "flex  justify-between ",
    style: {
      width: '110.5vh'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex pl-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "w-10 h-10 rounded-md bg-fuschia",
    onClick: selectShapeColorSubNav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "ml-10 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "relative mt-1",
    onClick: () => setopenDropDown(!!openDropDown ? false : true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("button", {
    type: "button",
    className: "relative w-full py-2 pl-3 pr-10 text-left border-2 rounded-lg shadow-sm h-9 bg-red border-bordercolor focus:outline-none focus:ring-border focus:ring-gray300 focus:border-gray300 sm:text-sm",
    "aria-haspopup": "listbox",
    "aria-expanded": "true",
    "aria-labelledby": "listbox-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, "Select Stroke"), __jsx("ul", {
    className: "absolute z-10 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg w-52 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
    role: "listbox",
    "aria-labelledby": "listbox-label",
    "aria-activedescendant": "listbox-option-3",
    style: {
      display: openDropDown ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, __jsx("li", {
    className: "relative w-full py-2 pl-8 pr-4 text-gray-900 cursor-default select-none ",
    id: "listbox-option-0",
    role: "option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex w-full",
    onClick: () => handleBorderWidthChange(15),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "block w-full h-4 truncate border-4 border-elementColor bg-elementColor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 41
    }
  }, "4"))), __jsx("div", {
    className: "flex mb-2 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex w-full",
    onClick: () => handleBorderWidthChange(10),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "block w-full h-2 mt-2 font-normal truncate border-2 border-elementColor bg-elementColor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "ml-2 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 41
    }
  }, "2"))), __jsx("div", {
    className: "flex ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex w-full",
    onClick: () => handleBorderWidthChange(5),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "block w-full h-1 mt-2 font-normal truncate border-2 border-elementColor bg-elementColor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 41
    }
  }, "1"))), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "grid grid-cols-1 gap-4 mt-4 sm:grid-cols-3 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "w-10 h-10 rounded-md bg-indigo600",
    onClick: () => handleStrokeColor("#4F46E5"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 37
    }
  }), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-fuschia",
    onClick: () => handleStrokeColor("#EF5DA8"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 37
    }
  }), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-greenish",
    onClick: () => handleStrokeColor("#5DEFC3"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 37
    }
  }), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-yellowish",
    onClick: () => handleStrokeColor("#EEA146"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 37
    }
  }), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-redish",
    onClick: () => handleStrokeColor("#EE4646"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 37
    }
  }), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-gray900",
    onClick: () => handleStrokeColor("#111827"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 37
    }
  }))))))), __jsx("div", {
    className: "flex flex-row  items-center  justify-between mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: " relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "ml-6  hover:bg-lightindigo h-10 w-10 pl-2 rounded-md",
    onClick: () => seteShowModal(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: " absolute",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, showeModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: " z-10 inset-0 overflow-y-auto",
    "aria-labelledby": "modal-title",
    role: "dialog",
    "aria-modal": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: " flex items-end justify-center  min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 37
    }
  }, __jsx("div", {
    onClick: () => seteShowModal(false),
    className: "fixed inset-0  transition-opacity",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: "border border-bordercolor  inline-block align-bottom w-40  items-center bg-white rounded-lg px-4 justify-center overflow-hidden shadow-md transform transition-all top-0 right-0 mt-2 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "w-full flex gap-4 justify-center ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 45
    }
  }, __jsx(react_range__WEBPACK_IMPORTED_MODULE_1__["Range"], {
    step: 0.01,
    min: 0.01,
    max: 1,
    values: values,
    onChange: values => {
      setValues(values);
      handleTextOpacity(values);
    },
    renderTrack: ({
      props,
      children
    }) => __jsx("div", _extends({}, props, {
      className: "w-full h-3 pr-2 my-4 bg-indigo600 rounded-md",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 57
      }
    }), children),
    renderThumb: ({
      props
    }) => __jsx("div", _extends({}, props, {
      className: "w-5 h-5 transform translate-x-10 bg-fuschia rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 57
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 49
    }
  })))))) : null)), __jsx("div", {
    className: "py-4  ml-4 mr-2 border-r-2 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: " flex bg-transparent hover:bg-deletecolor rounded-md w-10 h-9 items-center justify-center",
    onClick: () => handleDeleteSelectedItem(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "20",
    height: "23",
    viewBox: "0 0 15 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M13.1875 4.56858L12.4828 12.9017C12.4221 13.6199 11.7145 14.1764 10.8619 14.1764H4.13807C3.28553 14.1764 2.57794 13.6199 2.5172 12.9017L1.8125 4.56858M5.875 7.31368V11.4313M9.125 7.31368V11.4313M9.9375 4.56858V2.50976C9.9375 2.13074 9.57373 1.82349 9.125 1.82349H5.875C5.42627 1.82349 5.0625 2.13074 5.0625 2.50976V4.56858M1 4.56858H14",
    stroke: "#B91C1C",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ElementHeader);

/***/ })

};
//# sourceMappingURL=0.5ebbece6975439d43864.hot-update.js.map