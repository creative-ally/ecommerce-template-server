// dependencies
const mongoose = require('mongoose');

// creating schema for products
const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      required: [true, 'Please provide a blog title'],
      trim: true,
      unique: [true, 'This blog is already in!'],
      minLength: [3, 'Blog title must be at least 3 characters'],
      maxLength: [100, 'Blog title is too long'],
    },
    image: {
      type: String,
      required: [true, 'Please provide an image'],
    },
    description: {
      type: String,
      required: [true, 'Please provide blog description'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = blogSchema;
