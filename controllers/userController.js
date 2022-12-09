// external import
const mongoose = require('mongoose');

// internal import
const User = require('../models/User');

// displaying users
const getAllUsers = (req, res) => {
  User.find({})
    .select({
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    })
    .exec((err, data) => {
      // here is all execution is happening
      if (err) {
        // console.log(err);
        res.status(500).json({ error: 'There is a server side error!' });
      } else {
        res.status(200).json({
          message: 'All users are shown here successfully!!',
          data,
        });
      }
    });
};

// displaying admins
const getAllAdmins = (req, res) => {
  User.find({ isAdmin: true })
    .select({
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    })
    .exec((err, data) => {
      // here is all execution is happening
      if (err) {
        // console.log(err);
        res.status(500).json({ error: 'There is a server side error!' });
      } else {
        res.status(200).json({
          message: 'All admins are shown here successfully!!',
          data,
        });
      }
    });
};

// displaying google users
const getAllGoogleUsers = (req, res) => {
  User.find({
    isSignInWithGoogle: true,
  })
    .select({
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    })
    .exec((err, data) => {
      // here is all execution is happening
      if (err) {
        // console.log(err);
        res.status(500).json({ error: 'There is a server side error!' });
      } else {
        res.status(200).json({
          message: 'All google users are shown here successfully!!',
          data,
        });
      }
    });
};

// displaying a user by id
const getUser = async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  if (mongoose.Types.ObjectId.isValid(id)) {
    try {
      const data = await User.find({ _id: id }).select({
        __v: 0,
        createdAt: 0,
        updatedAt: 0,
      });
      res.status(200).json({
        message: 'SUCCESS!!',
        data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'There is a server side error!' });
    }
  } else {
    res.status(500).json({ error: 'There is a server side error!' });
  }
};

// exporting modules
module.exports = {
  getAllUsers,
  getAllAdmins,
  getAllGoogleUsers,
  getUser,
};
