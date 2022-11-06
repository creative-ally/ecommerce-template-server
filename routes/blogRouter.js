// external imports
const express = require('express');

// internal imports
const {
  addBlog,
  addBlogs,
  getAllBlogs,
  getBlog,
  updateBlog,
  removeBlog,
} = require('../controllers/blogController');

// router setup
const router = express.Router();

router
  .post('/', addBlog)
  .post('/all', addBlogs)
  .get('/', getAllBlogs)
  .get('/:id', getBlog)
  .put('/:id', updateBlog)
  .delete('/:id', removeBlog);

module.exports = router;
