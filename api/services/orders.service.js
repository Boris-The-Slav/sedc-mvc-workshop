const Order = require("../models/order.model");

module.exports = class OrderService {
  static async getAllOrders() {
    try {
      const orders = await Order.find();
      return orders;
    } catch (error) {
      throw { message: "Something went wrong with fetching orders" };
    }
  }
  static async getOrderById() {}
  static async createOrder() {}
  static async updateOrderStatus() {}
};
