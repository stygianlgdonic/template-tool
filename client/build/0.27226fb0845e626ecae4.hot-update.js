exports.id = 0;
exports.modules = {

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/NewImageModal/NewImageModal.tsx":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/NewImageModal/NewImageModal.tsx ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\tailwindComponents\\CardHeader\\components\\NewImageModal\\NewImageModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const NewImageModal = ({
  closeModal
}) => {
  const myRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleClickOutside = e => {
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
    className: "absolute z-50 flex items-center justify-center w-screen h-screen overflow-x-hidden overflow-y-auto outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("div", {
    ref: myRef,
    className: "relative w-auto max-w-3xl mx-auto my-6",
    style: {
      height: "90vh"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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
    className: "flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
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
      lineNumber: 37,
      columnNumber: 33
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
      lineNumber: 44,
      columnNumber: 37
    }
  }))), __jsx("p", {
    className: "ml-3 text-xs not-italic font-medium leading-5 font-inter text-grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, "Select Images"), __jsx("button", {
    className: "float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none",
    onClick: closeModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }, "\xD7"))), __jsx("div", {
    className: "relative flex-auto p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 29
    }
  }, __jsx("h2", {
    className: "text-3xl not-italic font-bold leading-9 font-inter text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 33
    }
  }, "Upload New Image"))), __jsx("div", {
    style: {
      width: "699px"
    },
    className: "mt-3 mb-6 ml-3 mr-3 border-2 border-dashed rounded-md h-72 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "flex justify-center mt-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 33
    }
  }, __jsx("svg", {
    width: "43",
    height: "43",
    viewBox: "0 0 47 47",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 37
    }
  }, __jsx("path", {
    d: "M13.9444 35.4444C7.34771 35.4444 2 30.0967 2 23.5C2 17.6509 6.20425 12.7837 11.7557 11.7557C12.7837 6.20425 17.6509 2 23.5 2C29.3491 2 34.2163 6.20425 35.2443 11.7557C40.7958 12.7837 45 17.6509 45 23.5C45 30.0967 39.6523 35.4444 33.0556 35.4444M16.3333 23.5L23.5 16.3333M23.5 16.3333L30.6667 23.5M23.5 16.3333V45",
    stroke: "#4F46E5",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 41
    }
  })))), __jsx("div", {
    className: "mt-3 mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "text-base not-italic font-semibold text-center font-inter text-lightGray ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 33
    }
  }, "Drop Your images here")), __jsx("div", {
    className: "mt-1 mb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "text-sm not-italic font-medium leading-6 text-center font-inter text-gray95 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 33
    }
  }, "Formats supported JPG,PNG or BITMAP")), __jsx("div", {
    className: "flex justify-center mt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 29
    }
  }, __jsx("div", {
    style: {
      height: "1px",
      border: "1px",
      width: "168px"
    },
    className: "mt-2 mr-1 border-solid bg-alto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 33
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "text-sm not-italic font-medium leading-5 font-inter text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 37
    }
  }, "OR")), __jsx("div", {
    style: {
      height: "1px",
      border: "1px",
      width: "168px"
    },
    className: "mt-2 ml-1 border-solid bg-alto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "flex justify-center mt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 29
    }
  }, __jsx("button", {
    className: "h-12 text-white rounded-md bg-indigo600 w-60",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 33
    }
  }, "Browse from Desktop")))))), __jsx("div", {
    className: "fixed inset-0 z-40 bg-transparent opacity-25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (NewImageModal);

/***/ })

};
//# sourceMappingURL=0.27226fb0845e626ecae4.hot-update.js.map