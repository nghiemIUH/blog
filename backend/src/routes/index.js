const userRouter = require("./user");

route = (app) => {
    app.use("/user", userRouter);
};

module.exports = route;
