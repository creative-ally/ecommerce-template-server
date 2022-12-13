// external imports
const express = require('express');

// internal imports
const { payBill } = require('../controllers/paymentController');

// router setup
const router = express.Router({
  caseSensitive: true,
});

router.route('/').post(payBill);

module.exports = router;
