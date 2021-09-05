module.exports = {
    put: {
        tags: ["User"],
        description: "update information of user",
        operationId: "update",
        parameters: [
            {
                name: "x-access-token",
                description: "refresh token",
                in: "header",
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
            200: {
                description: "updated",
            },
            403: {
                description: "No token provided",
            },
            401: {
                description: "Unauthorized",
            },
        },
    },
};
