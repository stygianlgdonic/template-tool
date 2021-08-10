exports.id = 2;
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
      // credentials: "same-origin",
      // mode: 'cors'
      credentials: "include",
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
      credentials: "same-origin",
      // withCredentials: "true",
      // credentials: 'include',
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Credentials": "true",
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password
      })
    }); // console.log("--->", res.json())

    return res.json();
  } catch (err) {
    console.log("Error Occured", err);
    return err;
  }
}

/***/ })

};
//# sourceMappingURL=2.c972c42aa52c705792ac.hot-update.js.map