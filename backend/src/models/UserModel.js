const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const User = new Schema({
    username: { type: String, unique: true },
    password: { type: String },
    isStaff: { type: Boolean, default: false },
    isUser: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    email: { type: String },
    fullName: { type: String },
    avatar: { type: String },
    refreshToken: { type: String, default: "123" },
});

User.methods.encryptPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

User.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", User);
