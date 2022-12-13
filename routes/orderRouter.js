// external imports
const express = require('express');

// internal imports
const { addToOrder } = require('../controllers/orderController');

// router setup
const router = express.Router({
  caseSensitive: true,
});

router.route('/').post(addToOrder);

module.exports = router;
