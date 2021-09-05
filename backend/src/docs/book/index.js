const getAllBookUser = require("./getAllBookUser");
const getBookId = require("./getBookId");
const addBook = require("./addBook");
const deleteBook = require("./delete");
const getAllBookAdmin = require("./getAllBookAdmin");
const restore = require("./restore");
const update = require("./update");

module.exports = {
    paths: {
        "/book": {
            ...getAllBookUser,
        },
        "/book/get-book-id": {
            ...getBookId,
        },
        "/book/add-book": {
            ...addBook,
        },
        "/book/delete": {
            ...deleteBook,
        },
        "/book/get-all-book": {
            ...getAllBookAdmin,
        },
        "/book/restore": {
            ...restore,
        },
        "/book/update/:id": {
            ...update,
        },
    },
};
