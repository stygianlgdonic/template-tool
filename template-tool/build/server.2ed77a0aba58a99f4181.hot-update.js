exports.id = "server";
exports.modules = {

/***/ "./src/components/Home/components/TemplateList/Elements/index.tsx":
/*!************************************************************************!*\
  !*** ./src/components/Home/components/TemplateList/Elements/index.tsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\components\\TemplateList\\Elements\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const Elements = ({
  konvaItem,
  index
}) => {
  console.log({
    konvaItem
  });
  if (!konvaItem) return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, (konvaItem === null || konvaItem === void 0 ? void 0 : konvaItem.type) === "rectangle" && __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Rect"], _extends({
    key: index
  }, konvaItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  })), (konvaItem === null || konvaItem === void 0 ? void 0 : konvaItem.type) === "circle" && __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Circle"], _extends({
    key: index
  }, konvaItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  })), (konvaItem === null || konvaItem === void 0 ? void 0 : konvaItem.type) === "line" && __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Line"], _extends({
    key: index
  }, konvaItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  })), (konvaItem === null || konvaItem === void 0 ? void 0 : konvaItem.type) === "polygon" && __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["RegularPolygon"], _extends({
    key: index
  }, konvaItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  })), (konvaItem === null || konvaItem === void 0 ? void 0 : konvaItem.type) === "svg" && __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Image"], _extends({
    key: index
  }, konvaItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  })), (konvaItem === null || konvaItem === void 0 ? void 0 : konvaItem.type) === "image" && __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Image"], _extends({
    key: index
  }, konvaItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  })), (konvaItem === null || konvaItem === void 0 ? void 0 : konvaItem.type) === "text" && __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Text"], _extends({
    key: index
  }, konvaItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Elements);

/***/ }),

/***/ "./src/components/Home/components/TemplateList/TemplatePreview/index.tsx":
/*!*******************************************************************************!*\
  !*** ./src/components/Home/components/TemplateList/TemplatePreview/index.tsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _Elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Elements */ "./src/components/Home/components/TemplateList/Elements/index.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\components\\TemplateList\\TemplatePreview\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const TemplatePreview = ({
  templateData,
  index
}) => {
  var _templateData$variati, _templateData$variati2;

  const {
    0: selectedVariation,
    1: setSelectedVariation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  return __jsx("button", {
    className: "border-2  border-dashed rounded-md border-bordercolor justify-center items-center flex flex-col py-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Stage"], {
    width: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["stageDimensions"].width * 0.3,
    height: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["stageDimensions"].height * 0.3,
    scaleX: 0.3,
    scaleY: 0.3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Layer"], {
    listening: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, templateData === null || templateData === void 0 ? void 0 : (_templateData$variati = templateData.variations[selectedVariation]) === null || _templateData$variati === void 0 ? void 0 : (_templateData$variati2 = _templateData$variati.elements) === null || _templateData$variati2 === void 0 ? void 0 : _templateData$variati2.map((item, index) => __jsx(_Elements__WEBPACK_IMPORTED_MODULE_3__["default"], {
    konvaItem: item,
    index: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TemplatePreview);

/***/ })

};
//# sourceMappingURL=server.2ed77a0aba58a99f4181.hot-update.js.map