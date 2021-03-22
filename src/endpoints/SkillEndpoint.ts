import {Endpoint} from "../utils/Endpoint";
import {Router} from 'express'
import {Article} from "../models/Article";
import {Resume} from "../models/Resume";
import {Experience} from "../models/Experience";
import {Education} from "../models/Education";
import {Skill} from "../models/Skill";
import {Person} from "../models/Person";
import {SkillCategory} from "../models/SkillCategory";
import {Realisation} from "../models/Realisation";

export default class SkillEndpoint extends Endpoint {
    static load(extras: any) {
            const router:Router = Router();

            router.get('/:id',(req,res) => {
                Skill.findByPk(req.params.id, {
                    include: [
                        Realisation,
                        Experience
                        ]}).then((resume: Resume | null) => {
                    if(resume) {
                        res.send(resume);
                    }else {
                        res.status(404).send();
                    }
                })
            });
            return router;
        }
}
