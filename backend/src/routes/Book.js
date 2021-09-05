const express = require("express");
const bookController = require("../controllers/BookController");
const authMiddleWare = require("../middleware/AuthMiddleware");

const router = express.Router();

router.get("/", bookController.getAllBookUser);
router.get("/get-book-id", bookController.getBookById);

router.use(authMiddleWare.isAuth);
router.post("/add-book", bookController.addBoook);
router.delete("/delete", bookController.deleteBookId);
router.get("/get-all-book", bookController.getAllBookAdmin);
router.post("/restore", bookController.restore);
router.put("/update/:id", bookController.update);
module.exports = router;
