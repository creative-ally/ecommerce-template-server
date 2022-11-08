// dependencies
const mongoose = require('mongoose');

// creating schema for products
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a product name'],
      // trim: true,
      // unique: [true, 'This product is already in!'],
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
      // trim: true,
      minLength: [3, 'Category name must be at least 3 characters'],
      maxLength: [100, 'Category name is too long'],
    },
    subcategory: {
      type: String,
      required: [true, 'Please provide a product subcategory name'],
      // trim: true,
      minLength: [3, 'Subcategory name must be at least 3 characters'],
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
      maxLength: [10, 'Product code is too long'],
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, 'Quantity can not be less than 0'],
      validate: {
        validator: (val) => {
          const isInteger = Number.isInteger(val);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: 'Quantity must be integer',
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ['in-stock', 'out-of-stock'],
        message: 'Status can not be ignored',
      },
    },
    color: {
      type: Array,
      required: [true, 'Please provide a color code'],
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
