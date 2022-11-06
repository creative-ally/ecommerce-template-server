// dependencies
const mongoose = require('mongoose');

// creating schema for products
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subcategory: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    color: {
      type: Array,
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// querying data thorugh instance methods process
productSchema.methods = {
  findOfficeProduct: function () {
    return mongoose.model('Product').find({ category: 'Office' });
  },
  findDoorProduct: function () {
    return mongoose.model('Product').find({ category: 'Door' });
  },
  findInteriorProduct: function () {
    return mongoose.model('Product').find({ category: 'Interior' });
  },
  findDiningProduct: function () {
    return mongoose.model('Product').find({ category: 'Dining' });
  },
  findBedroomProduct: function () {
    return mongoose.model('Product').find({ category: 'Bedroom' });
  },
};

module.exports = productSchema;
