const mongoose = require('mongoose');
const otherContentBoxSchema = new mongoose.Schema({
  title: String,
  description: String
});
const OtherContentBox = mongoose.model('OtherContentBox', otherContentBoxSchema);
module.exports = OtherContentBox;