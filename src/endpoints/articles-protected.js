const express = require('express');

module.exports = (db) => {
    const router = express.Router();

    router.post('/', (req, res) => {
        db.Article.create({
            title: req.body.title,
            content: req.body.content
        }).then((article) => {
            res.send(article);
        })
    });

    router.put('/:id', (req, res) => {
        db.Article.findById(req.params.id).then(article => {
            if (article) {
                res.send(article);
            } else {
                res.status(404).send();
            }
        })
    });

    return router;
};