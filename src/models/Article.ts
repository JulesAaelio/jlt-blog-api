import  {Sequelize, Model, DataTypes } from 'sequelize';
import {Database} from '../config/database'

export class Article extends Model {}

export default async function init() {
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
    console.log('Initialized article');

}
