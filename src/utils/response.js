const successResponse = (req, res, data, status = 200) => {
  res.status(status).json({
    body: data,
  });
};

const errorResponse = (req, res, message, status = 500) => {
  res.status(status).json({
    message,
  });
};

module.exports = {
  successResponse,
  errorResponse,
};
