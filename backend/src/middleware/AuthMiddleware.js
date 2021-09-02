const jwt = require("jsonwebtoken");

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

let isAuth = async (req, res, next) => {
    // Lấy token được gửi lên từ phía client
    const tokenFromClient =
        req.body.token || req.query.token || req.headers["x-access-token"];
    if (tokenFromClient) {
        // Nếu tồn tại token
        try {
            // Thực hiện giải mã token xem có hợp lệ hay không?
            const decoded = await jwt.verify(
                tokenFromClient,
                accessTokenSecret
            );
            // Nếu token hợp lệ, lưu thông tin giải mã được vào đối tượng req, dùng cho các xử lý ở phía sau.
            req.jwtDecoded = decoded;
            // Cho phép req đi tiếp sang controller.
            next();
        } catch (error) {
            // Nếu giải mã gặp lỗi: Không đúng, hết hạn...etc:
            // Lưu ý trong dự án thực tế hãy bỏ dòng debug bên dưới, mình để đây để debug lỗi cho các bạn xem thôi
            return res.status(401).json({
                message: "Unauthorized.",
            });
        }
    } else {
        // Không tìm thấy token trong request
        return res.status(403).send({
            message: "No token provided.",
        });
    }
};
module.exports = {
    isAuth: isAuth,
};
