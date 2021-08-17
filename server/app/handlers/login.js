const passport = require("passport");
const jwt = require("jsonwebtoken");
const { ErrorHandler } = require("../helpers/error");
const { dataSetter } = require("./dataSetter");

const login = async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new ErrorHandler(info.status, info.message, info.title);
        // console.log({ error });
        next(error);
      } else {
        req.login(user, { session: false }, async (error) => {
          if (error) return next(error);

          const body = { _id: user._id, email: user.email };
          const token = jwt.sign({ user: body }, "TOP_SECRET");

          const result = new dataSetter(
            { token },
            info.message,
            info.status,
            info.title
          );

          return res.json(result);
        });
      }
    } catch (error) {
      console.log(error);
      return next(error);
    }
  })(req, res, next);
};

module.exports = { login };
