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
        costPrice: {
          type: Number,
          default: quantity * price,
        },
      },
    ],
    totalPrice: {
      type: Number,
      default: products.costPrice,
    },
  },
  { timestamps: true }
);

module.exports = cartSchema;
