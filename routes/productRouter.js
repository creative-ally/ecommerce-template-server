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

router.route('/').post(addProduct).get(getAllProducts);

router.route('/all').post(addProducts);

router.route('/category/:category').get(getProductsByCategory);

router.route('/category/:category/:code').get(getProductsByCode);

router.route('/search/:search').get(getProductsBySearch);

router.route('/:id').get(getProduct).put(updateProduct).delete(removeProduct);

// .get('/office', getOfficeProducts)
// .get('/door', getDoorProducts)
// .get('/interior', getInteriorProducts)
// .get('/dining', getDiningProducts)
// .get('/bedroom', getBedroomProducts)

module.exports = router;
