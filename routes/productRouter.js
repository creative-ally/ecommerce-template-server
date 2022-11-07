// external imports
const express = require('express');

// internal imports
const {
  addProduct,
  addProducts,
  getAllProducts,
  getProductsByCategory,
  getProductsByCode,
  // getOfficeProducts,
  // getDoorProducts,
  // getInteriorProducts,
  // getDiningProducts,
  // getBedroomProducts,
  getProduct,
  updateProduct,
  removeProduct,
} = require('../controllers/productController');

// router setup
const router = express.Router();

router
  .post('/', addProduct)
  .post('/all', addProducts)
  .get('/:id', getProduct)
  .get('/', getAllProducts)
  .get('/:category', getProductsByCategory)
  .get('/:category/:code', getProductsByCode)
  // .get('/office', getOfficeProducts)
  // .get('/door', getDoorProducts)
  // .get('/interior', getInteriorProducts)
  // .get('/dining', getDiningProducts)
  // .get('/bedroom', getBedroomProducts)
  .put('/:id', updateProduct)
  .delete('/:id', removeProduct);

module.exports = router;
