// external imports
const express = require('express');

// internal imports
const {
  payBill,
  updateBillStatus,
  getAllTransactionDetails,
} = require('../controllers/paymentController');
const { verifyToken, verifyAdmin } = require('../middlewares/auth/authHandler');

// router setup
const router = express.Router({
  caseSensitive: true,
});

router
  .route('/')
  .post(verifyToken, payBill)
  .get(verifyToken, verifyAdmin, getAllTransactionDetails);

router.route('/check/:userId').put(verifyToken, updateBillStatus);

// exporting module
module.exports = router;
