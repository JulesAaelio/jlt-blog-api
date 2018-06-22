const sequelize = require('sequelize');

module.exports = (db) => {
    const Article = db.define('article', {
        title : { type: sequelize.DataTypes.STRING },
        content : { type: sequelize.DataTypes.TEXT }
    });

    return Article;
};