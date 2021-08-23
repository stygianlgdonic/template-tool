// npm packages
// const dotenv = require("dotenv");
const express = require("express");
Promise = require("bluebird"); // eslint-disable-line

const passport = require("passport");

// app imports
const { connectToDatabase, globalResponseHeaders } = require("./config");
const { errorHandler } = require("./handlers");
const {
  thingsRouter,
  templateRouter,
  cardRouter,
  templateCategoryRouter,
  secureRouter,
  userRouter,
  scheduleRouter,
  svgRouter,
} = require("./routers");

// global constants
// dotenv.config();
const app = express();
const {
  bodyParserHandler,
  globalErrorHandler,
  fourOhFourHandler,
  fourOhFiveHandler,
  CustomErrorHandler,
} = errorHandler;

// database
connectToDatabase();

// body parser setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: "*/*" }));
app.use(bodyParserHandler); // error handling specific to body parser only
// app.use(cookieParser()); // Cookie parser to read and set cookies
// response headers setup; CORS
const cors = require("cors");
app.use(cors());

app.use(globalResponseHeaders);

app.use(cors({ origin: true, credentials: true }));
app.use(
  "/things",
  passport.authenticate("jwt", { session: false }),
  thingsRouter
);

app.use(
  "/template",
  passport.authenticate("jwt", { session: false }),
  templateRouter
);

app.use(
  "/schedule",
  passport.authenticate("jwt", { session: false }),
  scheduleRouter
);

app.use("/card", passport.authenticate("jwt", { session: false }), cardRouter);

app.use(
  "/templatecategory",
  passport.authenticate("jwt", { session: false }),
  templateCategoryRouter
);

app.use("/svg", passport.authenticate("jwt", { session: false }), svgRouter);

app.use(
  "/user",
  passport.authenticate("jwt", { session: false }),
  secureRouter
);

app.use("/", userRouter);
// app.get("/", (req, res) => {
//   console.log(req.query["this"].split(","));
//   res.send("Hello-world");
// });

app.use(CustomErrorHandler);
// catch-all for 404 "Not Found" errors
app.get("*", fourOhFourHandler);
// catch-all for 405 "Method Not Allowed" errors
app.all("*", fourOhFiveHandler);

app.use(globalErrorHandler);

/**
 * This file does NOT run the app. It merely builds and configures it then exports it.config
 *  This is for integration tests with supertest (see __tests__).
 */
module.exports = app;
