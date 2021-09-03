const userRouter = require("./User");
const bookRouter = require("./Book");
const upload = require("../config/upload/upload");

route = (app) => {
    app.use("/user", upload.uploadAvatar.single("img"), userRouter);
    app.use("/book", upload.uploadBook.single("img"), bookRouter);
};

module.exports = route;
