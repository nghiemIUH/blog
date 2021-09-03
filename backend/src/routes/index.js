const userRouter = require("./User");
const upload = require("../config/upload/upload");

route = (app) => {
    app.use("/user", upload.uploadAvatar.single("img"), userRouter);
};

module.exports = route;
