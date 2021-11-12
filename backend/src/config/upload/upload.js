const multer = require("multer");

const storageAvatar = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/avatars/");
    },
    filename: (req, file, cb) => {
        cb(
            null,
            new Date().toISOString().replace(/:/g, "-") + file.originalname
        );
    },
});

const storageBook = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/books/");
    },
    filename: (req, file, cb) => {
        cb(
            null,
            new Date().toISOString().replace(/:/g, "-") + file.originalname
        );
    },
});

const storageBlog = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/blog/");
    },
    filename: (req, file, cb) => {
        cb(
            null,
            new Date().toISOString().replace(/:/g, "-") + file.originalname
        );
    },
});

const uploadAvatar = multer({ storage: storageAvatar });
const uploadBook = multer({ storage: storageBook });
const uploadBlog = multer({ storage: storageBlog });

module.exports = { uploadAvatar, uploadBook, uploadBlog };
