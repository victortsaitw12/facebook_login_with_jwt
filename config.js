module.exports = {
  'facebook': {
    'appID': '843930asfdasfd9103568',
    'appSecret': '75daf458e42aadfasdf0048d16055a1dab',
    'callbackURL': 'http://localhost:8080/auth/facebook/callback',
    'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name, last_name, email',
    'profileFields': ['id', 'email', 'name']
  },
  jwt: {
    'key': 'jwtsecretekey'
  }
}
