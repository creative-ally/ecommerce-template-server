// external imports
const express = require('express');

// internal imports
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

router.route('/google/sign-in').post(googleSignIn);

// module exports
module.exports = router;
