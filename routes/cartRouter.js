// external imports
const express = require('express');

// internal imports
const {
  addToCart,
  updateCart,
  removeCart,
  userCart,
} = require('../controllers/cartController');

// router setup
const router = express.Router({
  caseSensitive: true,
});

router.route('/').post(addToCart);

router.route('/user/:userId').get(userCart);

router.route('/item/:id').put(updateCart).delete(removeCart);

module.exports = router;
