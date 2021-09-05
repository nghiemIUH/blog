module.exports = {
    post: {
        tags: ["Book"],
        description: "Add a book to database",
        operationId: "add book",
        parameters: [
            {
                name: "x-access-token",
                description: "token của admin",
                in: "header",
            },
            {
                name: "title",
                description: "tiêu đề",
                in: "formData",
            },
            {
                name: "author",
                description: "Tác giả",
                in: "formData",
            },
            {
                name: "yearOfPublication",
                description: "Năm xuất bản",
                in: "formData",
            },
            {
                name: "description",
                description: "Mô tả",
                in: "formData",
            },
            {
                name: "link",
                description: "Link download",
                in: "formData",
            },
            {
                name: "image",
                description: "Ảnh bìa của sách",
                in: "formData",
                type: "file",
            },
        ],

        responses: {
            200: {
                description: "List of books",
            },
            404: {
                description: "Server error or permission denied",
            },
        },
    },
};
