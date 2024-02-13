const mongoose = require("mongoose");
const User = require("./userModel");

const itemSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: User,
    },
    name: {
      type: String,
      required: [true, "Please enter the item name"],
    },
    price: {
      type: Number,
      required: [true, "Please enter the item price"],
    },
    description: {
      type: String,
      required: [true, "Please enter the item description"],
    },
    imageUrl: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", itemSchema);
