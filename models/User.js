// dependencies
const mongoose = require('mongoose');
const userSchema = require('../schemas/userSchema');

const User = new mongoose.model('People', userSchema);

module.exports = User;
