/*// models/massMailDispatcherModel.js
const mongoose = require('mongoose');
const massMailDispatcherSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  isValid: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true
});
const MassMailDispatcher = mongoose.model('MassMailDispatcher', massMailDispatcherSchema);
module.exports = MassMailDispatcher;
*/
const mongoose = require('mongoose');
const massMailDispatcherSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  isValid: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true
});
const MassMailDispatcher = mongoose.model('MassMailDispatcher', massMailDispatcherSchema);
module.exports = MassMailDispatcher;