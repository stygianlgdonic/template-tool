exports.id = 1;
exports.modules = {

/***/ "./src/components/Home/components/SelectTemplateDimensions/index.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/Home/components/SelectTemplateDimensions/index.tsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../contexts/TemplateContext */ "./src/contexts/TemplateContext.tsx");
/* harmony import */ var _dimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dimensions */ "./src/components/Home/components/SelectTemplateDimensions/dimensions.ts");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes_route_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../routes/route_names */ "./src/routes/route_names.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\components\\SelectTemplateDimensions\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const featureimage = __webpack_require__(/*! ../../../../assets/images/featureimage.png */ "./src/assets/images/featureimage.png");

const SelectTemplateDimensions = ({
  closeModal
}) => {
  const routerHistory = Object(react_router__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  const myRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    setTemplateData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_1__["TemplateContext"]);

  const handleClickOutside = e => {
    var _myRef$current;

    if (!((_myRef$current = myRef.current) !== null && _myRef$current !== void 0 && _myRef$current.contains(e.target))) {
      closeModal();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }); // TODO - use this method for creating new card with selected dimensions

  const createNewTemplate = templateDimensions => {
    // setTemplateData(prev => {
    //     prev.dimensions = { ...templateDimensions }
    //     prev.labels = []
    //     prev.variations[0].elements = [{
    //         ...INITIAL_STATE.variations[0].elements[0],
    //         width: templateDimensions.width,
    //         height: templateDimensions.height
    //     }]
    // }, false)
    routerHistory.push(_routes_route_names__WEBPACK_IMPORTED_MODULE_4__["ROUTE_NAMES"].select_palette);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("div", {
    ref: myRef,
    className: "relative max-w-3xl mx-auto my-6",
    style: {
      width: "765px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: " flex flex-row-reverse mt-2 ml-2  ",
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
  }, __jsx("button", {
    className: " text-base font-medium float-right mr-3  ml-auto  leading-none text-black border-0 outline-none  focus:outline-none",
    onClick: closeModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 33
    }
  }, "x"))), __jsx("div", {
    className: "flex items-start justify-between p-5 rounded-t ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "text-3xl font-bold leading-9 font-inter text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }, "Create New Personalized Email")), __jsx("div", {
    className: "relative flex-auto p-6 mb-6 text-lg font-bold text-createEmail font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "mb-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 29
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 33
    }
  }, " Create For Email")), __jsx("div", {
    className: "grid grid-cols-2 gap-x-12 gap-y-6  pl-2  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 29
    }
  }, _dimensions__WEBPACK_IMPORTED_MODULE_2__["templateDimensions"].map((item, index) => __jsx("div", {
    key: item.name,
    style: {
      display: item.name === "Header" ? "" : "",
      backgroundColor: index === 0 ? "white" : "white",
      height: index === 0 ? "160px" : "160px",
      width: index === 1 ? "300px" : "auto"
    },
    className: "relative h-40 border-2 border-transparent shadow-md gap-4 rounded-md  text-center pt-10 mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 37
    }
  }, __jsx("div", {
    style: {
      display: index === 2 ? "" : "none",
      marginTop: index === 2 ? "20px" : "20px",
      top: -55
    },
    className: "absolute  mt-6 mb-6 text-lg font-bold text-createEmail font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 41
    }
  }, "Create For Social Media"), __jsx("button", {
    onClick: () => createNewTemplate({
      width: item.dimension.width,
      height: item.dimension.height
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "flex ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 45
    }
  }, __jsx("img", {
    src: featureimage,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 49
    }
  }), __jsx("div", {
    className: "mt-2 pl-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "font-bold text-left text-createEmail font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 53
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 57
    }
  }, item.name)), __jsx("div", {
    className: "text-sm text-createEmail2 font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 53
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 57
    }
  }, "Dimensions:", item.dimension.width, "  ", item.dimension.height)))))))))))), __jsx("div", {
    className: "fixed inset-0 z-0 bg-black opacity-25 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectTemplateDimensions);

/***/ })

};
//# sourceMappingURL=1.d6ba1d920831d0209de3.hot-update.js.map