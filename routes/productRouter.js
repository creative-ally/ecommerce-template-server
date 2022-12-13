// external imports
const express = require('express');

// internal imports
const {
  addProduct,
  addProducts,
  getAllProducts,
  getProductsByCategory,
  getProductsByCode,
  getProductsBySearch,
  getProduct,
  updateProduct,
  removeProduct,
} = require('../controllers/productController');

// router setup
const router = express.Router({
  caseSensitive: true,
});

router.route('/').post(addProduct).get(getAllProducts);

router.route('/all').post(addProducts);

router.route('/category/:category').get(getProductsByCategory);

router.route('/category/:category/:code').get(getProductsByCode);

router.route('/search/:search').get(getProductsBySearch);

router.route('/:id').get(getProduct).put(updateProduct).delete(removeProduct);

module.exports = router;
