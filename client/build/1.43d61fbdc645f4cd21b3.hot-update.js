exports.id = 1;
exports.modules = {

/***/ "./src/components/RightSidebar/components/CreateEmail/CreateEmail.tsx":
/*!****************************************************************************!*\
  !*** ./src/components/RightSidebar/components/CreateEmail/CreateEmail.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PersonalizedImageModal_PersonalizedImageModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PersonalizedImageModal/PersonalizedImageModal */ "./src/components/RightSidebar/components/PersonalizedImageModal/PersonalizedImageModal.tsx");
/* harmony import */ var _utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/generatesvgUrl */ "./src/utils/generatesvgUrl.ts");
/* harmony import */ var _services_templateService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/templateService */ "./src/services/templateService.ts");
/* harmony import */ var _SelectSocialMediaTemplateModal_SelectSocialMediaTemplateModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SelectSocialMediaTemplateModal/SelectSocialMediaTemplateModal */ "./src/components/RightSidebar/components/SelectSocialMediaTemplateModal/SelectSocialMediaTemplateModal.tsx");
/* harmony import */ var _PersonalizedCardSizeModal_PersonalizedCardSizeModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../PersonalizedCardSizeModal/PersonalizedCardSizeModal */ "./src/components/RightSidebar/components/PersonalizedCardSizeModal/PersonalizedCardSizeModal.tsx");
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\CreateEmail\\CreateEmail.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








 // const image1 = require("./../../../../assets/images/01.png");
// const image2 = require("./../../../../assets/images/02.png");
// const image3 = require("./../../../../assets/images/03.png");
// const image4 = require("./../../../../assets/images/04.png");
// const image5 = require("../../../../assets/images/card5.png")
// const socialmedia = require("../../../../assets/images/socialmedia.png")
// const email = require("../../../../assets/images/email.png")
// const plus = require("../../../../assets/images/plus.png")

const CreateEmail = ({
  bio1,
  bio2,
  bio3,
  bio4
}) => {
  const svg1 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_5__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_updownicon"]);
  const {
    0: DisplayModals,
    1: setDisplayModals
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const svg = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_5__["default"])(bio4);
  const {
    data,
    error,
    isLoading
  } = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useQuery"])("templates", _services_templateService__WEBPACK_IMPORTED_MODULE_6__["template_service"].getAllTemplates);
  console.log({
    data
  });
  console.log({
    error
  });

  if (isLoading) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, "Getting all templates ..."));
  }

  if (!!error) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, error.message));
  }

  const handleclosemodal = () => {
    setDisplayModals("");
  };

  const HandleChangeDisplayModal = value => {
    setDisplayModals(value);
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-col justify-center w-full mx-auto mt-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      width: "319px",
      height: "190px"
    },
    className: "flex flex-col px-2 py-4 mb-6 border-2 border-opacity-25 border-dashed rounded-lg border-gray95 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-row justify-center mt-5  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: svg,
    className: "mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }), __jsx("h1", {
    className: "text-base text-indigo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, bio1)), __jsx("div", {
    className: "flex justify-center mt-2 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "flex justify-center leading-4 text-center text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, bio2)), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/createcard",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }), __jsx("button", {
    onClick: () => HandleChangeDisplayModal("PersonalizedImage"),
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      width: "277px",
      height: "38px"
    },
    className: "flex  justify-center p-2 mt-4 border-0 rounded-lg bg-indigo ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }, __jsx("svg", {
    className: "mt-1 mr-4",
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }, __jsx("path", {
    d: "M7 2V12M12 7L2 7",
    stroke: "#EEF2FF",
    "stroke-width": "4",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 33
    }
  })), __jsx("p", {
    className: "text-white font-inter text-sm leading-5 font-medium not-italic ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 29
    }
  }, bio3))))), __jsx("div", {
    style: {
      display: DisplayModals === "PersonalizedImage" ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 13
    }
  }, __jsx(_PersonalizedImageModal_PersonalizedImageModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    displayModalChange: HandleChangeDisplayModal,
    closeModal: handleclosemodal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      display: DisplayModals === "SocialMedia" ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 13
    }
  }, __jsx(_SelectSocialMediaTemplateModal_SelectSocialMediaTemplateModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    closeModal: handleclosemodal,
    displayModalChange: HandleChangeDisplayModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      display: DisplayModals === "CardSize" ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 13
    }
  }, __jsx(_PersonalizedCardSizeModal_PersonalizedCardSizeModal__WEBPACK_IMPORTED_MODULE_8__["default"] //    displayModalChange={HandleChangeDisplayModal}
  , {
    closeModal: handleclosemodal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateEmail);

/***/ })

};
//# sourceMappingURL=1.43d61fbdc645f4cd21b3.hot-update.js.map