module.exports = {
    post: {
        tags: ["Blog"],
        description: "Add a Blog to database",
        operationId: "add blog",
        parameters: [
            {
                name: "x-access-token",
                description: "token của user",
                in: "header",
            },
            {
                name: "title",
                description: "tiêu đề",
                in: "formData",
            },
            {
                name: "content",
                description: "Nội dung của editor",
                in: "formData",
            },
        ],

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
