import {Education} from "./Education";
import {Experience} from "./Experience";
import {Person} from "./Person";
import {Resume} from "./Resume";
import Database from "../config/database";
import {Article} from "./Article";
import {Portfolio} from "./Portfolio";
import {Realisation} from "./Realisation";
import {SkillCategory} from "./SkillCategory";
import {Skill} from "./Skill";

export async function initAll() {
    const models = [Article, Education, Experience, Person, Portfolio, Realisation, Resume, SkillCategory,Skill];
    const initializations = []
    const relationInitializations = []


    for (let i = 0; i < models.length; i++) {
        initializations.push(models[i].initialize())
    }
    await Promise.all(initializations);

    for (let i = 0; i < models.length; i++) {
        relationInitializations.push(models[i].initRelations())
    }
    await Promise.all(initializations);

    await Database.synchronize();
}

