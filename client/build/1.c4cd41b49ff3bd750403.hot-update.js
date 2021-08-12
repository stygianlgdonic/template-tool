exports.id = 1;
exports.modules = {

/***/ "./src/components/RightSidebar/components/PersonalizedCardSizeModal/MockData.ts":
/*!**************************************************************************************!*\
  !*** ./src/components/RightSidebar/components/PersonalizedCardSizeModal/MockData.ts ***!
  \**************************************************************************************/
/*! exports provided: CardType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardType", function() { return CardType; });
const CardType = [{
  name: "Header",
  dimension: {
    width: 1920,
    height: 240
  }
}, {
  name: "Body",
  dimension: {
    width: 1080,
    height: 1080
  }
}, {
  name: "Footer",
  dimension: {
    width: 1080,
    height: 1080
  }
}];

/***/ }),

/***/ "./src/components/RightSidebar/components/PersonalizedCardSizeModal/PersonalizedCardSizeModal.tsx":
/*!********************************************************************************************************!*\
  !*** ./src/components/RightSidebar/components/PersonalizedCardSizeModal/PersonalizedCardSizeModal.tsx ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MockData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MockData */ "./src/components/RightSidebar/components/PersonalizedCardSizeModal/MockData.ts");
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\PersonalizedCardSizeModal\\PersonalizedCardSizeModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import "../../../../../SubNavBar/components/ElementSelector/components/Stickers/styles.css";

// const header = require("../../../../assets/images/header.png")
// const body = require("../../../../assets/images/body.png")
// const featureimage = require("../../../../assets/images/featureimage.png")


const SelectSocialMediaTemplateModal = ({
  closeModal
}) => {
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
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("div", {
    // ref={myRef}
    className: "relative w-auto max-w-3xl mx-auto my-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex items-start justify-between p-5 rounded-t border-blueGray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "text-3xl font-bold leading-9 font-inter text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 29
    }
  }, "Create New Personalized Email"), __jsx("button", {
    className: "float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-20 focus:outline-none",
    onClick: closeModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "block w-6 h-6 text-2xl text-black bg-white outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 33
    }
  }, "\xD7"))), __jsx("div", {
    className: "relative flex-auto p-6 mb-6 text-lg font-bold text-createEmail font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }, " Create For Email"), __jsx("div", {
    className: "flex justify-between gap-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }, _MockData__WEBPACK_IMPORTED_MODULE_1__["CardType"].map(item => __jsx("div", {
    key: item.name,
    className: "h-40 border-2 border-transparent shadow-md w-96 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 58
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "flex p-10 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "mt-2 ml-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "font-bold text-left text-createEmail font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 49
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 53
    }
  }, "HEADER")), __jsx("div", {
    className: "text-sm text-createEmail2 font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 49
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 53
    }
  }, "Dimensions:", item.dimension.width, "  ", item.dimension.height))))))), __jsx("div", {
    className: "h-40 border-2 border-transparent shadow-md w-72 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 33
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "flex p-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "mt-2 ml-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "font-bold text-left text-createEmail font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 49
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 53
    }
  }, "BODY")), __jsx("div", {
    className: "text-sm text-createEmail2 font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 49
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 53
    }
  }, "Dimensions:1080x1080"))))))), __jsx("div", {
    className: "mt-6 mb-6 text-lg font-bold text-createEmail font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }, "Create For Social Media"), __jsx("div", {
    className: "flex justify-between gap-4 mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "h-40 border-2 border-transparent shadow-md w-96 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "flex p-10 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "mt-2 ml-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "font-bold text-left text-createEmail font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 49
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 53
    }
  }, "Feature IMAGE")), __jsx("div", {
    className: "text-sm text-createEmail2 font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 49
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 53
    }
  }, "Dimensions:1080x1080"))))))))))), __jsx("div", {
    className: "fixed inset-0 z-0 bg-black opacity-25 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectSocialMediaTemplateModal);

/***/ })

};
//# sourceMappingURL=1.c4cd41b49ff3bd750403.hot-update.js.map