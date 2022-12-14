// external imports
const mongoose = require('mongoose');

// internal imports
const Product = require('../models/Product');

// adding a single product
const addProduct = async (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    subcategory: req.body.subcategory,
    price: req.body.price,
    code: req.body.code,
    quantity: req.body.quantity,
    status: req.body.status,
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
    // console.log(err);
    res.status(500).json({
      message: 'There is a server side error!',
      // error: err
    }); // 500 => server error, 400 => bad request, 404 => not found,  401 => authetication error, 403 => forbidden error
  }
};

// adding multiple products
const addProducts = (req, res) => {
  const data = req.body;
  Product.insertMany(data, (err) => {
    //insertMany is built-in keyword of mongoose which is used for inserting many datas in the database
    if (err) {
      // console.log(err);
      res.status(500).json({
        message: 'There is a server side error!',
        // error: err
      });
    } else {
      res.status(200).json({
        message: 'Products added successfully!!',
        data,
      });
    }
  });
};

// displaying products
const getAllProducts = (req, res) => {
  Product.find({}) // find is built-in keyword of mongoose which is used for finding data from the database based on the condition
    .select({
      // select is built-in keyword of mongoose which is used for selcting which collection field to display or not
      __v: 0, // 0 means no needs to show and 1 means show. But, cannot use 1 or 0 together, either 0 or 1 should be used
      createdAt: 0,
      updatedAt: 0,
    })
    .exec((err, data) => {
      // here is all execution is happening
      if (err) {
        // console.log(err);
        res.status(500).json({
          message: 'There is a server side error!',
          // error: err
        });
      } else {
        res.status(200).json({
          data,
          message: 'All products are shown here successfully!!',
        });
      }
    });
};

// displaying products by category
const getProductsByCategory = async (req, res) => {
  const category = req.params.category;
  try {
    const data = await Product.find({ category: category }).select({
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
};

// displaying products by subcategory
const getProductsByCode = async (req, res) => {
  const { category, code } = req.params;
  try {
    const data = await Product.find({
      $and: [{ category: { $eq: category } }, { code: { $eq: code } }],
    }).select({
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
};

// displaying products by search
const getProductsBySearch = async (req, res) => {
  const { search } = req.params;
  // console.log(search);
  if (search.length >= 3) {
    try {
      const data = await Product.find({
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { category: { $regex: search, $options: 'i' } },
          { code: { $regex: search, $options: 'i' } },
        ],
      })
        .select({
          __v: 0,
          createdAt: 0,
          updatedAt: 0,
        })
        .exec();
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
    res.status(401).json({ message: 'Something went wrong!' });
  }
};

// displaying a product by id
const getProduct = async (req, res) => {
  const id = req.params.id;
  if (mongoose.Types.ObjectId.isValid(id)) {
    try {
      const data = await Product.find({ _id: id }).select({
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

// updating a product by id
const updateProduct = (req, res) => {
  const id = req.params.id;
  const updatedProduct = req.body;
  const opts = { runValidators: true };
  if (mongoose.Types.ObjectId.isValid(id)) {
    Product.findByIdAndUpdate(
      // findByIdAndUpdate is built-in keyword of mongoose which is used for finding and updating data from the database based on the condition
      { _id: id },
      {
        $set: updatedProduct,
      },
      {
        opts,
      },
      (err) => {
        if (err) {
          // console.log(err);
          res.status(500).json({
            message: 'There is a server side error!',
            // error: err
          });
        } else {
          res.status(200).json({
            message: 'Product updated successfully!!',
            data: updatedProduct,
          });
        }
      }
    ).clone(); // forces mongoose to complete its execution
  } else {
    res.status(500).json({ message: 'There is a server side error!' });
  }
};

// removing a product by id
const removeProduct = (req, res) => {
  const id = req.params.id;
  if (mongoose.Types.ObjectId.isValid(id)) {
    Product.deleteOne({ _id: id }, (err) => {
      //deleteOne is built-in keyword of mongoose which is used for deleting data from the database based on the condition
      if (err) {
        // console.log(err);
        res.status(500).json({
          message: 'There is a server side error!',
          // error: err
        });
      } else {
        res.status(200).json({
          message: 'Product was deleted successfully!!',
        });
      }
    }).clone();
  } else {
    res.status(500).json({ message: 'There is a server side error!' });
  }
};

// exporting modules
module.exports = {
  addProduct,
  addProducts,
  getAllProducts,
  getProductsByCategory,
  getProductsByCode,
  getProductsBySearch,
  getProduct,
  updateProduct,
  removeProduct,
};
