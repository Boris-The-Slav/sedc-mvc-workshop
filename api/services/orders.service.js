const Order = require("../models/order.model");
const { GeneralError, BadRequest, NotFound } = require("../const/error.const");

module.exports = class OrderService {
  static async getAllOrders() {
    try {
      const orders = await Order.find();
      return orders;
    } catch (error) {
      throw new GeneralError("Error while fetching orders");
    }
  }
  static async getOrderById() {}
  static async createOrder(data, dishId) {
    const orderData = {
      dishName: dishId,
    };
    try {
      const createdOrder = await new Order(orderData);
      return createdOrder;
    } catch (error) {
      throw new BadRequest("Something went wrong while creating order");
    }
  }
  static async updateOrderStatus() {}
};
