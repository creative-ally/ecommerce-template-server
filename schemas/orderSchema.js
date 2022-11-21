// dependencies
const mongoose = require('mongoose');

// creating schema for order
const orderSchema = mongoose.Schema(
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
    totalCost: {
      type: Number,
      required: true,
    },
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: 'pending' },
  },
  { timestamps: true }
);

module.exports = orderSchema;
