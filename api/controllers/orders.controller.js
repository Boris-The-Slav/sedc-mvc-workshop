const OrderService = require("../services/orders.service");

module.exports = class OrdersController {
  static async getAllOrders(req, res, next) {
    try {
      const orders = await OrderService.getAllOrders();
      res.status(200).send(orders);
    } catch (error) {
      next(error);
    }
  }
  static async getOrderById() {}
  static async createOrder(req, res, next) {
    try {
      const createdOrder = await OrderService.createOrder(
        req.body,
        req.params.id
      );
      return createdOrder;
    } catch (error) {
      next(error);
    }
  }
  static async updateOrderStatus() {}
};
