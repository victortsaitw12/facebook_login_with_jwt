'use strict'

const config = require('./config');
const FacebookTokenStrategy = require('passport-facebook-token');

const user = {
  _id: '1',
  facebook: {},
};

module.exports = function(passport){
  passport.use('facebook-token', new FacebookTokenStrategy({
    clientID: config.facebook.appID,
    clientSecret: config.facebook.appSecret 
  }, (token, refreshToken, profile, done) => {
    //console.log(token);
    process.nextTick(function(){
      user.facebook.token = token;
      user.facebook.name = profile.name.givenName + ' '+
        profile.name.familyName;
      user.facebook.email = profile.emails[0].value;
      user.updated_dt = Date.now();
      console.log(user);
      return done(null, user);
    });
  }));
}
