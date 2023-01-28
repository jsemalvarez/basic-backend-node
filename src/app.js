require("dotenv").config();
const express = require("express");
const indexRouter = require("./routes/index.routes");
const { errorHandle } = require("./middlewares/errorHandle");

const { PORT } = process.env;

const app = express();

app.use("/api/v1", indexRouter);

app.use(errorHandle);

app.listen(PORT, () => {
  console.log(`app listen port:${PORT}`);
});
