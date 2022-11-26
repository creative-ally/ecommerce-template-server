const mongoose = require('mongoose');
const Cart = require('../models/Cart');


const addCart = async (req, res, next) => {
    const newCart = new Cart(req.body);
    try {
        const savedCart = await newCart.save(); // save method is built-in keyword of mongoose which is used for inserting data in the database
        // console.log(savedProduct);
        res.status(200).json({
            // 200 || 201 || 300 || 301 => successful
            message: 'New cart item added successfully!!',
            data: savedCart,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'There is a server side error!' }); // 500 => server error, 400 => bad request, 404 => not found,  401 => authetication error, 403 => forbidden error
    }
};


const getAllCartItems = (req, res, next) => {
    Cart.find({}) // find is built-in keyword of mongoose which is used for finding data from the database based on the condition
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
                res.status(500).json({ error: 'There is a server side error!' });
            } else {
                res.status(200).json({
                    data,
                    message: 'All cart items are shown here successfully!!',
                });
            }
        });
};

//get cartItems by email
const getCartItems = async (req, res, next) => {
    const email = req.params.email;
    try {
      const data = await Cart.find({ email: email }).select({
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
      res.status(500).json({ error: 'There is a server side error!' });
    }
  };

//cartItemShowing with id
const getCartItem = async (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    if (mongoose.Types.ObjectId.isValid(id)) {
      try {
        const data = await Cart.findOne({ _id: id }).select({
          __v: 0,
          createdAt: 0,
          updatedAt: 0,
        });
        res.status(200).json({
          message: 'SUCCESS!!',
          data,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'There is a server side error!' });
      }
    } else {
      res.status(500).json({ error: 'There is a server side error!' });
    }
  };

//remove an item from cart
const removeCartItem = (req, res, next) => {
    const id = req.params.id;
    Cart.deleteOne({ _id: id }, (err) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: 'There is a server side error!' });
      } else {
        res.status(200).json({
          message: 'Cart item was deleted successfully!!',
        });
      }
    }).clone();
  };




module.exports = {
    addCart,
    getAllCartItems,
    getCartItems,
    getCartItem,
    removeCartItem,
};