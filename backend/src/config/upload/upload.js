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

const uploadAvatar = multer({ storage: storageAvatar });

module.exports = { uploadAvatar };
