// dependencies
const mongoose = require('mongoose');
const orderSchema = require('../schemas/orderSchema');

const Order = new mongoose.model('Order', orderSchema);

module.exports = Order;
