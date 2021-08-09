exports.id = 1;
exports.modules = {

/***/ "./src/components/Centerboard/components/ImagesInfo/ImagesInfo.tsx":
/*!*************************************************************************!*\
  !*** ./src/components/Centerboard/components/ImagesInfo/ImagesInfo.tsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImageStat_ImageStat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageStat/ImageStat */ "./src/components/Centerboard/components/ImagesInfo/ImageStat/ImageStat.tsx");
/* harmony import */ var _contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../contexts/DesignToolContext */ "./src/contexts/DesignToolContext.tsx");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\components\\Centerboard\\components\\ImagesInfo\\ImagesInfo.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const image1 = __webpack_require__(/*! ./../../../../assets/images/ALP-Summer.png */ "./src/assets/images/ALP-Summer.png");



const ImagesInfo = () => {
  const {
    sidebarnavigator,
    setSidebarnavigator
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_2__["DesignToolContext"]);
  let Card_1_title = "ALP";
  let Card_1_views = 121;
  let Card_1_clicks = 541;
  let Card_1_time = '0.32%';
  let Card_1_sale = '5%';
  return __jsx("div", {
    className: " w-full border-0 rounded-xl bg-white shadow-md pb-6 mb-4 h-auto mt-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: " ml-6 justify-between flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "mt-10 text-2xl font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "Your Personalized Images"), __jsx("button", {
    className: "mt-10 mr-4 border-2 border-alto rounded-md px-4 py-2 mb-6 text-white bg-indigo600",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "Filters")), __jsx("div", {
    className: " flex justify-center mx-auto w-10/12 border-t-2 border-gallery mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "flex flex-row px-4  mx-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "mb-6 w-full ",
    onClick: () => setSidebarnavigator('stat'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx(_ImageStat_ImageStat__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: Card_1_title,
    sale: Card_1_sale,
    views: Card_1_views,
    clicks: Card_1_clicks,
    time: Card_1_time,
    image: image1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "mb-6 w-full",
    onClick: () => setSidebarnavigator('images'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx(_ImageStat_ImageStat__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: Card_1_title,
    sale: Card_1_sale,
    views: Card_1_views,
    clicks: Card_1_clicks,
    time: Card_1_time,
    image: image1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ImagesInfo);

/***/ })

};
//# sourceMappingURL=1.e04b1021ad1976520e8e.hot-update.js.map