// dependencies
const mongoose = require('mongoose');
const paymentSchema = require('../schemas/paymentSchema');

const Payment = new mongoose.model('Payment', paymentSchema);

module.exports = Payment;
