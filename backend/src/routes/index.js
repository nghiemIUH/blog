const userRouter = require("./User");
const bookRouter = require("./Book");
const upload = require("../config/upload/upload");

route = (app) => {
    app.use("/user", upload.uploadAvatar.single("avatar"), userRouter);
    app.use("/book", upload.uploadBook.single("image"), bookRouter);
};

module.exports = route;
