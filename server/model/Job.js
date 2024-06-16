const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  responsibilities: {
    type: [String],
    required: true,
  },
  benefits: {
    type: String,
    required: true,
  }
});

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;
