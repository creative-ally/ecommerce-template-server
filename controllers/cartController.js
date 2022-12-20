// external imports
const mongoose = require('mongoose');

// internal imports
const Cart = require('../models/Cart');

// displayng all carts
const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find({}).select({
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    });
    res.status(200).json({
      message: 'All carts showing!!',
      data: carts,
    });
  } catch (err) {
    // console.log(err)
    res.status(500).json({
      message: 'There is a server side error',
      // error: err
    });
  }
};

// display user cart
const userCart = async (req, res) => {
  const id = req.params.userId;
  try {
    const cart = await Cart.find({ userId: id }).select({
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    });
    res.status(200).json({
      message: 'User cart showing!!',
      data: cart,
    });
  } catch (err) {
    // console.log(err)
    res.status(500).json({
      message: 'There is a server side error',
      // error: err
    });
  }
};

// add items to cart
const addToCart = async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json({
      message: 'Item added to cart successfully!!',
      data: savedCart,
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json({
      message: 'There is a server side error',
      // error: err
    });
  }
};

// update item in the cart
const updateCart = async (req, res) => {
  const id = req.params.id;
  const updatedCartItem = req.body;
  const opts = { runValidators: true };

  if (mongoose.Types.ObjectId.isValid(id)) {
    try {
      await Cart.findByIdAndUpdate(
        { _id: id },
        {
          $set: updatedCartItem,
        },
        {
          new: true,
          opts,
        }
      );
      res.status(200).json({
        message: 'Cart item updated successfully',
        data: updatedCartItem,
      });
    } catch (err) {
      // console.log(err)
      res.status(500).json({
        message: 'There is a server side error',
        // error: err
      });
    }
  } else {
    res.status(500).json({ message: 'There is a server side error!' });
  }
};

// delete cart
const removeCart = async (req, res) => {
  const id = req.params.id;
  if (mongoose.Types.ObjectId.isValid(id)) {
    try {
      await Cart.findByIdAndDelete({ _id: id });
      res.status(200).json('Cart has been deleted...');
    } catch (err) {
      // console.log(err)
      res.status(500).json({
        message: 'There is a server side error',
        // error: err
      });
    }
  } else {
    res.status(500).json({ message: 'There is a server side error!' });
  }
};

// exporting modules
module.exports = {
  addToCart,
  getAllCarts,
  userCart,
  updateCart,
  removeCart,
};
