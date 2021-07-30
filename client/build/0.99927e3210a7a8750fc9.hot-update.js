exports.id = 0;
exports.modules = {

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Preview/components/Drawer/Drawer.tsx":
/*!************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Preview/components/Drawer/Drawer.tsx ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Preview\\components\\Drawer\\Drawer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const image = __webpack_require__(/*! ./../../../../../../../../assets/images/preview.png */ "./src/assets/images/preview.png");

function Drawer({
  isOpen,
  setIsOpen
}) {
  return __jsx("main", {
    className: " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " + (isOpen ? " transition-opacity opacity-100 duration-500 translate-x-0 translate-y-16  " : " transition-all delay-500 opacity-0 translate-x-full "),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " + (isOpen ? " translate-x-0  " : " translate-x-full "),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("article", {
    className: "relative w-screen max-w-full pb-10 flex flex-col h-full overflow-y-scroll   ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "h-full flex  ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "pl-4  h-full flex items-center ",
    onClick: () => {
      setIsOpen(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, __jsx("svg", {
    className: "w-2",
    width: "14",
    height: "22",
    viewBox: "0 0 14 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 29
    }
  }, __jsx("path", {
    d: "M2.24023 2L11.9842 11L2.24023 20",
    stroke: "#374151",
    "stroke-width": "4",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: "flex flex-col justify-start mt-6 w-full ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "justify-center flex ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: image,
    className: "border-bordercolor   shadow-lg h-64 w-64",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "px-6 mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex flex-col justify-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "text-sm text-gray94",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 37
    }
  }, "First_name"), __jsx("input", {
    className: "border-2 border-bordercolor rounded-md text-sm text-gray9f h-9 outline-none px-4",
    type: "text",
    placeholder: "Add first name to test",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: "flex flex-col justify-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 33
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 37
    }
  }, "First_name"), __jsx("input", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: "flex flex-col justify-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 33
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 37
    }
  }, "First_name"), __jsx("input", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: "flex flex-col justify-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 33
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 37
    }
  }, "First_name"), __jsx("input", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: "flex flex-col justify-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 33
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 37
    }
  }, "First_name"), __jsx("input", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 37
    }
  }))))))), __jsx("section", {
    className: " w-screen h-full cursor-pointer ",
    onClick: () => {
      setIsOpen(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }));
}

/***/ })

};
//# sourceMappingURL=0.99927e3210a7a8750fc9.hot-update.js.map