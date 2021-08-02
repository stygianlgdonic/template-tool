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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\App.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Dashboard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ./Screens/Dashboard/Dashboard */ "./src/Screens/Dashboard/Dashboard.tsx")));
const CreateCardLayout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./Screens/CreateCardLayout/CreateCardLayout */ "./src/Screens/CreateCardLayout/CreateCardLayout.tsx")));

const App = () => {
  const routing = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useRoutes"])([{
    path: '/',
    element: __jsx(Dashboard, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 31
      }
    })
  }]);
  return {
    routing
  };
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/NoSSR.tsx":
false,

/***/ "./src/contexts/TemplateContext.tsx":
false,

/***/ "./src/server.tsx":
/*!************************!*\
  !*** ./src/server.tsx ***!
  \************************/
/*! exports provided: renderApp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderApp", function() { return renderApp; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\server.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




let assets;

const syncLoadAssets = () => {
  assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");
};

syncLoadAssets();

const cssLinksFromAssets = (assets, entrypoint) => {
  return assets[entrypoint] ? assets[entrypoint].css ? assets[entrypoint].css.map(asset => `<link rel="stylesheet" href="${asset}">`).join('') : '' : '';
};

const jsScriptTagsFromAssets = (assets, entrypoint, extra = '') => {
  return assets[entrypoint] ? assets[entrypoint].js ? assets[entrypoint].js.map(asset => `<script src="${asset}"${extra}></script>`).join('') : '' : '';
};

const renderApp = (req, res) => {
  const context = {};
  const markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__["renderToString"])(__jsx(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }));

  if (context.url) {
    return {
      redirect: context.url
    };
  } else {
    const html = // prettier-ignore
    `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${cssLinksFromAssets(assets, 'client')}
    </head>
    <body>
        <div id="root">${markup}</div>
        ${jsScriptTagsFromAssets(assets, 'client', ' defer crossorigin')}
    </body>
  </html>`;
    return {
      html
    };
  }
};
const server = express__WEBPACK_IMPORTED_MODULE_0___default()().disable('x-powered-by').use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static("C:\\Users\\HP\\cardclan-backend\\client\\public")).get('/*', (req, res) => {
  const {
    html = '',
    redirect = false
  } = renderApp(req, res);

  if (redirect) {
    res.redirect(redirect);
  } else {
    res.send(html);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ }),

/***/ "./src/utils/defaults.ts":
false

};
//# sourceMappingURL=server.1bd3784859b599697354.hot-update.js.map