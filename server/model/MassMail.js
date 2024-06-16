const mongoose = require('mongoose');
const MassMailSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  name: { type: String, required: true }, 
  message: { type: String, required: true }
});
const MassMail = mongoose.model('MassMail', MassMailSchema);
module.exports = MassMail;