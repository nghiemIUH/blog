const db = require("../models");

class BookController {
    test(request, response) {
        response.send({ message: 123 });
    }
}

module.exports = new BookController();
