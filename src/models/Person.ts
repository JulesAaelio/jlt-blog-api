import  {Sequelize, Model, DataTypes } from 'sequelize';
import {Database} from '../config/database'
import {Resume} from "./Resume";

export class Person extends Model {
    static async initialize() {
        const sequelize = await Database.getInstance();
        console.log('Initializing Person');
        Person.init({
            mail: {type: DataTypes.STRING},
            phone: {type: DataTypes.STRING},
            picture: {type: DataTypes.STRING},
            linkedin: {type: DataTypes.STRING},
            website: {type: DataTypes.STRING},
            github: {type: DataTypes.STRING},
            twitter: {type: DataTypes.STRING},
            bio: {type: DataTypes.STRING},
            city: {type: DataTypes.STRING},
        }, {
            sequelize,
            tableName: 'person'
        });
        console.log('Initialized Person');
    }

    static async initRelations() {
        Person.belongsToMany(Resume, {through: 'resume_person'});
    }

}


