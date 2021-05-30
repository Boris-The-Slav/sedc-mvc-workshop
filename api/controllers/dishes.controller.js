const DishesService = require("../services/dishes.service");

module.exports = class DishesController {
  static async getAllDishes(req, res, next) {
    try {
      const dishes = await DishesService.getAllDishes();
      res.status(200).send(dishes);
    } catch (error) {
      next(error);
    }
  }
  static async getDishById(req, res, next) {
    try {
      const dish = await DishesService.getDishById(req.params.id);
      res.status(200).send(dish);
    } catch (error) {
      next(error);
    }
  }

  static async createDish(req, res, next) {
    try {
      const createdDish = await DishesService.createDish(req.body);
      res.status(201).json(createdDish);
    } catch (error) {
      res.send(error);
      next(error);
    }
  }

  static async updatedDish(req, res, next) {
    try {
      const updatedDish = await DishesService.updateDish(
        req.body,
        req.params.id
      );
      res.status(200).send(updatedDish);
    } catch (error) {
      next(error);
    }
  }
  static async deleteDish(req, res, next) {
    try {
      const response = await DishesService.deleteDish(req.params.id);
      console.log(response);
      res.status(200).json({
        message: `${response.deletedCount} dish successfully deleted`,
      });
    } catch (error) {
      next(error);
    }
  }
};
