module.exports = {
    delete: {
        tags: ["Book"],
        description: "delete a book to database",
        operationId: "delete book",
        parameters: [
            {
                name: "x-access-token",
                description: "token của admin",
                in: "header",
            },
            {
                name: "id",
                description: "Id của sách cần xóa",
                in: "formData",
            },
        ],

        responses: {
            200: {
                description: "success",
            },
            404: {
                description: "Server error or permission denied",
            },
        },
    },
};
