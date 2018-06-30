'use strict'
const express = require('express');
const passport = require('passport');
const config = require('./config');

require('./passport')(passport); // pass passport for config

var app = express();

app.set('view engine', 'ejs');

app.use(passport.initialize());

app.get('/', (req, res) => {
  res.render('index.ejs', {
    app_id: config.facebook.appID,
  }); 
});

app.get('/auth/facebook/token',
  passport.authenticate('facebook-token', {
    session: false  
  }), (req, res) => {
    res.end(JSON.stringify(req.user));
});

app.get('/profile', (req, res) => {
  console.log(req.query.user);
  res.render('profile.ejs', {
    user: JSON.parse(req.query.user)
  });
});

app.listen(8080);
