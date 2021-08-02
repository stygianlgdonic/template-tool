exports.id = 1;
exports.modules = {

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/BackgroundSelector.tsx":
/*!**************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/BackgroundSelector.tsx ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ElementSelector_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ElementSelector/components/SearchBar/SearchBar */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar.tsx");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\BackgroundSelector\\BackgroundSelector.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const BackgroundSelector = () => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  return __jsx("div", {
    className: " flex   flex-col justify-center w-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mt-6 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx(_ElementSelector_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "flex flex-col p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: " mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "font-bold text-xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, "Select background color")), __jsx("div", {
    className: " mt-4 flex flex-row items-center gap-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M11.7059 4.05883H4.05882C2.36948 4.05883 1 5.42831 1 7.11765V23.9412C1 25.6305 2.36948 27 4.05882 27H20.8824C22.5717 27 23.9412 25.6305 23.9412 23.9412V16.2941M21.7783 1.89591C22.9728 0.701364 24.9095 0.701364 26.1041 1.89591C27.2986 3.09045 27.2986 5.02719 26.1041 6.22174L12.9729 19.3529H8.64706L8.64706 15.0271L21.7783 1.89591Z",
    stroke: "#4B5563",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 29
    }
  }))), __jsx("button", {
    type: "button",
    onClick: () => setShowModal(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, __jsx("rect", {
    x: "0.5",
    y: "0.5",
    width: "39",
    height: "39",
    rx: "5.5",
    fill: "#4F46E5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  }), __jsx("rect", {
    x: "0.5",
    y: "0.5",
    width: "39",
    height: "39",
    rx: "5.5",
    stroke: "#EEF2FF",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }
  }))), showModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "relative w-auto my-6 mx-auto max-w-3xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 41
    }
  }, __jsx("h3", {
    className: "text-3xl font-semibold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 45
    }
  }, "Fill type"), __jsx("button", {
    className: "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
    onClick: () => setShowModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 45
    }
  }, __jsx("span", {
    className: "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 49
    }
  }, "\xD7"))), __jsx("div", {
    className: "relative p-6 flex-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 41
    }
  }, __jsx("p", {
    className: "my-4 text-blueGray-500 text-lg leading-relaxed",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 45
    }
  }, "I always felt like I could do anything. That\u2019s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can\u2019t do anything, you won\u2019t do anything. I was taught I could do everything.")), __jsx("div", {
    className: "flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 41
    }
  }, __jsx("button", {
    className: "text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
    type: "button",
    onClick: () => setShowModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 45
    }
  }, "Close"), __jsx("button", {
    className: "bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
    type: "button",
    onClick: () => setShowModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 45
    }
  }, "Save Changes"))))), __jsx("div", {
    className: "opacity-25 fixed inset-0 z-40 bg-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 29
    }
  })) : null, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, __jsx("rect", {
    width: "40",
    height: "40",
    rx: "6",
    fill: "#5DEFC3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 29
    }
  }))), __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 25
    }
  }, __jsx("rect", {
    width: "40",
    height: "40",
    rx: "6",
    fill: "#EEA146",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 29
    }
  }))), __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }, __jsx("rect", {
    width: "40",
    height: "40",
    rx: "6",
    fill: "#EE4646",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (BackgroundSelector);

/***/ })

};
//# sourceMappingURL=1.a491354aa8038b626300.hot-update.js.map