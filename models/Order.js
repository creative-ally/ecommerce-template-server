// external imports
const mongoose = require('mongoose');

// internal imports;
const orderSchema = require('../schemas/orderSchema');

const Order = new mongoose.model('Order', orderSchema);

// exporting module
module.exports = Order;
