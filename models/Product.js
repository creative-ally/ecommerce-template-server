// dependencies
const mongoose = require('mongoose');
const productSchema = require('../schemas/productSchema');

const Product = new mongoose.model('ProductDetail', productSchema);

module.exports = Product;
