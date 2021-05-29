const router = require("express").Router();
const UsersController = require("../controllers/users.controller");

router.post("/register", UsersController.registerUser);
router.post("/login", UsersController.loginUser);
router.post("/logout", UsersController.logoutUser);

module.exports = router;
