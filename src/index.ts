import dotenv from 'dotenv';
dotenv.config();

import {app} from './config/express';
import Database from "./config/database";
import {initAll} from  "./models/models"
import ArticleEndpoint from './endpoints/ArticlesEndpoint'
import {RequestHandler} from 'express';
import ResumeEndpoint from "./endpoints/ResumeEndpoint";

console.log("App started at  " , new Date().toLocaleString());

(async () => {
    await Database.getInstance();
    await initAll();

    app.use('/articles', ArticleEndpoint.load({}) as RequestHandler);
    app.use('/resume', ResumeEndpoint.load({}) as RequestHandler);
// app.use('/articles',
//     passport.authenticate('bearer', {session: false}),
//     require('./utils/admin-guard'),
//     require('./endpoints/articles-protected')(db));
// app.use('/user',
//     passport.authenticate('bearer', {session: false}),
//     require('./utils/auth-guard'),
//     require('./endpoints/user')());
//
    app.listen(process.env.SRV_PORT);
})();


