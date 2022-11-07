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
const router = express.Router({
  caseSensitive: true,
});

router
  .post('/', addProduct)
  .post('/all', addProducts)
  .get('/', getAllProducts)
  .get('/category/:category', getProductsByCategory)
  .get('/category/:category/:code', getProductsByCode)
  .get('/:id', getProduct)
  .put('/:id', updateProduct)
  .delete('/:id', removeProduct);

// .get('/office', getOfficeProducts)
// .get('/door', getDoorProducts)
// .get('/interior', getInteriorProducts)
// .get('/dining', getDiningProducts)
// .get('/bedroom', getBedroomProducts)

module.exports = router;
