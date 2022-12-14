// external imports
const mongoose = require('mongoose');

// internal imports
const Blog = require('../models/Blog');

// adding a blog
const addBlog = async (req, res) => {
  const newBlog = new Blog({
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
  });
  try {
    const savedBlog = await newBlog.save();
    // console.log(savedBlog);
    res.status(200).json({
      message: 'New Blog added successfully!!',
      data: savedBlog,
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json({
      message: 'There is a server side error!',
      // error: err
    });
  }
};

// adding multiple blogs
const addBlogs = (req, res) => {
  const data = req.body;
  Blog.insertMany(data, (err) => {
    if (err) {
      // console.log(err);
      res.status(500).json({
        message: 'There is a server side error!',
        // error: err
      });
    } else {
      res.status(200).json({
        message: 'Blogs added successfully!!',
        data,
      });
    }
  });
};

// displaying blogs
const getAllBlogs = (req, res) => {
  Blog.find({})
    .select({
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    })
    .exec((err, data) => {
      if (err) {
        // console.log(err);
        res.status(500).json({
          message: 'There is a server side error!',
          // error: err
        });
      } else {
        res.status(200).json({
          message: 'All blogs are shown here successfully!!',
          data,
        });
      }
    });
};

// displaying a blog by id
const getBlog = async (req, res) => {
  const id = req.params.id;
  if (mongoose.Types.ObjectId.isValid(id)) {
    try {
      const data = await Blog.find({ _id: id }).select({
        __v: 0,
        createdAt: 0,
        updatedAt: 0,
      });
      res.status(200).json({
        message: 'SUCCESS!!',
        data,
      });
    } catch (err) {
      // console.log(err);
      res.status(500).json({
        message: 'There is a server side error!',
        // error: err
      });
    }
  } else {
    res.status(500).json({ message: 'There is a server side error!' });
  }
};

// updating a blog by id
const updateBlog = (req, res) => {
  const id = req.params.id;
  const updatedBlog = req.body;
  const opts = { runValidators: true };

  if (mongoose.Types.ObjectId.isValid(id)) {
    Blog.findByIdAndUpdate(
      { _id: id },
      {
        $set: updatedBlog,
      },
      {
        opts,
      },
      (err) => {
        if (err) {
          //  console.log(err);
          res.status(500).json({
            message: 'There is a server side error!',
            // error: err
          });
        } else {
          res.status(200).json({
            message: 'Blog updated successfully!!',
            data: updatedBlog,
          });
        }
      }
    ).clone();
  } else {
    res.status(500).json({ message: 'There is a server side error!' });
  }
};

// removing a blog by id
const removeBlog = (req, res) => {
  const id = req.params.id;
  if (mongoose.Types.ObjectId.isValid(id)) {
    Blog.deleteOne({ _id: id }, (err) => {
      if (err) {
        // console.log(err);
        res.status(500).json({
          message: 'There is a server side error!',
          // error: err
        });
      } else {
        res.status(200).json({
          message: 'Blog was deleted successfully!!',
        });
      }
    }).clone();
  } else {
    res.status(500).json({ message: 'There is a server side error!' });
  }
};

// exporting modules
module.exports = {
  addBlog,
  addBlogs,
  getAllBlogs,
  getBlog,
  updateBlog,
  removeBlog,
};
