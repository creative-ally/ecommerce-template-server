// external imports
const express = require('express');

// internal imports
const {
  payBill,
  updateBillStatus,
} = require('../controllers/paymentController');
const { verifyToken, verifyAdmin } = require('../middlewares/auth/authHandler');

// router setup
const router = express.Router({
  caseSensitive: true,
});

router.route('/').post(verifyToken, payBill);

router.route('/check/:userId').put(verifyToken, updateBillStatus);

module.exports = router;
