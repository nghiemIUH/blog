const db = require("../models");
const jwt = require("jsonwebtoken");
const fs = require("fs");

class UserController {
    // post /sign-up
    async sign_up(request, response) {
        const data = request.body;
        console.log(data)
        const user = db.User();
        user.username = data.username;
        user.password = user.encryptPassword(data.password);
        user.isUser = true;
        user.email = data.email;
        user.fullName = data.fullName;
        user.avatar = data.avatar;


        db.User.findOne({ username: data.username }, (err, user) => {
            if (user) {
                response.status(404).send({ message: "username đã tồn tại" });
            }
        });

        db.User.findOne({ email: data.email }, (err, user) => {
            if (user) {
                response.status(404).send({ message: "email đã tồn tại" });
            }
        });

        await user.save((err) => {
            if (err) {
                response.status(500).send({ message: err });
            } else {
                response.status(200).json(user);
            }
        });
    }

    // post /sign-in
    sign_in(request, response) {
        const data = request.body;
        db.User.findOne({ username: data.username }, async (err, user) => {
            if (err || user == null) {
                response
                    .status(404)
                    .send({ message: "username or password invalid" });
            } else {
                if (user.validPassword(data.password)) {
                    // tạo token
                    const userData = {
                        _id: user._id,
                        username: user.username,
                        email: user.email,
                        isAdmin: user.isAdmin,
                        isUser: user.isUser,
                        isStaff: user.isStaff,
                    };
                    const accessToken = jwt.sign(
                        { data: userData },
                        process.env.ACCESS_TOKEN_SECRET,
                        { expiresIn: process.env.ACCESS_TOKEN_LIFE }
                    );

                    // tạo refresh token
                    const refreshToken = jwt.sign(
                        { data: userData },
                        process.env.REFRESH_TOKEN_SECRET,
                        { expiresIn: process.env.REFRESH_TOKEN_LIFE }
                    );
                    await user.updateOne({ refreshToken: refreshToken });
                    user.save();
                    response
                        .status(200)
                        .json({ user, accessToken, refreshToken });
                } else {
                    response
                        .status(404)
                        .send({ message: "username or password invalid" });
                }
            }
        });
    }

    // post /refresh-token
    refreshToken(request, response) {
        const refreshTokenFromClient = request.headers["x-access-token"];
        db.User.findOne(
            { refreshToken: refreshTokenFromClient },
            (err, user) => {
                if (err || user == null) {
                    response.status(403).json({
                        message: "Invalid refresh token.",
                        err: err,
                    });
                } else {
                    try {
                        const decoded = jwt.verify(
                            refreshTokenFromClient,
                            process.env.REFRESH_TOKEN_SECRET
                        );
                        const userData = decoded.data;

                        const accessToken = jwt.sign(
                            { data: userData },
                            process.env.ACCESS_TOKEN_SECRET,
                            { expiresIn: process.env.ACCESS_TOKEN_LIFE }
                        );
                        response.status(200).json(accessToken);
                    } catch (error) {
                        response.status(403).json({
                            message: "Invalid refresh token. 123",
                        });
                    }
                }
            }
        );
    }

    getAllUser(request, response) {
        const user = request.jwtDecoded.data;
        db.User.findOne({ username: user.username }, (err, data) => {
            if (data.isAdmin) {
                db.User.find({}, (err, users) => {
                    response.status(200).json(users);
                });
            } else {
                response.status(404).send({ message: "k phải admin" });
            }
        });
    }

    update(request, response) {
        const data = request.jwtDecoded.data;
        db.User.findOne({ username: data.username }, async (err, user) => {
            const newData = request.body;

            if (!newData.email) {
                newData.email = user.email;
            }
            if (!newData.fullName) {
                newData.email = user.fullName;
            }
            await user.updateOne({
                email: newData.email,
                fullName: newData.fullName,
            });
            if (request.file) {
                try {
                    fs.unlinkSync(user.avatar);
                } catch (error) {
                    console.log(error);
                }
                await user.updateOne({
                    avatar: request.file.path,
                });
            }
        });
        response.status(200).send({ message: "oke" });
    }

    changePassword(request, response) {
        const data = request.jwtDecoded.data;
        const oldPassword = request.body.oldPassword;
        const newPassword = request.body.newPassword;

        db.User.findOne({ username: data.username }, async (err, user) => {
            if (user.validPassword(oldPassword)) {
                await user.updateOne({
                    password: user.encryptPassword(newPassword),
                });
                response
                    .status(200)
                    .send({ message: "đổi mật khẩu thành công" });
            } else {
                response.status(404).send({ message: "mật khẩu không đúng" });
            }
        });
    }
}

module.exports = new UserController();
