const { populate } = require("../models/order.model");
const OrdersService = require("../services/orders.service");

module.exports = class OrdersController {
  static async getAllOrders(req, res, next) {
    try {
      const orders = await OrdersService.getAllOrders();
      res.status(200).send(orders);
    } catch (error) {
      next(error);
    }
  }
  static async getOrderById(req, res, next) {
    try {
      const order = await OrdersService.getOrderById(req.params.id);
      res.status(200).send(order);
    } catch (error) {
      next(error);
    }
  }
  static async createOrder(req, res, next) {
    try {
      const createdOrder = await OrdersService.createOrder(req.params.id);

      res.status(201).send(createdOrder);
    } catch (error) {
      next(error);
    }
  }
  static async updateOrderStatus(req, res, next) {
    try {
      const updatedOrder = await OrdersService.updateOrderStatus(
        req.body,
        req.params.id
      );
      res.status(200).send(updatedOrder);
    } catch (error) {
      next(error);
    }
  }
};
