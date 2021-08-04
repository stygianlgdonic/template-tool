exports.id = "server";
exports.modules = {

/***/ "./src/utils/generateSvgUrl.ts":
/*!*************************************!*\
  !*** ./src/utils/generateSvgUrl.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return generatesvgUrl; });
function generatesvgUrl(svg) {
  // let blob = new Blob([svg], { type: 'image/svg+xml' });
  let url = URL.createObjectURL(blob);
  return url;
}

/***/ })

};
//# sourceMappingURL=server.fbedce2d15061b6d65bc.hot-update.js.map