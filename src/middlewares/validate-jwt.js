const jwt = require("jsonwebtoken");
const respose = require("../utils/response");

const validateJWT = (req, res, next) => {
  try {
    const token = req.header("x-access-token");

    if (!token) {
      return respose.errorResponse(
        req,
        res,
        "No hay token en la petición",
        401
      );
    }

    const { id, name } = jwt.verify(token, process.env.JWT_SECRET_SEED);

    req.user = { id, name };
    next();
  } catch (error) {
    return respose.errorResponse(req, res, "Token no válido", 401);
  }
};

module.exports = {
  validateJWT,
};
