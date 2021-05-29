const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dishSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { timestamps: true }
);

const Dish = mongoose.model("Dish", dishSchema);

module.exports = Dish;
