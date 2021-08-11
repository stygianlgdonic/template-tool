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
/* harmony import */ var _contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contexts/DesignTool/DesignToolContext */ "./src/contexts/DesignTool/DesignToolContext.tsx");
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_7__["DesignToolContext"]);
  return __jsx("div", {
    className: " overflow-y-hidden  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: dashboardnavigator === "home" ? " h-screen flex items-center justify-center   " : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-col items-center  h-screen justify-center  ",
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
    className: "flex flex-col justify-center  items-center mb-4",
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

/***/ }),

/***/ "./src/components/RightSidebar/components/ImagePreview/ImagePreview.tsx":
/*!******************************************************************************!*\
  !*** ./src/components/RightSidebar/components/ImagePreview/ImagePreview.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/generatesvgUrl */ "./src/utils/generatesvgUrl.ts");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\ImagePreview\\ImagePreview.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ImagePreview = ({
  date,
  creator,
  last_edited_by,
  image
}) => {
  const svg1 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_editicon"]);
  const svg2 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_attachementicon"]);
  const svg3 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_deleteicon"]);
  return __jsx("div", {
    className: "mt-4 overflow-y-auto overscroll-y-auto w-full  flex self-center  justify-center border  rounded-lg pb-10 shadow-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: " pt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex justify-center flex-col items-center px-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "w-24 h-24 border-0 rounded-md ml-24",
    src: image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  })), __jsx("button", {
    className: "top-0 pb-16 ml-8 text-indigo600",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, "Preview")), __jsx("p", {
    className: "text-base leading-6 font-medium text-gray900 pt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, "My brand sales campaign")), __jsx("div", {
    className: "flex flex-row justify-center mt-4 px-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "flex flex-row border px-2 py-1 rounded-md items-center text-sm text-gray94 border-bordercolor shadow-sm ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "pr-2 w-6",
    src: svg1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 150
    }
  }), "Edit")), __jsx("div", {
    className: "flex flex-row px-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "flex flex-row border px-2 py-1 rounded-md items-center text-gray94 text-sm border-bordercolor shadow-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "pr-2 w-6",
    src: svg2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 149
    }
  }), "Use as")), __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "flex flex-row border px-2 py-1 rounded-md items-center text-sm text-gray94 border-bordercolor shadow-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "pr-2 w-6",
    src: svg3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 149
    }
  }), "Archive"))), __jsx("div", {
    className: " flex justify-center border-t border-gallery mt-4 mb-4 w-full px-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "flex flex-col justify-evenly",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-row justify-evenly mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: " text-gray95 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, "Date Created"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 83
    }
  }, date)), __jsx("div", {
    className: "flex flex-row justify-between px-16 mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "text-gray95 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, "Created by"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 80
    }
  }, creator)), __jsx("div", {
    className: "flex flex-row justify-evenly mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "text-gray95 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, "Last Edited by"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 84
    }
  }, last_edited_by)))));
};

/* harmony default export */ __webpack_exports__["default"] = (ImagePreview);

/***/ })

};
//# sourceMappingURL=1.dba73d9004c12a0c9ef7.hot-update.js.map