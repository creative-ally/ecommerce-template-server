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

// update order item
const updateOrder = async (req, res) => {
  const id = req.params.id;
  const updatedOrderItem = req.body;
  const opts = { runValidators: true };

  try {
    await Order.findByIdAndUpdate(
      { _id: id },
      {
        $set: updatedOrderItem,
      },
      {
        new: true,
        opts,
      }
    );
    res.status(200).json({
      message: 'Order item updated successfully',
      data: updatedOrderItem,
    });
  } catch (err) {
    res.status(500).json({ error: 'There is a server side error' });
  }
};

module.exports = {
  addToOrder,
  updateOrder,
};
