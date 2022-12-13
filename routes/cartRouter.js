// external imports
const express = require('express');

// internal imports
const { addToCart } = require('../controllers/cartController');

// router setup
const router = express.Router({
  caseSensitive: true,
});

router.route('/').post(addToCart);

module.exports = router;
