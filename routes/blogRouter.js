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
    const savedBlog = await newBlog.save(); // save method is built-in keyword of mongoose which is used for inserting data in the database
    // console.log(savedBlog);
    res.status(200).json({
      // 200 || 201 || 300 || 301 => successful
      message: 'New Blog added successfully!!',
      data: savedBlog,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'There is a server side error!' }); // 500 => server error, 400 => bad request, 404 => not found,  401 => authetication error, 403 => forbidden error
  }
});

// adding multiple blog
// using callback function to get returned promise
router.post('/all', (req, res) => {
  const data = req.body;
  Blog.insertMany(data, (err) => {
    //insertMany is built-in keyword of mongoose which is used for inserting many datas in the database
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'There is a server side error!' });
    } else {
      res.status(200).json({
        message: 'Blogs added successfully!!',
        data,
      });
    }
  });
});

// displaying blogs
// using callback function to get returned promise
router.get('/', (req, res) => {
  Blog.find({}) // find is built-in keyword of mongoose which is used for finding data from the database based on the condition
    .select({
      // select is built-in keyword of mongoose which is used for selcting which collection field to display or not
      __v: 0, // 0 means no needs to show
      createdAt: 0,
      updatedAt: 0,
    })
    .exec((err, data) => {
      // here is all execution is happening
      if (err) {
        console.log(err);
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
  Blog.findByIdAndUpdate(
    // findByIdAndUpdate is built-in keyword of mongoose which is used for finding and updating data from the database based on the condition
    { _id: id },
    {
      $set: {
        title: 'Wooden Kitchen Rack', // just manually updating data
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
  ).clone(); // forces mongoose to complete its execution
});

// delete a blog by id
// using callback function to get returned promise
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Blog.deleteOne({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'There is a server side error!' });
    } else {
      res.status(200).json({
        message: 'Blog was deleted successfully!!',
      });
    }
  }).clone();
});

module.exports = router;
