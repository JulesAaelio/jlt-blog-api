const passport = require('passport');
const OAuthStrategy = require('passport-oauth2');

module.exports = (User) => {
    passport.use(new OAuthStrategy({
        authorizationURL: process.env.OAUTH_SERVER + '/oauth/v2/auth',
        tokenURL: process.env.OAUTH_SERVER + '/oauth/v2/token',
        clientID: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        callbackURL: process.env.OAUTH_CALLBACK
    },authCallback));

    return passport;
};

const authCallback = (accessToken, refreshToken, profile, cb) => {
    console.log(accessToken,refreshToken,profile,cb);
};
// passport.use(new OAuth2Strategy({
//         authorizationURL: 'https://www.example.com/oauth2/authorize',
//         tokenURL: 'https://www.example.com/oauth2/token',
//         clientID: EXAMPLE_CLIENT_ID,
//         clientSecret: EXAMPLE_CLIENT_SECRET,
//         callbackURL: "http://localhost:3000/auth/example/callback"
//     },
//     function(accessToken, refreshToken, profile, cb) {
//         User.findOrCreate({ exampleId: profile.id }, function (err, user) {
//             return cb(err, user);
//         });
//     }
// ));