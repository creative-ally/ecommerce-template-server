const mongoose = require('mongoose');


const ordersSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        email: {
            type: String,
        },
        country: {
            type: String,
        },
        address: {
            type: String,
        },
        town: {
            type: String,
        },
        zip: {
            type: Number,
        },
        phone: {
            type: Number,
        },
        comment: {
            type: String,
        },
        totalCost: {
            type: Number,
        }
    }

);
module.exports = ordersSchema;
