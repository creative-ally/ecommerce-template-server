const KEY = process.env.STRIPE_KEY;
const stripe = require('stripe')(KEY);

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

module.exports = {
  payBill,
};
