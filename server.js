// dependecies
require('dotenv').config();
const express = require('express');

// important variables
const app = express();
const port = process.env.PORT || 5000;

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
