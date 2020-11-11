import  {Model, DataTypes } from 'sequelize';
import {Database} from '../config/database'
import {Education} from "./Education";
import {Person} from "./Person";
import {Experience} from "./Experience";
import {Skill} from "./Skill";
import {Portfolio} from "./Portfolio";

export class Resume extends Model {
    static async initialize() {
        const sequelize = await Database.getInstance();
        console.log('Initializing Resume');
        Resume.init({
            name: {type: DataTypes.STRING},
            title: {type: DataTypes.STRING},
            headline: {type: DataTypes.STRING},
            download: {type: DataTypes.STRING},
        }, {
            sequelize,
            tableName: 'resume'
        });

        console.log('Initialized Resume');
    }

   static async initRelations() {
       Resume.belongsToMany(Education, {through: 'resume_education'});
       Resume.belongsToMany(Person, {through: 'resume_person'});
       Resume.belongsToMany(Experience, {through: 'resume_experience'});
       Resume.belongsToMany(Skill, {through: 'resume_skill'});
       Resume.belongsToMany(Portfolio, {through: 'resume_portfolio'});
   }
}
