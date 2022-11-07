// dependencies
const mongoose = require('mongoose');
const productSchema = require('../schemas/productSchema'); //schema pattern

const Product = new mongoose.model('Product', productSchema);

module.exports = Product;
