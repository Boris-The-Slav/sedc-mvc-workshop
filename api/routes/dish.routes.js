const router = require("express").Router();
const DishesController = require("../controllers/dishes.controller");

const sessionValidator = require("../middleware/sessionValidator.const");
const roleValidator = require("../middleware/roleValidator.const");

router.get("/", sessionValidator, DishesController.getAllDishes);
router.get("/:id", sessionValidator, DishesController.getDishById);
router.post(
  "/",
  sessionValidator,
  roleValidator("admin"),
  DishesController.createDish
);
router.patch(
  "/:id",
  sessionValidator,
  roleValidator("admin"),
  DishesController.updatedDish
);
router.delete(
  "/:id",
  sessionValidator,
  roleValidator("admin"),
  DishesController.deleteDish
);

module.exports = router;
