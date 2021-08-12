exports.id = 1;
exports.modules = {

/***/ "./src/components/RightSidebar/components/PersonalizedImageModal/PersonalizedImageModal.tsx":
/*!**************************************************************************************************!*\
  !*** ./src/components/RightSidebar/components/PersonalizedImageModal/PersonalizedImageModal.tsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SelectSocialMediaTemplateModal_SelectSocialMediaTemplateModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SelectSocialMediaTemplateModal/SelectSocialMediaTemplateModal */ "./src/components/RightSidebar/components/SelectSocialMediaTemplateModal/SelectSocialMediaTemplateModal.tsx");
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\PersonalizedImageModal\\PersonalizedImageModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import SearchBar from "../../../../Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar";

const email = __webpack_require__(/*! ../../../../assets/images/email.png */ "./src/assets/images/email.png");

const socialmedia = __webpack_require__(/*! ../../../../assets/images/socialmedia.png */ "./src/assets/images/socialmedia.png");

const image1 = __webpack_require__(/*! ./../../../../assets/images/01.png */ "./src/assets/images/01.png");

const image2 = __webpack_require__(/*! ./../../../../assets/images/02.png */ "./src/assets/images/02.png");

const image3 = __webpack_require__(/*! ./../../../../assets/images/03.png */ "./src/assets/images/03.png");

const image4 = __webpack_require__(/*! ./../../../../assets/images/04.png */ "./src/assets/images/04.png");

const image5 = __webpack_require__(/*! ../../../../assets/images/card5.png */ "./src/assets/images/card5.png");

const plus = __webpack_require__(/*! ../../../../assets/images/plus.png */ "./src/assets/images/plus.png");

const header = __webpack_require__(/*! ../../../../assets/images/header.png */ "./src/assets/images/header.png");

const body = __webpack_require__(/*! ../../../../assets/images/body.png */ "./src/assets/images/body.png");

const featureimage = __webpack_require__(/*! ../../../../assets/images/featureimage.png */ "./src/assets/images/featureimage.png");


const PersonalizedImageModal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(({
  closeModal
}) => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [newModal, setNewModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [ShowToolTip, setShowToolTip] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const {
    0: CreatePersonalizedImageModal,
    1: setCreatePersonalizedImageModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // const [openDropDown, setopenDropDown] = useState(false);
  // const [openMergeDropdown, setopenMergeDropdown] = useState(false);

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
    className: "fixed inset-0 z-50 flex items-center justify-center h-full overflow-x-hidden overflow-y-scroll outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "relative z-50 mx-auto bg-white rounded-md",
    style: {
      width: "803px",
      height: "577px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, " ", __jsx("div", {
    className: "relative flex flex-col w-full h-full border-0 rounded-lg shadow-lg outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "top-0 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex items-center mt-4 ml-auto mr-5 text-sm font-semibold leading-none text-black rounded-full outline-none focus:outline-none",
    onClick: () => closeModal(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "top-0 text-2xl outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 41
    }
  }, "\xD7"))), __jsx("div", {
    className: "px-32 mt-3 mb-3 text-3xl not-italic font-bold leading-9 text-center font-inter text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 37
    }
  }, "Where do you want to send your personalized image?"))), __jsx("div", {
    className: "flex justify-center gap-10 mt-8 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 29
    }
  }, __jsx("div", {
    style: {
      width: "289px",
      height: "363px",
      boxShadow: " -16px 16px 20px  rgba(129,140,248,0.43)"
    },
    className: "rounded-md bg-SolidColor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 33
    }
  }, __jsx("button", {
    onClick: () => {
      setNewModal(true); // select Template modal

      setShowModal(false); //where do you want personalized image modal
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "flex justify-center mt-8 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 41
    }
  }, __jsx("img", {
    className: "w-32 h-16",
    src: socialmedia,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 45
    }
  })), __jsx("div", {
    className: "mb-2 mt-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 41
    }
  }, __jsx("h3", {
    className: "text-3xl not-italic font-bold leading-9 text-center text-white font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 45
    }
  }, "Social media")), __jsx("div", {
    className: "p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 41
    }
  }, __jsx("p", {
    className: "text-sm font-normal leading-5 text-center text-white font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 45
    }
  }, "You can get a code of the personalized image created and it use it on your preferred email marketing tool ")))), __jsx("div", {
    style: {
      width: "289px",
      height: "363px",
      boxShadow: " -16px 16px 20px  rgba(129,140,248,0.43)"
    },
    className: "rounded-md bg-SolidColor ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 33
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "flex justify-center mt-8 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 41
    }
  }, __jsx("img", {
    className: "w-20 h-16",
    src: email,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 45
    }
  })), __jsx("div", {
    className: "mb-2 mt-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 41
    }
  }, __jsx("h3", {
    className: "text-3xl not-italic font-bold leading-9 text-center text-white font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 45
    }
  }, "Email")), __jsx("div", {
    className: "p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 41
    }
  }, __jsx("p", {
    className: "text-sm font-normal leading-5 text-center text-white font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 45
    }
  }, "You can get a code of the personalized image created and it use it on your preferred email marketing tool "))))))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, CreatePersonalizedImageModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "relative w-auto max-w-3xl mx-auto my-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "flex items-start justify-between p-5 rounded-t border-blueGray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 45
    }
  }, __jsx("h3", {
    className: "text-3xl font-bold leading-9 font-inter text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 49
    }
  }, "Create New Personalized Email"), __jsx("button", {
    className: "float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-20 focus:outline-none",
    onClick: () => setCreatePersonalizedImageModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 49
    }
  }, __jsx("span", {
    className: "block w-6 h-6 text-2xl text-black bg-white outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 53
    }
  }, "\xD7"))), __jsx("div", {
    className: "relative flex-auto p-6 mb-6 text-lg font-bold text-createEmail font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 45
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 49
    }
  }, " Create For Email"), __jsx("div", {
    className: "flex justify-between gap-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "h-40 border-2 border-transparent shadow-md w-96 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 53
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 57
    }
  }, __jsx("div", {
    className: "flex p-10 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 61
    }
  }, __jsx("img", {
    src: header,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 65
    }
  }), __jsx("div", {
    className: "mt-2 ml-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 65
    }
  }, __jsx("div", {
    className: "font-bold text-left text-createEmail font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 69
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 73
    }
  }, "HEADER")), __jsx("div", {
    className: "text-sm text-createEmail2 font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 69
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 73
    }
  }, "Dimensions:1920x240")))))), __jsx("div", {
    className: "h-40 border-2 border-transparent shadow-md w-72 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 53
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 57
    }
  }, __jsx("div", {
    className: "flex p-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 61
    }
  }, __jsx("img", {
    src: body,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 65
    }
  }), __jsx("div", {
    className: "mt-2 ml-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 65
    }
  }, __jsx("div", {
    className: "font-bold text-left text-createEmail font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 69
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 73
    }
  }, "BODY")), __jsx("div", {
    className: "text-sm text-createEmail2 font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 69
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 73
    }
  }, "Dimensions:1080x1080"))))))), __jsx("div", {
    className: "mt-6 mb-6 text-lg font-bold text-createEmail font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 49
    }
  }, "Create For Social Media"), __jsx("div", {
    className: "flex justify-between gap-4 mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 49
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "h-40 border-2 border-transparent shadow-md w-96 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 57
    }
  }, __jsx("div", {
    className: "flex p-10 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 61
    }
  }, __jsx("img", {
    src: featureimage,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 65
    }
  }), __jsx("div", {
    className: "mt-2 ml-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 65
    }
  }, __jsx("div", {
    className: "font-bold text-left text-createEmail font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 69
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 73
    }
  }, "Feature IMAGE")), __jsx("div", {
    className: "text-sm text-createEmail2 font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 69
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 73
    }
  }, "Dimensions:1080x1080"))))))))))), __jsx("div", {
    className: "fixed inset-0 z-0 bg-black opacity-25 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 33
    }
  })) : null), __jsx("div", {
    style: {
      display: showModal ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 21
    }
  }, __jsx(_SelectSocialMediaTemplateModal_SelectSocialMediaTemplateModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    closeSocialMediaModal: () => {
      setShowModal(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "fixed inset-0 z-40 bg-black opacity-25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 17
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (PersonalizedImageModal);

/***/ }),

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
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../SubNavBar/components/ElementSelector/components/Stickers/styles.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Screens_CreateCardLayout_components_DesignTool_Components_SubNavBar_components_ElementSelector_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar.tsx");
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\SelectSocialMediaTemplateModal\\SelectSocialMediaTemplateModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // const svg1 = require("./../../../../../../../../../../assets/images/svg.png");
// const image2 = require("./../../../../../../../../../../assets/images/image1.png");
// const image3 = require("./../../../../../../../../../../assets/images/image3.png");
// const image4 = require("./../../../../../../../../../../assets/images/image4.png");
// const image5 = require("./../../../../../../../../../../assets/images/image5.png");
// const plusimage = require("../../../../../../../../../../assets/images/plus.png");
// import NewImageModal from "../NewImageModal/NewImageModal";

const SelectSocialMediaTemplateModal = ({
  closeSocialMediaModal
}) => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [ShowToolTip, setShowToolTip] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false); // const [openDropDown, setopenDropDown] = useState(false);
  // const [openMergeDropdown, setopenMergeDropdown] = useState(false);

  const myRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleClickOutside = e => {
    if (!myRef.current.contains(e.target)) {
      closeSocialMediaModal();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "fixed z-50 flex items-center justify-center h-full overflow-x-hidden overflow-y-scroll outline-none inset-1 focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
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
      lineNumber: 37,
      columnNumber: 17
    }
  }, " ", __jsx("div", {
    className: "relative flex flex-col w-full h-full border-0 rounded-lg shadow-lg outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "top-0 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
    }
  }, __jsx("button", {
    className: "flex items-center ml-auto mr-2 text-sm font-semibold leading-none text-black rounded-full outline-none opacity-30 focus:outline-none" // onClick={() => setShowModal(false)}
    // onClick={() => setNewModal(false)}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "top-0 text-2xl outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 37
    }
  }, "\xD7"))), __jsx("div", {
    className: "flex items-start justify-between w-full px-5 pb-5 border-b border-solid rounded-t border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "text-2xl font-semibold text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 37
    }
  }, "Select Template")), __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "flex flex-row h-8 px-2 border-2 rounded-md text-gray900 w border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 37
    }
  }, __jsx("select", {
    className: "pr-2 text-sm border-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 41
    }
  }, __jsx("option", {
    selected: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 45
    }
  }, "Social media"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 45
    }
  }, "Email")))))), __jsx("div", {
    className: "flex justify-center w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "w-3/6 mt-3 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 29
    }
  }, __jsx(_Screens_CreateCardLayout_components_DesignTool_Components_SubNavBar_components_ElementSelector_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: "flex gap-4 px-6 mt-3 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, __jsx("button", {
    className: "h-10 px-4 py-1 text-sm not-italic font-medium leading-5 rounded-md bg-lightindigo text-indigo700 font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 29
    }
  }, "Employee"), __jsx("button", {
    className: "h-10 px-3 py-1 text-sm not-italic font-medium leading-5 rounded-md bg-lightindigo text-indigo700 font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }, "Events"), __jsx("button", {
    className: "h-10 px-4 py-1 text-sm not-italic font-medium leading-5 rounded-md bg-lightindigo text-indigo700 font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }, "Promotion"), __jsx("button", {
    className: "h-10 px-3 py-1 text-sm not-italic font-medium leading-5 rounded-md bg-lightindigo text-indigo700 font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 29
    }
  }, "Property")), __jsx("div", {
    className: "flex justify-between w-full px-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 29
    }
  }, __jsx("h1", {
    className: "mt-6 text-2xl not-italic font-bold leading-9 font-inter text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 33
    }
  }, "Your Designs")), __jsx("div", {
    className: "mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 29
    }
  }, __jsx("button", {
    className: "text-base not-italic font-medium leading-5 font-inter text-grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 33
    }
  }, "See all"))), __jsx("div", {
    className: "relative flex-auto p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "flex flex-row gap-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "h-28",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 33
    }
  }, __jsx("button", {
    onClick: () => {
      // setCreatePersonalizedImageModal(true);
      // setNewModal(false);
      setShowModal(false); //where do you want personalized image modal
    },
    className: "flex flex-col items-center justify-center py-3 border-2 border-dashed rounded-md w-52 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: "mt-0 text-sm text-lightGray ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 41
    }
  }, "Create New Personalized Template"), __jsx("div", {
    className: "relative flex items-center justify-end ml-44",
    onClick: () => setShowToolTip(!ShowToolTip),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 41
    }
  }, __jsx("button", {
    onClick: () => setShowToolTip(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
      lineNumber: 125,
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
      lineNumber: 133,
      columnNumber: 53
    }
  }))), ShowToolTip ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "absolute bottom-0 flex flex-col mb-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 53
    }
  }, __jsx("span", {
    className: "relative z-auto w-full h-24 p-3 text-xs leading-none text-white whitespace-no-wrap rounded-md shadow-lg ml-60 bg-indigo500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 57
    }
  }, "You can create a template from scratch by adding images and elements from our vast library. Once you create a tamplate you can reuse it again for multiple campaigns", __jsx("div", {
    className: "flex justify-start mt-3 mb-3 text-sm font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 61
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
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
      lineNumber: 150,
      columnNumber: 57
    }
  }))) : null))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: "mt-2 text-sm not-italic font-semibold text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 41
    }
  }, "Welcome card for employee"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 41
    }
  }, __jsx("p", {
    className: "text-sm not-italic font-normal leading-5 font-inter text-createcolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 45
    }
  }, "Creators:")))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: "mt-2 text-sm not-italic font-semibold text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 41
    }
  }, "Warm welcome to employees"), __jsx("p", {
    className: "text-sm not-italic font-normal leading-5 font-inter text-createcolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 41
    }
  }, "Creators:"))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: "mt-2 text-sm not-italic font-semibold text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 41
    }
  }, "Warm welcome to employees"), __jsx("p", {
    className: "text-sm not-italic font-normal leading-5 font-inter text-createcolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 41
    }
  }, "Creators:"))))), __jsx("div", {
    className: "flex justify-between w-full px-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 29
    }
  }, __jsx("h1", {
    className: "mt-4 text-2xl not-italic font-bold leading-9 font-inter text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 33
    }
  }, "For you")), __jsx("div", {
    className: "flex justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "mt-4 mr-3 border-2 rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 33
    }
  }, __jsx("select", {
    className: "pr-2 text-sm border-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 37
    }
  }, __jsx("option", {
    selected: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 41
    }
  }, "Most popular"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 41
    }
  }, "Great Option"))), __jsx("div", {
    className: "mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "text-base not-italic font-medium leading-5 font-inter text-grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 37
    }
  }, "See all")))), __jsx("div", {
    className: "relative flex-auto p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "flex flex-row gap-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 29
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: "mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 41
    }
  }, "Warm welcome to employees"))), __jsx("div", {
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
  }, __jsx("p", {
    className: "mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 41
    }
  }, "Card design"))), __jsx("div", {
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
  }, __jsx("p", {
    className: "mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 41
    }
  }, "Warm welcome to employees                                                            "))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: "mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 41
    }
  }, "Warm welcome to employees")))))))), __jsx("div", {
    className: "fixed inset-0 z-40 bg-black opacity-25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectSocialMediaTemplateModal);

/***/ })

};
//# sourceMappingURL=1.e8fbfb4e4ca88f77971c.hot-update.js.map