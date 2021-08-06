const express = require("express");
const passport = require("passport");

const { signupHandler, loginHandler } = require("../handlers");

const router = express.Router();

router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  signupHandler.signup
);

router.post("/login", (req, res, next) => loginHandler.login(req, res, next));

module.exports = router;
