const mongoose = require("mongoose");

connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connected");
    } catch (error) {
        console.log("connect fail");
    }
};

module.exports = { connect };
