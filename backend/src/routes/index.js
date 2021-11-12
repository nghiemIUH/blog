const userRouter = require("./User");
const bookRouter = require("./Book");
const blogRouter = require("./Blog");
const upload = require("../config/upload/upload");

route = (app) => {
    app.use("/user", upload.uploadAvatar.single("avatar"), userRouter);
    app.use("/book", upload.uploadBook.single("image"), bookRouter);
    app.use("/blog", upload.uploadBlog.single("blog_img"), blogRouter);
};

module.exports = route;
