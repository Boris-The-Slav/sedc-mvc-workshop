const Order = require("../models/order.model");
const { GeneralError, BadRequest, NotFound } = require("../const/error.const");
const { findByIdAndUpdate, findById } = require("../models/order.model");

module.exports = class OrdersService {
  static async getAllOrders() {
    try {
      const orders = await Order.find().populate("dishName");
      return orders;
    } catch (error) {
      throw new GeneralError("Error while fetching orders");
    }
  }
  static async getOrderById(id) {
    try {
      const order = await Order.findById({ _id: id }).populate("dishName");
      return order;
    } catch (error) {
      throw new NotFound("Order not found");
    }
  }
  static async createOrder(dishId) {
    try {
      const createdOrder = await new Order({ dishName: dishId }).save();
      return createdOrder;
    } catch (error) {
      throw new BadRequest(
        `Something went wrong while creating order ${error}`
      );
    }
  }
  static async updateOrderStatus(newStatus, id) {
    try {
      if (!newStatus.status) {
        throw new Error("Invalid Updates");
      }
      const updatedOrder = await Order.updateOne({ _id: id }, newStatus, {
        runValidators: true,
      });
      if (!updatedOrder.nModified) {
        throw new Error();
      }
      const order = Order.findById({ _id: id }).populate("dishName");

      return order;
    } catch (error) {
      throw new BadRequest(`UpdateFailed ${error}`);
    }
  }
};
