const Dish = require("../models/dish.model");

module.exports = class DishesService {
  static async getAllDishes() {
    try {
      const dishes = Dish.find();
      return dishes;
    } catch (error) {
      throw { message: "Something went wrong while fetching dishes" };
    }
  }
  static async getDishById(id) {
    try {
      const dish = await Dish.findById({ _id: id });
      if (!dish) throw new Error({ message: "Dish not found" });
      return dish;
    } catch (error) {
      throw { message: "Dish not found" };
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
      throw { message: `Unable to create dish: ${error}` };
    }
  }
  static async updateDish(data, id) {
    try {
      const dish = await Dish.findById({ _id: id });
      if (!dish) throw new Error({ message: "Dish Not Found" });
      await Dish.updateOne({ _id: id }, data);
    } catch (error) {
      throw new Error({ message: `Unable to update dish ${error}` });
    }
  }
  static async deleteDish(id) {
    try {
      const response = await Dish.deleteOne({ _id: id });
      if (!response.deletedCount) throw new Error();
      return response;
    } catch (error) {
      throw error;
    }
  }
};
