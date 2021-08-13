const errorSetter = (message, status, title) => {
  const errorObj = {
    message: message,
    status: status,
    title: title,
  };

  return errorObj;
};

module.exports = { errorSetter };
