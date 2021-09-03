const User = require("./User");
const Book = require("./Book");

const db = {};

db.User = User;
db.Book = Book;

module.exports = db;
