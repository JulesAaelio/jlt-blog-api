import  {Sequelize, Model, DataTypes } from 'sequelize';
import {Database} from '../config/database'
import {Resume} from "./Resume";

export class Article extends Model {
    static async initialize() {
        const sequelize = await Database.getInstance();
        console.log('Initializing Article');
        Article.init({
            title: {type: DataTypes.STRING},
            sample: {type: DataTypes.TEXT},
            content: {type: DataTypes.TEXT},
            illustration: {type: DataTypes.STRING}
        }, {
            sequelize,
            tableName: 'article'
        });
        console.log('Initialized Article');
    }

    static async initRelations() {}
}

