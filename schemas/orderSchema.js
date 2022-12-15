// external imports
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
        category: {
          type: String,
        },
        subcategory: {
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
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    address: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      enum: {
        values: ['Shipped', 'Pending', 'Received'],
        message: 'Status can not be ignored',
      },
      default: 'Pending',
    },
    transactionId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// exporting module
module.exports = orderSchema;
