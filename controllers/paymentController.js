const Order = require('../models/Order');
const Payment = require('../models/Payment');

const KEY = process.env.STRIPE_KEY;
const stripe = require('stripe')(KEY);

// displayng all transactions
const getAllTransactionDetails = async (req, res) => {
  try {
    const transactionDetails = await Payment.find({}).select({
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    });
    res.status(200).json({
      message: 'All transaction details are showing!!',
      data: transactionDetails,
    });
  } catch (err) {
    res.status(500).json({ error: 'There is a server side error' });
  }
};

const payBill = async (req, res) => {
  const order = req.body;
  const price = order?.price;
  const amount = price * 0.01;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: 'usd',
    payment_method_types: ['card'],
  });
  res.send({ clientSecret: paymentIntent.client_secret });
};

const updateBillStatus = async (req, res) => {
  const userId = req.params.userId;
  const paymentDetail = req.body;
  const opts = { runValidators: true };
  try {
    const userOrderInfo = await Order.findOneAndUpdate(
      { userId: userId },
      {
        $set: {
          ...userOrderInfo,
          transactionId: paymentDetail?.payments[0]?.transactionId,
        },
      },
      {
        new: true,
        opts,
      }
    );
    const newPayment = new Payment(paymentDetail);
    const savedPayment = await newPayment.save();
    res.status(200).json({
      message: 'Order item updated successfully',
      data: userOrderInfo,
      result: savedPayment,
    });
  } catch (err) {
    res.status(500).json({ message: 'There is a server side error' });
  }
};

module.exports = {
  getAllTransactionDetails,
  payBill,
  updateBillStatus,
};
