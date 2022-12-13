// dependencies
const mongoose = require('mongoose');

// creating schema for payments
const paymentSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    payments: [
      {
        transactionId: {
          type: String,
          required: true,
        },
        orderId: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = paymentSchema;
