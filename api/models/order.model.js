const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    dishName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Dish",
    },
    status: {
      type: String,
      enum: ["new", "cancelled", "done"],
      default: "new",
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
