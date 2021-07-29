exports.id = "server";
exports.modules = {

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var _NoSSR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoSSR */ "./src/NoSSR.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contexts/DesignToolContext */ "./src/contexts/DesignToolContext.tsx");
/* harmony import */ var _contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contexts/TemplateContext */ "./src/contexts/TemplateContext.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\App.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Dashboard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./Screens/Dashboard/Dashboard */ "./src/Screens/Dashboard/Dashboard.tsx")));
const CreateCardLayout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./../src/Screens/CreateCardLayout/CreateCardLayout */ "./src/Screens/CreateCardLayout/CreateCardLayout.tsx")));

const App = () => {
  return (// <Suspense fallback={
    //     <Dashboard />
    // }>
    __jsx(_NoSSR__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Routes"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      path: "/",
      element: __jsx(Dashboard, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 42
        }
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      path: "/sss",
      element: __jsx(Centerboard, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 49
        }
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }
    }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      path: "/404",
      element: __jsx(LeftSidebar, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 49
        }
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }
    })), __jsx(_contexts_DesignToolContext__WEBPACK_IMPORTED_MODULE_5__["DesignToolProvider"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }, __jsx(_contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_6__["TemplateProvider"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }
    }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      path: "createcard",
      element: __jsx(CreateCardLayout, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 59
        }
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 25
      }
    }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      path: "/sss",
      element: __jsx(Centerboard, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 57
        }
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 29
      }
    }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      path: "/404",
      element: __jsx(LeftSidebar, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 57
        }
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 29
      }
    })))))) // </Suspense>

  );
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/CreateCardLayout.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/Card.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/MainStage/index.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/Rectangle.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UCircle.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UImage.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/ULine.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UPolygon.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/USvg.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UText.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UTransformer.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/index.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/CardHeader.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/TextHeader/TextHeader.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/NavBar/NavBar.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/SubNavBar.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/BackgroundSelector.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/components/AddBackgroundImage/AddBackgroundImage.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/components/BackgroundColor/BackgroundColor.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/BackgroundSelector/style.css":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/ElementSelector.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Buttons/Buttons.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/SearchBar/SearchBar.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Shapes/Shapes.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Stickers/Stickers.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Stickers/styles.css":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ImageSelector/ImageSelector.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ImageSelector/components/Frames/Frames.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/TextSelector.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/DesigntTool.tsx":
false,

/***/ "./src/Screens/CreateCardLayout/components/Header/Header.tsx":
false,

/***/ "./src/Screens/Dashboard/Dashboard.tsx":
false,

/***/ "./src/assets/images/ALP-Summer.png":
false,

/***/ "./src/assets/images/Chart.png":
false,

/***/ "./src/assets/images/card1.png":
false,

/***/ "./src/assets/images/card2.png":
false,

/***/ "./src/assets/images/circle.png":
false,

/***/ "./src/assets/images/fb.png":
false,

/***/ "./src/assets/images/insta.png":
false,

/***/ "./src/assets/images/polygon.png":
false,

/***/ "./src/assets/images/square.png":
false,

/***/ "./src/components/Centerboard/Centerboard.tsx":
false,

/***/ "./src/components/Centerboard/components/HomeCard/HomeCard.tsx":
false,

/***/ "./src/components/Centerboard/components/ImagesInfo/ImageStat/ImageStat.tsx":
false,

/***/ "./src/components/Centerboard/components/ImagesInfo/ImagesInfo.tsx":
false,

/***/ "./src/components/Centerboard/components/RecentActivity/RecentActivity.tsx":
false,

/***/ "./src/components/Centerboard/components/StatCard/StatCard.tsx":
false,

/***/ "./src/components/Centerboard/components/StatsCardinfo/StatCardinfo.tsx":
false,

/***/ "./src/components/LeftSideBar/1.jpg":
false,

/***/ "./src/components/LeftSideBar/LeftSidebar.tsx":
false,

/***/ "./src/components/RightSidebar/RightSidebar.tsx":
false,

/***/ "./src/components/RightSidebar/components/CreateEmail/CreateEmail.tsx":
false,

/***/ "./src/components/RightSidebar/components/ImagePreview/ImagePreview.tsx":
false,

/***/ "./src/components/RightSidebar/components/SocialStats/SocialStats.tsx":
false,

/***/ "./src/components/RightSidebar/components/StatGraph/StatGraph.tsx":
false,

/***/ "./src/utils/generatesvgUrl.ts":
false,

/***/ "./src/utils/svg.ts":
false

};
//# sourceMappingURL=server.434125279e3069d2f514.hot-update.js.map