exports.id = 0;
exports.modules = {

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/components/SelectFromGalleryModal/SelectFromGalleryModal.tsx":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/components/SelectFromGalleryModal/SelectFromGalleryModal.tsx ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\BackgroundSelector\\components\\SelectFromGalleryModal\\SelectFromGalleryModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SelectFromGallleryModal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(({
  closeModal
}) => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [ShowToolTip, setShowToolTip] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const {
    0: openDropDown,
    1: setopenDropDown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: openMergeDropdown,
    1: setopenMergeDropdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const myRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleClickOutside = e => {
    if (!myRef.current.contains(e.target)) {
      closeModal();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("div", {
    ref: myRef,
    className: "relative w-auto max-w-3xl mx-auto my-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex items-start justify-between p-5 rounded-t border-blueGray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "z-50 flex items-center justify-center w-11/12 border rounded-md h-14 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "flex items-center justify-end w-auto p-3 text-sm text-grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 23
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6Z",
    fill: "#9CA3AF",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  })))), __jsx("input", {
    className: "z-0 w-full h-12 text-sm rounded outline-none text-gray95 ",
    type: "text",
    placeholder: "Search anything from elements",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "relative flex-auto p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "my-4 text-lg leading-relaxed text-blueGray-500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, "I always felt like I could do anything. That\u2019s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can\u2019t do anything, you won\u2019t do anything. I was taught I could do everything."))))), __jsx("div", {
    className: "fixed inset-0 z-40 bg-black opacity-25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (SelectFromGallleryModal);

/***/ })

};
//# sourceMappingURL=0.edca9b1a132f8c2f64f4.hot-update.js.map