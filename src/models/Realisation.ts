import  {Sequelize, Model, DataTypes } from 'sequelize';
import {Database} from '../config/database'
import {Resume} from "./Resume";
import {Portfolio} from "./Portfolio";
import {Skill} from "./Skill";

export class Realisation extends Model {
    static async initialize() {
        const sequelize = await Database.getInstance();
        console.log('Initializing Realisation');
        Realisation.init({
            title: {type: DataTypes.STRING},
            sample: {type: DataTypes.TEXT},
            content: {type: DataTypes.TEXT},
            illustration: {type: DataTypes.STRING},
            link: {type: DataTypes.STRING},
        }, {
            sequelize,
            name: {
                singular: 'realisation',
                plural: 'realisations'
            },
            tableName: 'realisation'
        });
        console.log('Initialized Realisation');
    }

    static async initRelations() {
        Realisation.belongsToMany(Portfolio, {through: 'realisation_portfolio'});
        Realisation.belongsToMany(Skill, {through: 'realisation_skill'});
    }
}

