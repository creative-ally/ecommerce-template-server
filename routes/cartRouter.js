// external imports
const express = require('express');

// internal imports
const {
  addToCart,
  updateCart,
  removeCart,
  userCart,
  getAllCarts,
} = require('../controllers/cartController');

// router setup
const router = express.Router({
  caseSensitive: true,
});

router.route('/').post(addToCart).get(getAllCarts);

router.route('/user/:userId').get(userCart);

router.route('/item/:id').put(updateCart).delete(removeCart);

module.exports = router;
