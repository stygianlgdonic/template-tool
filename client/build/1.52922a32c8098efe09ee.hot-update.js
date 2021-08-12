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
      setShowModal(true);
    } // onClick={() => {
    //     setNewModal(true);// select Template modal
    //     setShowModal(false); //where do you want personalized image modal
    // }}
    ,
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
      lineNumber: 76,
      columnNumber: 41
    }
  }, __jsx("img", {
    className: "w-32 h-16",
    src: socialmedia,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 45
    }
  })), __jsx("div", {
    className: "mb-2 mt-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 41
    }
  }, __jsx("h3", {
    className: "text-3xl not-italic font-bold leading-9 text-center text-white font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 45
    }
  }, "Social media")), __jsx("div", {
    className: "p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 41
    }
  }, __jsx("p", {
    className: "text-sm font-normal leading-5 text-center text-white font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
      lineNumber: 88,
      columnNumber: 33
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "flex justify-center mt-8 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 41
    }
  }, __jsx("img", {
    className: "w-20 h-16",
    src: email,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 45
    }
  })), __jsx("div", {
    className: "mb-2 mt-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 41
    }
  }, __jsx("h3", {
    className: "text-3xl not-italic font-bold leading-9 text-center text-white font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 45
    }
  }, "Email")), __jsx("div", {
    className: "p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 41
    }
  }, __jsx("p", {
    className: "text-sm font-normal leading-5 text-center text-white font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 45
    }
  }, "You can get a code of the personalized image created and it use it on your preferred email marketing tool "))))))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, CreatePersonalizedImageModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "relative w-auto max-w-3xl mx-auto my-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "flex items-start justify-between p-5 rounded-t border-blueGray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 45
    }
  }, __jsx("h3", {
    className: "text-3xl font-bold leading-9 font-inter text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 49
    }
  }, "Create New Personalized Email"), __jsx("button", {
    className: "float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-20 focus:outline-none",
    onClick: () => setCreatePersonalizedImageModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 49
    }
  }, __jsx("span", {
    className: "block w-6 h-6 text-2xl text-black bg-white outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 53
    }
  }, "\xD7"))), __jsx("div", {
    className: "relative flex-auto p-6 mb-6 text-lg font-bold text-createEmail font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 45
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 49
    }
  }, " Create For Email"), __jsx("div", {
    className: "flex justify-between gap-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "h-40 border-2 border-transparent shadow-md w-96 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 53
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 57
    }
  }, __jsx("div", {
    className: "flex p-10 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 61
    }
  }, __jsx("img", {
    src: header,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 65
    }
  }), __jsx("div", {
    className: "mt-2 ml-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 65
    }
  }, __jsx("div", {
    className: "font-bold text-left text-createEmail font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 69
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 73
    }
  }, "HEADER")), __jsx("div", {
    className: "text-sm text-createEmail2 font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 69
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 73
    }
  }, "Dimensions:1920x240")))))), __jsx("div", {
    className: "h-40 border-2 border-transparent shadow-md w-72 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 53
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 57
    }
  }, __jsx("div", {
    className: "flex p-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 61
    }
  }, __jsx("img", {
    src: body,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 65
    }
  }), __jsx("div", {
    className: "mt-2 ml-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 65
    }
  }, __jsx("div", {
    className: "font-bold text-left text-createEmail font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 69
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 73
    }
  }, "BODY")), __jsx("div", {
    className: "text-sm text-createEmail2 font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 69
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 73
    }
  }, "Dimensions:1080x1080"))))))), __jsx("div", {
    className: "mt-6 mb-6 text-lg font-bold text-createEmail font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 49
    }
  }, "Create For Social Media"), __jsx("div", {
    className: "flex justify-between gap-4 mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 49
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "h-40 border-2 border-transparent shadow-md w-96 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 57
    }
  }, __jsx("div", {
    className: "flex p-10 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 61
    }
  }, __jsx("img", {
    src: featureimage,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 65
    }
  }), __jsx("div", {
    className: "mt-2 ml-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 65
    }
  }, __jsx("div", {
    className: "font-bold text-left text-createEmail font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 69
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 73
    }
  }, "Feature IMAGE")), __jsx("div", {
    className: "text-sm text-createEmail2 font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 69
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 73
    }
  }, "Dimensions:1080x1080"))))))))))), __jsx("div", {
    className: "fixed inset-0 z-0 bg-black opacity-25 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 33
    }
  })) : null), __jsx("div", {
    style: {
      display: showModal ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 21
    }
  }, __jsx(_SelectSocialMediaTemplateModal_SelectSocialMediaTemplateModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    closeSocialMediaModal: () => {
      setShowModal(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "fixed inset-0 z-40 bg-black opacity-25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 17
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (PersonalizedImageModal);

/***/ })

};
//# sourceMappingURL=1.52922a32c8098efe09ee.hot-update.js.map