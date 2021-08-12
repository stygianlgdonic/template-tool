exports.ids = [1];
exports.modules = {

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar.tsx":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar.tsx ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
<<<<<<< HEAD
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\ElementSelector\\components\\SearchBar\\SearchBar.tsx";
=======
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\ElementSelector\\components\\SearchBar\\SearchBar.tsx";
>>>>>>> staging
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SearchBar = ({
  shapesArray,
  setShapesArray,
  initial_state
}) => {
  const {
    0: searchValue,
    1: setSearchValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const handleSearchChange = e => {
    setSearchValue(e.target.value);

    if (!e.target.value) {
      setShapesArray(initial_state);
    } else {
      const filteredShapes = shapesArray.filter(shape => {
        return shape.labels.join().toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
      });
      setShapesArray(filteredShapes);
    }
  };

  return __jsx("div", {
    className: "flex items-center justify-center w-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "z-0 flex items-center justify-center w-11/12 border rounded-md h-14 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "flex items-center justify-end w-auto p-3 text-sm text-grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6Z",
    fill: "#9CA3AF",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 29
    }
  })))), __jsx("input", {
    className: "z-0 w-full h-12 text-sm rounded outline-none text-gray95 ",
    type: "text",
    placeholder: "What would you like to search",
    value: searchValue,
    onChange: handleSearchChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Stickers/styles.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Stickers/styles.css ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".no-scrollbar::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n  \r\n  .no-scrollbar {\r\n    -ms-overflow-style: none;  /* IE and Edge */\r\n    scrollbar-width: none;  /* Firefox */\r\n  }", "",{"version":3,"sources":["webpack://./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Stickers/styles.css"],"names":[],"mappings":"AAAA;IACI,aAAa;EACf;;EAEA;IACE,wBAAwB,GAAG,gBAAgB;IAC3C,qBAAqB,GAAG,YAAY;EACtC","sourcesContent":[".no-scrollbar::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n  \r\n  .no-scrollbar {\r\n    -ms-overflow-style: none;  /* IE and Edge */\r\n    scrollbar-width: none;  /* Firefox */\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/Screens/Dashboard/Dashboard.tsx":
/*!*********************************************!*\
  !*** ./src/Screens/Dashboard/Dashboard.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LeftSideBar_LeftSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/LeftSideBar/LeftSidebar */ "./src/components/LeftSideBar/LeftSidebar.tsx");
/* harmony import */ var _components_RightSidebar_RightSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/RightSidebar/RightSidebar */ "./src/components/RightSidebar/RightSidebar.tsx");
/* harmony import */ var _components_Centerboard_Centerboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/Centerboard/Centerboard */ "./src/components/Centerboard/Centerboard.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
<<<<<<< HEAD
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\Screens\\Dashboard\\Dashboard.tsx";
=======
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\Dashboard\\Dashboard.tsx";
>>>>>>> staging
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Dashboard = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full  grid grid-cols-12 font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-span-2 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx(_components_LeftSideBar_LeftSidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "col-span-7 bg-jacksonsGray overflow-y-auto h-sccreen",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx(_components_Centerboard_Centerboard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "col-span-3 overflow-hidden  overscroll-y-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx(_components_RightSidebar_RightSidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }))), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Outlet"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./src/assets/images/01.png":
/*!**********************************!*\
  !*** ./src/assets/images/01.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/01.2e91d53b.png";

/***/ }),

/***/ "./src/assets/images/02.png":
/*!**********************************!*\
  !*** ./src/assets/images/02.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/02.adc8b2dd.png";

/***/ }),

/***/ "./src/assets/images/03.png":
/*!**********************************!*\
  !*** ./src/assets/images/03.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/03.6bbdf893.png";

/***/ }),

/***/ "./src/assets/images/04.png":
/*!**********************************!*\
  !*** ./src/assets/images/04.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/04.50f8bcb9.png";

/***/ }),

/***/ "./src/assets/images/ALP-Summer.png":
/*!******************************************!*\
  !*** ./src/assets/images/ALP-Summer.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ALP-Summer.63b90db3.png";

/***/ }),

/***/ "./src/assets/images/Chart.png":
/*!*************************************!*\
  !*** ./src/assets/images/Chart.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/body.png":
/*!************************************!*\
  !*** ./src/assets/images/body.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABICAYAAACqT5alAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGDSURBVHgB7Zq9TsJgGIVfiJXEiNK1XkI7ygYrt6GXYBxZ2Y1b3fQ6cNTNjvYWWIuiTUgTlK/GHxoLSYE35fQ8W+nXkKdve74ztDZ5iz+kQtSlYlAYHQqjQ2F09v4eROOJRC+vUgS7dST2cVPKzsKEi8qm146LX6vJgvA6E7Jb5Z+uocZqCQ6F0aEwOmxa65SPMpJtgBtrWmUl2wA31rTKSrYBsmmhw9BCg6HF0AKHoYUGQ4uhBU61UzqPi8tEdoHrK2vlGj7S6FAYHQqjQ2F0KIwOu/S2OG1bYtv/398omknwpNPXVSZsZDudRu75bnc/XaOByoTNZMMwkfvhdOkaDRha6KgJ93oN6fcPxXF+/9I5qctg0EzPaaGW0sP5+xs+J3J2fiBB8JXI7XlQ+f67uJ5OYBlUH+nRaCY3fvxzfHcbp79pojJhs8+arSeLmazriXiuJQ+PU9FARfi7VORtPUZWq3iovcNaQqvgtoQOhdGhMDoURofC6FAYHX7Fg07lhD8BrJ2CK3jc2kkAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/card1.png":
/*!*************************************!*\
  !*** ./src/assets/images/card1.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/card1.9acd410d.png";

/***/ }),

/***/ "./src/assets/images/card2.png":
/*!*************************************!*\
  !*** ./src/assets/images/card2.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/card2.a3e6d397.png";

/***/ }),

/***/ "./src/assets/images/card5.png":
/*!*************************************!*\
  !*** ./src/assets/images/card5.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/card5.8baed643.png";

/***/ }),

/***/ "./src/assets/images/email.png":
/*!*************************************!*\
  !*** ./src/assets/images/email.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/fb.png":
/*!**********************************!*\
  !*** ./src/assets/images/fb.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/featureimage.png":
/*!********************************************!*\
  !*** ./src/assets/images/featureimage.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABICAYAAACqT5alAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgB7ZpBTsJAFIYf0CIaF5adsAN3sKxHgCtwBd0pBzGepy5ZiruyE6/QhUbFqjhTgqmQtC6YCf37fwnJAEOmH319r+1r5fnldSkloiolo3TCTvrN1TgWRG5v3N8xQxodCqNDYXQojA6F0aEwOhRGh8LoOGKBTteRbreWOSeKvmV6b/4GhPE97J+7Mho1cucNBg3p983//8ZX8LyqTKex3AWL3LmnrZqE4aeYhEkLHSvC7VZVen1XvOb2co3DijrO68kcG1hZ5cSrie+7cnlx9Edaj8fXx9LrOckcG1gpS7PZKmkNhweJ9OP8K/n8TJWryWShXh8yUN/ZwIrwmkBJh2EsrfZq2QeVvedzs1l5E+PC72/LpBZH0XbPToe036wnY31iosuXaYwL63DVdDrZx+iTCnMbZ1pWQnotvQ+wDqNDYXQojA6F0aEwOhRGh8LoUBidCp+XBoePD6PDhnga3Smw1RHYFfpmf1ZrNnMPF01WM8zZ5kzh/zSx940gZ5udvB8HBZTOgkkrDZNWAWDS2oBJCx1eD6PDkEaHwuhQGJ3SCf8A3XF2UbLBHg0AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/header.png":
/*!**************************************!*\
  !*** ./src/assets/images/header.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABICAYAAACqT5alAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGESURBVHgB7ZmxTsJQGIV/iJXEiNK1PkI7ygYrr6GPYBxZ2Y1b3fQ5cNTNjvYVWIuiTUgTlFsjSiOSFPjTnHu+idI25ONvzz1pa5O39EMsoi6WQWF0rBPe+71xcZkJItdXzuIzL2l0KIyO3Sm9S07bjrju3/9vkswketJZIVQmbGQ7ncbK/d3ufn6MBioTNpON40zuh9N/j9GAoYWOmnCv15B+/1A87+cnvZO6DAbNfJ8Waik9nN+/8XMmZ+cHEkVfidyeB1UYvosf6ASWQfWSHo1mchOmi+272zT/ThOVCZt11iw9Rcxk/UAk8B15eJyKBirC36Vi1dJjZLWKh9o9rCW0Di5L6FAYnRrfPIBDYXQojA6F0bH7uXQynkjy8iplcFtH4h43peosTbisbH7uuPy5miwJbzIht1X96RrYpdGhMDoURodNa5PyUUWKDXBrTauqFBvg1ppWVSk2QDYtdBhaaDC0GFrgMLTQYGgxtMBhaKHB0GJogUNhdCiMDoXRsU74EyRwkgZSdgOFAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/images/insta.png":
/*!*************************************!*\
  !*** ./src/assets/images/insta.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/insta.638d5ee2.png";

/***/ }),

/***/ "./src/assets/images/plus.png":
/*!************************************!*\
  !*** ./src/assets/images/plus.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/socialmedia.png":
/*!*******************************************!*\
  !*** ./src/assets/images/socialmedia.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

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
/* harmony import */ var _contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contexts/DesignTool/DesignToolContext */ "./src/contexts/DesignTool/DesignToolContext.tsx");
<<<<<<< HEAD
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\components\\Centerboard\\Centerboard.tsx";
=======
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\Centerboard\\Centerboard.tsx";
>>>>>>> staging
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const cardimage1 = __webpack_require__(/*! ./../../assets/images/card1.png */ "./src/assets/images/card1.png");

const cardimage2 = __webpack_require__(/*! ./../../assets/images/card2.png */ "./src/assets/images/card2.png");






const Centerboard = () => {
  const {
    dashboardnavigator,
    setDashboardnavigator
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_8__["DesignToolContext"]);
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
  }, dashboardnavigator === "images" && __jsx(_RightSidebar_components_CreateEmail_CreateEmail__WEBPACK_IMPORTED_MODULE_4__["default"], {
    bio1: email_title_1,
    bio2: email_text_1,
    bio3: email_button_text_1,
    bio4: _utils_defaults__WEBPACK_IMPORTED_MODULE_5__["ORIGINAL_SVG_mailicon"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 53
    }
  })), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, dashboardnavigator === "images" && __jsx(_Centerboard_components_StatsCardinfo_StatCardinfo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 53
    }
  })), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, dashboardnavigator === "images" && __jsx(_Centerboard_components_ImagesInfo_ImagesInfo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 53
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Centerboard);

/***/ }),

/***/ "./src/components/Centerboard/components/HomeCard/HomeCard.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/Centerboard/components/HomeCard/HomeCard.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
<<<<<<< HEAD
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\components\\Centerboard\\components\\HomeCard\\HomeCard.tsx";
=======
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\Centerboard\\components\\HomeCard\\HomeCard.tsx";
>>>>>>> staging
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const HomeCard = () => {
  return __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "inline-block  pl-10 h-28 w-full pt-6 items-center justify-center justify-items-center align-middle border-0 rounded-xl bg-white shadow-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: " flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "text-gray95 mr-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, "Dashboard"), __jsx("svg", {
    className: "w-2 mr-6 mt-2 text-gray95",
    width: "9",
    height: "12",
    viewBox: "0 0 9 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M0.999999 1L8 8L1 15",
    stroke: "#111827",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  })), __jsx("button", {
    className: "text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, "Home")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "text-xl font-sans font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, "Home"))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomeCard);

/***/ }),

/***/ "./src/components/Centerboard/components/ImagesInfo/ImageStat/ImageStat.tsx":
/*!**********************************************************************************!*\
  !*** ./src/components/Centerboard/components/ImagesInfo/ImageStat/ImageStat.tsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utils/generatesvgUrl */ "./src/utils/generatesvgUrl.ts");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../utils/defaults */ "./src/utils/defaults.ts");
<<<<<<< HEAD
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\components\\Centerboard\\components\\ImagesInfo\\ImageStat\\ImageStat.tsx";
=======
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\Centerboard\\components\\ImagesInfo\\ImageStat\\ImageStat.tsx";
>>>>>>> staging
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ImageStat = ({
  title,
  sale,
  views,
  clicks,
  time,
  image
}) => {
  const eyesvg = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_1__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_eyeicon"]);
  const impressionsvg = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_1__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_impressionicon"]);
  const arrowup = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_1__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_arrow_upicon"]);
  return __jsx("div", {
    className: "w-11/12 border-0 rounded-md mb-8 shadow-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex justify-center border-0 rounded-t-md bg-grayshade ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "w-32 h-32",
    src: image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "flex flex-row justify-between space-x-14 text-sm leading-5 font-sans font-medium text-gray900 px-2 py-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "mr-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, title), __jsx("p", {
    className: "mr-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, "sale"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, sale)), __jsx("div", {
    className: "flex flex-row ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: eyesvg,
    className: "mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "mr-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, views), __jsx("img", {
    src: impressionsvg,
    className: "mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, clicks))), __jsx("div", {
    className: "flex flex-row justify-between items-center px-2 text-sm leading-5 font-sans h-10 font-medium bg-grayshade",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "text-sm leading-5 font-sans pl-2 font-medium text-indigo600",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, "View all")), __jsx("div", {
    className: "flex flex-row bg-indigo100 px-2 rounded-lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: arrowup,
    className: "mr-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }), "  ", __jsx("p", {
    className: "text-indigo600",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 61
    }
  }, " ", time))));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageStat);

/***/ }),

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
/* harmony import */ var _contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../contexts/DesignTool/DesignToolContext */ "./src/contexts/DesignTool/DesignToolContext.tsx");
<<<<<<< HEAD
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\components\\Centerboard\\components\\ImagesInfo\\ImagesInfo.tsx";
=======
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\Centerboard\\components\\ImagesInfo\\ImagesInfo.tsx";
>>>>>>> staging
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const image1 = __webpack_require__(/*! ./../../../../assets/images/ALP-Summer.png */ "./src/assets/images/ALP-Summer.png");



const ImagesInfo = () => {
  const {
    sidebarnavigator,
    setSidebarnavigator
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_2__["DesignToolContext"]);
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

/***/ }),

/***/ "./src/components/Centerboard/components/RecentActivity/RecentActivity.tsx":
/*!*********************************************************************************!*\
  !*** ./src/components/Centerboard/components/RecentActivity/RecentActivity.tsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
<<<<<<< HEAD
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\components\\Centerboard\\components\\RecentActivity\\RecentActivity.tsx";
=======
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\Centerboard\\components\\RecentActivity\\RecentActivity.tsx";
>>>>>>> staging
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const RecentActivity = () => {
  return __jsx("div", {
    className: "w-full border-0 rounded-xl bg-white shadow-md mt-4 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: " ml-10 justify-between flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "mt-10 text-2xl font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "Recent Activities"), __jsx("button", {
    className: "mt-10 mr-4 border-2 border-alto rounded-md px-2 mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "View all")), __jsx("div", {
    className: " ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: " flex justify-center mx-auto w-10/12 border-t-2 border-gallery",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "divide-y divide-gray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "py-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex space-x-2 ml-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "h-6 w-6 rounded-full",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "flex-1 space-y-1 pr-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "text-sm font-medium text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 37
    }
  }, "Lindsay Walton"), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 37
    }
  }, "1h")), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 33
    }
  }, "Deployed Workcation (2d89f0c8 in master) to production")))))), __jsx("div", {
    className: " ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: " flex justify-center mx-auto w-10/12 border-t-2 border-gallery",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "divide-y divide-gray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "py-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex space-x-2 ml-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "h-6 w-6 rounded-full",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "flex-1 space-y-1 pr-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "text-sm font-medium text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 37
    }
  }, "Lindsay Walton"), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 37
    }
  }, "1h")), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 33
    }
  }, "Deployed Workcation (2d89f0c8 in master) to production")))))), __jsx("div", {
    className: " ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: " flex justify-center mx-auto w-10/12 border-t-2 border-gallery",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "divide-y divide-gray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "py-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex space-x-2 ml-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "h-6 w-6 rounded-full",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "flex-1 space-y-1 pr-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "text-sm font-medium text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 37
    }
  }, "Lindsay Walton"), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 37
    }
  }, "1h")), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  }, "Deployed Workcation (2d89f0c8 in master) to production")))))), __jsx("div", {
    className: " ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: " flex justify-center mx-auto w-10/12 border-t-2 border-gallery",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "divide-y divide-gray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "py-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex space-x-2 ml-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "h-6 w-6 rounded-full",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "flex-1 space-y-1 pr-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "text-sm font-medium text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 37
    }
  }, "Lindsay Walton"), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 37
    }
  }, "1h")), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 33
    }
  }, "Deployed Workcation (2d89f0c8 in master) to production")))))), __jsx("div", {
    className: " ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: " flex justify-center mx-auto w-10/12 border-t-2 border-gallery",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "divide-y divide-gray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "py-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex space-x-2 ml-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "h-6 w-6 rounded-full",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "flex-1 space-y-1 pr-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "text-sm font-medium text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 37
    }
  }, "Lindsay Walton"), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 37
    }
  }, "1h")), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 33
    }
  }, "Deployed Workcation (2d89f0c8 in master) to production")))))), __jsx("div", {
    className: " ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: " flex justify-center mx-auto w-10/12 border-t-2 border-gallery",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "divide-y divide-gray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "py-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex space-x-2 ml-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "h-6 w-6 rounded-full",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "flex-1 space-y-1 pr-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "text-sm font-medium text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 37
    }
  }, "Lindsay Walton"), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 37
    }
  }, "1h")), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 33
    }
  }, "Deployed Workcation (2d89f0c8 in master) to production")))))), __jsx("div", {
    className: " ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: " flex justify-center mx-auto w-10/12 border-t-2 border-gallery",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "divide-y divide-gray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "py-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex space-x-2 ml-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "h-6 w-6 rounded-full",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "flex-1 space-y-1 pr-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "text-sm font-medium text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 37
    }
  }, "Lindsay Walton"), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 37
    }
  }, "1h")), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 33
    }
  }, "Deployed Workcation (2d89f0c8 in master) to production")))))), __jsx("div", {
    className: " ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: " flex justify-center mx-auto w-10/12 border-t-2 border-gallery",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "divide-y divide-gray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "py-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex space-x-2 ml-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "h-6 w-6 rounded-full",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "flex-1 space-y-1 pr-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "text-sm font-medium text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 37
    }
  }, "Lindsay Walton"), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 37
    }
  }, "1h")), __jsx("p", {
    className: "text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 33
    }
  }, "Deployed Workcation (2d89f0c8 in master) to production")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (RecentActivity);

/***/ }),

/***/ "./src/components/Centerboard/components/StatCard/StatCard.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/Centerboard/components/StatCard/StatCard.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
<<<<<<< HEAD
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\components\\Centerboard\\components\\StatCard\\StatCard.tsx";
=======
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\Centerboard\\components\\StatCard\\StatCard.tsx";
>>>>>>> staging
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const StatCard = ({
  bio,
  bio1,
  bio2,
  bio3,
  bio4,
  bio5,
  image
}) => {
  return __jsx("div", {
    className: " border-2 border-bordercolor rounded-xl w-2/3  bg-white shadow-md  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-row mt-4 justify-center items-center ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: " mt-6 ml-4",
    width: "80",
    height: "80",
    src: image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "ml-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex justify-start  text-gray95 mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, bio)), __jsx("div", {
    className: "flex mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "text-xl text-indigo font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, bio1), __jsx("p", {
    className: "text-indigo text-md mt-1 ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, bio3)), __jsx("div", {
    className: "flex justify-center mt-2 align-middle items-center mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx("svg", {
    className: "",
    width: "10",
    height: "12",
    viewBox: "0 0 10 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M0.293153 5.70679C0.105447 5.51926 0 5.26495 0 4.99979C0 4.73462 0.105447 4.48031 0.293153 4.29279L4.29816 0.292787C4.48592 0.105316 4.74055 0 5.00604 0C5.27154 0 5.52617 0.105316 5.71393 0.292787L9.71894 4.29279C9.90132 4.48139 10.0022 4.73399 9.99996 4.99619C9.99768 5.25838 9.89238 5.5092 9.70674 5.6946C9.5211 5.88001 9.26997 5.98518 9.00745 5.98746C8.74492 5.98974 8.49201 5.88894 8.30317 5.70679L6.0073 3.41379V10.9998C6.0073 11.265 5.90181 11.5194 5.71404 11.7069C5.52627 11.8944 5.27159 11.9998 5.00604 11.9998C4.7405 11.9998 4.48582 11.8944 4.29805 11.7069C4.11028 11.5194 4.00479 11.265 4.00479 10.9998V3.41379L1.70892 5.70679C1.52116 5.89426 1.26653 5.99957 1.00104 5.99957C0.735542 5.99957 0.480915 5.89426 0.293153 5.70679Z",
    fill: "#10B981",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  })), __jsx("p", {
    className: "text-green ml-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, bio2), __jsx("p", {
    className: "ml-1 text-sm text-gray95 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }, bio5)))), __jsx("div", {
    className: "bg-jacksonsGray border-b-0 border-bordercolor rounded-b-xl py-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "ml-6 text-sm text-indigo600 leading-5 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "View all")));
};

/* harmony default export */ __webpack_exports__["default"] = (StatCard);

/***/ }),

/***/ "./src/components/Centerboard/components/StatsCardinfo/StatCardinfo.tsx":
/*!******************************************************************************!*\
  !*** ./src/components/Centerboard/components/StatsCardinfo/StatCardinfo.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Example; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/solid */ "@heroicons/react/solid");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ "@heroicons/react/outline");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__);
<<<<<<< HEAD
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\components\\Centerboard\\components\\StatsCardinfo\\StatCardinfo.tsx";
=======
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\Centerboard\\components\\StatsCardinfo\\StatCardinfo.tsx";
>>>>>>> staging
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* This example requires Tailwind CSS v2.0+ */



const stats = [{
  id: 1,
  name: 'Images Created',
  stat: '120',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__["UsersIcon"],
  change: '32',
  changeType: 'increase',
  time: 'in 2 days'
}, {
  id: 2,
  name: 'Impressions',
  stat: '1200',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__["MailOpenIcon"],
  change: '122',
  changeType: 'increase',
  time: 'in last 24 hours'
}, {
  id: 3,
  name: 'Clicks/Conversions',
  stat: '71,897',
  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__["CursorClickIcon"],
  change: '0.32%',
  changeType: 'decrease',
  time: 'going down'
}];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Example() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("dl", {
    className: "mt-5  grid-cols-1 grid gap-2 justify-between sm:grid-cols-2 lg:grid-cols-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, stats.map(item => __jsx("div", {
    key: item.id,
    className: "relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, __jsx("dt", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "ml-14 text-sm font-medium text-gray95 truncate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 29
    }
  }, item.name)), __jsx("dd", {
    className: "ml-14 pb-6 flex flex-col items-baseline sm:pb-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "text-2xl font-semibold text-gray900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }
  }, item.stat), __jsx("div", {
    className: "flex flex-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: classNames(item.changeType === 'increase' ? 'text-green500' : 'text-red600', ' flex items-center align-middle text-sm font-semibold'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 33
    }
  }, item.changeType === 'increase' ? __jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__["ArrowSmUpIcon"], {
    className: "self-left  items-center align-middle flex-shrink-0 h-5 w-5 text-green500",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 41
    }
  }) : __jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__["ArrowSmDownIcon"], {
    className: "self-left flex-shrink-0 h-5 w-5 text-red600",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: " sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 37
    }
  }, item.changeType === 'increase' ? 'Increased' : 'Decreased', " by"), item.change), __jsx("p", {
    className: "text-sm font-semibold text-gray95 ml-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 33
    }
  }, item.time)), __jsx("div", {
    className: "absolute bottom-0 inset-x-0 bg-jacksonsGray px-4 py-4 sm:px-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "#",
    className: "font-medium text-indigo600 hover:text-indigo-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 37
    }
  }, ' ', "View all", __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 49
    }
  }, " ", item.name, " stats")))))))));
}

/***/ }),

/***/ "./src/components/LeftSideBar/1.jpg":
/*!******************************************!*\
  !*** ./src/components/LeftSideBar/1.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/1.f5f798cc.jpg";

/***/ }),

/***/ "./src/components/LeftSideBar/LeftSidebar.tsx":
/*!****************************************************!*\
  !*** ./src/components/LeftSideBar/LeftSidebar.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/DesignTool/DesignToolContext */ "./src/contexts/DesignTool/DesignToolContext.tsx");
<<<<<<< HEAD
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\components\\LeftSideBar\\LeftSidebar.tsx";
=======
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\LeftSideBar\\LeftSidebar.tsx";
>>>>>>> staging
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const image = __webpack_require__(/*! ./1.jpg */ "./src/components/LeftSideBar/1.jpg");

const LeftSidebar = () => {
  const {
    dashboardnavigator,
    setDashboardnavigator,
    sidebarnavigator,
    setSidebarnavigator
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_2__["DesignToolContext"]);
  return __jsx("div", {
    className: "h-full  flex flex-col  w-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "fixed ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex justify-start ml-6 items-start mx-auto mt-6 align-middle mb-8 w-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex justify-items-center items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: image,
    className: "w-12  rounded-3xl flex justify-items-center items-center ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "ml-4 font-sans leading-tight",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: "text-sm text-gray94 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, "Tom Cook"), __jsx("button", {
    className: "text-xs font-normal text-grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, "View Profile"))), __jsx("div", {
    className: "flex flex-col justify-start text-left items-start px-2 leading-10 text-lightGray   mx-1",
    style: {
      width: '33.5vh'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: " w-full  ",
    onClick: () => {
      setDashboardnavigator('home');
      setSidebarnavigator('');
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: dashboardnavigator === "home" ? "flex hover:bg-indigo100  mr-2 focus:bg-lightindigo  w-full hover:rounded-lg border-0 rounded-md pl-2 bg-lightindigo" : "flex hover:bg-indigo100   focus:bg-lightindigo mr-2  w-full hover:rounded-lg border-0 rounded-md pl-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, __jsx("svg", {
    className: "mr-2 w-4",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }, __jsx("path", {
    d: "M1 10L3 8M3 8L10 1L17 8M3 8V18C3 18.5523 3.44772 19 4 19H7M17 8L19 10M17 8V18C17 18.5523 16.5523 19 16 19H13M7 19C7.55228 19 8 18.5523 8 18V14C8 13.4477 8.44772 13 9 13H11C11.5523 13 12 13.4477 12 14V18C12 18.5523 12.4477 19 13 19M7 19H13",
    stroke: "#6B7280",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 33
    }
  })), __jsx("p", {
    className: "text-lightGray font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }, "Home"))), __jsx("button", {
    className: "w-full",
    onClick: () => setDashboardnavigator('images'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: dashboardnavigator === "images" ? "flex hover:bg-lightindigo  focus:bg-lightindigo  w-full hover:rounded-lg border-0 rounded-md pl-2 bg-lightindigo" : "flex hover:bg-lightindigo  focus:bg-lightindigo  w-full hover:rounded-lg border-0 rounded-md pl-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, __jsx("svg", {
    className: "mr-2 w-4",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
    }
  }, __jsx("path", {
    d: "M1 14.5L6.15901 9.34099C7.03769 8.46231 8.46231 8.46231 9.34099 9.34099L14.5 14.5M12.25 12.25L14.034 10.466C14.9127 9.58731 16.3373 9.58731 17.216 10.466L19 12.25M12.25 5.5H12.2613M3.25 19H16.75C17.9926 19 19 17.9926 19 16.75V3.25C19 2.00736 17.9926 1 16.75 1H3.25C2.00736 1 1 2.00736 1 3.25V16.75C1 17.9926 2.00736 19 3.25 19Z",
    stroke: "#9CA3AF",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 33
    }
  })), __jsx("button", {
    className: "text-lightGray font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, "Personlized Images "))), __jsx("button", {
    className: "w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex hover:bg-lightindigo hover:rounded-md border-0  w-full rounded-md pl-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }, __jsx("svg", {
    className: "mr-2 w-4",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, __jsx("path", {
    d: "M1 16.5963V7.66667C1 6.99796 1.3342 6.3735 1.8906 6.00257L8.8906 1.3359C9.5624 0.888033 10.4376 0.888034 11.1094 1.3359L18.1094 6.00257C18.6658 6.3735 19 6.99796 19 7.66667V16.5963M1 16.5963C1 17.7009 1.89543 18.5963 3 18.5963H17C18.1046 18.5963 19 17.7009 19 16.5963M1 16.5963L7.75 12.0963M19 16.5963L12.25 12.0963M1 7.5963L7.75 12.0963M19 7.5963L12.25 12.0963M12.25 12.0963L11.1094 12.8567C10.4376 13.3046 9.5624 13.3046 8.8906 12.8567L7.75 12.0963",
    stroke: "#9CA3AF",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 33
    }
  })), __jsx("button", {
    className: "text-lightGray font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }, "Email Campaigns"))), __jsx("button", {
    className: "w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex hover:bg-lightindigo hover:rounded-md border-0  w-full rounded-md pl-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, __jsx("svg", {
    className: "mr-2 w-4",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }, __jsx("path", {
    d: "M5 19C2.79086 19 1 17.2091 1 15V3C1 1.89543 1.89543 1 3 1H7C8.10457 1 9 1.89543 9 3V15C9 17.2091 7.20914 19 5 19ZM5 19H17C18.1046 19 19 18.1046 19 17V13C19 11.8954 18.1046 11 17 11H14.6569M9.00002 5.34312L10.6569 3.68629C11.4379 2.90524 12.7042 2.90524 13.4853 3.68629L16.3137 6.51472C17.0948 7.29577 17.0948 8.5621 16.3137 9.34315L7.82843 17.8284M5 15H5.01",
    stroke: "#9CA3AF",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 33
    }
  })), __jsx("button", {
    className: "text-lightGray font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }, "Activities"))), __jsx("button", {
    className: "w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex hover:bg-lightindigo hover:rounded-md border-0  w-full rounded-md pl-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, __jsx("svg", {
    className: "mr-2 w-4",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 29
    }
  }, __jsx("path", {
    d: "M10 2.35418C10.7329 1.52375 11.8053 1 13 1C15.2091 1 17 2.79086 17 5C17 7.20914 15.2091 9 13 9C11.8053 9 10.7329 8.47624 10 7.64582M13 19H1V18C1 14.6863 3.68629 12 7 12C10.3137 12 13 14.6863 13 18V19ZM13 19H19V18C19 14.6863 16.3137 12 13 12C11.9071 12 10.8825 12.2922 10 12.8027M11 5C11 7.20914 9.20914 9 7 9C4.79086 9 3 7.20914 3 5C3 2.79086 4.79086 1 7 1C9.20914 1 11 2.79086 11 5Z",
    stroke: "#9CA3AF",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 33
    }
  })), __jsx("button", {
    className: "text-lightGray font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 29
    }
  }, "Prospects"))), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "w-full  h-10",
    to: "/createcard",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "flex hover:bg-lightindigo hover:rounded-md border-0  w-full rounded-md pl-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }, __jsx("svg", {
    className: "mr-2 w-4",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 33
    }
  }, __jsx("path", {
    d: "M8.32463 2.31731C8.75103 0.560897 11.249 0.560897 11.6754 2.31731C11.9508 3.45193 13.2507 3.99038 14.2478 3.38285C15.7913 2.44239 17.5576 4.2087 16.6172 5.75218C16.0096 6.74925 16.5481 8.04918 17.6827 8.32463C19.4391 8.75103 19.4391 11.249 17.6827 11.6754C16.5481 11.9508 16.0096 13.2507 16.6172 14.2478C17.5576 15.7913 15.7913 17.5576 14.2478 16.6172C13.2507 16.0096 11.9508 16.5481 11.6754 17.6827C11.249 19.4391 8.75103 19.4391 8.32463 17.6827C8.04918 16.5481 6.74926 16.0096 5.75219 16.6172C4.2087 17.5576 2.44239 15.7913 3.38285 14.2478C3.99038 13.2507 3.45193 11.9508 2.31731 11.6754C0.560897 11.249 0.560897 8.75103 2.31731 8.32463C3.45193 8.04918 3.99037 6.74926 3.38285 5.75218C2.44239 4.2087 4.2087 2.44239 5.75219 3.38285C6.74926 3.99037 8.04918 3.45193 8.32463 2.31731Z",
    stroke: "#9CA3AF",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 37
    }
  }), __jsx("path", {
    d: "M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z",
    stroke: "#9CA3AF",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 37
    }
  })), __jsx("button", {
    className: "text-lightGray font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 33
    }
  }, "Settings")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (LeftSidebar);

/***/ }),

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
<<<<<<< HEAD
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\components\\RightSidebar\\RightSidebar.tsx";
=======
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\RightSidebar\\RightSidebar.tsx";
>>>>>>> staging
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
<<<<<<< HEAD
    className: "flex flex-col items-center  h-screen justify-center  ",
=======
    className: "flex flex-col items-center  h-screen justify-center px-6 ",
>>>>>>> staging
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

/***/ "./src/components/RightSidebar/components/CreateEmail/CreateEmail.tsx":
/*!****************************************************************************!*\
  !*** ./src/components/RightSidebar/components/CreateEmail/CreateEmail.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PersonalizedImageModal_PersonalizedImageModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PersonalizedImageModal/PersonalizedImageModal */ "./src/components/RightSidebar/components/PersonalizedImageModal/PersonalizedImageModal.tsx");
/* harmony import */ var _utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/generatesvgUrl */ "./src/utils/generatesvgUrl.ts");
/* harmony import */ var _services_templateService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/templateService */ "./src/services/templateService.ts");
<<<<<<< HEAD
/* harmony import */ var _SelectSocialMediaTemplateModal_SelectSocialMediaTemplateModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SelectSocialMediaTemplateModal/SelectSocialMediaTemplateModal */ "./src/components/RightSidebar/components/SelectSocialMediaTemplateModal/SelectSocialMediaTemplateModal.tsx");
/* harmony import */ var _PersonalizedCardSizeModal_PersonalizedCardSizeModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../PersonalizedCardSizeModal/PersonalizedCardSizeModal */ "./src/components/RightSidebar/components/PersonalizedCardSizeModal/PersonalizedCardSizeModal.tsx");
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\CreateEmail\\CreateEmail.tsx";
=======
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\CreateEmail\\CreateEmail.tsx";
>>>>>>> staging
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








<<<<<<< HEAD
 // const image1 = require("./../../../../assets/images/01.png");
// const image2 = require("./../../../../assets/images/02.png");
// const image3 = require("./../../../../assets/images/03.png");
// const image4 = require("./../../../../assets/images/04.png");
// const image5 = require("../../../../assets/images/card5.png")
// const socialmedia = require("../../../../assets/images/socialmedia.png")
// const email = require("../../../../assets/images/email.png")
// const plus = require("../../../../assets/images/plus.png")

=======
>>>>>>> staging
const CreateEmail = ({
  bio1,
  bio2,
  bio3,
  bio4
}) => {
  const svg1 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_5__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["ORIGINAL_SVG_updownicon"]);
<<<<<<< HEAD
  const {
    0: DisplayModals,
    1: setDisplayModals
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const svg = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_5__["default"])(bio4);
=======
  const svg = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_5__["default"])(bio4);
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [ShowToolTip, setShowToolTip] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [newModal, setNewModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
>>>>>>> staging
  const {
    data,
    error,
    isLoading
  } = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useQuery"])("templates", _services_templateService__WEBPACK_IMPORTED_MODULE_6__["template_service"].getAllTemplates);
  console.log({
    data
  });
  console.log({
    error
  });

  if (isLoading) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, "Getting all templates ..."));
  }

  if (!!error) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, error.message));
  }

<<<<<<< HEAD
  const handleclosemodal = () => {
    setDisplayModals("");
  };

  const HandleChangeDisplayModal = value => {
    setDisplayModals(value);
  };

=======
>>>>>>> staging
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 65,
=======
      lineNumber: 58,
>>>>>>> staging
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-col justify-center w-full mx-auto mt-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 66,
=======
      lineNumber: 59,
>>>>>>> staging
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-col px-2 py-4 mb-6 border-2 border-opacity-25 border-dashed rounded-lg border-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 67,
=======
      lineNumber: 60,
>>>>>>> staging
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-row justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 68,
=======
      lineNumber: 61,
>>>>>>> staging
      columnNumber: 21
    }
  }, __jsx("img", {
    src: svg,
    className: "mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 69,
=======
      lineNumber: 62,
>>>>>>> staging
      columnNumber: 25
    }
  }), __jsx("h1", {
    className: "text-base text-indigo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 71,
=======
      lineNumber: 64,
>>>>>>> staging
      columnNumber: 25
    }
  }, bio1)), __jsx("div", {
    className: "flex justify-center mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 73,
=======
      lineNumber: 66,
>>>>>>> staging
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "flex justify-center leading-4 text-center text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 74,
=======
      lineNumber: 67,
>>>>>>> staging
      columnNumber: 25
    }
  }, bio2)), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/createcard",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 78,
      columnNumber: 21
    }
  }), __jsx("button", {
    onClick: () => HandleChangeDisplayModal("PersonalizedImage"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
=======
      lineNumber: 71,
      columnNumber: 21
    }
  }), __jsx("button", {
    onClick: () => {
      setShowModal(true);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
>>>>>>> staging
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex flex-row justify-center p-2 mt-4 border-0 rounded-lg bg-indigo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 80,
=======
      lineNumber: 75,
>>>>>>> staging
      columnNumber: 25
    }
  }, __jsx("svg", {
    className: "mt-1 mr-4",
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 81,
=======
      lineNumber: 76,
>>>>>>> staging
      columnNumber: 29
    }
  }, __jsx("path", {
    d: "M7 2V12M12 7L2 7",
    stroke: "#EEF2FF",
    "stroke-width": "4",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 89,
=======
      lineNumber: 84,
>>>>>>> staging
      columnNumber: 33
    }
  })), __jsx("p", {
    className: "text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 98,
=======
      lineNumber: 93,
>>>>>>> staging
      columnNumber: 29
    }
  }, bio3))))), __jsx("div", {
    style: {
<<<<<<< HEAD
      display: DisplayModals === "PersonalizedImage" ? "" : "none"
=======
      display: showModal ? "" : "none"
>>>>>>> staging
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 320,
      columnNumber: 13
    }
  }, __jsx(_PersonalizedImageModal_PersonalizedImageModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    displayModalChange: HandleChangeDisplayModal,
    closeModal: handleclosemodal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      display: DisplayModals === "SocialMedia" ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 13
    }
  }, __jsx(_SelectSocialMediaTemplateModal_SelectSocialMediaTemplateModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    closeModal: handleclosemodal,
    displayModalChange: HandleChangeDisplayModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      display: DisplayModals === "CardSize" ? "" : "none"
=======
      lineNumber: 315,
      columnNumber: 13
    }
  }, __jsx(_PersonalizedImageModal_PersonalizedImageModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    closeModal: () => {
      setShowModal(false);
>>>>>>> staging
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 338,
      columnNumber: 13
    }
  }, __jsx(_PersonalizedCardSizeModal_PersonalizedCardSizeModal__WEBPACK_IMPORTED_MODULE_8__["default"] //    displayModalChange={HandleChangeDisplayModal}
  , {
    closeModal: handleclosemodal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
=======
      lineNumber: 316,
>>>>>>> staging
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateEmail);

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
<<<<<<< HEAD
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\ImagePreview\\ImagePreview.tsx";
=======
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\ImagePreview\\ImagePreview.tsx";
>>>>>>> staging
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

/***/ }),

<<<<<<< HEAD
/***/ "./src/components/RightSidebar/components/PersonalizedCardSizeModal/MockData.ts":
/*!**************************************************************************************!*\
  !*** ./src/components/RightSidebar/components/PersonalizedCardSizeModal/MockData.ts ***!
  \**************************************************************************************/
/*! exports provided: CardType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardType", function() { return CardType; });
const CardType = [{
  name: "Header",
  dimension: {
    width: 1920,
    height: 240
  }
}, {
  name: "Body",
  dimension: {
    width: 1080,
    height: 1080
  }
}, {
  name: "Footer",
  dimension: {
    width: 1080,
    height: 1080
  }
}];

/***/ }),

/***/ "./src/components/RightSidebar/components/PersonalizedCardSizeModal/PersonalizedCardSizeModal.tsx":
/*!********************************************************************************************************!*\
  !*** ./src/components/RightSidebar/components/PersonalizedCardSizeModal/PersonalizedCardSizeModal.tsx ***!
  \********************************************************************************************************/
=======
/***/ "./src/components/RightSidebar/components/PersonalizedImageModal/PersonalizedImageModal.tsx":
/*!**************************************************************************************************!*\
  !*** ./src/components/RightSidebar/components/PersonalizedImageModal/PersonalizedImageModal.tsx ***!
  \**************************************************************************************************/
>>>>>>> staging
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
<<<<<<< HEAD
/* harmony import */ var _MockData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MockData */ "./src/components/RightSidebar/components/PersonalizedCardSizeModal/MockData.ts");
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\PersonalizedCardSizeModal\\PersonalizedCardSizeModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import "../../../../../SubNavBar/components/ElementSelector/components/Stickers/styles.css";

// const header = require("../../../../assets/images/header.png")
// const body = require("../../../../assets/images/body.png")
// const featureimage = require("../../../../assets/images/featureimage.png")


const SelectSocialMediaTemplateModal = ({
  closeModal
}) => {
=======
/* harmony import */ var _Screens_CreateCardLayout_components_DesignTool_Components_SubNavBar_components_ElementSelector_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\PersonalizedImageModal\\PersonalizedImageModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const email = __webpack_require__(/*! ../../../../assets/images/email.png */ "./src/assets/images/email.png");

const socialmedia = __webpack_require__(/*! ../../../../assets/images/socialmedia.png */ "./src/assets/images/socialmedia.png");

const image1 = __webpack_require__(/*! ./../../../../assets/images/01.png */ "./src/assets/images/01.png");

const image2 = __webpack_require__(/*! ./../../../../assets/images/02.png */ "./src/assets/images/02.png");

const image3 = __webpack_require__(/*! ./../../../../assets/images/03.png */ "./src/assets/images/03.png");

const image4 = __webpack_require__(/*! ./../../../../assets/images/04.png */ "./src/assets/images/04.png");

const image5 = __webpack_require__(/*! ../../../../assets/images/card5.png */ "./src/assets/images/card5.png");

const plus = __webpack_require__(/*! ../../../../assets/images/plus.png */ "./src/assets/images/plus.png");

const header = __webpack_require__(/*! ../../../../assets/images/header.png */ "./src/assets/images/header.png");

const body = __webpack_require__(/*! ../../../../assets/images/body.png */ "./src/assets/images/body.png");

const featureimage = __webpack_require__(/*! ../../../../assets/images/featureimage.png */ "./src/assets/images/featureimage.png");

const PersonalizedImageModal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(({
  closeModal
}) => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [newModal, setNewModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [ShowToolTip, setShowToolTip] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const {
    0: CreatePersonalizedImageModal,
    1: setCreatePersonalizedImageModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // const [openDropDown, setopenDropDown] = useState(false);
  // const [openMergeDropdown, setopenMergeDropdown] = useState(false);

>>>>>>> staging
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
<<<<<<< HEAD
    className: "fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("div", {
    // ref={myRef}
    className: "relative max-w-3xl mx-auto my-6",
    style: {
      width: "765px"
=======
    className: "fixed inset-0 z-50 flex items-center justify-center h-full overflow-x-hidden overflow-y-scroll outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "relative z-50 mx-auto bg-white rounded-md",
    style: {
      width: "803px",
      height: "577px"
>>>>>>> staging
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex items-start justify-between p-5 rounded-t border-blueGray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "text-3xl font-bold leading-9 font-inter text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 29
    }
  }, "Create New Personalized Email"), __jsx("button", {
    className: "float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-20 focus:outline-none",
    onClick: closeModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "block w-6 h-6 text-2xl text-black bg-white outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 33
    }
  }, "\xD7"))), __jsx("div", {
    className: "relative flex-auto p-6 mb-6 text-lg font-bold text-createEmail font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }, " Create For Email"), __jsx("div", {
    className: "grid grid-cols-2 gap-x-12 gap-y-6  pl-2  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }, _MockData__WEBPACK_IMPORTED_MODULE_1__["CardType"].map((item, index) => __jsx("div", {
    key: item.name,
    style: {
      backgroundColor: index === 0 ? "white" : "white",
      height: index === 0 ? "160px" : "160px",
      width: index === 1 ? "300px" : "auto"
    },
    className: "relative h-40 border-2 border-transparent shadow-md gap-4 rounded-md  text-center pt-10 mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 65
    }
  }, __jsx("div", {
    style: {
      display: index === 2 ? "" : "none",
      marginTop: index === 2 ? "20px" : "20px",
      top: -50
    },
    className: "absolute  mt-6 mb-6 text-lg font-bold text-createEmail font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 37
    }
  }, "Create For Social Media"), __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "flex ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "mt-2 pl-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "font-bold text-left text-createEmail font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 49
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 53
    }
  }, item.name)), __jsx("div", {
    className: "text-sm text-createEmail2 font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 49
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 53
    }
  }, "Dimensions:", item.dimension.width, "  ", item.dimension.height)))))))))))), __jsx("div", {
    className: "fixed inset-0 z-0 bg-black opacity-25 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectSocialMediaTemplateModal);

/***/ }),

/***/ "./src/components/RightSidebar/components/PersonalizedImageModal/PersonalizedImageModal.tsx":
/*!**************************************************************************************************!*\
  !*** ./src/components/RightSidebar/components/PersonalizedImageModal/PersonalizedImageModal.tsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\PersonalizedImageModal\\PersonalizedImageModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import SearchBar from "../../../../Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar";

const email = __webpack_require__(/*! ../../../../assets/images/email.png */ "./src/assets/images/email.png");

const socialmedia = __webpack_require__(/*! ../../../../assets/images/socialmedia.png */ "./src/assets/images/socialmedia.png");

const image1 = __webpack_require__(/*! ./../../../../assets/images/01.png */ "./src/assets/images/01.png");

const image2 = __webpack_require__(/*! ./../../../../assets/images/02.png */ "./src/assets/images/02.png");

const image3 = __webpack_require__(/*! ./../../../../assets/images/03.png */ "./src/assets/images/03.png");

const image4 = __webpack_require__(/*! ./../../../../assets/images/04.png */ "./src/assets/images/04.png");

const image5 = __webpack_require__(/*! ../../../../assets/images/card5.png */ "./src/assets/images/card5.png");

const plus = __webpack_require__(/*! ../../../../assets/images/plus.png */ "./src/assets/images/plus.png");

const header = __webpack_require__(/*! ../../../../assets/images/header.png */ "./src/assets/images/header.png");

const body = __webpack_require__(/*! ../../../../assets/images/body.png */ "./src/assets/images/body.png");

const featureimage = __webpack_require__(/*! ../../../../assets/images/featureimage.png */ "./src/assets/images/featureimage.png");

const PersonalizedImageModal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(({
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center h-full overflow-x-hidden overflow-y-scroll outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("div", {
    // ref={myRef}
    className: "relative z-50 mx-auto bg-white rounded-md",
    style: {
      width: "803px",
      height: "577px"
=======
      lineNumber: 42,
      columnNumber: 21
    }
  }, " ", __jsx("div", {
    className: "relative flex flex-col w-full h-full border-0 rounded-lg shadow-lg outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "top-0 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex items-center mt-4 ml-auto mr-5 text-sm font-semibold leading-none text-black rounded-full outline-none focus:outline-none",
    onClick: () => closeModal(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "top-0 text-2xl outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 41
    }
  }, "\xD7"))), __jsx("div", {
    className: "px-32 mt-3 mb-3 text-3xl not-italic font-bold leading-9 text-center font-inter text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 33
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 37
    }
  }, "Where do you want to send your personalized image?"))), __jsx("div", {
    className: "flex justify-center gap-10 mt-8 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }, __jsx("div", {
    style: {
      width: "289px",
      height: "363px",
      boxShadow: " -16px 16px 20px  rgba(129,140,248,0.43)"
    },
    className: "rounded-md bg-SolidColor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 33
    }
  }, __jsx("button", {
    onClick: () => {
      setNewModal(true); // select Template modal

      setShowModal(false); //where do you want personalized image modal
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "flex justify-center mt-8 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 41
    }
  }, __jsx("img", {
    className: "w-32 h-16",
    src: socialmedia,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 45
    }
  })), __jsx("div", {
    className: "mb-2 mt-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 41
    }
  }, __jsx("h3", {
    className: "text-3xl not-italic font-bold leading-9 text-center text-white font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 45
    }
  }, "Social media")), __jsx("div", {
    className: "p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 41
    }
  }, __jsx("p", {
    className: "text-sm font-normal leading-5 text-center text-white font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 45
    }
  }, "You can get a code of the personalized image created and it use it on your preferred email marketing tool ")))), __jsx("div", {
    style: {
      width: "289px",
      height: "363px",
      boxShadow: " -16px 16px 20px  rgba(129,140,248,0.43)"
    },
    className: "rounded-md bg-SolidColor ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 33
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "flex justify-center mt-8 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 41
    }
  }, __jsx("img", {
    className: "w-20 h-16",
    src: email,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 45
    }
  })), __jsx("div", {
    className: "mb-2 mt-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 41
    }
  }, __jsx("h3", {
    className: "text-3xl not-italic font-bold leading-9 text-center text-white font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 45
    }
  }, "Email")), __jsx("div", {
    className: "p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 41
    }
  }, __jsx("p", {
    className: "text-sm font-normal leading-5 text-center text-white font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 45
    }
  }, "You can get a code of the personalized image created and it use it on your preferred email marketing tool "))))))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, newModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " ", __jsx("div", {
    className: "fixed z-50 flex items-center justify-center h-full overflow-x-hidden overflow-y-scroll outline-none inset-1 focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "relative z-50 max-w-4xl mx-auto my-6 bg-white rounded-md",
    style: {
      width: "1027px",
      height: "100vh"
>>>>>>> staging
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 37,
      columnNumber: 21
=======
      lineNumber: 108,
      columnNumber: 37
>>>>>>> staging
    }
  }, " ", __jsx("div", {
    className: "relative flex flex-col w-full h-full border-0 rounded-lg shadow-lg outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 43,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
=======
      lineNumber: 113,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 45
>>>>>>> staging
    }
  }, __jsx("div", {
    className: "top-0 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 45,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex items-center mt-4 ml-auto mr-5 text-sm font-semibold leading-none text-black rounded-full outline-none focus:outline-none",
    onClick: () => closeModal(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 37
=======
      lineNumber: 115,
      columnNumber: 49
    }
  }, __jsx("button", {
    className: "flex items-center ml-auto mr-2 text-sm font-semibold leading-none text-black rounded-full outline-none opacity-30 focus:outline-none" // onClick={() => setShowModal(false)}
    ,
    onClick: () => setNewModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 53
>>>>>>> staging
    }
  }, __jsx("span", {
    className: "top-0 text-2xl outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 50,
      columnNumber: 41
    }
  }, "\xD7"))), __jsx("div", {
    className: "px-32 mt-3 mb-3 text-3xl not-italic font-bold leading-9 text-center font-inter text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 33
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 37
    }
  }, "Where do you want to send your personalized image?"))), __jsx("div", {
    className: "flex justify-center gap-10 mt-8 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }, __jsx("div", {
    style: {
      width: "289px",
      height: "363px",
      boxShadow: " -16px 16px 20px  rgba(129,140,248,0.43)"
    },
    className: "rounded-md bg-SolidColor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }, __jsx("button", {
    onClick: () => displayModalChange("SocialMedia") // onClick={() => {
    //     setNewModal(true);// select Template modal
    //     setShowModal(false); //where do you want personalized image modal
    // }}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "flex justify-center mt-8 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 41
    }
  }, __jsx("img", {
    className: "w-32 h-16",
    src: socialmedia,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 45
    }
  })), __jsx("div", {
    className: "mb-2 mt-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 41
    }
  }, __jsx("h3", {
    className: "text-3xl not-italic font-bold leading-9 text-center text-white font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 45
    }
  }, "Social media")), __jsx("div", {
    className: "p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 41
    }
  }, __jsx("p", {
    className: "text-sm font-normal leading-5 text-center text-white font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 45
    }
  }, "You can get a code of the personalized image created and it use it on your preferred email marketing tool ")))), __jsx("div", {
    style: {
      width: "289px",
      height: "363px",
      boxShadow: " -16px 16px 20px  rgba(129,140,248,0.43)"
    },
    className: "rounded-md bg-SolidColor ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 33
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "flex justify-center mt-8 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 41
    }
  }, __jsx("img", {
    className: "w-20 h-16",
    src: email,
=======
      lineNumber: 121,
      columnNumber: 57
    }
  }, "\xD7"))), __jsx("div", {
    className: "flex items-start justify-between w-full px-5 pb-5 border-b border-solid rounded-t border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 49
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 53
    }
  }, __jsx("h3", {
    className: "text-2xl font-semibold text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 57
    }
  }, "Select Template")), __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "flex flex-row h-8 px-2 border-2 rounded-md text-gray900 w border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 57
    }
  }, __jsx("select", {
    className: "pr-2 text-sm border-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 61
    }
  }, __jsx("option", {
    selected: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 65
    }
  }, "Social media"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 65
    }
  }, "Email")))))), __jsx("div", {
    className: "flex justify-center w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "w-3/6 mt-3 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 49
    }
  }, __jsx(_Screens_CreateCardLayout_components_DesignTool_Components_SubNavBar_components_ElementSelector_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 53
    }
  }))), __jsx("div", {
    className: "flex gap-4 px-6 mt-3 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 45
    }
  }, __jsx("button", {
    className: "h-10 px-4 py-1 text-sm not-italic font-medium leading-5 rounded-md bg-lightindigo text-indigo700 font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 49
    }
  }, "Employee"), __jsx("button", {
    className: "h-10 px-3 py-1 text-sm not-italic font-medium leading-5 rounded-md bg-lightindigo text-indigo700 font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 49
    }
  }, "Events"), __jsx("button", {
    className: "h-10 px-4 py-1 text-sm not-italic font-medium leading-5 rounded-md bg-lightindigo text-indigo700 font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 49
    }
  }, "Promotion"), __jsx("button", {
    className: "h-10 px-3 py-1 text-sm not-italic font-medium leading-5 rounded-md bg-lightindigo text-indigo700 font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 49
    }
  }, "Property")), __jsx("div", {
    className: "flex justify-between w-full px-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 45
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 49
    }
  }, __jsx("h1", {
    className: "mt-6 text-2xl not-italic font-bold leading-9 font-inter text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 53
    }
  }, "Your Designs")), __jsx("div", {
    className: "mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 49
    }
  }, __jsx("button", {
    className: "text-base not-italic font-medium leading-5 font-inter text-grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 53
    }
  }, "See all"))), __jsx("div", {
    className: "relative flex-auto p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "flex flex-row gap-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "h-28",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 53
    }
  }, __jsx("button", {
    onClick: () => {
      setCreatePersonalizedImageModal(true);
      setNewModal(false);
      setShowModal(false); //where do you want personalized image modal
    },
    className: "flex flex-col items-center justify-center py-3 border-2 border-dashed rounded-md w-52 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 57
    }
  }, __jsx("img", {
    className: "w-8 h-8",
    src: plus,
>>>>>>> staging
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 84,
      columnNumber: 45
    }
  })), __jsx("div", {
    className: "mb-2 mt-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 41
    }
  }, __jsx("h3", {
    className: "text-3xl not-italic font-bold leading-9 text-center text-white font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 45
    }
  }, "Email")), __jsx("div", {
    className: "p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 41
    }
  }, __jsx("p", {
    className: "text-sm font-normal leading-5 text-center text-white font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 45
    }
  }, "You can get a code of the personalized image created and it use it on your preferred email marketing tool ")))))))), __jsx("div", {
    className: "fixed inset-0 z-40 bg-black opacity-25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (PersonalizedImageModal);

/***/ }),

/***/ "./src/components/RightSidebar/components/SelectSocialMediaTemplateModal/SelectSocialMediaTemplateModal.tsx":
/*!******************************************************************************************************************!*\
  !*** ./src/components/RightSidebar/components/SelectSocialMediaTemplateModal/SelectSocialMediaTemplateModal.tsx ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Screens_CreateCardLayout_components_DesignTool_Components_SubNavBar_components_ElementSelector_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar.tsx");
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\SelectSocialMediaTemplateModal\\SelectSocialMediaTemplateModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import "../../../../../SubNavBar/components/ElementSelector/components/Stickers/styles.css";

 // const svg1 = require("./../../../../../../../../../../assets/images/svg.png");
// const image2 = require("./../../../../../../../../../../assets/images/image1.png");
// const image3 = require("./../../../../../../../../../../assets/images/image3.png");
// const image4 = require("./../../../../../../../../../../assets/images/image4.png");
// const image5 = require("./../../../../../../../../../../assets/images/image5.png");
// const plusimage = require("../../../../../../../../../../assets/images/plus.png");

const SelectSocialMediaTemplateModal = ({
  closeModal,
  displayModalChange
}) => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [ShowToolTip, setShowToolTip] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    // ref={myRef}
    className: "fixed z-50 flex items-center justify-center h-full overflow-x-hidden overflow-y-scroll outline-none inset-1 focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative z-50 max-w-4xl mx-auto my-6 bg-white rounded-md",
    style: {
      width: "1027px",
      height: "100vh"
=======
      lineNumber: 184,
      columnNumber: 61
    }
  }), __jsx("p", {
    className: "mt-0 text-sm text-lightGray ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 61
    }
  }, "Create New Personalized Template"), __jsx("div", {
    className: "relative flex items-center justify-end ml-44",
    onClick: () => setShowToolTip(!ShowToolTip),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 61
    }
  }, __jsx("button", {
    onClick: () => setShowToolTip(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 65
    }
  }, __jsx("svg", {
    className: "",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 69
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55229 6.44772 9 7 9V12C7 12.5523 7.44772 13 8 13H9C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11V8C9 7.44772 8.55228 7 8 7H7Z",
    fill: "#4338CA",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 73
    }
  }))), ShowToolTip ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "absolute bottom-0 flex flex-col mb-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 73
    }
  }, __jsx("span", {
    className: "relative z-auto w-full h-24 p-3 text-xs leading-none text-white whitespace-no-wrap rounded-md shadow-lg ml-60 bg-indigo500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 77
    }
  }, "You can create a template from scratch by adding images and elements from our vast library. Once you create a tamplate you can reuse it again for multiple campaigns", __jsx("div", {
    className: "flex justify-start mt-3 mb-3 text-sm font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 81
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 85
    }
  }, "Got it"))), __jsx("div", {
    className: "z-50 flex justify-end w-3 h-3 -mt-2 transform rotate-45 bg-indigo500",
    style: {
      marginLeft: "350px"
>>>>>>> staging
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 37,
      columnNumber: 17
    }
  }, " ", __jsx("div", {
    className: "relative flex flex-col w-full h-full border-0 rounded-lg shadow-lg outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "top-0 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
    }
  }, __jsx("button", {
    className: "flex items-center ml-auto mr-2 text-sm font-semibold leading-none text-black rounded-full outline-none opacity-30 focus:outline-none" // onClick={() => setShowModal(false)}
    ,
    onClick: closeModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "top-0 text-2xl outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 37
    }
  }, "\xD7"))), __jsx("div", {
    className: "flex items-start justify-between w-full px-5 pb-5 border-b border-solid rounded-t border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "text-2xl font-semibold text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 37
    }
  }, "Select Template")), __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "flex flex-row h-8 px-2 border-2 rounded-md text-gray900 w border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 37
    }
  }, __jsx("select", {
    className: "pr-2 text-sm border-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 41
    }
  }, __jsx("option", {
    selected: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 45
    }
  }, "Social media"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 45
    }
  }, "Email")))))), __jsx("div", {
    className: "flex justify-center w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "w-3/6 mt-3 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 29
    }
  }, __jsx(_Screens_CreateCardLayout_components_DesignTool_Components_SubNavBar_components_ElementSelector_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: "flex gap-4 px-6 mt-3 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, __jsx("button", {
    className: "h-10 px-4 py-1 text-sm not-italic font-medium leading-5 rounded-md bg-lightindigo text-indigo700 font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 29
    }
  }, "Employee"), __jsx("button", {
    className: "h-10 px-3 py-1 text-sm not-italic font-medium leading-5 rounded-md bg-lightindigo text-indigo700 font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }, "Events"), __jsx("button", {
    className: "h-10 px-4 py-1 text-sm not-italic font-medium leading-5 rounded-md bg-lightindigo text-indigo700 font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }, "Promotion"), __jsx("button", {
    className: "h-10 px-3 py-1 text-sm not-italic font-medium leading-5 rounded-md bg-lightindigo text-indigo700 font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 29
    }
  }, "Property")), __jsx("div", {
    className: "flex justify-between w-full px-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 29
    }
  }, __jsx("h1", {
    className: "mt-6 text-2xl not-italic font-bold leading-9 font-inter text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 33
    }
  }, "Your Designs")), __jsx("div", {
    className: "mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 29
=======
      lineNumber: 221,
      columnNumber: 77
    }
  }))) : null))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 53
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 57
    }
  }, __jsx("img", {
    src: image5,
    className: "rounded-md",
    width: "200",
    height: "110",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 61
    }
  }), __jsx("p", {
    className: "mt-2 text-sm not-italic font-semibold text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 61
    }
  }, "Welcome card for employee"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 61
    }
  }, __jsx("p", {
    className: "text-sm not-italic font-normal leading-5 font-inter text-createcolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 65
    }
  }, "Creators:")))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 53
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 57
    }
  }, __jsx("img", {
    src: image2,
    className: "rounded-md",
    width: "200",
    height: "110",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 61
    }
  }), __jsx("p", {
    className: "mt-2 text-sm not-italic font-semibold text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 61
    }
  }, "Warm welcome to employees"), __jsx("p", {
    className: "text-sm not-italic font-normal leading-5 font-inter text-createcolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 61
    }
  }, "Creators:"))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 53
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 57
    }
  }, __jsx("img", {
    src: image2,
    className: "rounded-md",
    width: "200",
    height: "110",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 61
    }
  }), __jsx("p", {
    className: "mt-2 text-sm not-italic font-semibold text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 61
    }
  }, "Warm welcome to employees"), __jsx("p", {
    className: "text-sm not-italic font-normal leading-5 font-inter text-createcolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 61
    }
  }, "Creators:"))))), __jsx("div", {
    className: "flex justify-between w-full px-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 45
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 49
    }
  }, __jsx("h1", {
    className: "mt-4 text-2xl not-italic font-bold leading-9 font-inter text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 53
    }
  }, "For you")), __jsx("div", {
    className: "flex justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "mt-4 mr-3 border-2 rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 53
    }
  }, __jsx("select", {
    className: "pr-2 text-sm border-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 57
    }
  }, __jsx("option", {
    selected: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 61
    }
  }, "Most popular"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 61
    }
  }, "Great Option"))), __jsx("div", {
    className: "mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 53
>>>>>>> staging
    }
  }, __jsx("button", {
    className: "text-base not-italic font-medium leading-5 font-inter text-grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 98,
      columnNumber: 33
    }
  }, "See all"))), __jsx("div", {
=======
      lineNumber: 294,
      columnNumber: 57
    }
  }, "See all")))), __jsx("div", {
>>>>>>> staging
    className: "relative flex-auto p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 102,
      columnNumber: 25
=======
      lineNumber: 299,
      columnNumber: 45
>>>>>>> staging
    }
  }, __jsx("div", {
    className: "flex flex-row gap-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 103,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "h-28",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 33
    }
  }, __jsx("button", {
    onClick: () => displayModalChange("CardSize"),
    className: "flex flex-col items-center justify-center py-3 border-2 border-dashed rounded-md w-52 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: "mt-0 text-sm text-lightGray ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 41
    }
  }, "Create New Personalized Template"), __jsx("div", {
    className: "relative flex items-center justify-end ml-44",
    onClick: () => setShowToolTip(!ShowToolTip),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 41
    }
  }, __jsx("button", {
    onClick: () => setShowToolTip(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 45
    }
  }, __jsx("svg", {
    className: "",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 49
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55229 6.44772 9 7 9V12C7 12.5523 7.44772 13 8 13H9C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11V8C9 7.44772 8.55228 7 8 7H7Z",
    fill: "#4338CA",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 53
    }
  }))), ShowToolTip ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "absolute bottom-0 flex flex-col mb-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 53
    }
  }, __jsx("span", {
    className: "relative z-auto w-full h-24 p-3 text-xs leading-none text-white whitespace-no-wrap rounded-md shadow-lg ml-60 bg-indigo500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 57
    }
  }, "You can create a template from scratch by adding images and elements from our vast library. Once you create a tamplate you can reuse it again for multiple campaigns", __jsx("div", {
    className: "flex justify-start mt-3 mb-3 text-sm font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 61
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 65
    }
  }, "Got it"))), __jsx("div", {
    className: "z-50 flex justify-end w-3 h-3 -mt-2 transform rotate-45 bg-indigo500",
    style: {
      marginLeft: "350px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 57
    }
  }))) : null))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: "mt-2 text-sm not-italic font-semibold text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 41
    }
  }, "Welcome card for employee"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 41
    }
  }, __jsx("p", {
    className: "text-sm not-italic font-normal leading-5 font-inter text-createcolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 45
    }
  }, "Creators:")))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: "mt-2 text-sm not-italic font-semibold text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 41
    }
  }, "Warm welcome to employees"), __jsx("p", {
    className: "text-sm not-italic font-normal leading-5 font-inter text-createcolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 41
    }
  }, "Creators:"))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: "mt-2 text-sm not-italic font-semibold text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 41
    }
  }, "Warm welcome to employees"), __jsx("p", {
    className: "text-sm not-italic font-normal leading-5 font-inter text-createcolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 41
    }
  }, "Creators:"))))), __jsx("div", {
    className: "flex justify-between w-full px-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 29
    }
  }, __jsx("h1", {
    className: "mt-4 text-2xl not-italic font-bold leading-9 font-inter text-gray94",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 33
    }
  }, "For you")), __jsx("div", {
    className: "flex justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "mt-4 mr-3 border-2 rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 33
    }
  }, __jsx("select", {
    className: "pr-2 text-sm border-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 37
    }
  }, __jsx("option", {
    selected: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 41
    }
  }, "Most popular"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 41
    }
  }, "Great Option"))), __jsx("div", {
    className: "mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "text-base not-italic font-medium leading-5 font-inter text-grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 37
    }
  }, "See all")))), __jsx("div", {
    className: "relative flex-auto p-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "flex flex-row gap-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 29
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: "mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 41
    }
  }, "Warm welcome to employees"))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: "mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 41
    }
  }, "Card design"))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: "mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 41
    }
  }, "Warm welcome to employees                                                            "))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: "mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 41
    }
  }, "Warm welcome to employees")))))))), __jsx("div", {
=======
      lineNumber: 300,
      columnNumber: 49
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 53
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 57
    }
  }, __jsx("img", {
    src: image4,
    className: "rounded-md",
    width: "200",
    height: "110",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 61
    }
  }), __jsx("p", {
    className: "mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 61
    }
  }, "Warm welcome to employees"))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 53
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 57
    }
  }, __jsx("img", {
    src: image3,
    className: "rounded-md",
    width: "200",
    height: "110",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 61
    }
  }), __jsx("p", {
    className: "mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 61
    }
  }, "Card design"))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 53
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 57
    }
  }, __jsx("img", {
    src: image1,
    className: "rounded-md",
    width: "200",
    height: "110",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 61
    }
  }), __jsx("p", {
    className: "mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 61
    }
  }, "Warm welcome to employees                                                            "))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 53
    }
  }, __jsx("button", {
    className: "flex flex-col items-center justify-center rounded-md border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 57
    }
  }, __jsx("img", {
    src: image3,
    className: "rounded-md",
    width: "200",
    height: "110",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 61
    }
  }), __jsx("p", {
    className: "mt-1 text-sm not-italic font-semibold leading-5 font-inter text-lightGray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 61
    }
  }, "Warm welcome to employees")))))))), __jsx("div", {
    className: "fixed inset-0 z-40 bg-black opacity-25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 33
    }
  })) : null), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 21
    }
  }, CreatePersonalizedImageModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "relative w-auto max-w-3xl mx-auto my-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "flex items-start justify-between p-5 rounded-t border-blueGray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 45
    }
  }, __jsx("h3", {
    className: "text-3xl font-bold leading-9 font-inter text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 49
    }
  }, "Create New Personalized Email"), __jsx("button", {
    className: "float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-20 focus:outline-none",
    onClick: () => setCreatePersonalizedImageModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 49
    }
  }, __jsx("span", {
    className: "block w-6 h-6 text-2xl text-black bg-white outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 53
    }
  }, "\xD7"))), __jsx("div", {
    className: "relative flex-auto p-6 mb-6 text-lg font-bold text-createEmail font-inter ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 45
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 49
    }
  }, " Create For Email"), __jsx("div", {
    className: "flex justify-between gap-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "h-40 border-2 border-transparent shadow-md w-96 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 53
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 57
    }
  }, __jsx("div", {
    className: "flex p-10 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 61
    }
  }, __jsx("img", {
    src: header,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 65
    }
  }), __jsx("div", {
    className: "mt-2 ml-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 65
    }
  }, __jsx("div", {
    className: "font-bold text-left text-createEmail font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 69
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 73
    }
  }, "HEADER")), __jsx("div", {
    className: "text-sm text-createEmail2 font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 69
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 73
    }
  }, "Dimensions:1920x240")))))), __jsx("div", {
    className: "h-40 border-2 border-transparent shadow-md w-72 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 53
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 57
    }
  }, __jsx("div", {
    className: "flex p-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 61
    }
  }, __jsx("img", {
    src: body,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 65
    }
  }), __jsx("div", {
    className: "mt-2 ml-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 65
    }
  }, __jsx("div", {
    className: "font-bold text-left text-createEmail font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 69
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 73
    }
  }, "BODY")), __jsx("div", {
    className: "text-sm text-createEmail2 font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 69
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 73
    }
  }, "Dimensions:1080x1080"))))))), __jsx("div", {
    className: "mt-6 mb-6 text-lg font-bold text-createEmail font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 49
    }
  }, "Create For Social Media"), __jsx("div", {
    className: "flex justify-between gap-4 mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 49
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "h-40 border-2 border-transparent shadow-md w-96 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 57
    }
  }, __jsx("div", {
    className: "flex p-10 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 61
    }
  }, __jsx("img", {
    src: featureimage,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 65
    }
  }), __jsx("div", {
    className: "mt-2 ml-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 65
    }
  }, __jsx("div", {
    className: "font-bold text-left text-createEmail font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 69
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 73
    }
  }, "Feature IMAGE")), __jsx("div", {
    className: "text-sm text-createEmail2 font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 69
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 73
    }
  }, "Dimensions:1080x1080"))))))))))), __jsx("div", {
    className: "fixed inset-0 z-0 bg-black opacity-25 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 33
    }
  })) : null)), __jsx("div", {
>>>>>>> staging
    className: "fixed inset-0 z-40 bg-black opacity-25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 282,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectSocialMediaTemplateModal);
=======
      lineNumber: 456,
      columnNumber: 17
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (PersonalizedImageModal);
>>>>>>> staging

/***/ }),

/***/ "./src/components/RightSidebar/components/SocialStats/SocialStats.tsx":
/*!****************************************************************************!*\
  !*** ./src/components/RightSidebar/components/SocialStats/SocialStats.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../utils/generatesvgUrl */ "./src/utils/generatesvgUrl.ts");
<<<<<<< HEAD
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\SocialStats\\SocialStats.tsx";
=======
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\SocialStats\\SocialStats.tsx";
>>>>>>> staging
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const image1 = __webpack_require__(/*! ./../../../../assets/images/fb.png */ "./src/assets/images/fb.png");

const image2 = __webpack_require__(/*! ./../../../../assets/images/insta.png */ "./src/assets/images/insta.png");

const StatGraph = ({
  fb_impressions,
  fb_clicks,
  socialmedia1,
  insta_impressions,
  insta_clicks,
  socialmedia2
}) => {
  const svg1 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_updownicon"]);
  const svg2 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_bluedoticon"]);
  const svg3 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_greendoticon"]);
  return __jsx("div", {
    className: " border shadow-md rounded-md bg-white  w-full   py-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-xl leading-7 font-medium px-6 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, "Sources")), __jsx("div", {
    className: "bg-jacksonsGray text-gray95 text-xs w-full flex flex-row leading-4 font-medium h-10 justify-start px-6 items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "w-32 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, "Name"), __jsx("h1", {
    className: "w-20 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, "Clicks"), __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, "Impressions")), __jsx("div", {
    className: " text-gray95 text-xs w-full flex flex-row leading-4 font-medium h-10 justify-start px-6 items-center mb-2 mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-row w-32 items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image1,
    className: "w-7 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }), __jsx("h1", {
    className: "pl-2 text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, " ", socialmedia1)), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "w-20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, fb_clicks)), __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, fb_impressions)), __jsx("div", {
    className: " text-gray95 text-xs w-full flex flex-row leading-4 font-medium h-10 justify-start px-6 items-center mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-row w-32 items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image1,
    className: "w-7 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }), __jsx("h1", {
    className: "pl-2 text-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, " ", socialmedia2)), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "w-20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, insta_clicks)), __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, insta_impressions)));
};

/* harmony default export */ __webpack_exports__["default"] = (StatGraph);

/***/ }),

/***/ "./src/components/RightSidebar/components/StatGraph/StatGraph.tsx":
/*!************************************************************************!*\
  !*** ./src/components/RightSidebar/components/StatGraph/StatGraph.tsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../utils/generatesvgUrl */ "./src/utils/generatesvgUrl.ts");
<<<<<<< HEAD
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\StatGraph\\StatGraph.tsx";
=======
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\components\\RightSidebar\\components\\StatGraph\\StatGraph.tsx";
>>>>>>> staging
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const image = __webpack_require__(/*! ./../../../../assets/images/Chart.png */ "./src/assets/images/Chart.png");

const StatGraph = ({
  impressions,
  link_clicks,
  conversionrate
}) => {
  const svg1 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_updownicon"]);
  const svg2 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_bluedoticon"]);
  const svg3 = Object(_utils_generatesvgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_1__["ORIGINAL_SVG_greendoticon"]);
  return __jsx("div", {
    className: "  rounded-md bg-white  w-full px-4  py-6 shadow-md border",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-row justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "text-xl text-black leading-7 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, "Stats")), __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-row px-2 border-2 border-bordercolor rounded-md  mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "pr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, "Last week "), __jsx("img", {
    className: "w-2 ",
    src: svg1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "flex flex-row px-2 border-2 border-bordercolor rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "pr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, "Sources "), __jsx("img", {
    className: "w-2 ",
    src: svg1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  })))), __jsx("div", {
    className: "flex flex-row mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-col border-r-2 border-bordercolor pr-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx("img", {
    className: "",
    src: svg2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }), __jsx("h1", {
    className: "ml-2 text-xs text-gray95 leading-4 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, "Impressions")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "text-sm text-lightGray leading-5 font-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }, impressions))), __jsx("div", {
    className: "flex flex-col  px-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx("img", {
    className: "",
    src: svg3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }), __jsx("h1", {
    className: "ml-2 text-xs text-gray95 leading-4 font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, "Link Clicks")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "text-sm text-lightGray leading-5 font-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, link_clicks)))), __jsx("div", {
    className: "mt-4 flex justify-end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "bg-indigo100 text-sm leading-5 font-normal border-0 rounded-xl text-lightGray px-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, conversionrate, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 132
    }
  }, "%"))), __jsx("div", {
    className: "flex justify-end mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "text-base text-gray95 leading-4 font-medium mt-1 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, "Conversion rate")), __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: image,
    className: "w-10/12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (StatGraph);

/***/ }),

/***/ "./src/services/templateService.ts":
/*!*****************************************!*\
  !*** ./src/services/templateService.ts ***!
  \*****************************************/
/*! exports provided: template_service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template_service", function() { return template_service; });
const URL_ENDPOINTS = {
  getAllTemplatesURL: "https://polar-tor-04971.herokuapp.com/template",
  getTemplateByIdURL: "https://polar-tor-04971.herokuapp.com/template",
  createTemplateURL: "https://polar-tor-04971.herokuapp.com/template",
  updateTemplateByIdURL: "https://polar-tor-04971.herokuapp.com/template",
  deleteTemplateByIdURL: "https://polar-tor-04971.herokuapp.com/template"
};
const template_service = {
  getAllTemplates,
  addNewTemplate,
  getTemplateByID,
  updateTemplateByID,
  deleteTemplateByID
};

async function getAllTemplates() {
  const response = await fetch(URL_ENDPOINTS.getAllTemplatesURL);

  if (!response.ok) {
    throw new Error("Error while fetching Templates");
  }

  return response.json();
}

async function addNewTemplate(templateData) {
  const response = await fetch(URL_ENDPOINTS.createTemplateURL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(templateData)
  });

  if (!response.ok) {
    throw new Error("Error while adding new template");
  }

  return response.json();
}

async function getTemplateByID(templateID) {
  const response = await fetch(`${URL_ENDPOINTS.getAllTemplatesURL}/${templateID}`);

  if (!response.ok) {
    throw new Error("Error while fetching Templates");
  }

  return response.json();
}

async function updateTemplateByID(templateID, templateData) {
  console.log({
    JSON: JSON.stringify(templateData),
    templateData
  });
  const response = await fetch(`${URL_ENDPOINTS.updateTemplateByIdURL}/${templateID}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(templateData)
  });
  console.log({
    response
  });

  if (!response.ok) {
    throw new Error("Error while updating template");
  }

  return response.json();
}

async function deleteTemplateByID(templateID) {
  const response = await fetch(`${URL_ENDPOINTS.deleteTemplateByIdURL}/${templateID}`, {
    method: "DELETE"
  });
  console.log({
    response
  });

  if (!response.ok) {
    throw new Error("Error while updating template");
  }

  return response.json();
}

/***/ }),

/***/ "./src/utils/generatesvgUrl.ts":
/*!*************************************!*\
  !*** ./src/utils/generatesvgUrl.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return generatesvgUrl; });
function generatesvgUrl(svg) {
  let blob = new Blob([svg], {
    type: 'image/svg+xml'
  });
  let url = URL.createObjectURL(blob);
  return url;
}

/***/ })

};;
//# sourceMappingURL=1.chunk.js.map