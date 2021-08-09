exports.id = 1;
exports.modules = {

/***/ "./src/components/Centerboard/Centerboard.tsx":
/*!****************************************************!*\
  !*** ./src/components/Centerboard/Centerboard.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HomeCard_HomeCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/HomeCard/HomeCard */ "./src/components/Centerboard/components/HomeCard/HomeCard.tsx");
/* harmony import */ var _components_StatCard_StatCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/StatCard/StatCard */ "./src/components/Centerboard/components/StatCard/StatCard.tsx");
/* harmony import */ var _components_RecentActivity_RecentActivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/RecentActivity/RecentActivity */ "./src/components/Centerboard/components/RecentActivity/RecentActivity.tsx");
/* harmony import */ var _RightSidebar_components_CreateEmail_CreateEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../RightSidebar/components/CreateEmail/CreateEmail */ "./src/components/RightSidebar/components/CreateEmail/CreateEmail.tsx");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _Centerboard_components_StatsCardinfo_StatCardinfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../Centerboard/components/StatsCardinfo/StatCardinfo */ "./src/components/Centerboard/components/StatsCardinfo/StatCardinfo.tsx");
/* harmony import */ var _Centerboard_components_ImagesInfo_ImagesInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../Centerboard/components/ImagesInfo/ImagesInfo */ "./src/components/Centerboard/components/ImagesInfo/ImagesInfo.tsx");
/* harmony import */ var _contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contexts/DesignToolContext */ "./src/contexts/DesignToolContext.tsx");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\components\\Centerboard\\Centerboard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const cardimage1 = __webpack_require__(/*! ./../../assets/images/card1.png */ "./src/assets/images/card1.png");

const cardimage2 = __webpack_require__(/*! ./../../assets/images/card2.png */ "./src/assets/images/card2.png");






const Centerboard = () => {
  const {
    dashboardnavigator,
    setDashboardnavigator
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_8__["DesignToolContext"]);
  let Card_1_title = "Personlized Images";
  let Card_1_impressions = 7540;
  let Card_1_clicks = 122;
  let Card_1_tag = "Impressions";
  let Card_1_time = "in last 24 hours ";
  let title1 = "Personlized Images";
  let Card_2_title = "Email campaigns";
  let Card_2_impressions = 8775;
  let Card_2_clicks = 233;
  let Card_2_tag = "Clicks";
  let Card_2_time = "in last 2 days";
  let title2 = "Personlized Images";
  let email_title_1 = "Create a new email campaign";
  let email_text_1 = "Use our intuitive newsletter builder to create engaging emails to send to your contacts.";
  let email_button_text_1 = "Create New Email campaign";
  let email_title_2 = "Create a new personalized image";
  let email_text_2 = "Use our hyperpersonalize image editing tool to create better & engaging images";
  let email_button_text_2 = "Create New Personalize image";
  return __jsx("div", {
    className: "overflow-y-auto flex-grow px-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mt-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, dashboardnavigator === "home" && __jsx(_components_HomeCard_HomeCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 51
    }
  })), __jsx("div", {
    className: "mt-6 flex flex-row  justify-between mb-10 gap-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, dashboardnavigator === "home" && __jsx(_components_StatCard_StatCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    bio: Card_1_title,
    bio1: Card_1_impressions,
    bio2: Card_1_clicks,
    bio3: Card_1_tag,
    bio4: title1,
    image: cardimage1,
    bio5: Card_1_time,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 51
    }
  }), dashboardnavigator === "home" && __jsx(_components_StatCard_StatCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    bio: Card_2_title,
    bio1: Card_2_impressions,
    bio2: Card_2_clicks,
    bio3: Card_2_tag,
    bio4: title2,
    image: cardimage2,
    bio5: Card_2_time,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 51
    }
  })), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, dashboardnavigator === "home" && __jsx(_components_RecentActivity_RecentActivity__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 51
    }
  })), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(_RightSidebar_components_CreateEmail_CreateEmail__WEBPACK_IMPORTED_MODULE_4__["default"], {
    bio1: email_title_1,
    bio2: email_text_1,
    bio3: email_button_text_1,
    bio4: _utils_defaults__WEBPACK_IMPORTED_MODULE_5__["ORIGINAL_SVG_mailicon"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx(_Centerboard_components_StatsCardinfo_StatCardinfo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx(_Centerboard_components_ImagesInfo_ImagesInfo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Centerboard);

/***/ })

};
//# sourceMappingURL=1.b0cad781858a5edd1c56.hot-update.js.map