// external import
const mongoose = require('mongoose');

// internal import
const Order = require('../models/Order');

// item added to the order
const addToOrder = async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json({
      message: 'Item added to Order successfully!!',
      data: savedOrder,
    });
  } catch (err) {
    res.status(500).json({ error: 'There is a server side error' });
  }
};

module.exports = {
  addToOrder,
};
