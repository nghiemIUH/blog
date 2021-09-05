module.exports = {
    get: {
        tags: ["User"],
        description: "Refresh token",
        operationId: "refresh token",
        parameters: [
            {
                name: "x-access-token",
                description: "refresh token",
                in: "header",
            },
        ],

        responses: {
            200: {
                description: "Send to client new access token",
                content: {
                    "application/json": {
                        schema: {
                            properties: {
                                accessToken: {},
                            },
                        },
                    },
                },
            },
            403: {
                description: "Server error",
            },
        },
    },
};
