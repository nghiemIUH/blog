const mongoose = require("mongoose");
var mongooseDelete = require("mongoose-delete");
const Scheme = mongoose.Schema;

const Blog = new Scheme({
    title: { type: String },
    author: { type: Scheme.Types.ObjectId, ref: "User" },
    content: { type: String },
    deleted: { type: Boolean, default: false },
});

Blog.plugin(mongooseDelete, { deletedAt: true });
module.exports = mongoose.model("Blog", Blog);
