const db = require("../models");

class BookController {
    async addBoook(request, response) {
        const user = request.jwtDecoded.data;
        const data = request.body;
        console.log(user);
        if (user.isAdmin) {
            const book = db.Book();
            book.title = data.title;
            book.author = data.author;
            book.yearOfPublication = data.yearOfPublication;
            book.description = data.description;
            book.link = data.link;
            book.image = request.file.path;

            await book.save((err) => {
                if (err) {
                    response.status(404).send({ message: err });
                } else {
                    response.status(200).send({ message: "success" });
                }
            });
        } else {
            response.status(403).send({ message: "permission denied" });
        }
    }
}

module.exports = new BookController();
