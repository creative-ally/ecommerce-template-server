// dependencies
const mongoose = require('mongoose');

// creating schema for users
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please provide your username'],
      trim: true,
      minLength: [3, 'Name must be at least 3 letters'],
      maxLength: [100, 'Name is too long'],
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: [true, 'This user is already in!'],
    },
    password: {
      type: String,
      minLength: [6, 'Password must be at least 3 letters'],
    },
    image: {
      type: String,
      default: 'https://ibb.co/0FJd9Jz',
    },
    phone: {
      type: String,
      minLength: [11, 'Phone number must be at least 11 letters'],
      minLength: [14, 'Phone number must be use Country Code'],
      default: '+8801xxxxxxxxx',
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isSignInWithGoogle: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = userSchema;
