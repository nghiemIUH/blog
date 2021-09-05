module.exports = {
    post: {
        tags: ["User"],
        description: "Sign In",
        operationId: "signin",
        parameters: [
            {
                name: "username",
                description: "Tên đăng nhập",
                in: "formData",
            },
            {
                name: "password",
                in: "formData",
                description: "mật khẩu tối thiểu 6 ký tự",
            },
        ],

        responses: {
            200: {
                description: "Sign in success",
                content: {
                    "application/json": {
                        schema: {
                            properties: {
                                id: {},
                                username: {},
                                email: {},
                                isStaff: {},
                                isUser: {},
                                isAdmin: {},
                                fullName: {},
                                accessToken: {},
                                refeshToken: {},
                                avatar: {},
                            },
                        },
                    },
                },
            },
            500: {
                description: "Server error",
            },
        },
    },
};
