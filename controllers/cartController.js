// external import
const mongoose = require('mongoose');

// internal import
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
    res.status(500).json({ error: 'There is a server side error' });
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
    res.status(500).json({ error: 'There is a server side error' });
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
    res.status(500).json({ error: 'There is a server side error' });
  }
};

// update item in the cart
const updateCart = async (req, res) => {
  const id = req.params.id;
  const updatedCartItem = req.body;
  const opts = { runValidators: true };

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
    res.status(500).json({ error: 'There is a server side error' });
  }
};

// delete cart
const removeCart = async (req, res) => {
  const id = req.params.id;
  try {
    await Cart.findByIdAndDelete({ _id: id });
    res.status(200).json('Cart has been deleted...');
  } catch (err) {
    res.status(500).json({ error: 'There is a server side error' });
  }
};

module.exports = {
  addToCart,
  getAllCarts,
  userCart,
  updateCart,
  removeCart,
};
