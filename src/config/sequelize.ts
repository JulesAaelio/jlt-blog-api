import  {Sequelize, Model, DataTypes } from 'sequelize';
const requireModels = require('sequelize-require-models');
import initUser from '../models/User'
import initArticle from '../models/Article'

const db = new Sequelize(process.env.DB_DATABASE!, process.env.DB_USER!,process.env.DB_PASSWORD,{
    port: +process.env.DB_PORT!,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT as  "mysql" | "postgres" | "sqlite" | "mariadb" | "mssql" | undefined
});

// Init models

initUser(db);
initArticle(db);


db.authenticate().then((r) => {
    console.log("[DATABASE] Connection established");
}).then(r => {
    return db.sync();
}).then(r => {
    console.log("[DATABASE] Database synchronised");
}).catch(e => {
    console.error(e);
});

export  {
    db
}
