// external imports
const express = require('express');

// internal imports
const {
  addToOrder,
  updateOrder,
  removeOrder,
} = require('../controllers/orderController');

// router setup
const router = express.Router({
  caseSensitive: true,
});

router.route('/').post(addToOrder);

router.route('/:id').put(updateOrder).delete(removeOrder);

module.exports = router;
