const Dish = require("../models/dish.model");
const { GeneralError, NotFound, BadRequest } = require("../const/error.const");

module.exports = class DishesService {
  static async getAllDishes() {
    try {
      const dishes = Dish.find();
      return dishes;
    } catch (error) {
      throw new GeneralError(
        `Something went wrong while fetching dishes ${error}`
      );
    }
  }
  static async getDishById(id) {
    try {
      const dish = await Dish.findById({ _id: id });
      return dish;
    } catch (error) {
      throw new NotFound(`Dish Not Found`);
    }
  }
  static async createDish(data) {
    try {
      const dish = {
        name: data.name,
        price: data.price,
      };

      const createdDish = await new Dish(dish).save();
      return createdDish;
    } catch (error) {
      throw new BadRequest("Something went wrong while creating dish");
    }
  }
  static async updateDish(data, id) {
    try {
      await Dish.updateOne({ _id: id }, data);
      const dish = await Dish.findById({ _id: id });
      return dish;
    } catch (error) {
      throw new NotFound("Dish not found");
    }
  }
  static async deleteDish(id) {
    try {
      const response = await Dish.deleteOne({ _id: id });
      if (!response.deletedCount) throw new Error();
      return response;
    } catch (error) {
      throw new NotFound("Dish not found");
    }
  }
};
