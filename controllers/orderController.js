// external import
const mongoose = require('mongoose');

// internal import
const Order = require('../models/Order');

// displayng all Orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).select({
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    });
    res.status(200).json({
      message: 'All Orders showing!!',
      data: orders,
    });
  } catch (err) {
    res.status(500).json({ error: 'There is a server side error' });
  }
};

// display user Order
const userOrder = async (req, res) => {
  const id = req.params.userId;
  try {
    const order = await Order.find({ userId: id }).select({
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    });
    res.status(200).json({
      message: 'User Order showing!!',
      data: order,
    });
  } catch (err) {
    res.status(500).json({ error: 'There is a server side error' });
  }
};

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

// delete Order
const removeOrder = async (req, res) => {
  const id = req.params.id;
  try {
    await Order.findByIdAndDelete({ _id: id });
    res.status(200).json('Order has been deleted...');
  } catch (err) {
    res.status(500).json({ error: 'There is a server side error' });
  }
};

module.exports = {
  getAllOrders,
  userOrder,
  addToOrder,
  updateOrder,
  removeOrder,
};
