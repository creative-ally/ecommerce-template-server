const mongoose = require('mongoose');

const cartSchema = mongoose.Schema(
    {
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
        totalPrice: {
            type: Number,
        },
        quantity: {
            type: Number,
        },
        email: {
            type: String,
        }
    }
);

module.exports = cartSchema;