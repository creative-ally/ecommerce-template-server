// external imports
const express = require('express');

// internal imports
const {
  addProduct,
  addProducts,
  getAllProducts,
  // getProductsByCategory,
  // getProductsBySubcategory,
  getOfficeProducts,
  getDoorProducts,
  getInteriorProducts,
  getDiningProducts,
  getBedroomProducts,
  getProduct,
  updateProduct,
  removeProduct,
} = require('../controllers/productController');

// router setup
const router = express.Router();

router
  .post('/', addProduct)
  .post('/all', addProducts)
  .get('/', getAllProducts)
  // .get('/:category', getProductsByCategory)
  // .get('/category/:subcategory', getProductsBySubcategory)
  .get('/office', getOfficeProducts)
  .get('/door', getDoorProducts)
  .get('/interior', getInteriorProducts)
  .get('/dining', getDiningProducts)
  .get('/bedroom', getBedroomProducts)
  .get('/:id', getProduct)
  .put('/:id', updateProduct)
  .delete('/:id', removeProduct);

module.exports = router;
