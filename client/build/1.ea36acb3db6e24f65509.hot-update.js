exports.id = 1;
exports.modules = {

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../contexts/DesignTool/DesignToolContext */ "./src/contexts/DesignTool/DesignToolContext.tsx");
/* harmony import */ var _MockData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MockData */ "./src/components/RightSidebar/components/PersonalizedCardSizeModal/MockData.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\PersonalizedCardSizeModal\\PersonalizedCardSizeModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const featureimage = __webpack_require__(/*! ../../../../assets/images/featureimage.png */ "./src/assets/images/featureimage.png");



const SelectSocialMediaTemplateModal = ({
  closeModal,
  displayModalChange
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
  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useNavigate"])();
  const {
    cardData,
    setCardData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_2__["DesignToolContext"]); // TODO - use this method for creating new card with selected dimensions

  const createNewCard = cardDimensions => {
    setCardData(prev => {
      prev.dimensions = _objectSpread({}, cardDimensions);
      prev.labels = [];
      prev.elements = [_objectSpread(_objectSpread({}, _contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_2__["INITIAL_STATE"].elements[0]), {}, {
        width: cardDimensions.width,
        height: cardDimensions.height
      })];
    }, false);
    navigate("/createcard");
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative max-w-3xl mx-auto my-6",
    style: {
      width: "765px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: " flex justify-between mt-2 ml-2  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  }, __jsx("button", {
    onClick: () => displayModalChange("SocialMedia"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
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
      lineNumber: 55,
      columnNumber: 37
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
      lineNumber: 62,
      columnNumber: 41
    }
  })))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }, __jsx("button", {
    className: " text-base font-medium float-right mr-3  ml-auto  leading-none text-black border-0 outline-none  focus:outline-none",
    onClick: closeModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 33
    }
  }, "x"))), __jsx("div", {
    className: "flex items-start justify-between p-5 rounded-t ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "text-3xl font-bold leading-9 font-inter text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }, "Create New Personalized Email")), __jsx("div", {
    className: "relative flex-auto p-6 mb-6 text-lg font-bold text-createEmail font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "mb-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 29
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 33
    }
  }, " Create For Email")), __jsx("div", {
    className: "grid grid-cols-2 gap-x-12 gap-y-6  pl-2  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 29
    }
  }, _MockData__WEBPACK_IMPORTED_MODULE_3__["CardType"].map((item, index) => __jsx("div", {
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
      lineNumber: 98,
      columnNumber: 65
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
      lineNumber: 99,
      columnNumber: 37
    }
  }, "Create For Social Media"), __jsx("button", {
    onClick: () => createNewCard({
      width: item.dimension.width * item.scaleFactor,
      height: item.dimension.height * item.scaleFactor
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "flex ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: featureimage,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: "mt-2 pl-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "font-bold text-left text-createEmail font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 49
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 53
    }
  }, item.name)), __jsx("div", {
    className: "text-sm text-createEmail2 font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 49
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 53
    }
  }, "Dimensions:", item.dimension.width, "  ", item.dimension.height)))))))))))), __jsx("div", {
    className: "fixed inset-0 z-0 bg-black opacity-25 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectSocialMediaTemplateModal);

/***/ })

};
//# sourceMappingURL=1.ea36acb3db6e24f65509.hot-update.js.map