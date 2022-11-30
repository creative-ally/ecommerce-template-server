// external import
const express = require('express');

// internal import
const {
  signIn,
  signUp,
  googleSignIn,
} = require('../controllers/authController');

// router setup
const router = express.Router({
  caseSensitive: true,
});

router.route('/sign-in').post(signIn);

router.route('/sign-up').post(signUp);

router.route('/google/:email').put(googleSignIn);

module.exports = router;
