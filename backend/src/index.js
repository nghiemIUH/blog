const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const route = require("./routes");
const db = require("./config/db/connect");

db.connect();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/");
    },
    filename: (req, file, cb) => {
        cb(
            null,
            new Date().toISOString().replace(/:/g, "-") + file.originalname
        );
    },
});

const upload = multer({ storage: storage });

const app = express();
app.use(morgan("combined"));
app.use("/uploads", express.static("uploads"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(upload.single("img"));

route(app);

app.listen(5000);
