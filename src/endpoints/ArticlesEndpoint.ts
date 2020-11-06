import {Endpoint} from "../utils/Endpoint";
import {Router} from 'express'
import {Article} from "../models/Article";
import {Database} from "../config/database";

export default class ArticlesEndpoint extends Endpoint {
    static load(extras: any) {
            const db = Database.getInstance();
            const router:Router = Router();

            router.get('/',(req,res) => {
                Article.findAll({
                    order: [['updatedAt', 'ASC']]
                }).then((articles: Article[]) => {
                    res.send(articles);
                })
            });

            router.get('/:id',(req,res) => {
                Article.findByPk(req.params.id).then((article: Article | null) => {
                    if(article) {
                        res.send(article);
                    }else {
                        res.status(404).send();
                    }
                })
            });
            return router;
        }
}
