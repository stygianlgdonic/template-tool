const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const UserModel = require("../models/User");
const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

passport.use(
  "signup",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const isUSer = await UserModel.findOne({ email });
        console.log({ isUSer });
        if (!isUSer) {
          const user = await UserModel.create({ email, password });
          return done(null, user, {
            status: 200,
            message: "Your account has been created",
            title: "Signup Success",
          });
        } else {
          return done(null, false, {
            status: 409,
            message: "A user with this email already exists.",
            title: "User exists!",
          });
        }
      } catch (error) {
        console.log("Error");
        done(error);
      }
    }
  )
);

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await UserModel.findOne({ email });

        if (!user) {
          return done(null, false, {
            status: 404,
            message: "User with this email does not exist.",
            title: "No User",
          });
        }

        const validate = await user.isValidPassword(password);

        if (!validate) {
          return done(null, false, {
            status: 403,
            message: "You have entered incorrect Password",
            title: "Wrong password",
          });
        }

        return done(null, user, {
          status: 200,
          message: "Logged in Successfully",
          title: "Signup Ok",
        });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  new JWTstrategy(
    {
      secretOrKey: "TOP_SECRET",
      jwtFromRequest: ExtractJWT.fromUrlQueryParameter("secret_token"),
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);
