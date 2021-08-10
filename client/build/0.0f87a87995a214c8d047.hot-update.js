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


const image1 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/image.png */ "./src/assets/images/image.png");

const image2 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/image1.png */ "./src/assets/images/image1.png");

const image3 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/image3.png */ "./src/assets/images/image3.png");

const image4 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/image4.png */ "./src/assets/images/image4.png");

const image5 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/image5.png */ "./src/assets/images/image5.png");

const plusimage = __webpack_require__(/*! ../../../../../../../../../../assets/images/plus.png */ "./src/assets/images/plus.png");

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
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("div", {
    ref: myRef,
    className: "relative w-auto max-w-3xl mx-auto my-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "relative flex flex-col w-full pt-2 pb-2 pl-2 pr-2 bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex items-start justify-between mt-1 ml-6 rounded-t border-blueGray-200 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "z-50 flex items-center justify-center w-11/12 border rounded-md h-14 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "flex items-center justify-end w-auto p-3 text-sm text-grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
      lineNumber: 44,
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
      lineNumber: 51,
      columnNumber: 25
    }
  })))), __jsx("input", {
    className: "z-0 w-full h-12 text-sm rounded outline-none text-gray95",
    type: "text",
    placeholder: "Search anything from elements",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "flex p-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "flex flex-col w-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-col w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  }, __jsx("h1", {
    className: "flex justify-end text-sm font-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, "See All"), __jsx("div", {
    className: "grid w-full grid-cols-2 gap-4 mt-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 23
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "h-20 border-2 border-dashed rounded-md w-34 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 27
    }
  }, __jsx("img", {
    src: plusimage,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 29
    }
  }), __jsx("p", {
    className: "pt-8 text-gradientColor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 29
    }
  }, "Upload new image")))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 23
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image3,
    className: "h-20 rounded-md w-34",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 27
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 23
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image1,
    className: "h-20 rounded-md w-34",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 27
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 23
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image4,
    className: "h-20 rounded-md w-34",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 27
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 23
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image2,
    className: "h-20 rounded-md w-34",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 27
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 23
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image3,
    className: "h-20 rounded-md w-34",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 27
    }
  })))))))))), __jsx("div", {
    className: "fixed inset-0 z-40 bg-black opacity-25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (SelectFromGallleryModal);

/***/ }),

/***/ "./src/assets/images/plus.png":
/*!************************************!*\
  !*** ./src/assets/images/plus.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })

};
//# sourceMappingURL=0.0f87a87995a214c8d047.hot-update.js.map