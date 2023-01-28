const express = require("express");
const userRoutes = require("./user.routes");
const { successResponse } = require("../utils/response");

const router = express.Router();

router.use("/user", userRoutes);

router.get("/ping", (req, res) => {
  const message = "Todo ok";
  successResponse(req, res, message);
});

module.exports = router;
