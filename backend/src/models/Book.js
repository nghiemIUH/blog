const mongoose = require("mongoose");
var mongooseDelete = require("mongoose-delete");
const Scheme = mongoose.Schema;

const Book = new Scheme({
    title: { type: String },
    author: { type: String },
    yearOfPublication: { type: Date },
    description: { type: String },
    link: { type: String },
    image: { type: String },
    deleted: { type: Boolean, default: false },
});

Book.plugin(mongooseDelete, { deletedAt: true });

module.exports = mongoose.model("Book", Book);
