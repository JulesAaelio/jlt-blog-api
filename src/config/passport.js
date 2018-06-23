const passport = require('passport');
let Request = require('request-promise-native')
const OAuthStrategy = require('passport-oauth2');

module.exports = (User) => {
    const authCallback = (accessToken, refreshToken, profile, cb) => {
        User.findOrCreate({
            where: {
                externalId: profile.id
            }, defaults : {
                role: 'USER',
                email: profile.email,
                lastname: profile.lastname,
                firstname: profile.firstname,

            }
        }).then((response) =>  {
            console.log(response);
               return cb(null,response[0]);
        }).catch(error => {
                return cb(error,{});
        });
    };

    const authStrategy = new OAuthStrategy({
        authorizationURL: process.env.OAUTH_SERVER + '/oauth/v2/auth',
        tokenURL: process.env.OAUTH_SERVER + '/oauth/v2/token',
        clientID: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        callbackURL: process.env.OAUTH_CALLBACK
    },authCallback);

    authStrategy.userProfile = (accessToken,done) => {
        console.log(done);
        Request.get(process.env.OAUTH_SERVER + '/user/me',{
            headers: {
                'Authorization': 'Bearer ' + accessToken,
            }
        }).then(response => {
            console.log(response);
            return done(null, JSON.parse(response));
        });

    };

    passport.use(authStrategy);

    // Save the user's email address in the cookie
    passport.serializeUser((user, cookieBuilder) => {
        cookieBuilder(null, user.id);
    });

    passport.deserializeUser((id, cb) => {
        console.log("AUTH ATTEMPT", email);
        // Fetch the user record corresponding to the provided email address
        User.findById(id).then(r => {
            if (r) return cb(null, r);
            else return cb(new Error("No user corresponding to the cookie's email address"));
        });
    });

    return passport;
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