exports.id = 0;
exports.modules = {

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Shapes/Shapes.tsx":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Shapes/Shapes.tsx ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../Hooks/CardElementsFunctions */ "./src/Hooks/CardElementsFunctions/index.tsx");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../../utils/generatesvgUrl */ "./src/utils/generatesvgUrl.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\ElementSelector\\components\\Shapes\\Shapes.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Shapes = ({
  shapesArray
}) => {
  const {
    handleAddNewRect,
    handleAddNewCircle,
    handleAddNewTrianlge,
    handleAddNewPolygon
  } = Object(_Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_1__["default"])();

  const handleAddElement = elementName => {
    elementName === "" && handleAddNewRect(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["defaultCircle"]);
    elementName === "" && handleAddNewCircle(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["defaultPolygon"]);
    elementName === "" && handleAddNewTrianlge(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["defaultRect"]);
    elementName === "" && handleAddNewPolygon(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["defaultTriangle"]);
  };

  return __jsx("div", {
    className: "h-full flex w-full  flex-col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-row justify-between items-center w-full mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-lg text-gray94 font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "Shapes"), __jsx("button", {
    className: "text-md text-gray95 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, "See all")), __jsx("div", {
    className: "flex flex-row justify-between mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, shapesArray.map((item, index) => __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: " focus:ring focus:outline-none",
    onClick: () => handleAddElement(item.name),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, __jsx("img", {
    alt: "shape",
    src: Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_3__["default"])(item.element),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Shapes);

/***/ })

};
//# sourceMappingURL=0.8852d67f588b4137eb48.hot-update.js.map