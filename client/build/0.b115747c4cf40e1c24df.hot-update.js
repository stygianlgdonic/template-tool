exports.id = 0;
exports.modules = {

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/components/BackgroundColorModal/BackgroundColorModal.tsx":
/*!************************************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/components/BackgroundColorModal/BackgroundColorModal.tsx ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-color */ "react-color");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\BackgroundSelector\\components\\BackgroundColorModal\\BackgroundColorModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const BackgroundColorModal = ({
  closeModal,
  setCurrentColor,
  currentColor
}) => {
  const {
    0: fillType,
    1: setfillType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const myRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    ref: myRef,
    className: "fixed z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative w-auto max-w-3xl mx-auto my-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg border-bordercolor focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx("label", {
    className: "mt-4 ml-6 text-base font-medium leading-5 text-left text-black font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, "Fill type"), __jsx("div", {
    className: "flex items-start justify-between p-5 rounded-t border-blueGray-200 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "flex gap-2 ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 29
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 33
    }
  }, __jsx("button", {
    onClick: () => setfillType(false),
    type: "button",
    className: " w-14 font-inter h-10 inline-flex items-center px-3 py-1.5 border-2 border-gray300 text-xs font-medium rounded-md shadow-sm   " + (fillType === false ? "bg-SolidColor text-white" : "text-gradientColor bg-jacksonsGray"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 37
    }
  }, "Solid")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 33
    }
  }, __jsx("button", {
    onClick: () => setfillType(true),
    type: "button",
    className: "w-28 font-inter h-10 inline-flex text-center items-center px-5 py-1.5 border-2 border-gray300 text-xs font-medium  rounded-md shadow-sm text-gradientColor bg-jacksonsGray  focus:bg-SolidColor focus:text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 37
    }
  }, "Fill gradient")), __jsx("div", {
    className: "mt-2 ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: fillType === false ? "hidden" : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "flex ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 33
    }
  }, __jsx("input", {
    id: "push-everything",
    name: "push-notifications",
    type: "radio",
    className: "w-4 h-4 mt-1 text-indigo600 border-gray300 focus:ring-indigo500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 37
    }
  }), __jsx("p", {
    className: "ml-1 text-base font-medium leading-5 text-lightGray font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 37
    }
  }, "Linear")), __jsx("div", {
    className: "flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 33
    }
  }, __jsx("input", {
    id: "push-everything",
    name: "push-notifications",
    type: "radio",
    className: "w-4 h-4 mt-1 text-left text-indigo600 border-gray300 focus:ring-indigo500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 37
    }
  }), __jsx("p", {
    className: "ml-1 text-base font-medium leading-5 text-lightGray font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 37
    }
  }, "Radial"))), __jsx("div", {
    className: "bg-gray-800",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 29
    }
  }, __jsx(react_color__WEBPACK_IMPORTED_MODULE_1__["SketchPicker"], {
    width: "full",
    color: currentColor,
    onChange: color => setCurrentColor(color.hex),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 33
    }
  })))))), __jsx("div", {
    className: "fixed inset-0 z-40 bg-transparent opacity-25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BackgroundColorModal);

/***/ })

};
//# sourceMappingURL=0.b115747c4cf40e1c24df.hot-update.js.map