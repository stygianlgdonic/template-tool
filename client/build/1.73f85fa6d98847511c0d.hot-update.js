exports.id = 1;
exports.modules = {

/***/ "./src/components/RightSidebar/RightSidebar.tsx":
/*!******************************************************!*\
  !*** ./src/components/RightSidebar/RightSidebar.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CreateEmail_CreateEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/CreateEmail/CreateEmail */ "./src/components/RightSidebar/components/CreateEmail/CreateEmail.tsx");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _components_ImagePreview_ImagePreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ImagePreview/ImagePreview */ "./src/components/RightSidebar/components/ImagePreview/ImagePreview.tsx");
/* harmony import */ var _Screens_CreateCardLayout_components_DesignTool_Components_SubNavBar_components_ElementSelector_components_Stickers_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Stickers/styles.css */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Stickers/styles.css");
/* harmony import */ var _components_StatGraph_StatGraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/StatGraph/StatGraph */ "./src/components/RightSidebar/components/StatGraph/StatGraph.tsx");
/* harmony import */ var _components_SocialStats_SocialStats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/SocialStats/SocialStats */ "./src/components/RightSidebar/components/SocialStats/SocialStats.tsx");
/* harmony import */ var _contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contexts/DesignToolContext */ "./src/contexts/DesignToolContext.tsx");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\components\\RightSidebar\\RightSidebar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const image1 = __webpack_require__(/*! ./../../assets/images/ALP-Summer.png */ "./src/assets/images/ALP-Summer.png");





let email_title_1 = "Create a new email campaign";
let email_text_1 = "Use our intuitive newsletter builder to create engaging emails to send to your contacts.";
let email_button_text_1 = "Create New Email campaign";
let email_title_2 = "Create a new personalized image";
let email_text_2 = "Use our hyperpersonalize image editing tool to create better & engaging images";
let email_button_text_2 = "Create New Personalize image";
let date = "20 June, 2011";
let creator = "John Doe";
let last_edited_by = "Harry Potter";
let impressions = 344;
let link_clicks = 203;
let conversionrate = 3.4;
let fb_impressions = 5467;
let fb_clicks = 203;
let socialmedia1 = "Facebook";
let insta_impressions = 7890;
let insta_clicks = 244;
let socialmedia2 = "Instagram";

const RightSidebar = () => {
  const {
    dashboardnavigator,
    setDashboardnavigator,
    sidebarnavigator,
    setSidebarnavigator
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_7__["DesignToolContext"]);
  return __jsx("div", {
    className: " overflow-y-hidden  px-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: dashboardnavigator === "home" ? " h-screen flex items-center flex-col bg-red my-auto" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-col items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx(_components_CreateEmail_CreateEmail__WEBPACK_IMPORTED_MODULE_1__["default"], {
    bio1: email_title_1,
    bio2: email_text_1,
    bio3: email_button_text_1,
    bio4: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_mailicon"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }), __jsx(_components_CreateEmail_CreateEmail__WEBPACK_IMPORTED_MODULE_1__["default"], {
    bio1: email_title_2,
    bio2: email_text_2,
    bio3: email_button_text_2,
    bio4: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_imageicon"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "flex flex-col justify-center mx-auto items-center bg-green",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: dashboardnavigator === "images" && sidebarnavigator === "stat" ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx(_components_ImagePreview_ImagePreview__WEBPACK_IMPORTED_MODULE_3__["default"], {
    date: date,
    creator: creator,
    last_edited_by: last_edited_by,
    image: image1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: dashboardnavigator === "images" && sidebarnavigator === "stat" ? " mt-6" : "hidden mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx(_components_StatGraph_StatGraph__WEBPACK_IMPORTED_MODULE_5__["default"], {
    impressions: impressions,
    link_clicks: link_clicks,
    conversionrate: conversionrate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: dashboardnavigator === "images" && sidebarnavigator === "stat" ? "mt-6" : "hidden mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx(_components_SocialStats_SocialStats__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fb_impressions: fb_impressions,
    fb_clicks: fb_clicks,
    socialmedia1: socialmedia1,
    insta_impressions: insta_impressions,
    insta_clicks: insta_clicks,
    socialmedia2: socialmedia2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (RightSidebar);

/***/ })

};
//# sourceMappingURL=1.73f85fa6d98847511c0d.hot-update.js.map