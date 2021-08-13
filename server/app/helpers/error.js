class ErrorHandler extends Error {
  constructor(status, message, title) {
    super();
    this.status = status;
    this.message = message;
    this.title = title;
  }
}

const handleError = (err, res) => {
  const { statusCode, message } = err;
  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};

module.exports = {
  ErrorHandler,
  handleError,
};
