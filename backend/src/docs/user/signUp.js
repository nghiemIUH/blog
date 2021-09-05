module.exports = {
    post: {
        tags: ["User"],
        description: "Sign Up",
        operationId: "signup",
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
            {
                name: "email",
                in: "formData",
                description: "Email",
            },
            {
                name: "fullName",
                in: "formData",
                description: "Full Name",
            },
            {
                name: "avatar",
                in: "formData",
                description: "Avatar",
            },
        ],

        responses: {
            201: {
                description: "Created user",
            },
            500: {
                description: "Server error",
            },
        },
    },
};
