// external imports
const mongoose = require('mongoose');

// internal imports
const cartSchema = require('../schemas/cartSchema');

const Cart = new mongoose.model('Cart', cartSchema);

// exporting module
module.exports = Cart;
