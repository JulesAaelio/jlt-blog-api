import  {Sequelize, Model, DataTypes } from 'sequelize';
import {Database} from "../config/database";

export class User extends Model {}


export default async function init() {
    const sequelize = await Database.getInstance();

    User.init({
        externalId: {type: DataTypes.INTEGER},
        firstname: {type: DataTypes.STRING},
        lastname: {type: DataTypes.STRING},
        email: {type: DataTypes.STRING, unique: true},
        role: {type: DataTypes.ENUM('USER', 'ADMIN')}
    }, {
        sequelize,
        tableName: 'ext_user'
    });
}
