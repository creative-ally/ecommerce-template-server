// dependencies
const mongoose = require('mongoose');
const blogSchema = require('../schemas/blogSchema');

const Blog = new mongoose.model('Blog', blogSchema);

module.exports = Blog;
