const addBlog = require("./addBlog");
const getAllBlog = require("./getAllBlog");
const getDetailBlog = require("./getDetailBlog");

module.exports = {
    paths: {
        "/blog": {
            ...getAllBlog,
        },
        "/blog/add-blog": {
            ...addBlog,
        },
        "/book/:_id": {
            ...getDetailBlog,
        },
    },
};
