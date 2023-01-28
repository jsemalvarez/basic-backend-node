const buildError = (message, status) => {
  const err = new Error(message);
  if (status) {
    err.statusCode = status;
  }

  return err;
};

module.exports = { buildError };
