const { errorResponse } = require("../utils/response");

const errorHandle = (err, req, res, next) => {
  console.log({ err });

  if (err.statusCode) {
    const message = err.message;
    const status = err.statusCode;

    return errorResponse(req, res, message, status);
  }

  if (err.response) {
    const message = "Error de conexion";
    const status = 404;

    return errorResponse(req, res, message, status);
  }
  const message = "Server error";
  const status = 500;

  return errorResponse(req, res, message, status);
};

module.exports = {
  errorHandle,
};
