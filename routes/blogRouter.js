// dependencies
const express = require('express');
const mongoose = require('mongoose');
const Blog = require('../models/Blog');

// router setup
const router = express.Router();

// Blog adding
// using async await and try-catch method to get the returned promise
router.post('/', async (req, res) => {
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
    console.log(err);
    res.status(500).json({ error: 'There is a server side error!' });
  }
});

// adding multiple blog
// using callback function to get returned promise
router.post('/all', (req, res) => {
  const data = req.body;
  Blog.insertMany(data, (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'There is a server side error!' });
    } else {
      res.status(200).json({
        message: 'Todos added successfully!!',
        data,
      });
    }
  });
});

// displaying blogs
// using callback function to get returned promise
router.get('/', (req, res) => {
  Blog.find({})
    .select({
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    })
    .exec((err, data) => {
      if (err) {
        // console.log(err);
        res.status(500).json({ error: 'There is a server side error!' });
      } else {
        res.status(200).json({
          result: data,
          message: 'All blogs are shown here successfully!!',
        });
      }
    });
});

// displaying a blog by id
// using async await and try-catch method to get the returned promise
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Blog.find({ _id: id }).select({
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    });
    res.status(200).json({
      result: data,
      message: 'SUCCESS!!',
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json({ error: 'There is a server side error!' });
  }
});

// update a blog by id
// using callback function to get returned promise
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const result = Blog.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        title: 'Wooden Kitchen Rack',
      },
    },
    (err) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: 'There is a server side error!' });
      } else {
        res.status(200).json({
          message: 'Blog updated successfully!!',
        });
      }
    }
  ).clone();
});

module.exports = router;
