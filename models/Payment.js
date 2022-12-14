// external imports
const mongoose = require('mongoose');

// internal imports
const paymentSchema = require('../schemas/paymentSchema');

const Payment = new mongoose.model('Payment', paymentSchema);

// exporting module
module.exports = Payment;
