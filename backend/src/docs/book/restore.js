module.exports = {
    get: {
        tags: ["Book"],
        description: "Restore book deleted",
        operationId: "Restore book",
        parameters: [
            {
                name: "x-access-token",
                description: "access token",
                in: "header",
            },
            {
                name: "id",
                description: "id của sách đã xóa",
                in: "fromData",
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
