module.exports = {
    post: {
        tags: ["User"],
        description: "change password",
        operationId: "change password",
        parameters: [
            {
                name: "x-access-token",
                description: "refresh token",
                in: "header",
            },
            {
                name: "oldPassword",
                description: "Old password",
                in: "formData",
            },
            {
                name: "newPassword",
                description: "New password",
                in: "formData",
            },
        ],

        responses: {
            200: {
                description: "Change password success",
            },
            403: {
                description: "No token provided",
            },
            401: {
                description: "Unauthorized",
            },
            404: {
                description: "Old password is not correct",
            },
        },
    },
};
