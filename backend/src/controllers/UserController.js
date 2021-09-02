const db = require("../models");
const jwt = require("jsonwebtoken");

class UserController {
    // post /sign-up
    async sign_up(request, response) {
        const data = request.body;
        const user = db.userModel();
        user.username = data.username;
        user.password = user.encryptPassword(data.password);
        user.isUser = true;
        user.email = data.email;
        user.fullName = data.fullName;
        user.avatar = request.file.path;

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
        db.userModel.findOne({ username: data.username }, async (err, user) => {
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
                    };
                    const accessToken = await jwt.sign(
                        { data: userData },
                        process.env.ACCESS_TOKEN_SECRET,
                        { expiresIn: process.env.ACCESS_TOKEN_LIFE }
                    );

                    // tạo refresh token
                    const refreshToken = await jwt.sign(
                        { data: userData },
                        process.env.REFRESH_TOKEN_SECRET,
                        { expiresIn: process.env.REFRESH_TOKEN_LIFE }
                    );
                    user.refreshToken = refreshToken;
                    user.updateOne({ refreshToken: refreshToken });
                    await user.save();
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

    refreshToken(request, response) {
        const refreshTokenFromClient = request.body.refreshToken;

        db.userModel.findOne(
            { refreshToken: refreshTokenFromClient },
            async (err, user) => {
                if (err || user == null) {
                    response.status(403).json({
                        message: "Invalid refresh token.",
                    });
                } else {
                    try {
                        const decoded = jwt.verify(
                            refreshTokenFromClient,
                            process.env.REFRESH_TOKEN_SECRET
                        );
                        const userData = decoded.data;

                        const accessToken = await jwt.sign(
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

    test(request, response) {
        response.status(200).send({ message: 123 });
    }
}

module.exports = new UserController();
