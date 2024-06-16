const mongoose = require('mongoose');
const emailSchema = new mongoose.Schema({
  from: String,
  to: String,
  message: String,
});
module.exports = mongoose.model('Email', emailSchema);