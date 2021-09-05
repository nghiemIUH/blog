module.exports = {
    put: {
        tags: ["Book"],
        description: "update book",
        operationId: "update book",
        parameters: [
            {
                name: "x-access-token",
                description: "access token",
                in: "header",
            },
            {
                name: "id",
                description: "id của sách cần update",
                in: "params",
            },
        ],

        responses: {
            200: {
                description: "Success",
            },
            404: {
                description: "Server error",
            },
        },
    },
};
