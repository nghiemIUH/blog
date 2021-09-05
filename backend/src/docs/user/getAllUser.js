module.exports = {
    get: {
        tags: ["User"],
        description: "Get all user is admin = true",
        operationId: "get all user",
        parameters: [
            {
                name: "x-access-token",
                description: "refresh token",
                in: "header",
            },
        ],

        responses: {
            200: {
                description: "send users from client",
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
                                avatar: {},
                            },
                        },
                    },
                },
            },
            403: {
                description: "No token provided",
            },
            401: {
                description: "Unauthorized",
            },
            404: {
                description: "have not permission",
            },
        },
    },
};
