// dependencies
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const productHandler = require('./routes/productHandler');

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

// database connection with mongoose
const uri = `mongodb+srv://${process.env.DB_AUTHOR}:${process.env.DB_PASSWORD}@cluster0.qdkjipz.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connected!!');
  })
  .catch((err) => {
    console.log(err);
  });

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });

// application routes
app.use('/api/product', productHandler);

// displaying default response
app.get('/', (req, res) => {
  res.send(
    'Welcome to server of the ecommerce clone - developed by CreativeAlly'
  );
});

// const run = async () => {
//   try {
//     await client.connect();

//     //display all collection

//     const office = client.db('OfficeCollection').collection('office');
//     const officecategory = client.db('OfficeCollection').collection('officeCategories');
//     const doorCategory = client.db('Categories').collection('doors');
//     const diningCategory = client.db('Categories').collection('dining');

//     // displaying all office category data

//     app.get('/officecategories', async (req, res) => {
//       const query = {};
//       const cursor = officecategory.find(query);

//       const office = await cursor.toArray();

//       res.send(office)

//     })

//     // displaying individual officeproduct data
//     app.get('/officeproduct', async (req, res) => {

//       const category = req.query.category;
//       console.log(category)

//       const query = { category };

//       const cursor = office.find(query);

//       const officeproducts = await cursor.toArray();

//       res.send(officeproducts);
//     });

//     //displaying single furniture product

//     app.get('/singleproduct/:id', async (req, res) => {
//       const id = req.params.id;
//       console.log(id)
//       const query = { _id: ObjectId(id) }

//       const product = await office.findOne(query);

//       res.send(product)
//     })

//     //doorCategory
//     app.get('/category/door', async (req, res) => {
//       const result = await doorCategory.find().toArray();
//       res.send(result);
//     })
//     //get door with id
//     app.get('/category/door/:id', async (req, res) => {
//       const id = req.params.id;
//       const query = { _id: ObjectId(id) };
//       const result = await doorCategory.findOne(query);
//       res.send(result);
//     })
//     //post door sub-category
//     app.post('/category/door', async (req, res) => {
//       const query = req.body;
//       const result = await doorCategory.insertOne(query)
//       res.send(result);
//     })
//     //delete a door
//     app.delete('/category/door/:id', async (req, res) => {
//       const id = req.params.id;
//       const query = { _id: ObjectId(id) };
//       const result = await doorCategory.deleteOne(query);
//       res.send(result);
//     })

//     //diningCategory
//     app.get('/category/dining', async (req, res) => {
//       const result = await diningCategory.find().toArray();
//       res.send(result);
//     })
//     //get dining with id
//     app.get('/category/dining/:id', async (req, res) => {
//       const id = req.params.id;
//       const query = { _id: ObjectId(id) };
//       const result = await diningCategory.findOne(query);
//       res.send(result);
//     })
//     //post dining sub-category
//     app.post('/category/dining', async (req, res) => {
//       const query = req.body;
//       const result = await diningCategory.insertOne(query)
//       res.send(result);
//     })
//     //delete a dining
//     app.delete('/category/dining/:id', async (req, res) => {
//       const id = req.params.id;
//       const query = { _id: ObjectId(id) };
//       const result = await diningCategory.deleteOne(query);
//       res.send(result);
//     })

//     // creating data
//     app.post('/', (req, res) => { });

//     // updating data
//     app.put('/', (req, res) => { });

//     // deleting data
//     app.delete('/', (req, res) => { });
//   } finally {
//     // await client.close();
//   }
// };
// run().catch(console.dir);

// listening to the port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
