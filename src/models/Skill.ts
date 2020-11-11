import  {Model, DataTypes } from 'sequelize';
import {Database} from '../config/database'
import {Realisation} from "./Realisation";
import {Resume} from "./Resume";
import {SkillCategory} from "./SkillCategory";

export class Skill extends Model {
    static async initialize() {
        const sequelize = await Database.getInstance();
        console.log('Initializing Skill');
        Skill.init({
            name: {type: DataTypes.STRING},
            description: {type: DataTypes.STRING},
        }, {
            sequelize,
            tableName: 'skill'
        });

        console.log('Initialized Skill');
    }

   static async initRelations() {
       Skill.belongsToMany(Resume, {through: 'resume_skill'});
       Skill.belongsToMany(Realisation, {through: 'realisation_skill'});
       Skill.belongsTo(SkillCategory);
   }
}
