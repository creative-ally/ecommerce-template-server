// dependencies
const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
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
      type: String,
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
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = productSchema;
