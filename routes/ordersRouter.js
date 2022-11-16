const express = require('express');
const {
    addOrder,
    getAllOrders
} = require('../controllers/ordersController');

const router = express.Router({
    caseSensitive: true,
});

router.route('/').post(addOrder).get(getAllOrders)

module.exports = router;