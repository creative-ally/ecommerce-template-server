// dependencies
const mongoose = require('mongoose');

// creating schema for cart
const cartSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        code: {
          type: String,
        },
        image: {
          type: String,
        },
        name: {
          type: String,
        },
        price: {
          type: Number,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    totalPrice: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = cartSchema;
