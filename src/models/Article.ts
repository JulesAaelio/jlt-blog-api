import  {Sequelize, Model, DataTypes } from 'sequelize';

export class Article extends Model {}

export default function init(sequelize: Sequelize) {
    Article.init({
        title : { type: DataTypes.STRING },
        sample: {type: DataTypes.TEXT},
        content: {type: DataTypes.TEXT},
        illustration: {type: DataTypes.STRING}
    },{
        sequelize,
        tableName : 'article'
    });
}
