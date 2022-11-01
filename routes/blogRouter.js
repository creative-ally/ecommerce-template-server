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

module.exports = router;
