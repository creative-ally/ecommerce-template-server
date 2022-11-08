// dependencies
const mongoose = require('mongoose');

// creating schema for products
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a product name'],
      trim: true,
      unique: [true, 'This product is already in!'],
      minLength: [5, 'Name must be at least 5 characters'],
      maxLength: [100, 'Name is too long'],
    },
    image: {
      type: String,
      required: [true, 'Please provide an image'],
    },
    category: {
      type: String,
      required: [true, 'Please provide a product category name'],
      trim: true,
      minLength: [5, 'Category name must be at least 5 characters'],
      maxLength: [100, 'Category name is too long'],
    },
    subcategory: {
      type: String,
      required: [true, 'Please provide a product subcategory name'],
      // trim: true,
      minLength: [5, 'Subcategory name must be at least 5 characters'],
      maxLength: [100, 'Subcategory name is too long'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide a price tag'],
      min: [1000, 'Price must be 1000'],
    },
    code: {
      type: String,
      required: [true, 'Please provide a product code'],
      minLength: [5, 'Product code must be at least 5 characters'],
      maxLength: [8, 'Product code is too long'],
    },
    color: {
      type: Array,
      required: [true, 'Please provide a color code'],
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ['in-stock', 'out-of-stock'],
        message: 'Status can not be ignored',
      },
      default: 'in-stock',
    },
    material: {
      type: String,
      required: [true, 'Please provide material description'],
    },
    description: {
      type: String,
      required: [true, 'Please provide product description'],
    },
  },
  {
    timestamps: true,
  }
);

// querying data thorugh instance methods process
// productSchema.methods = {
//   findOfficeProduct: function () {
//     return mongoose.model('Product').find({ category: 'Office' });
//   },
//   findDoorProduct: function () {
//     return mongoose.model('Product').find({ category: 'Door' });
//   },
//   findInteriorProduct: function () {
//     return mongoose.model('Product').find({ category: 'Interior' });
//   },
//   findDiningProduct: function () {
//     return mongoose.model('Product').find({ category: 'Dining' });
//   },
//   findBedroomProduct: function () {
//     return mongoose.model('Product').find({ category: 'Bedroom' });
//   },
// };

module.exports = productSchema;
