import  {Model, DataTypes } from 'sequelize';
import {Database} from '../config/database'
import {Realisation} from "./Realisation";
import {Resume} from "./Resume";
import {Skill} from "./Skill";

export class SkillCategory extends Model {
    static async initialize() {
        const sequelize = await Database.getInstance();
        console.log('Initializing SkillCategory');
        SkillCategory.init({
            name: {type: DataTypes.STRING},
            description: {type: DataTypes.STRING},
        }, {
            sequelize,
            tableName: 'skill_category'
        });

        console.log('Initialized SkillCategory');
    }

   static async initRelations() {
       SkillCategory.hasMany(Skill);
   }
}
