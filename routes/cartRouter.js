// external imports
const express = require('express');

// internal imports
const {
  addToCart,
  updateCart,
  removeCart,
  userCart,
  getAllCarts,
} = require('../controllers/cartController');
const { verifyAdmin, verifyToken } = require('../middlewares/auth/authHandler');

// router setup
const router = express.Router({
  caseSensitive: true,
});

router
  .route('/')
  .post(verifyToken, addToCart)
  .get(verifyToken, verifyAdmin, getAllCarts);

router.route('/user/:userId').get(verifyToken, userCart);

router
  .route('/item/:id')
  .put(verifyToken, updateCart)
  .delete(verifyToken, removeCart);

module.exports = router;
