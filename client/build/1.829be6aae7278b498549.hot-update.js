exports.id = 1;
exports.modules = {

/***/ "./src/components/RightSidebar/components/SelectSocialMediaTemplateModal/SelectSocialMediaTemplateModal.tsx":
/*!******************************************************************************************************************!*\
  !*** ./src/components/RightSidebar/components/SelectSocialMediaTemplateModal/SelectSocialMediaTemplateModal.tsx ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Screens_CreateCardLayout_components_DesignTool_Components_SubNavBar_components_ElementSelector_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar.tsx");
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\SelectSocialMediaTemplateModal\\SelectSocialMediaTemplateModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import "../../../../../SubNavBar/components/ElementSelector/components/Stickers/styles.css";



const svg1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './../../../../../../../../../../assets/images/svg.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

const image1 = __webpack_require__(/*! ./../../../../assets/images/01.png */ "./src/assets/images/01.png");

const image2 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './../../../../../../../../../../assets/images/image1.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

const image3 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './../../../../../../../../../../assets/images/image3.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

const image4 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './../../../../../../../../../../assets/images/image4.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

const image5 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './../../../../../../../../../../assets/images/image5.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

const plusimage = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../../../../../../assets/images/plus.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

const SelectSocialMediaTemplateModal = ({
  closeModal,
  displayModalChange
}) => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [ShowToolTip, setShowToolTip] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
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
    // ref={myRef}
    className: "fixed z-50 flex items-center justify-center h-full overflow-x-hidden overflow-y-scroll outline-none inset-1 focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative z-50 max-w-4xl mx-auto my-6 bg-white rounded-md",
    style: {
      width: "1027px",
      height: "100vh"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, " ", __jsx("div", {
    className: "relative flex flex-col w-full h-full border-0 rounded-lg shadow-lg outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "top-0 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 29
    }
  }, __jsx("button", {
    className: "flex items-center ml-auto mr-2 text-sm font-semibold leading-none text-black rounded-full outline-none opacity-30 focus:outline-none" // onClick={() => setShowModal(false)}
    ,
    onClick: closeModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "top-0 text-2xl outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 37
    }
  }, "\xD7"))), __jsx("div", {
    className: "flex items-start justify-between w-full px-5 pb-5 border-b border-solid rounded-t border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 29
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "text-2xl font-semibold text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 37
    }
  }, "Select Template")), __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "flex flex-row h-8 px-2 border-2 rounded-md text-gray900 w border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 37
    }
  }, __jsx("select", {
    className: "pr-2 text-sm border-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 41
    }
  }, __jsx("option", {
    selected: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 45
    }
  }, "Social media"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 45
    }
  }, "Email")), __jsx("img", {
    className: "w-2 ",
    src: svg1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 41
    }
  }))))), __jsx("div", {
    className: "flex justify-center w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "w-3/6 mt-3 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 29
    }
  }, __jsx(_Screens_CreateCardLayout_components_DesignTool_Components_SubNavBar_components_ElementSelector_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: "flex gap-4 px-6 mt-3 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  }, __jsx("button", {
    className: "h-10 px-4 py-1 text-sm not-italic font-medium leading-5 rounded-md bg-lightindigo text-indigo700 font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 29
    }
  }, "Employee"), __jsx("button", {
    className: "h-10 px-3 py-1 text-sm not-italic font-medium leading-5 rounded-md bg-lightindigo text-indigo700 font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }, "Events"), __jsx("button", {
    className: "h-10 px-4 py-1 text-sm not-italic font-medium leading-5 rounded-md bg-lightindigo text-indigo700 font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }, "Promotion"), __jsx("button", {
    className: "h-10 px-3 py-1 text-sm not-italic font-medium leading-5 rounded-md bg-lightindigo text-indigo700 font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 29
    }
  }, "Property")), __jsx("div", {
    className: "flex justify-between w-full px-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 29
    }
  }, __jsx("h1", {
    className: "mt-6 text-2xl not-italic font-bold leading-9 font-inter text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 33
    }
  }, "Your Designs")), __jsx("div", {
    className: "mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 29
    }
  }, __jsx("button", {
    className: "text-base not-italic font-medium leading-5 font-inter text-grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 33
    }
  }, "See all"))), __jsx("div", {
    className: "relative flex-auto p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "flex flex-row gap-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "h-28",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 33
    }
  }, __jsx("button", {
    onClick: () => displayModalChange("CardSize"),
    className: "flex flex-col items-center justify-center py-3 border-2 border-dashed rounded-md w-52 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 37
    }
  }, __jsx("img", {
    className: "w-8 h-8",
    src: plusimage,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mt-0 text-sm text-lightGray ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 41
    }
  }, "Create New Personalized Template"), __jsx("div", {
    className: "relative flex items-center justify-end ml-44",
    onClick: () => setShowToolTip(!ShowToolTip),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 41
    }
  }, __jsx("button", {
    onClick: () => setShowToolTip(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 45
    }
  }, __jsx("svg", {
    className: "",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 49
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55229 6.44772 9 7 9V12C7 12.5523 7.44772 13 8 13H9C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11V8C9 7.44772 8.55228 7 8 7H7Z",
    fill: "#4338CA",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 53
    }
  }))), ShowToolTip ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "absolute bottom-0 flex flex-col mb-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 53
    }
  }, __jsx("span", {
    className: "relative z-auto w-full h-24 p-3 text-xs leading-none text-white whitespace-no-wrap rounded-md shadow-lg ml-60 bg-indigo500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 57
    }
  }, "You can create a template from scratch by adding images and elements from our vast library. Once you create a tamplate you can reuse it again for multiple campaigns", __jsx("div", {
    className: "flex justify-start mt-3 mb-3 text-sm font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 61
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 65
    }
  }, "Got it"))), __jsx("div", {
    className: "z-50 flex justify-end w-3 h-3 -mt-2 transform rotate-45 bg-indigo500",
    style: {
      marginLeft: "350px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 57
    }
  }))) : null))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: image5,
    className: "rounded-md",
    width: "200",
    height: "110",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mt-2 text-sm not-italic font-semibold text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 41
    }
  }, "Welcome card for employee"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 41
    }
  }, __jsx("p", {
    className: "text-sm not-italic font-normal leading-5 font-inter text-createcolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 45
    }
  }, "Creators:")))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: image2,
    className: "rounded-md",
    width: "200",
    height: "110",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mt-2 text-sm not-italic font-semibold text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 41
    }
  }, "Warm welcome to employees"), __jsx("p", {
    className: "text-sm not-italic font-normal leading-5 font-inter text-createcolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 41
    }
  }, "Creators:"))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: image2,
    className: "rounded-md",
    width: "200",
    height: "110",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mt-2 text-sm not-italic font-semibold text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 41
    }
  }, "Warm welcome to employees"), __jsx("p", {
    className: "text-sm not-italic font-normal leading-5 font-inter text-createcolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 41
    }
  }, "Creators:"))))), __jsx("div", {
    className: "flex justify-between w-full px-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 29
    }
  }, __jsx("h1", {
    className: "mt-4 text-2xl not-italic font-bold leading-9 font-inter text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 33
    }
  }, "For you")), __jsx("div", {
    className: "flex justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "mt-4 mr-3 border-2 rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 33
    }
  }, __jsx("select", {
    className: "pr-2 text-sm border-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 37
    }
  }, __jsx("option", {
    selected: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 41
    }
  }, "Most popular"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 41
    }
  }, "Great Option"))), __jsx("div", {
    className: "mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "text-base not-italic font-medium leading-5 font-inter text-grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 37
    }
  }, "See all")))), __jsx("div", {
    className: "relative flex-auto p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "flex flex-row gap-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 29
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: image4,
    className: "rounded-md",
    width: "200",
    height: "110",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 41
    }
  }, "Warm welcome to employees"))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: image3,
    className: "rounded-md",
    width: "200",
    height: "110",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 41
    }
  }, "Card design"))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: image1,
    className: "rounded-md",
    width: "200",
    height: "110",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 41
    }
  }, "Warm welcome to employees                                                            "))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: image3,
    className: "rounded-md",
    width: "200",
    height: "110",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 41
    }
  }, "Warm welcome to employees")))))))), __jsx("div", {
    className: "fixed inset-0 z-40 bg-black opacity-25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectSocialMediaTemplateModal);

/***/ })

};
//# sourceMappingURL=1.829be6aae7278b498549.hot-update.js.map