const express = require("express");
const bookControler = require("../controllers/BookController");
const authMiddleWare = require("../middleware/AuthMiddleware");

const router = express.Router();

router.use(authMiddleWare.isAuth);
router.post("/add-book", bookControler.addBoook);
module.exports = router;
