const express = require('express');
const uploadconf = require('../utils/articles-images-upload-conf');
const upload = require('multer')({
    storage: uploadconf
});

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

    router.post('/images', upload.single('file'), (req, res) => {
        res.send({
            location: req.file.destination + '/' + req.file.filename,
        })
    });

    router.put('/:id', (req, res) => {
        db.Article.findById(req.params.id).then(article => {
            if (article) {
                article.update({
                    title: req.body.title,
                    content: req.body.content
                }).then(article => {
                    res.send(article);
                });
            } else {
                res.status(404).send();
            }
        })
    });

    router.patch('/:id/illustration', upload.single('file'), (req, res) => {
        db.Article.findById(req.params.id).then(article => {
            if (article) {
                article.update({
                    illustration: req.file.path
                }).then(article => {
                    res.send(article);
                });
            } else {
                res.status(404).send();
            }
        })
    });

    return router;
};