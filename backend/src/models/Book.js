const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

const Book = new Scheme({
    title: { type: String },
    author: { type: String },
    yearOfPublication: { type: Date },
    description: { type: String },
    link: { type: String },
    image: { type: String },
});

module.exports = mongoose.model("Book", Book);
