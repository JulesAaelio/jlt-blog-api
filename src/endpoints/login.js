module.exports = (app,passport) => {
    app.get('/login', passport.authenticate('oauth2'));

    app.get(
        '/auth',
        passport.authenticate('oauth2', {failureRedirect: '/login'}),
        (req, res) => {
            res.redirect('/');
        });
};