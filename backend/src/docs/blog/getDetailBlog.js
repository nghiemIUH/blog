module.exports = {
    get: {
        tags: ["Blog"],
        description: "Get blog from id",
        operationId: "get blog id",
        parameters: [
            {
                name: "_id",
                description: "id of blog",
                in: "query",
            },
        ],

        responses: {
            200: {
                description: "blog",
            },
            404: {
                description: "Server error",
            },
        },
    },
};
