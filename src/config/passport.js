const passport = require('passport');
let Request = require('request-promise-native');
const BearerStragey = require('passport-http-bearer').Strategy;

module.exports = (User) => {
    const authStrategy = new BearerStragey((token,done) => {
        Request.get(process.env.OAUTH_SERVER + '/user/me',{
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        }).then(response => {
            const user = JSON.parse(response);
            return User.findOrCreate({
                where: {
                    externalId: user.id
                }, defaults : {
                    role: 'USER',
                    email: user.email,
                    lastname: user.lastname,
                    firstname: user.firstname,

                }
            })
        }).then((response) =>  {
            return done(null,response[0]);
        }).catch(error => {
            //If the token is invalid or if fetching from database messed up.
            return done(error);
        });
    });

    passport.use(authStrategy);

    return passport;
};