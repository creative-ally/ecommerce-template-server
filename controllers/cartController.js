// external import
const mongoose = require('mongoose');

// internal import
const Cart = require('../models/Cart');

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

module.exports = {
  addToCart,
};
