const axios = require("axios");
const express = require("express");
const { buildError } = require("../utils/buildError");
const { successResponse } = require("../utils/response");

const userController = require("../controllers/user.controller");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    // console.log(josema)
    // throw buildError("esto es un error", 402);

    let response;
    try {
      response = await axios.get("http://localhost:8081/saludo");
    } catch (error) {
      console.log(error.config.url);
      throw buildError("No se pueden obtener los usuarios", 404);
    }

    successResponse(req, res, response.data, 200);
  } catch (error) {
    next(error);
  }
});

router.post("/create", userController.createOne);

module.exports = router;
