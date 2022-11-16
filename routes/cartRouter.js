const express = require('express');

const {
    addCart,
    getAllCartItems
} = require('../controllers/cartController');

const router = express.Router({
    caseSensitive: true,
});

router.route('/').post(addCart).get(getAllCartItems)

module.exports = router;