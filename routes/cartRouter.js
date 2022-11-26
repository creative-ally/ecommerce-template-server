const express = require('express');

const {
    addCart,
    getAllCartItems,
    removeCartItem,
    getCartItem,
    getCartItems
} = require('../controllers/cartController');

const router = express.Router({
    caseSensitive: true,
});

router.route('/').post(addCart).get(getAllCartItems);

router.route('/:email').get(getCartItems);

router.route('/:id').get(getCartItem).delete(removeCartItem);

module.exports = router;