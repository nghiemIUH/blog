module.exports = {
    get: {
        tags: ["Book"],
        description: "Get all book for all user with parameter deleted: false",
        operationId: "get all book",
        parameters: [],

        responses: {
            200: {
                description: "List of books",
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
