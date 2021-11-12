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
            book.image = data.image;

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

    getAllBookUser(request, response) {
        db.Book.find({ deleted: false }, (err, books) => {
            if (err) {
                response.status(404).send({ message: "error" });
            } else {
                response.status(200).json(books);
            }
        });
    }

    getAllBookAdmin(request, response) {
        if (request.jwtDecoded.data.isAdmin) {
            db.Book.find({}, (err, books) => {
                if (err) {
                    response.status(404).send({ message: "error" });
                } else {
                    response.status(200).json(books);
                }
            });
        } else {
            response.status(404).send({ message: "permission denied" });
        }
    }

    getBookById(request, response) {
        const id = request.query.id;

        db.Book.findById(id, (err, book) => {
            if (err) {
                response.status(404).send({ message: "error" });
            } else {
                response.status(200).json(book);
            }
        });
    }

    deleteBookId(request, response) {
        const id = request.body.id;
        db.Book.delete({ _id: id }, (err) => {
            if (err) {
                response.status(404).send({ message: "error" });
            } else {
                response.status(200).send({ message: "ok" });
            }
        });
    }
    restore(request, response) {
        const id = request.body.id;

        db.Book.restore({ _id: id }).exec((err, result) => {
            if (err) {
                response.status(404).send({ message: "error" });
            } else {
                response.status(200).send({ message: result });
            }
        });
    }
    update(request, response) {
        const data = request.body;
        const _id = request.params.id;
        console.log(_id);
        db.Book.updateOne({ _id: _id }, data)
            .then((result) => {
                response.status(200).send({ message: "updated" });
            })
            .catch((err) => {
                response.status(200).send({ message: "error" });
            });
    }
}

module.exports = new BookController();
