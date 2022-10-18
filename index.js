// dependecies
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// important variables
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

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
