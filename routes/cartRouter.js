// external imports
const express = require('express');

// internal imports
const { addToCart, updateCart } = require('../controllers/cartController');

// router setup
const router = express.Router({
  caseSensitive: true,
});

router.route('/').post(addToCart);

router.route('/item/:id').put(updateCart);

module.exports = router;
