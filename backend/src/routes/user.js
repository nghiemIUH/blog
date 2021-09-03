const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const authMiddleWare = require("../middleware/AuthMiddleware");

router.post("/sign-in", userController.sign_in);
router.post("/sign-up", userController.sign_up);
router.post("/refresh-token", userController.refreshToken);
router.use(authMiddleWare.isAuth);
router.post("/update", userController.update);
router.get("/get-all-user", userController.getAllUser);
router.post("/change-password", userController.changePassword);

module.exports = router;
