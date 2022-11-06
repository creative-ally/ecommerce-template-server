// external imports
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

// internal imports
const productRouter = require('./routes/productRouter');
const blogRouter = require('./routes/blogRouter');
const databaseConnect = require('./utilities/databaseConnect');

// app initialization
const app = express();
const port = process.env.PORT || 5000;

// cors config
const corsConfig = {
  origin: true,
  credentials: true,
};

// middleware
dotenv.config();
app.use(cors(corsConfig));
app.options('*', cors(corsConfig));
app.use(express.json());

// connecting to database
databaseConnect();

// setting-up application routes
app.use('/api/product', productRouter);
app.use('/api/blog', blogRouter);

// displaying default response
app.get('/', (req, res) => {
  res.send(
    'Welcome to server of the ecommerce clone - developed by CreativeAlly'
  );
});

// listening to the port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
