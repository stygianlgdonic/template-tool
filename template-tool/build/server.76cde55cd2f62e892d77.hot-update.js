exports.id = "server";
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);


let app = __webpack_require__(/*! ./server */ "./src/server.tsx").default;

if (true) {
  module.hot.accept(/*! ./server */ "./src/server.tsx", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (() => {
    console.log('🔁  HMR Reloading `./server`...');

    try {
      app = __webpack_require__(/*! ./server */ "./src/server.tsx").default;
    } catch (error) {
      console.error(error);
    }
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
  console.info('✅  Server-side HMR Enabled!');
}

const port =  true ? parseInt("3000") : undefined;
/* harmony default export */ __webpack_exports__["default"] = (express__WEBPACK_IMPORTED_MODULE_0___default()().use((req, res) => app.handle(req, res)).listen(port, () => {
  console.log(`> App started http://localhost:${port}`);
}));

/***/ })

};
//# sourceMappingURL=server.76cde55cd2f62e892d77.hot-update.js.map