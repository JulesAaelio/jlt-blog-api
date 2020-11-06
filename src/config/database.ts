import  {Sequelize, Model, DataTypes } from 'sequelize';
const requireModels = require('sequelize-require-models');

export class Database {
    private static _database:Sequelize;

    private static async initDatabase() {
       const db = new Sequelize(process.env.DB_DATABASE!, process.env.DB_USER!,process.env.DB_PASSWORD,{
            port: +process.env.DB_PORT!,
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT as  "mysql" | "postgres" | "sqlite" | "mariadb" | "mssql" | undefined
        });

        try {
            await db.authenticate();
            console.log("[DATABASE] Connection established");
        } catch (e) {
            console.error(e);
        }
        this._database = db;
    }

    public static async getInstance() {
        if(!this._database) {
            await this.initDatabase()
        }
        return this._database;
    }

    public static async synchronize() {
        const db = await this.getInstance()
        await db.sync();
        console.log("[DATABASE] Database synchronised");
    }
}

export default Database;
