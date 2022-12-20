// external imports
const mongoose = require('mongoose');

// database uri
const uri = `mongodb+srv://${process.env.DB_AUTHOR}:${process.env.DB_PASSWORD}@cluster0.qdkjipz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

// connecting to the database
const databaseConnect = () => {
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
};

// exporting module
module.exports = databaseConnect;
