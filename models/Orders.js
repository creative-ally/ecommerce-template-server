const mongoose = require('mongoose');
const ordersSchema = require('../schemas/ordersSchema');

const Orders = new mongoose.model('Orders', ordersSchema);

module.exports = Orders;