const { APP_NAME } = require("../config");
const { APIError } = require("../helpers");

function bodyParserHandler(error, request, response, next) {
  if (error instanceof SyntaxError || error instanceof TypeError) {
    // console.error(error);
    return next(new APIError(400, "Bad Request", "Malformed JSON."));
  }
}

function fourOhFourHandler(request, response, next) {
  return next(
    new APIError(
      404,
      "Resource Not Found",
      `${request.path} is not valid path to a ${APP_NAME} resource.`
    )
  );
}

function fourOhFiveHandler(request, response, next) {
  return next(
    new APIError(
      405,
      "Method Not Allowed",
      `${request.method} method is not supported at ${request.path}.`
    )
  );
}

function globalErrorHandler(error, request, response, next) {
  console.log("****");
  let err = error;
  if (!(error instanceof APIError)) {
    err = new APIError(500, error.type, error.message);
  }

  return response.status(err.status).json(err);
}

function CustomErrorHandler(error, request, response, next) {
  // let err = error;
  // if (!(error instanceof APIError)) {
  //   err = new APIError(500, error.type, error.message);
  // }
  let err = new APIError(error.status, error.title, error.message);
  console.log("<---->");
  console.log(error.message);

  // return response.status(err.status).json(err);
  return response.json(err);
}

module.exports = {
  CustomErrorHandler,
  bodyParserHandler,
  fourOhFourHandler,
  fourOhFiveHandler,
  globalErrorHandler,
};
