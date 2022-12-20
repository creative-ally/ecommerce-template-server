// external imports
const express = require('express');

// internal imports
const {
  getAllUsers,
  getAllAdmins,
  getAllGoogleUsers,
  getUser,
  updateUser,
  removeUser,
} = require('../controllers/userController');
const { verifyToken, verifyAdmin } = require('../middlewares/auth/authHandler');

// router setup
const router = express.Router({
  caseSensitive: true,
});

router.route('/').get(verifyToken, verifyAdmin, getAllUsers);

router.route('/admins').get(verifyToken, verifyAdmin, getAllAdmins);

router.route('/google').get(verifyToken, verifyAdmin, getAllGoogleUsers);

router
  .route('/information/:id')
  .get(verifyToken, getUser)
  .put(verifyToken, updateUser)
  .delete(verifyToken, verifyAdmin, removeUser);

// exporting module
module.exports = router;
