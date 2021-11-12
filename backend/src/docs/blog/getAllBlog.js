module.exports = {
    get: {
        tags: ["Blog"],
        description: "Get all blog for all user with parameter deleted: false",
        operationId: "get all blog",
        parameters: [],

        responses: {
            200: {
                description: "List of blogs",
            },
            404: {
                description: "Server error or permission denied",
            },
        },
    },
};
