// external imports
const mongoose = require('mongoose');

// internal imports
const blogSchema = require('../schemas/blogSchema');

const Blog = new mongoose.model('Blog', blogSchema);

// exporting module
module.exports = Blog;
