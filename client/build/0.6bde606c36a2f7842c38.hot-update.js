exports.id = 0;
exports.modules = {

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/SelectImageModal/SelectImageModal.tsx":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/SelectImageModal/SelectImageModal.tsx ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SubNavBar_components_ElementSelector_components_Stickers_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../SubNavBar/components/ElementSelector/components/Stickers/styles.css */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Stickers/styles.css");
/* harmony import */ var _SubNavBar_components_ElementSelector_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../SubNavBar/components/ElementSelector/components/SearchBar/SearchBar */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar.tsx");
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\tailwindComponents\\CardHeader\\components\\SelectImageModal\\SelectImageModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const svg1 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/svg.png */ "./src/assets/images/svg.png");

const image2 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/image1.png */ "./src/assets/images/image1.png");

const image3 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/image3.png */ "./src/assets/images/image3.png");

const image4 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/image4.png */ "./src/assets/images/image4.png");

const image5 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/image5.png */ "./src/assets/images/image5.png");

const plusimage = __webpack_require__(/*! ../../../../../../../../../../assets/images/plus.png */ "./src/assets/images/plus.png");

const TransformModal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(({
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " ", __jsx("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center h-full overflow-x-hidden overflow-y-scroll outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative z-50 max-w-4xl mx-auto my-6 bg-white rounded-md",
    style: {
      height: "90vh"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, " ", __jsx("div", {
    className: "relative flex flex-col w-full h-full border-0 rounded-lg shadow-lg outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "top-0 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "flex items-center ml-auto mr-2 text-sm font-semibold leading-none text-black rounded-full outline-none opacity-30 focus:outline-none",
    onClick: () => setShowModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "top-0 text-2xl outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, "\xD7"))), __jsx("div", {
    className: "flex items-start justify-between w-full px-5 pb-5 border-b border-solid rounded-t border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  }, __jsx("h3", {
    className: "text-2xl font-semibold text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, "Select Template")), __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex flex-row h-8 px-2 border-2 rounded-md text-gray900 w-36 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "pr-2 text-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 23
    }
  }, "Most Popular"), __jsx("div", {
    className: "mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 23
    }
  }, __jsx("svg", {
    width: "8 ",
    height: "14",
    viewBox: "0 0 8 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M4 0C4.26522 5.96046e-08 4.51957 0.105357 4.70711 0.292893L7.70711 3.29289C8.09763 3.68342 8.09763 4.31658 7.70711 4.70711C7.31658 5.09763 6.68342 5.09763 6.29289 4.70711L4 2.41421L1.70711 4.70711C1.31658 5.09763 0.683417 5.09763 0.292893 4.70711C-0.0976311 4.31658 -0.097631 3.68342 0.292893 3.29289L3.29289 0.292893C3.48043 0.105357 3.73478 0 4 0ZM0.292893 9.29289C0.683417 8.90237 1.31658 8.90237 1.70711 9.29289L4 11.5858L6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289C8.09763 9.68342 8.09763 10.3166 7.70711 10.7071L4.70711 13.7071C4.31658 14.0976 3.68342 14.0976 3.29289 13.7071L0.292893 10.7071C-0.0976311 10.3166 -0.0976311 9.68342 0.292893 9.29289Z",
    fill: "#9CA3AF",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 27
    }
  }))))))), __jsx("div", {
    className: "flex justify-center w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "w-3/6 mt-3 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, __jsx(_SubNavBar_components_ElementSelector_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "flex gap-4 px-6 mt-3 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: "h-10 px-4 py-1 rounded-md bg-lightindigo text-indigo700",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, "Pexels"), __jsx("button", {
    className: "h-10 px-3 py-1 rounded-md bg-lightindigo text-indigo700",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, "Unsplash"), __jsx("button", {
    className: "h-10 px-4 py-1 rounded-md bg-lightindigo text-indigo700",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, "Pixabay"), __jsx("button", {
    className: "h-10 px-3 py-1 rounded-md bg-lightindigo text-indigo700",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, "Property")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }, __jsx("h1", {
    className: "px-6 mt-6 text-xl font-bold text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, "Your Uploads")), __jsx("div", {
    className: "relative flex-auto p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "flex flex-row gap-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "w-64 h-28 bg-indigo700",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center py-6 border-2 border-dashed rounded-md border-bordercolor ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, __jsx("img", {
    className: "w-10 h-10",
    src: plusimage,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "mt-1 text-sm text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 23
    }
  }, "Upload new image"))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: image3,
    className: "rounded-md",
    width: "200",
    height: "110",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 23
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: image4,
    className: "rounded-md",
    width: "200",
    height: "110",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 23
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: image3,
    className: "rounded-md",
    width: "200",
    height: "110",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 23
    }
  }))))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 15
    }
  }, __jsx("h1", {
    className: "px-6 mt-2 text-xl font-bold text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }
  }, "Pexels")), __jsx("div", {
    className: "relative flex-auto p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "flex flex-row gap-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: image2,
    className: "rounded-md",
    width: "200",
    height: "110",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 23
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: image3,
    className: "rounded-md",
    width: "200",
    height: "110",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 23
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: image4,
    className: "rounded-md",
    width: "200",
    height: "110",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 23
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: image3,
    className: "rounded-md",
    width: "200",
    height: "110",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 23
    }
  })))))))), __jsx("div", {
    className: "fixed inset-0 z-40 bg-black opacity-25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 9
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (TransformModal);

/***/ })

};
//# sourceMappingURL=0.6bde606c36a2f7842c38.hot-update.js.map