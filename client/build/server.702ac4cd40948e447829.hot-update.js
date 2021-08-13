exports.id = "server";
exports.modules = {

/***/ "./src/routes/validation.ts":
/*!**********************************!*\
  !*** ./src/routes/validation.ts ***!
  \**********************************/
/*! exports provided: validation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validation", function() { return validation; });
const validation = () => {
  console.log("gggggg", localStorage.getItem("Token"));

  if (localStorage.getItem("Token")) {
    return true;
  }

  return false; // try {
  //     const res = await fetch("https://hyper-engage-staging.herokuapp.com/signup",
  //         {
  //             // credentials: "same-origin",
  //             // mode: 'cors'
  //             headers: {
  //                 "credentials": "include",
  //                 'Access-Control-Allow-Origin': '*',
  //                 'Accept': 'application/json',
  //                 'Content-Type': 'application/json',
  //                 'Access-Control-Allow-Credentials': "true",
  //             },
  //             method: "POST",
  //             body: JSON.stringify({ secret_token: localStorage.getItem("Token") })
  //         })
  //     console.log({ res })
  //     return (res.json())
  // }
  // catch (err) {
  //     console.log("Sign Up error =>", err)
  //     return (err)
  // }
};

/***/ })

};
//# sourceMappingURL=server.702ac4cd40948e447829.hot-update.js.map