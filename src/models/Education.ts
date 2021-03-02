import  {Sequelize, Model, DataTypes } from 'sequelize';
import {Database} from '../config/database'
import {Resume} from "./Resume";

export class Education extends Model {
    static async initialize() {
        const sequelize = await Database.getInstance();
        console.log('Initializing Education');
        Education.init({
            begin_date: {type: DataTypes.STRING},
            end_date: {type: DataTypes.STRING},
            degree: {type: DataTypes.STRING},
            school: {type: DataTypes.STRING},
            place: {type: DataTypes.STRING},
            details: {type: DataTypes.STRING},
            result: {type: DataTypes.STRING},
            link: {type: DataTypes.STRING},
            image: {type: DataTypes.STRING},
        }, {
            sequelize,
            tableName: 'education',
            name: {
                singular: 'education',
                plural: 'educations'
            }
        });
        console.log('Initialized Education');
    }

    static async initRelations() {
        Education.belongsToMany(Resume, {through: 'resume_education'});
    }

}


