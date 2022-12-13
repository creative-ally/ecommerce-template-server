// external imports
const express = require('express');

// internal imports
const { addToOrder, updateOrder } = require('../controllers/orderController');

// router setup
const router = express.Router({
  caseSensitive: true,
});

router.route('/').post(addToOrder);

router.route('/:id').put(updateOrder);
module.exports = router;
