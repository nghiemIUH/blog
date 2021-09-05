module.exports = {
    get: {
        tags: ["Book"],
        description: "Get book from id",
        operationId: "get book id",
        parameters: [
            {
                name: "id",
                description: "id of book",
                in: "query",
            },
        ],

        responses: {
            200: {
                description: "book",
                content: {
                    "application/json": {
                        schema: {
                            properties: {
                                _id: {},
                                title: {},
                                author: {},
                                yearOfPublication: {},
                                description: {},
                                link: {},
                                image: {},
                                deleted: {},
                            },
                        },
                    },
                },
            },
            404: {
                description: "Server error",
            },
        },
    },
};
