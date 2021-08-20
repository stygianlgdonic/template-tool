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
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_LoggedInLayout_CreateCardLayout_components_DesignTool_Components_SubNavBar_components_ElementSelector_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar */ "./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar.tsx");
/* harmony import */ var _services_templateService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/templateService */ "./src/services/templateService.ts");
/* harmony import */ var _CreateEmail_TemplatePreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CreateEmail/TemplatePreview */ "./src/components/RightSidebar/components/CreateEmail/TemplatePreview/index.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\SelectSocialMediaTemplateModal\\SelectSocialMediaTemplateModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import "../../../../../SubNavBar/components/ElementSelector/components/Stickers/styles.css";

const image1 = __webpack_require__(/*! ./../../../../assets/images/01.png */ "./src/assets/images/01.png");

const image2 = __webpack_require__(/*! ../../../../assets/images/02.png */ "./src/assets/images/02.png");

const image3 = __webpack_require__(/*! ../../../../assets/images/03.png */ "./src/assets/images/03.png");

const image4 = __webpack_require__(/*! ../../../../assets/images/image3.png */ "./src/assets/images/image3.png");

const image5 = __webpack_require__(/*! ../../../../assets/images/image4.png */ "./src/assets/images/image4.png");

const plusimage = __webpack_require__(/*! .././../../../assets/images/plus.png */ "./src/assets/images/plus.png");




const SelectSocialMediaTemplateModal = ({
  closeModal,
  displayModalChange
}) => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [ShowToolTip, setShowToolTip] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const myRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    data,
    error,
    isLoading
  } = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQuery"])("templates", _services_templateService__WEBPACK_IMPORTED_MODULE_3__["template_service"].getAllTemplates);

  if (isLoading) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, "Getting all templates ..."));
  }

  if (!!error) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, error.message));
  }

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
      lineNumber: 61,
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
      lineNumber: 64,
      columnNumber: 17
    }
  }, " ", __jsx("div", {
    className: "relative flex flex-col w-full h-full border-0 rounded-lg shadow-lg outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "flex items-start justify-between p-5 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }, __jsx("button", {
    onClick: () => displayModalChange("PersonalizedImage"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  }, __jsx("svg", {
    width: "28",
    height: "16",
    viewBox: "0 0 28 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 37
    }
  }, __jsx("path", {
    d: "M7.33333 13.5L2 8M2 8L7.33333 2.5M2 8L26 8",
    stroke: "#4B5563",
    "stroke-width": "4",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 41
    }
  })))), __jsx("div", {
    className: "flex items-start justify-between w-full px-5 pb-5 border-b border-solid rounded-t border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 29
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "text-2xl font-semibold text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 37
    }
  }, "Select Template")), __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "flex flex-row h-8 px-2 border-2 rounded-md text-gray900 w border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 37
    }
  }, __jsx("select", {
    className: "pr-2 text-sm border-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 41
    }
  }, __jsx("option", {
    selected: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 45
    }
  }, "Social media"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 45
    }
  }, "Email")))))), __jsx("div", {
    className: "flex justify-center w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "w-3/6 mt-3 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 29
    }
  }, __jsx(_layouts_LoggedInLayout_CreateCardLayout_components_DesignTool_Components_SubNavBar_components_ElementSelector_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: "flex gap-4 px-6 mt-3 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 25
    }
  }, __jsx("button", {
    className: "h-10 px-4 py-1 text-sm not-italic font-medium leading-5 rounded-md bg-lightindigo text-indigo700 font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 29
    }
  }, "Employee"), __jsx("button", {
    className: "h-10 px-3 py-1 text-sm not-italic font-medium leading-5 rounded-md bg-lightindigo text-indigo700 font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 29
    }
  }, "Events"), __jsx("button", {
    className: "h-10 px-4 py-1 text-sm not-italic font-medium leading-5 rounded-md bg-lightindigo text-indigo700 font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 29
    }
  }, "Promotion"), __jsx("button", {
    className: "h-10 px-3 py-1 text-sm not-italic font-medium leading-5 rounded-md bg-lightindigo text-indigo700 font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 29
    }
  }, "Property")), __jsx("div", {
    className: "flex justify-between w-full px-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 29
    }
  }, __jsx("h1", {
    className: "mt-6 text-2xl not-italic font-bold leading-9 font-inter text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 33
    }
  }, "Your Designs")), __jsx("div", {
    className: "mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 29
    }
  }, __jsx("button", {
    className: "text-base not-italic font-medium leading-5 font-inter text-grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 33
    }
  }, "See all"))), __jsx("div", {
    className: "relative flex-auto p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "flex flex-row gap-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex flex-row flex-wrap gap-4 pl-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 33
    }
  }, __jsx("button", {
    onClick: () => displayModalChange("CardSize"),
    className: "flex flex-col items-center justify-center py-3 border-2 border-dashed rounded-md w-52 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 37
    }
  }, __jsx("img", {
    className: "w-8 h-8",
    src: plusimage,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mt-0 text-sm text-lightGray ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 41
    }
  }, "Create New Personalized Template"), __jsx("div", {
    className: "relative flex items-center justify-end ml-44",
    onClick: () => setShowToolTip(!ShowToolTip),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 41
    }
  }, __jsx("button", {
    onClick: () => setShowToolTip(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
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
      lineNumber: 165,
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
      lineNumber: 173,
      columnNumber: 53
    }
  }))), ShowToolTip ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "absolute bottom-0 flex flex-col mb-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 53
    }
  }, __jsx("span", {
    className: "relative z-auto w-full h-24 p-3 text-xs leading-none text-white whitespace-no-wrap rounded-md shadow-lg ml-60 bg-indigo500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 57
    }
  }, "You can create a template from scratch by adding images and elements from our vast library. Once you create a tamplate you can reuse it again for multiple campaigns", __jsx("div", {
    className: "flex justify-start mt-3 mb-3 text-sm font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 61
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
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
      lineNumber: 190,
      columnNumber: 57
    }
  }))) : null)), data.map((item, index) => {
    return __jsx("button", {
      key: index,
      className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: "rounded-md bg-yellow",
      style: {
        width: "200px",
        height: "110px"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 49
      }
    }, __jsx(_CreateEmail_TemplatePreview__WEBPACK_IMPORTED_MODULE_4__["default"], {
      templateObj: item,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 53
      }
    })), __jsx("p", {
      className: "mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 49
      }
    }, item.name || "untitled"));
  })))), __jsx("div", {
    className: "flex justify-between w-full px-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 29
    }
  }, __jsx("h1", {
    className: "mt-4 text-2xl not-italic font-bold leading-9 font-inter text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 33
    }
  }, "For you")), __jsx("div", {
    className: "flex justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "mt-4 mr-3 border-2 rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 33
    }
  }, __jsx("select", {
    className: "pr-2 text-sm border-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 37
    }
  }, __jsx("option", {
    selected: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 41
    }
  }, "Most popular"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 41
    }
  }, "Great Option"))), __jsx("div", {
    className: "mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "text-base not-italic font-medium leading-5 font-inter text-grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 37
    }
  }, "See all")))), __jsx("div", {
    className: "relative flex-auto p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "flex flex-row gap-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 29
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
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
      lineNumber: 245,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 41
    }
  }, "Warm welcome to employees"))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
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
      lineNumber: 258,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 41
    }
  }, "Card design"))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
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
      lineNumber: 271,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 41
    }
  }, "Warm welcome to employees                                                            "))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
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
      lineNumber: 283,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 41
    }
  }, "Warm welcome to employees")))))))), __jsx("div", {
    className: "fixed inset-0 z-40 bg-black opacity-25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectSocialMediaTemplateModal);

/***/ })

};
//# sourceMappingURL=1.fd8764af95e201daf9db.hot-update.js.map