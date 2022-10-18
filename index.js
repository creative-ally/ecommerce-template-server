// dependencies
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// important variables
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

// displaying default response
app.get('/', (req, res) => {
  res.send(
    'Welcome to server of the ecommerce clone - developed by CreativeAlly'
  );
});

const uri = `mongodb+srv://${process.env.DB_AUTHOR}:${process.env.DB_PASSWORD}@cluster0.qdkjipz.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const run = async () => {
  try {
    await client.connect();

    //display all collection

    const office = client.db('OfficeCollection').collection('office');
    const officecategory= client.db('OfficeCollection').collection('officeCategories');

    // displaying data
    app.get('/officeproduct', async(req, res) => {

      const category = req.query.category;
      console.log(category)

      const query = {category};

      const cursor = office.find(query);

      const officeproducts = await cursor.toArray();

      res.send(officeproducts);
    });

    // creating data
    app.post('/', (req, res) => {});

    // updating data
    app.put('/', (req, res) => {});

    // deleting data
    app.delete('/', (req, res) => {});
  } finally {
    // await client.close();
  }
};
run().catch(console.dir);

// listening to the port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
