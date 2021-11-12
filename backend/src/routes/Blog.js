const express = require("express");
const authMiddleWare = require("../middleware/AuthMiddleware");
const BlogController = require("../controllers/BlogController");

const router = express.Router();

router.get("/", BlogController.getAllBlog);
router.get("/:_id", BlogController.getDetailBlog);
router.use(authMiddleWare.isAuth);
router.post("/add-blog", BlogController.addBlog);

module.exports = router;
