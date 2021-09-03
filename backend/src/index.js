const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const route = require("./routes");
const db = require("./config/db/connect");

db.connect();

const app = express();
app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

route(app);

app.listen(5000);
