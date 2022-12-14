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
const { verifyToken, verifyAdmin } = require('../middlewares/auth/authHandler');

// router setup
const router = express.Router({
  caseSensitive: true,
});

router.route('/').post(verifyToken, verifyAdmin, addBlog).get(getAllBlogs);

router.route('/all').post(verifyToken, verifyAdmin, addBlogs);

router
  .route('/:id')
  .get(getBlog)
  .put(verifyToken, verifyAdmin, updateBlog)
  .delete(verifyToken, verifyAdmin, removeBlog);

module.exports = router;
