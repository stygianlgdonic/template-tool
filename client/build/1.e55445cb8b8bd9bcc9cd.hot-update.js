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
/* harmony import */ var _PersonalizedCardSizeModal_PersonalizedCardSizeModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PersonalizedCardSizeModal/PersonalizedCardSizeModal */ "./src/components/RightSidebar/components/PersonalizedCardSizeModal/PersonalizedCardSizeModal.tsx");
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
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false); // const [PersonalizedCardSizeModal, setPersonalizedCardSizeModal] = useState(false);
  // const [closePersonalizedCardSizeModal, setclosePersonalizedCardSizeModal] = useState(false);

  const {
    0: isOpenNewImageModal,
    1: setisOpenNewImageModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: OpenImageModal,
    1: setOpenImageModal
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
    className: "fixed inset-0 z-50 flex items-center justify-center h-full overflow-x-hidden overflow-y-scroll outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx("div", {
    ref: myRef,
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
      lineNumber: 49,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "top-0 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex items-center mt-4 ml-auto mr-5 text-sm font-semibold leading-none text-black rounded-full outline-none focus:outline-none",
    onClick: () => closeModal(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "top-0 text-2xl outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 41
    }
  }, "\xD7"))), __jsx("div", {
    className: "px-32 mt-3 mb-3 text-3xl not-italic font-bold leading-9 text-center font-inter text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 37
    }
  }, "Where do you want to send your personalized image?"))), __jsx("div", {
    className: "flex justify-center gap-10 mt-8 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
      lineNumber: 66,
      columnNumber: 33
    }
  }, __jsx("button", {
    onClick: () => setOpenImageModal(true) // onClick={() => {
    //     setNewModal(true);// select Template modal
    //     setShowModal(false); //where do you want personalized image modal
    // }}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "flex justify-center mt-8 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 41
    }
  }, __jsx("img", {
    className: "w-32 h-16",
    src: socialmedia,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 45
    }
  })), __jsx("div", {
    className: "mb-2 mt-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 41
    }
  }, __jsx("h3", {
    className: "text-3xl not-italic font-bold leading-9 text-center text-white font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 45
    }
  }, "Social media")), __jsx("div", {
    className: "p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 41
    }
  }, __jsx("p", {
    className: "text-sm font-normal leading-5 text-center text-white font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
      lineNumber: 87,
      columnNumber: 33
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "flex justify-center mt-8 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 41
    }
  }, __jsx("img", {
    className: "w-20 h-16",
    src: email,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 45
    }
  })), __jsx("div", {
    className: "mb-2 mt-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 41
    }
  }, __jsx("h3", {
    className: "text-3xl not-italic font-bold leading-9 text-center text-white font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 45
    }
  }, "Email")), __jsx("div", {
    className: "p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 41
    }
  }, __jsx("p", {
    className: "text-sm font-normal leading-5 text-center text-white font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 45
    }
  }, "You can get a code of the personalized image created and it use it on your preferred email marketing tool "))))))), __jsx("div", {
    style: {
      display: OpenImageModal ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, __jsx(_SelectSocialMediaTemplateModal_SelectSocialMediaTemplateModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    closeImageModal: () => setOpenImageModal(false),
    handleOpenUploadImageModal: () => {
      setisOpenNewImageModal(true);
      setOpenImageModal(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 25
    }
  })), __jsx("div", {
    style: {
      display: isOpenNewImageModal ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 21
    }
  }, __jsx(_PersonalizedCardSizeModal_PersonalizedCardSizeModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    closeModal: () => {
      setisOpenNewImageModal(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "fixed inset-0 z-40 bg-black opacity-25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (PersonalizedImageModal);

/***/ })

};
//# sourceMappingURL=1.e55445cb8b8bd9bcc9cd.hot-update.js.map