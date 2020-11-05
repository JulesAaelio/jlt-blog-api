import dotenv from 'dotenv';
dotenv.config();

import {app} from './config/express';
import {type} from "os";
import {db} from './config/sequelize'
import ArticleEndpoint from './endpoints/ArticlesEndpoint'
import {RequestHandler} from 'express';

// const app = require('./config/express');
// const db = require('./config/sequelize');
// const passport = require('./config/passport')(db.User);
console.log("App started at  " , new Date().toLocaleString());
//


app.use('/articles', ArticleEndpoint.load({db}) as RequestHandler)
// app.use('/articles',
//     passport.authenticate('bearer', {session: false}),
//     require('./utils/admin-guard'),
//     require('./endpoints/articles-protected')(db));
// app.use('/user',
//     passport.authenticate('bearer', {session: false}),
//     require('./utils/auth-guard'),
//     require('./endpoints/user')());
//
console.log(typeof app);
app.listen(process.env.SRV_PORT);
