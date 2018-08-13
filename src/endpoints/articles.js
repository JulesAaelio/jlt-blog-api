const express = require('express');

module.exports = (db) => {
  const router = express.Router();

  router.get('/',(req,res) => {
      db.Article.findAll({
          order: [['updatedAt', 'ASC']]
      }).then(articles => {
         res.send(articles);
     })
  });

  router.get('/:id',(req,res) => {
      db.Article.findById(req.params.id).then(article => {
          if(article) {
              res.send(article);
          }else {
              res.status(404).send();
          }
      })
  });
  return router;
};