const express = require("express");
const { _router } = require("../app");

const { signupHandler, loginHandler } = require("../handlers");

const router = express.Router();

router.post("/signup", (req, res, next) =>
  signupHandler.signup(req, res, next)
);

// signupHandler.signup
router.post("/login", (req, res, next) => loginHandler.login(req, res, next));

router.put("/forgot-password");

module.exports = router;
