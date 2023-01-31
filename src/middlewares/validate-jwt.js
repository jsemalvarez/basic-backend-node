const jwt = require("jsonwebtoken");
const respose = require("../utils/response");

const validateJWT = (req, res, next) => {
  try {
    const token = req.header("x-access-token");

    if (!token) {
      const message = "No hay token en la petición";
      const status = 401;
      return respose.errorResponse(req, res, message, status);
    }

    const { id, name } = jwt.verify(token, process.env.JWT_SECRET_SEED);

    req.user = { id, name };
    next();
  } catch (error) {
    const message = "Token no válido";
    const status = 401;
    return respose.errorResponse(req, res, message, status);
  }
};

module.exports = {
  validateJWT,
};
