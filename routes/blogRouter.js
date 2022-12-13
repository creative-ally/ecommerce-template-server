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
const router = express.Router({
  caseSensitive: true,
});

router.route('/').post(addBlog).get(getAllBlogs);

router.route('/all').post(addBlogs);

router.route('/:id').get(getBlog).put(updateBlog).delete(removeBlog);

module.exports = router;
