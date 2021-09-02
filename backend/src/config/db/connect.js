const mongoose = require("mongoose");

connect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/blog", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connected");
    } catch (error) {
        console.log("connect fail");
    }
};

module.exports = { connect };
