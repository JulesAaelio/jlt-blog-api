import  {Sequelize, Model, DataTypes } from 'sequelize';
import {Database} from '../config/database'
import {Person} from "./Person";
import {Education} from "./Education";
import {Resume} from "./Resume";

export class Experience extends Model {
    static async initialize() {
        const sequelize = await Database.getInstance();
        console.log('Initializing Article');
        Experience.init({
            begin_date: {type: DataTypes.STRING},
            end_date: {type: DataTypes.STRING},
            job_label: {type: DataTypes.STRING},
            company: {type: DataTypes.STRING},
            details: {type: DataTypes.STRING},
            link: {type: DataTypes.STRING},
            image: {type: DataTypes.STRING},
        }, {
            sequelize,
            tableName: 'experience',
            name: {
                singular: 'experience',
                plural: 'experiences'
            }
        });
        console.log('Initialized article');
    }

    static async initRelations() {
        Experience.belongsToMany(Resume, {through: 'resume_experience'});
    }


}
