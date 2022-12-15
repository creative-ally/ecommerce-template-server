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
const { verifyToken, verifyAdmin } = require('../middlewares/auth/authHandler');

// router setup
const router = express.Router({
  caseSensitive: true,
});

router
  .route('/')
  .post(verifyToken, verifyAdmin, addProduct)
  .get(getAllProducts);

router.route('/all').post(verifyToken, verifyAdmin, addProducts);

router.route('/category/:category').get(getProductsByCategory);

router.route('/category/:category/:code').get(getProductsByCode);

router.route('/search/:search').get(getProductsBySearch);

router
  .route('/:id')
  .get(getProduct)
  .put(verifyToken, verifyAdmin, updateProduct)
  .delete(verifyToken, verifyAdmin, removeProduct);

// exporting module
module.exports = router;
