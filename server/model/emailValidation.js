const isEmail = require('isemail');
const validateEmail = (email) => {
  if (!email) {
    throw new Error('Email is required');
  }
  if (!email.endsWith('.pdf')) {
    throw new Error('Email must be in PDF format');
  }
  const isValid = isEmail.validate(email);
  if (!isValid) {
    throw new Error('Invalid email');
  }
  return true;
};
module.exports = { validateEmail }; 