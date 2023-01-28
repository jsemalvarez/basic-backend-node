require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index.routes");
const logger = require("./utils/logger");
const { errorHandle } = require("./middlewares/errorHandle");

const { PORT } = process.env;

const app = express();

// GLOBAL MIDDLEWARES
app.use(
  morgan('":method :url :status :res[content-length] - :response-time ms"', {
    stream: { write: (message) => logger.http(message) },
  })
);
app.use(cors());
app.use(express.json());

// RUTES
app.use("/api/v1", indexRouter);

app.use(errorHandle);

app.listen(PORT, () => {
  console.log(`app listen port:${PORT}`);
});
