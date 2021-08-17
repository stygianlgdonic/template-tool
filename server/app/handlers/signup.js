const passport = require("passport");
const { dataSetterHandler } = require(".");
const { ErrorHandler } = require("../helpers/error");
const { dataSetter } = require("./dataSetter");

const signup = (req, res, next) => {
  passport.authenticate(
    "signup",
    { session: false },
    async (err, user, info) => {
      console.log({ user });
      if (!user || err) {
        const error = new ErrorHandler(info.status, info.message, info.title);
        next(error);
      } else {
        const result = new dataSetter(
          { user },
          info.message,
          info.status,
          info.title
        );
        res.json(result);
      }
    }
  )(req, res, next);
};

module.exports = { signup };
