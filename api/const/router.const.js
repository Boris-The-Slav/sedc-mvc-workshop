const router = require("express").Router();

const userRouter = require("../routes/user.routes");
const dishRouter = require("../routes/dish.routes");

router.use("/users", userRouter);
router.use("/dishes", dishRouter);

module.exports = router;
