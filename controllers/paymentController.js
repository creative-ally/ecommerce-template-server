// external imports
const stripe = require('stripe')(process.env.STRIPE_KEY);

// internal imports
const Order = require('../models/Order');
const Payment = require('../models/Payment');

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
    // console.log(err);
    res.status(500).json({
      message: 'There is a server side error',
      // error: err
    });
  }
};

// paying for orders
const payBill = async (req, res) => {
  const order = req.body;
  const price = order.price;
  const amount = price;
  console.log(req.body);
  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    // const newPayment = new Payment(order);
    // const savedPayment = await newPayment.save();
    res.status(200).json({
      message: 'Payment successful!',
      clientSecret: paymentIntent.client_secret,
      // data: savedPayment,
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json({
      message: 'There is a server side error',
      // error: err
    });
  }
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
          transactionId: paymentDetail.payments[0].transactionId,
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
    // console.log(err)
    res.status(500).json({
      message: 'There is a server side error',
      // error: err
    });
  }
};

module.exports = {
  getAllTransactionDetails,
  payBill,
  updateBillStatus,
};
