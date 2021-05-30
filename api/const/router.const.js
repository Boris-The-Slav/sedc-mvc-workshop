const router = require("express").Router();

const userRouter = require("../routes/user.routes");
const dishRouter = require("../routes/dish.routes");
const orderRouter = require("../routes/orders.routes");

router.use("/users", userRouter);
router.use("/dishes", dishRouter);
router.use("/orders", orderRouter);

module.exports = router;
