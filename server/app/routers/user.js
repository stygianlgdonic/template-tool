const express = require("express");

const { signupHandler, loginHandler } = require("../handlers");

const router = express.Router();

router.post("/signup", (req, res, next) =>
  signupHandler.signup(req, res, next)
);

// signupHandler.signup
router.post("/login", (req, res, next) => loginHandler.login(req, res, next));

module.exports = router;
