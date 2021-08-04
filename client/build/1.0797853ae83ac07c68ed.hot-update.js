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
/* harmony import */ var _contexts_Templatetool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../contexts/Templatetool */ "./src/contexts/Templatetool.tsx");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\CreateEmail\\TemplatePreview\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const TemplatePreview = ({
  templateObj
}) => {
  // const navigate = useNavigate()
  const {
    0: templateData,
    1: setTemplateData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_Templatetool__WEBPACK_IMPORTED_MODULE_1__["TemplatetoolContext"]); // console.log(templateObj)
  // const handleEditTemplate = () => {
  //     setTemplateData(templateObj, false)
  //     navigate(`/createcard`)
  // }

  console.log({
    treeee: templateObj
  });
  return __jsx("button", {
    // onClick={handleEditTemplate}
    className: "border-2  text-4xl border-dashed rounded-md border-bordercolor justify-center items-center flex flex-col py-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "jawad");
};

/* harmony default export */ __webpack_exports__["default"] = (TemplatePreview);

/***/ })

};
//# sourceMappingURL=1.0797853ae83ac07c68ed.hot-update.js.map