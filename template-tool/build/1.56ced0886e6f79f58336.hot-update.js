exports.id = 1;
exports.modules = {

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
/* harmony import */ var _contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../contexts/TemplateContext */ "./src/contexts/TemplateContext.tsx");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _Elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Elements */ "./src/components/Home/components/TemplateList/Elements/index.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _routes_route_names__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../routes/route_names */ "./src/routes/route_names.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\components\\TemplateList\\TemplatePreview\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const TemplatePreview = ({
  templateObj
}) => {
  var _templateObj$variatio, _templateObj$variatio2;

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();
  const {
    0: templateData,
    1: setTemplateData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_2__["TemplateContext"]);

  const handleEditTemplate = () => {
    setTemplateData(templateObj, false);
    history.push(_routes_route_names__WEBPACK_IMPORTED_MODULE_6__["ROUTE_NAMES"].design_tool);
  };

  return __jsx("button", {
    onClick: handleEditTemplate,
    className: "border-2  border-dashed rounded-md border-bordercolor justify-center items-center flex flex-col py-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Stage"], {
    width: _utils_defaults__WEBPACK_IMPORTED_MODULE_3__["stageDimensions"].width * 0.3,
    height: _utils_defaults__WEBPACK_IMPORTED_MODULE_3__["stageDimensions"].height * 0.3,
    scaleX: 0.3,
    scaleY: 0.3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Layer"], {
    listening: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, templateObj === null || templateObj === void 0 ? void 0 : (_templateObj$variatio = templateObj.variations[0]) === null || _templateObj$variatio === void 0 ? void 0 : (_templateObj$variatio2 = _templateObj$variatio.elements) === null || _templateObj$variatio2 === void 0 ? void 0 : _templateObj$variatio2.map((item, index) => __jsx(_Elements__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: index,
    konvaItem: item,
    index: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TemplatePreview);

/***/ })

};
//# sourceMappingURL=1.56ced0886e6f79f58336.hot-update.js.map