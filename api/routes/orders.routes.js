const router = require("express").Router();
const OrdersController = require("../controllers/orders.controller");

const sessionValidator = require("../middleware/sessionValidator.const");
const roleValidator = require("../middleware/roleValidator.const");

router.post("/:id", sessionValidator, OrdersController.createOrder);
router.get("/:id", sessionValidator, OrdersController.getOrderById);
router.get(
  "/",
  sessionValidator,
  roleValidator("admin"),
  OrdersController.getAllOrders
);
router.patch(
  "/:id",
  sessionValidator,
  roleValidator("admin"),
  OrdersController.updateOrderStatus
);

module.exports = router;
