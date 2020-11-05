import  {Sequelize, Model, DataTypes } from 'sequelize';

export class User extends Model {}

export default function init(sequelize: Sequelize) {
    User.init({
        externalId : { type: DataTypes.INTEGER } ,
        firstname: { type: DataTypes.STRING},
        lastname: { type: DataTypes.STRING},
        email: {type: DataTypes.STRING, unique: true},
        role: {type: DataTypes.ENUM('USER','ADMIN')}
    }, {
        sequelize,
        tableName: 'ext_user'
    });
}
