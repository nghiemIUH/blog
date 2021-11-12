const db = require("../models");

class BlogController {
    async addBlog(request, response) {
        const user = request.jwtDecoded.data;
        const data = request.body;
        const title = data.title;
        const content = data.content;

        const blog = db.Blog();
        blog.title = title;
        blog.author = user;
        blog.content = content;

        await blog.save((err) => {
            if (err) response.status(404).send({ message: err });
            else response.status(200).send({ message: "success" });
        });
    }

    getAllBlog(request, response) {
        db.Blog.find({})
            .populate("author")
            .exec((err, data) => {
                if (err) response.status(404).send(err);
                else response.status(200).send(data);
            });
    }

    getDetailBlog(request, response) {
        const _id = request.param._id;
        db.Blog.findById(_id)
            .populate("author")
            .exec((err, data) => {
                if (err) response.status(404).send(err);
                else response.status(200).send(data);
            });
    }
}

module.exports = new BlogController();
