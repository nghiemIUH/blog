const signIn = require("./signIn");
const signUp = require("./signUp");
const refreshToken = require("./refreshToken");
const update = require("./update");
const getAllUser = require("./getAllUser");
const changePassword = require("./changePassword");

module.exports = {
    paths: {
        "/user/sign-in": {
            ...signIn,
        },
        "/user/sign-up": {
            ...signUp,
        },
        "/user/refresh-token": {
            ...refreshToken,
        },
        "/user/update": {
            ...update,
        },
        "/user/get-all-user": {
            ...getAllUser,
        },
        "/user/change-password": {
            ...changePassword,
        },
    },
};
