const Joi = require('joi');
axios.defaults.baseURL = 'http://localhost:3001';
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});
module.exports = loginSchema;