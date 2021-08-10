exports.id = 3;
exports.modules = {

/***/ "./src/services/auth_service.ts":
/*!**************************************!*\
  !*** ./src/services/auth_service.ts ***!
  \**************************************/
/*! exports provided: userAuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userAuthenticationService", function() { return userAuthenticationService; });
const userAuthenticationService = {
  signupUser,
  loginUser
};

async function signupUser(email, password) {
  // new Promise(async (resolve, reject) => {
  try {
    const res = await fetch("https://hyper-engage-staging.herokuapp.com/signup", {
      credentials: "same-origin",
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
    console.log({
      res
    });
    return res.json();
  } catch (err) {
    console.log("Sign Up error =>", err);
  }
}

async function loginUser(email, password) {
  try {
    const res = await fetch("https://hyper-engage-staging.herokuapp.com/login", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
    return res.json();
  } catch (err) {
    return err;
  }
}

/***/ })

};
//# sourceMappingURL=3.0dd3b18a7f9f1f181847.hot-update.js.map