const User = require("./User");
const Book = require("./Book");
const Blog = require("./Blog");
const db = {};

db.User = User;
db.Book = Book;
db.Blog = Blog;

module.exports = db;
