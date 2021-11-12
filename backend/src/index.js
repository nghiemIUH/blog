const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const route = require("./routes");
require("./config/db/connect").connect();
const docs = require("./docs");
const swaggerUI = require("swagger-ui-express");
const cors = require("cors");
const app = express();
app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const options = {
    customCss: ".swagger-ui .topbar { display: none }",
};

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs, options));
route(app);

app.listen(5000);
