// dependencies
const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/Product');

// router setup
const router = express.Router();

//  adding single product
// using async await and try-catch method to get the returned promise
router.post('/', async (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    subcategory: req.body.subcategory,
    category: req.body.category,
    image: req.body.image,
    price: req.body.price,
    code: req.body.code,
    color: req.body.color,
    material: req.body.material,
    description: req.body.description,
  });
  try {
    const savedProduct = await newProduct.save();
    // console.log(savedProduct);
    res.status(200).json({
      message: 'New product added successfully!!',
      data: savedProduct,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'There is a server side error!' });
  }
});

// adding multiple product
// using callback function to get returned promise
router.post('/all', (req, res) => {
  const data = req.body;
  Product.insertMany(data, (err) => {
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

// displaying product
// using callback function to get returned promise
router.get('/', (req, res) => {
  Product.find({})
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
          message: 'All products are shown here successfully!!',
        });
      }
    });
});

// displaying a product by id
// using async await and try catch to get returned promise
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Product.find({ _id: id }).select({
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

// update a product by id
// using callback function to get returned promise
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const result = Product.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        price: 25195,
      },
    },
    (err) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: 'There is a server side error!' });
      } else {
        res.status(200).json({
          message: 'Product updated successfully!!',
        });
      }
    }
  ).clone();
});

module.exports = router;
