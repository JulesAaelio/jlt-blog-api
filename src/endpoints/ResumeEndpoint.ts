import {Endpoint} from "../utils/Endpoint";
import {Router} from 'express'
import {Article} from "../models/Article";
import {Resume} from "../models/Resume";
import {Experience} from "../models/Experience";
import {Education} from "../models/Education";
import {Skill} from "../models/Skill";

export default class ResumeEndpoint extends Endpoint {
    static load(extras: any) {
            const router:Router = Router();

            router.get('/:id',(req,res) => {
                Resume.findByPk(req.params.id, {include: [Experience, Education, Skill]}).then((resume: Resume | null) => {
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
