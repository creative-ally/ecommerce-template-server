const mongoose = require('mongoose');
const cartSchema = require('../schemas/cartSchema');

const Cart = new mongoose.model('Cart', cartSchema);

module.exports = Cart;