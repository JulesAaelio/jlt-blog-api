import  {Model, DataTypes } from 'sequelize';
import {Database} from '../config/database'
import {Realisation} from "./Realisation";
import {Resume} from "./Resume";

export class Portfolio extends Model {
    static async initialize() {
        const sequelize = await Database.getInstance();
        console.log('Initializing Portfolio');
        Portfolio.init({
            name: {type: DataTypes.STRING},
            description: {type: DataTypes.STRING},
        }, {
            sequelize,
            tableName: 'portfolio'
        });

        console.log('Initialized Portfolio');
    }

   static async initRelations() {
       Portfolio.belongsToMany(Resume, {through: 'resume_portfolio'});
       Portfolio.belongsToMany(Realisation, {through: 'realisation_portfolio'});
   }
}
