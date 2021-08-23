exports.id = 1;
exports.modules = {

/***/ "./src/components/RightSidebar/components/CreateEmail/TemplatePreview/index.tsx":
/*!**************************************************************************************!*\
  !*** ./src/components/RightSidebar/components/CreateEmail/TemplatePreview/index.tsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Elements */ "./src/components/RightSidebar/components/CreateEmail/Elements/index.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\CreateEmail\\TemplatePreview\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const TemplatePreview = ({
  templateObj,
  width,
  height
}) => {
  var _templateObj$dimensio, _templateObj$dimensio2, _templateObj$variatio, _templateObj$variatio2;

  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useNavigate"])();

  const handleSelectTemplate = () => {
    console.log({
      templateObj
    }); // setTemplateData(templateObj, false)
    // navigate(`/createcard`)
  };

  const StageScale = templateObj !== null && templateObj !== void 0 && (_templateObj$dimensio = templateObj.dimensions) !== null && _templateObj$dimensio !== void 0 && _templateObj$dimensio.height ? height / (templateObj === null || templateObj === void 0 ? void 0 : (_templateObj$dimensio2 = templateObj.dimensions) === null || _templateObj$dimensio2 === void 0 ? void 0 : _templateObj$dimensio2.height) : 0.2;
  return __jsx("button", {
    onClick: handleSelectTemplate,
    className: "border-2 rounded-md justify-center items-center flex flex-col ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Stage"], _extends({}, templateObj.dimensions, {
    scaleX: StageScale,
    scaleY: StageScale,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }), __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Layer"], {
    listening: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, templateObj === null || templateObj === void 0 ? void 0 : (_templateObj$variatio = templateObj.variations[0]) === null || _templateObj$variatio === void 0 ? void 0 : (_templateObj$variatio2 = _templateObj$variatio.elements) === null || _templateObj$variatio2 === void 0 ? void 0 : _templateObj$variatio2.map((item, index) => __jsx(_Elements__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: index,
    konvaItem: item,
    index: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TemplatePreview);

/***/ })

};
//# sourceMappingURL=1.604d3eca9283c38639fb.hot-update.js.map