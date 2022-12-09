// external import
const express = require('express');

// internal import
const {
  getAllUsers,
  getAllAdmins,
  getAllGoogleUsers,
  getUser,
  updateUser,
} = require('../controllers/userController');

// router setup
const router = express.Router({
  caseSensitive: true,
});

router.route('/').get(getAllUsers);

router.route('/admins').get(getAllAdmins);

router.route('/google').get(getAllGoogleUsers);

router.route('/information/:id').get(getUser).put(updateUser);

module.exports = router;
