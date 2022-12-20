// external imports
const mongoose = require('mongoose');

// internal imports
const productSchema = require('../schemas/productSchema');

const Product = new mongoose.model('Product', productSchema);

// exporting module
module.exports = Product;
