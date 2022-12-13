// external imports
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// internal imports
const productRouter = require('./routes/productRouter');
const blogRouter = require('./routes/blogRouter');
const authRouter = require('./routes/authRouter');
const userRouter = require('./routes/userRouter');
const cartRouter = require('./routes/cartRouter');
const orderRouter = require('./routes/orderRouter');
const paymentRouter = require('./routes/paymentRouter');
const databaseConnect = require('./utilities/databaseConnect');
const { notFoundHandler } = require('./middlewares/common/notFoundHandler');

// app initialization
const app = express();
const port = process.env.PORT || 5000;

// cors config
const corsConfig = {
  origin: true,
  credentials: true,
};

// middleware
app.use(cors(corsConfig));
app.options('*', cors(corsConfig));
app.use(express.json());

// connecting to database
databaseConnect();

// displaying default response
app.get('/', (req, res) => {
  res.send({
    message:
      'Welcome to server of the ecommerce clone - developed by CreativeAlly',
  });
});

// setting-up application routes
app.use('/api/product', productRouter);
app.use('/api/blog', blogRouter);
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api/pay', paymentRouter);

// 404 not found handler
app.use('*', notFoundHandler);

// listening to the port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// if express fail to handle any error for that there's global errorHandler
process.on('unhandledRejection', (err) => {
  console.log(err.name);
  console.log(err.message);
  app.close(() => {
    process.exit(1);
  });
});
