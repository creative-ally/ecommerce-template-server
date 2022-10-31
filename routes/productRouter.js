// dependencies
const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/Product');

// router setup
const router = express.Router();

// Product adding
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

module.exports = router;
