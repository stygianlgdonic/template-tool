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
/* harmony import */ var _PersonalizedCardSizeModal_PersonalizedCardSizeModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../PersonalizedCardSizeModal/PersonalizedCardSizeModal */ "./src/components/RightSidebar/components/PersonalizedCardSizeModal/PersonalizedCardSizeModal.tsx");
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
  const svg = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_5__["default"])(bio4);
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const {
    0: openHeaderModal,
    1: setopenHeaderModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: OpenpersonalizedModal,
    1: setOpenpersonalizedModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
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
        lineNumber: 47,
        columnNumber: 17
      }
    }, "Getting all templates ..."));
  }

  if (!!error) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, error.message));
  }

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-col justify-center w-full mx-auto mt-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-col px-2 py-4 mb-6 border-2 border-opacity-25 border-dashed rounded-lg border-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-row justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: svg,
    className: "mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }), __jsx("h1", {
    className: "text-base text-indigo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, bio1)), __jsx("div", {
    className: "flex justify-center mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "flex justify-center leading-4 text-center text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }, bio2)), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/createcard",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }), __jsx("button", {
    onClick: () => {
      setOpenpersonalizedModal(true);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex flex-row justify-center p-2 mt-4 border-0 rounded-lg bg-indigo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
      lineNumber: 78,
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
      lineNumber: 86,
      columnNumber: 33
    }
  })), __jsx("p", {
    className: "text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  }, bio3))))), __jsx("div", {
    style: {
      display: OpenpersonalizedModal ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 13
    }
  }, __jsx(_PersonalizedImageModal_PersonalizedImageModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    closePersonalizedModal: () => {
      setOpenpersonalizedModal(false);
    },
    handleOpenSocialMediaModal: () => {
      // setopenHeaderModal(true)
      setOpenpersonalizedModal(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      display: openHeaderModal ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 13
    }
  }, __jsx(_PersonalizedCardSizeModal_PersonalizedCardSizeModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    closeModal: () => {
      setopenHeaderModal(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateEmail);

/***/ })

};
//# sourceMappingURL=1.37b87563d5fbc5dd0c0f.hot-update.js.map