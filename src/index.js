require('dotenv').config();
console.log(process.env.DB_DIALECT);
const app = require('./config/express');
const db = require('./config/sequelize');
const passport = require('./config/passport')(db.User);
console.log("App started at  " , new Date().toLocaleString());

app.use('/articles',require('./endpoints/articles')(db));
app.use('/articles',
    passport.authenticate('bearer', {session: false}),
    require('./utils/admin-guard'),
    require('./endpoints/articles-protected')(db));
app.use('/user',
    passport.authenticate('bearer', {session: false}),
    require('./utils/auth-guard'),
    require('./endpoints/user')());

console.log(process.env.SRV_PORT);
app.listen(process.env.SRV_PORT);
