exports.id = 0;
exports.modules = {

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/LogoSelector/components/AddLogoImageModal/AddLogoImageModal.tsx":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/LogoSelector/components/AddLogoImageModal/AddLogoImageModal.tsx ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\LogoSelector\\components\\AddLogoImageModal\\AddLogoImageModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const AddLogoImageModal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(({
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    ref: myRef,
    className: "fixed z-50 flex items-center justify-center m-auto overflow-x-hidden outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative flex-1 w-auto max-w-3xl mx-auto h-96 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "relative flex flex-col w-full bg-white border-2 rounded-lg shadow-lg border-bordercolor focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex items-start justify-between p-4 rounded-t border-gray300",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "flex gap-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("div", {
    onClick: () => setopenDropDown(!!openDropDown ? false : true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 19
    }
  }, __jsx("label", {
    id: "listbox-label",
    className: "block ml-2 text-sm font-medium text-createEmail2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, "Fallback"), __jsx("div", {
    className: "relative mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx("button", {
    type: "button",
    className: "relative w-32 px-2 py-1 pl-5 pr-5 text-left bg-white border rounded-md shadow-sm cursor-default border-gray300 h-7 focus:outline-none focus:ring-1 focus:ring-gray300 focus:border-gray300 sm:text-sm",
    "aria-haspopup": "listbox",
    "aria-expanded": "true",
    "aria-labelledby": "listbox-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "block truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, "Image.png"), __jsx("span", {
    className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, __jsx("svg", {
    className: "w-5 h-5 text-darkgray",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 27
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    "clip-rule": "evenodd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 29
    }
  })))), __jsx("ul", {
    className: "absolute z-50 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
    role: "listbox",
    "aria-labelledby": "listbox-label",
    "aria-activedescendant": "listbox-option-3",
    style: {
      display: openDropDown ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 23
    }
  }, __jsx("li", {
    className: "relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9",
    id: "listbox-option-0",
    role: "option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 27
    }
  }, "image.png"), __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 27
    }
  }, "image.png"))))), __jsx("div", {
    onClick: () => setopenMergeDropdown(!!openMergeDropdown ? false : true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 19
    }
  }, __jsx("label", {
    id: "listbox-label",
    className: "block text-sm font-medium text-createEmail2 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 21
    }
  }, "MergeTag"), __jsx("div", {
    className: "mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 21
    }
  }, __jsx("button", {
    type: "button",
    className: "relative px-2 py-1 pl-1 pr-8 text-left bg-white border rounded-md shadow-sm cursor-default border-gray300 w-36 h-7 focus:outline-none focus:ring-1 focus:ring-gray300 focus:border-gray300 sm:text-sm",
    "aria-haspopup": "listbox",
    "aria-expanded": "true",
    "aria-labelledby": "listbox-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "block text-center truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 25
    }
  }, "Logo_Recp"), __jsx("span", {
    className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 25
    }
  }, __jsx("svg", {
    className: "w-5 h-5 text-darkgray",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 27
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    "clip-rule": "evenodd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 29
    }
  })))), __jsx("ul", {
    className: "absolute py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg z-999 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
    role: "listbox",
    "aria-labelledby": "listbox-label",
    "aria-activedescendant": "listbox-option-3",
    style: {
      display: openMergeDropdown ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 23
    }
  }, __jsx("li", {
    className: "py-2 pl-3 text-gray-900 cursor-default select-none pr-9",
    id: "listbox-option-0",
    role: "option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 27
    }
  }, "Logo.png"))))), __jsx("div", {
    className: "mt-2 ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "relative flex items-center justify-end w-full mx-auto mt-6 mb-1 ",
    onClick: () => setShowToolTip(!ShowToolTip),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => setShowToolTip(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 23
    }
  }, __jsx("svg", {
    className: "mr-8",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 25
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55229 6.44772 9 7 9V12C7 12.5523 7.44772 13 8 13H9C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11V8C9 7.44772 8.55228 7 8 7H7Z",
    fill: "#4338CA",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 27
    }
  }))), ShowToolTip ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "absolute bottom-0 flex flex-col mb-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 27
    }
  }, __jsx("span", {
    className: "relative z-auto p-3 text-xs leading-none text-white whitespace-no-wrap rounded-md shadow-lg ml-60 w-52 bg-indigo500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 29
    }
  }, "Cardclan will fetch logo of your receipent from his ", __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 35
    }
  }, "website URL"), __jsx("div", {
    className: "mt-5 mb-2 text-sm font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 31
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 33
    }
  }, "Got it"))), __jsx("div", {
    className: "z-50 flex justify-end w-3 h-3 -mt-2 transform rotate-45 bg-indigo500",
    style: {
      marginLeft: "410px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 29
    }
  }))) : null))))))), __jsx("div", {
    className: "fixed inset-0 z-40 bg-transparent opacity-25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 9
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (AddLogoImageModal);

/***/ })

};
//# sourceMappingURL=0.6454915b69eeea90877a.hot-update.js.map