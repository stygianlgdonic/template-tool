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
  new Promise(async (resolve, reject) => {
    try {
      const res = await fetch("http://localhost:5000/signup", {
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
      console.log(err);
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
//# sourceMappingURL=3.4712ab19ec505e79d2f5.hot-update.js.map