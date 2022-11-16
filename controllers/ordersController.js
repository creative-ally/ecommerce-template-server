const mongoose = require('mongoose');
const Orders = require('../models/Orders');


const addOrder = async (req, res, next) => {
    const newOrder = new Orders(req.body);
    try {
        const savedOrder = await newOrder.save(); // save method is built-in keyword of mongoose which is used for inserting data in the database
        // console.log(savedProduct);
        res.status(200).json({
            // 200 || 201 || 300 || 301 => successful
            message: 'New order added successfully!!',
            data: savedOrder,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'There is a server side error!' }); // 500 => server error, 400 => bad request, 404 => not found,  401 => authetication error, 403 => forbidden error
    }
};

const getAllOrders = (req, res, next) => {
    Orders.find({}) // find is built-in keyword of mongoose which is used for finding data from the database based on the condition
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
                    message: 'All Orders are shown here successfully!!',
                });
            }
        });
};

module.exports = {
    addOrder,
    getAllOrders
};