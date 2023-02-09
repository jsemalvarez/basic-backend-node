const response = require("../utils/response");

const createOne = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    //TODO: verificar si el usuario no existe
    const user = {};
    if (user) {
      const msg = "El usuario ya exite";
      const status = 400;
      return response.errorResponse(req, res, msg, status);
    }
    //TODO: encriptar contraseña
    //TODO: crear el usuario si no existe
    //TODO: generar JWT

    const data = user;
    const status = 400;
    response.successResponse(req, res, data, status);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const data = user;
    const status = 400;
    response.successResponse(req, res, data, status);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOne,
  login,
};
