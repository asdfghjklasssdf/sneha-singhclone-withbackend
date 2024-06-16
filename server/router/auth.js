//axios.defaults.baseURL = 'http://localhost:3001';
const ContentBox = require("../model/ContentBox");
const Content = require("../model/Content");
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
require("../db/conn");
const User = require("../model/userschema");
const Contact = require("../model/Contact");
const jwt = require('jsonwebtoken');
const MyUsers = require('../model/MyUsers');
const passport = require('passport'); 
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy; 
//const loginSchema = require('../model/Account');
//axios.defaults.baseURL = 'http://localhost:3001';

//const userSchemas = new mongoose.Schema({
  //email: { type: String, required: true, unique: true },
  //password: { type: String, required: true },
//});
const Post = require('../model/Post'); 
const session = require('express-session'); 

router.post('/register', async (req, res) => {
  console.log('Request body:', req.body);
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const existingUser = await MyUsers.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const newUser = new MyUsers({ email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Error during registration:', err);
    res.status(500).json({ error: 'Server error' });
  }
});
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await MyUsers.findOne({ email });

    if (!user) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }

    res.json({ msg: 'Login successful' });

  } catch (err) {
    console.error('Login error:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

router.post('/logout', (req, res) => {
  res.clearCookie('token'); 
  res.json({ msg: 'Logout successful' });
});

const app = express();

app.use(session({
  secret: 'a3af79a6b0cb7e5f4e50f46a6484984c8878efb5b82c43c55527dd1cc444fe19',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

passport.use(new GoogleStrategy({
  clientID: '112498240280-ld601qdg6j5t1ai97hpm8tlm31u4q4cu.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: 'http://localhost:3000/google/callback'
},
async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ googleId: profile.id });

    if (user) {
      return done(null, user);
    } else {
      user = new User({
        googleId: profile.id,
        email: profile.emails[0].value,
        authType: 'google'
      });
      await user.save();
      return done(null, user);
    }
  } catch (err) {
    return done(err);
  }
}
));

passport.serializeUser((user, done) => {
done(null, user.id);
});

passport.deserializeUser((id, done) => {
User.findById(id, (err, user) => {
  done(err, user);
});
});

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/Home'); 
  },
  (err, req, res, next) => {
    res.redirect('http://localhost:3001/home');
    console.error('Error during Google OAuth callback:', err);
    res.status(500).send('Error during Google OAuth callback');
  }
);


module.exports =  router;
