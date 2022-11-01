// dependencies
const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/Product');

// router setup
const router = express.Router();

// adding single product
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
    const savedProduct = await newProduct.save(); // save method is built-in keyword of mongoose which is used for inserting data in the database
    // console.log(savedProduct);
    res.status(200).json({
      // 200 || 201 || 300 || 301 => successful
      message: 'New product added successfully!!',
      data: savedProduct,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'There is a server side error!' }); // 500 => server error, 400 => bad request, 404 => not found,  401 => authetication error, 403 => forbidden error
  }
});

// adding multiple product
// using callback function to get returned promise
router.post('/all', (req, res) => {
  const data = req.body;
  Product.insertMany(data, (err) => {
    //insertMany is built-in keyword of mongoose which is used for inserting many datas in the database
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'There is a server side error!' });
    } else {
      res.status(200).json({
        message: 'Products added successfully!!',
        data,
      });
    }
  });
});

// displaying product
// using callback function to get returned promise
router.get('/', (req, res) => {
  Product.find({}) // find is built-in keyword of mongoose which is used for finding data from the database based on the condition
    .select({
      // select is built-in keyword of mongoose which is used for selcting which collection field to display or not
      __v: 0, // 0 means no needs to show
      createdAt: 0,
      updatedAt: 0,
    })
    .exec((err, data) => {
      // here is all execution is happening
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

// get office products
// using async await and try-catch method to get the returned promise
router.get('/office', async (req, res) => {
  try {
    const officeProduct = new Product();
    const data = await officeProduct.findOfficeProduct();
    res.status(200).json({
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'There is a server side error!' });
  }
});

// get door products
// using async await and try-catch method to get the returned promise
router.get('/door', async (req, res) => {
  try {
    const doorProduct = new Product();
    const data = await doorProduct.findDoorProduct();
    res.status(200).json({
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'There is a server side error!' });
  }
});

// get interior products
// using async await and try-catch method to get the returned promise
router.get('/interior', async (req, res) => {
  try {
    const interiorProduct = new Product();
    const data = await interiorProduct.findInteriorProduct();
    res.status(200).json({
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'There is a server side error!' });
  }
});

// get dining products
// using async await and try-catch method to get the returned promise
router.get('/dining', async (req, res) => {
  try {
    const diningProduct = new Product();
    const data = await diningProduct.findDiningProduct();
    res.status(200).json({
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'There is a server side error!' });
  }
});

// get bedroom products
// using async await and try-catch method to get the returned promise
router.get('/bedroom', async (req, res) => {
  try {
    const bedroomProduct = new Product();
    const data = await bedroomProduct.findBedroomProduct();
    res.status(200).json({
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'There is a server side error!' });
  }
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
  Product.findByIdAndUpdate(
    // findByIdAndUpdate is built-in keyword of mongoose which is used for finding and updating data from the database based on the condition
    { _id: id },
    {
      $set: {
        // just manually updating data
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
  ).clone(); // forces mongoose to complete its execution
});

// delete a product by id
// using callback function to get returned promise
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Product.deleteOne({ _id: id }, (err) => {
    //deleteOne is built-in keyword of mongoose which is used for deleting data from the database based on the condition
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'There is a server side error!' });
    } else {
      res.status(200).json({
        message: 'Product was deleted successfully!!',
      });
    }
  }).clone();
});

module.exports = router;
