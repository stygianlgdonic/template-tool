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

function signupUser(email, password) {
  new Promise(async (resolve, reject) => {
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
          password: email
        })
      });
      console.log({
        res
      });
      resolve(res.json());
    } catch (err) {
      console.log("Sign Up error =>", err);
      reject(err);
    }
  });
}

async function loginUser(email, password) {
  new Promise((resolve, reject) => {
    try {
      const res = fetch("http://localhost:5000/login", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          email,
          password
        })
      });
      resolve(res);
    } catch (err) {
      reject(err);
    }
  });
}

/***/ })

};
//# sourceMappingURL=2.89c65a59e7ba50176611.hot-update.js.map