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

function signupUser(email, password) {
  new Promise((resolve, reject) => {
    try {
      const res = fetch("https://hyper-engage-staging.herokuapp.com/signup", {
        // headers: {
        //     'Access-Control-Allow-Origin': '*',
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        // },
        method: "POST",
        body: JSON.stringify({
          email,
          password
        })
      });
      console.log({
        res
      });
      resolve(res);
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
//# sourceMappingURL=3.c5a43a1b9187b17f274c.hot-update.js.map