// external imports
const express = require('express');

// internal imports
const {
  payBill,
  updateBillStatus,
} = require('../controllers/paymentController');

// router setup
const router = express.Router({
  caseSensitive: true,
});

router.route('/').post(payBill);

router.route('/check/:userId').put(updateBillStatus);

module.exports = router;
